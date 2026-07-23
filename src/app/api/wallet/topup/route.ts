import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { getDb } from '@/lib/db';
import { getAuthUser } from '@/lib/auth';
import { getCountryCode } from '@/lib/countryCodes';

export async function POST(request: NextRequest) {
  try {
    const auth = await getAuthUser();
    if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { amount } = await request.json();

    if (!amount || typeof amount !== 'number' || amount < 10 || amount > 10000) {
      return NextResponse.json({ error: 'Top-up amount must be between £10 and £10,000' }, { status: 400 });
    }

    const db = await getDb();
    const user = await db.collection('users').findOne({ _id: new ObjectId(auth.userId) });
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

    const referenceId = `pay_${new ObjectId().toString()}`;

    // Wallet balance is GBP. PayAdmit currency is EUR only.
    // Convert amount from GBP to EUR using config rate 1.16
    const amountEUR = Math.round(amount * 1.16 * 100) / 100;

    // Insert pending payment record
    await db.collection('payments').insertOne({
      userId: new ObjectId(auth.userId),
      referenceId,
      amountGBP: amount,
      amountEUR,
      status: 'PENDING',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const countryCode = getCountryCode(user.address?.country || '');
    
    // Format customer phone to match PayAdmit requirements (international no +, with space between country code and local no)
    let phoneClean = (user.phone || '').replace('+', '').trim();
    if (!phoneClean.includes(' ') && phoneClean.length > 2) {
      phoneClean = phoneClean.slice(0, 2) + ' ' + phoneClean.slice(2);
    }

    // IP address
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || request.headers.get('x-real-ip') || '172.16.0.1';

    // Website URLs
    const urlObj = new URL(request.url);
    const origin = process.env.NEXT_PUBLIC_APP_URL || urlObj.origin;

    const returnUrl = `${origin}/{id}/{referenceId}/{state}/{type}`;
    const pendingReturnUrl = `${origin}/{id}/{referenceId}/{state}/{type}`;
    const successReturnUrl = `${origin}/{id}/{referenceId}/{state}/{type}`;
    const declineReturnUrl = `${origin}/{id}/{referenceId}/{state}/{type}`;
    const webhookUrl = `${origin}/callbacks/payadmit`;

    const payAdmitBody = {
      referenceId,
      paymentType: 'DEPOSIT',
      paymentMethod: 'BASIC_CARD',
      amount: amountEUR,
      currency: 'EUR',
      description: `Funding the account number ${user._id}`,
      customer: {
        referenceId: user._id.toString(),
        citizenshipCountryCode: countryCode,
        firstName: user.firstName || user.name?.split(' ')[0] || 'Customer',
        lastName: user.lastName || user.name?.split(' ')[1] || 'User',
        dateOfBirth: user.dateOfBirth || '1996-01-05',
        email: user.email,
        phone: phoneClean,
        locale: 'en',
        ip,
      },
      billingAddress: {
        addressLine1: user.address?.street || 'No street',
        addressLine2: '',
        city: user.address?.city || 'No city',
        countryCode,
        postalCode: user.address?.postalCode || '00000',
        state: '',
      },
      returnUrl,
      pendingReturnUrl,
      successReturnUrl,
      declineReturnUrl,
      webhookUrl,
      websiteUrl: origin,
    };

    const token = process.env.PAYADMIT_API_TOKEN;
    if (!token) {
      console.warn('PAYADMIT_API_TOKEN is not configured.');
    }

    const payAdmitRes = await fetch('https://engine.api-processing.com/api/v1/payments', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token || ''}`,
      },
      body: JSON.stringify(payAdmitBody),
    });

    const payAdmitData = await payAdmitRes.json();
    console.log('PayAdmit response data:', JSON.stringify(payAdmitData, null, 2));

    if (!payAdmitRes.ok || !payAdmitData.result) {
      console.error('PayAdmit API error:', payAdmitData);
      const errorMsg = payAdmitData.message || payAdmitData.error?.message || 'Payment initiation failed';
      return NextResponse.json({ error: errorMsg }, { status: 400 });
    }

    const paymentResult = payAdmitData.result;

    if (!paymentResult.redirectUrl) {
      console.error('PayAdmit response missing redirectUrl:', paymentResult);
      return NextResponse.json({ error: 'No redirect URL returned from payment gateway' }, { status: 400 });
    }

    return NextResponse.json({
      redirectUrl: paymentResult.redirectUrl,
      paymentId: paymentResult.id,
      state: paymentResult.state,
    });
  } catch (err) {
    console.error('Top-up error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
