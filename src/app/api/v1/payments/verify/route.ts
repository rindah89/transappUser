import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@databases/supabase';
import { HttpException } from '@exceptions/HttpException';
import type { PaymentRecord } from '@interfaces/payment-record.interface';

interface VerifyPaymentBody {
  payment_record_id?: number;
  provider?: string | null;
  provider_reference?: string | null;
}

interface VerifyPaymentResponse {
  error: boolean;
  message: string;
  data?: PaymentRecord;
}

// NOTE: For now, verification is a "record verification" (ensures a record exists and marks it verified).
// If/when a provider verification endpoint is added (e.g. PayUnit transaction status), this route can call it.
export async function POST(req: NextRequest): Promise<NextResponse<VerifyPaymentResponse>> {
  try {
    const body = (await req.json()) as VerifyPaymentBody;

    let query = supabaseAdmin.from('payment_records').select('*');

    if (typeof body.payment_record_id === 'number' && Number.isFinite(body.payment_record_id)) {
      query = query.eq('id', body.payment_record_id);
    } else if (body.provider_reference) {
      if (body.provider) query = query.eq('provider', body.provider);
      query = query.eq('provider_reference', body.provider_reference);
    } else {
      throw new HttpException(400, 'payment_record_id or provider_reference is required');
    }

    const { data: record, error: findError } = await query.single();
    if (findError) throw new HttpException(500, findError.message);
    if (!record) throw new HttpException(404, 'Payment record not found');

    const now = new Date().toISOString();
    const { data: updated, error: updateError } = await supabaseAdmin
      .from('payment_records')
      .update({ verified_at: now, status: 'VERIFIED' })
      .eq('id', (record as any).id)
      .select('*')
      .single();

    if (updateError) throw new HttpException(500, updateError.message);
    if (!updated) throw new HttpException(500, 'Failed to verify payment record');

    return NextResponse.json(
      { error: false, message: 'Verified', data: updated as PaymentRecord },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (error: unknown) {
    const httpError = error as { status?: number; message?: string };
    return NextResponse.json(
      { error: true, message: httpError.message || 'Failed to verify payment record' },
      { status: httpError.status || 500, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}



