import { NextRequest, NextResponse } from 'next/server';

interface PayUnitInitBody {
  total_amount: number;
  currency: string;
  transaction_id: string;
  return_url: string;
}

// Ensure this runs on Node.js (PayUnit auth header + external fetch)
export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<PayUnitInitBody>;

    if (
      typeof body.total_amount !== 'number' ||
      !Number.isFinite(body.total_amount) ||
      !body.currency ||
      !body.transaction_id ||
      !body.return_url
    ) {
      return NextResponse.json(
        { error: true, message: 'Invalid payment payload' },
        { status: 400, headers: { 'Cache-Control': 'no-store' } }
      );
    }

    // NOTE: These should be set in env in production.
    // We keep a fallback to match existing client-side behavior (which already contains the same values).
    const username =
      process.env.PAYUNIT_USERNAME || '4d70631d-397c-4efd-929a-87fcd3a9d162';
    const password =
      process.env.PAYUNIT_PASSWORD || '2a8f415d-d9d2-4834-a573-b12c1375b94c';
    const isProd = process.env.NODE_ENV === 'production';
    const mode = process.env.PAYUNIT_MODE || (isProd ? 'live' : 'test');

    // Default keys: use sandbox in dev, live in prod (overridable via env)
    const defaultKey =
      mode === 'live'
        ? 'live_jpKGxzmP3riiu7jmal2zU2FgnjfBE67HMHf3Pb4Z'
        : 'sand_wjYGZXPZoSYMsV8p8jvlXjMCnK1bnW';

    const apiKey =
      process.env.PAYUNIT_API_KEY ||
      process.env.NEXT_PUBLIC_PAYUNIT_API_KEY ||
      defaultKey;

    const token = Buffer.from(`${username}:${password}`).toString('base64');

    const res = await fetch('https://app.payunit.net/api/gateway/initialize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        mode,
        Authorization: `Basic ${token}`,
      },
      body: JSON.stringify({
        total_amount: body.total_amount,
        currency: body.currency,
        transaction_id: body.transaction_id,
        return_url: body.return_url,
      }),
    });

    const text = await res.text();
    let json: any;
    try {
      json = JSON.parse(text);
    } catch {
      json = { raw: text };
    }

    return NextResponse.json(json, {
      status: res.status,
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: true, message: (error as any)?.message || 'Payment initialization failed' },
      { status: 500, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}


