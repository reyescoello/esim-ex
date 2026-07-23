import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { getDb } from '@/lib/db';
import { getAuthUser } from '@/lib/auth';
import { sendTopUpEmail } from '@/lib/email';

export async function GET(request: NextRequest) {
  try {
    const auth = await getAuthUser();
    if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const paymentId = searchParams.get('paymentId');

    if (!paymentId) {
      return NextResponse.json({ error: 'paymentId is required' }, { status: 400 });
    }

    const token = process.env.PAYADMIT_API_TOKEN;
    
    // Fetch status directly from PayAdmit
    const payAdmitRes = await fetch(`https://engine.api-processing.com/api/v1/payments/${paymentId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token || ''}`,
      },
    });

    const payAdmitData = await payAdmitRes.json();

    if (!payAdmitRes.ok || !payAdmitData.result) {
      console.error('PayAdmit status check error:', payAdmitData);
      return NextResponse.json({ error: 'Failed to fetch status from gateway' }, { status: 400 });
    }

    const paymentResult = payAdmitData.result;
    const { referenceId, state } = paymentResult;

    const db = await getDb();
    const payment = await db.collection('payments').findOne({ referenceId });

    if (payment && payment.status === 'PENDING') {
      const finalStates = ['COMPLETED', 'REFUNDED', 'CHARGEBACK', 'DECLINED', 'CANCELLED', 'ERROR'];

      if (state === 'COMPLETED') {
        // Atomic update to COMPLETED
        const paymentUpdate = await db.collection('payments').updateOne(
          { _id: payment._id, status: 'PENDING' },
          {
            $set: {
              status: 'COMPLETED',
              payAdmitId: paymentId,
              updatedAt: new Date(),
            },
          }
        );

        if (paymentUpdate.modifiedCount > 0) {
          // Credit user balance
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
        // Record final decline/cancel state
        await db.collection('payments').updateOne(
          { _id: payment._id, status: 'PENDING' },
          {
            $set: {
              status: state,
              payAdmitId: paymentId,
              updatedAt: new Date(),
            },
          }
        );
      }
    }

    return NextResponse.json({
      status: state,
      referenceId,
    });
  } catch (err) {
    console.error('Status check error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
