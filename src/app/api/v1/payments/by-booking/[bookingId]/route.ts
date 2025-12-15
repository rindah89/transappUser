import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@databases/supabase';
import { HttpException } from '@exceptions/HttpException';
import type { PaymentRecord } from '@interfaces/payment-record.interface';

interface ListPaymentRecordsResponse {
  error: boolean;
  message: string;
  data?: PaymentRecord[];
}

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ bookingId: string }> }
): Promise<NextResponse<ListPaymentRecordsResponse>> {
  try {
    const { bookingId: bookingIdParam } = await context.params;
    const bookingId = Number(bookingIdParam);
    if (!Number.isFinite(bookingId) || bookingId <= 0) throw new HttpException(400, 'Invalid booking id');

    const { data, error } = await supabaseAdmin
      .from('payment_records')
      .select('*')
      .eq('booking_id', bookingId)
      .order('created_at', { ascending: false });

    if (error) throw new HttpException(500, error.message);

    return NextResponse.json(
      { error: false, message: 'OK', data: (data || []) as PaymentRecord[] },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (error: unknown) {
    const httpError = error as { status?: number; message?: string };
    return NextResponse.json(
      { error: true, message: httpError.message || 'Failed to load payment records' },
      { status: httpError.status || 500, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}

