import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { ObjectId } from 'mongodb';
import { getDb } from '@/lib/db';
import { sendTopUpEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    const signatureHeader = request.headers.get('Signature') || request.headers.get('signature');
    const signingKey = process.env.PAYADMIT_SIGNING_KEY;

    // Verify signature if the signing key is configured
    if (signingKey) {
      if (!signatureHeader) {
        return NextResponse.json({ error: 'Signature header missing' }, { status: 400 });
      }
      const generatedSignature = crypto
        .createHmac('sha256', Buffer.from(signingKey, 'utf8'))
        .update(Buffer.from(rawBody, 'utf8'))
        .digest('hex');

      if (generatedSignature !== signatureHeader) {
        return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
      }
    } else {
      console.warn('PAYADMIT_SIGNING_KEY is not defined. Skipping signature verification.');
    }

    const body = JSON.parse(rawBody);
    console.log('Received PayAdmit Webhook callback:', JSON.stringify(body, null, 2));
    const { referenceId, state, id: payAdmitId } = body;

    if (!referenceId) {
      return NextResponse.json({ error: 'Missing referenceId' }, { status: 400 });
    }

    const db = await getDb();
    const payment = await db.collection('payments').findOne({ referenceId });

    if (!payment) {
      return NextResponse.json({ error: 'Payment record not found' }, { status: 404 });
    }

    // Check if the payment status is already final
    const finalStates = ['COMPLETED', 'REFUNDED', 'CHARGEBACK', 'DECLINED', 'CANCELLED', 'ERROR'];
    
    if (payment.status !== 'PENDING') {
      return NextResponse.json({ success: true, message: 'Already processed' });
    }

    if (state === 'COMPLETED') {
      // Mark as completed atomically
      const paymentUpdate = await db.collection('payments').updateOne(
        { _id: payment._id, status: 'PENDING' },
        {
          $set: {
            status: 'COMPLETED',
            payAdmitId,
            updatedAt: new Date(),
          },
        }
      );

      if (paymentUpdate.modifiedCount > 0) {
        // Increment user's balance in GBP
        const userUpdate = await db.collection('users').findOneAndUpdate(
          { _id: new ObjectId(payment.userId) },
          { $inc: { balance: payment.amountGBP } },
          { returnDocument: 'after' }
        );

        if (userUpdate) {
          sendTopUpEmail(
            userUpdate.email,
            userUpdate.name || userUpdate.firstName || 'Customer',
            payment.amountGBP,
            userUpdate.balance
          ).catch(() => {});
        }
      }
    } else if (finalStates.includes(state)) {
      // Record any other final state (DECLINED, CANCELLED, etc.)
      await db.collection('payments').updateOne(
        { _id: payment._id, status: 'PENDING' },
        {
          $set: {
            status: state,
            payAdmitId,
            updatedAt: new Date(),
          },
        }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('PayAdmit webhook error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
