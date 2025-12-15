import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@databases/supabase';
import { HttpException } from '@exceptions/HttpException';
import type { PaymentRecord, PaymentRecordInsert } from '@interfaces/payment-record.interface';

interface RecordPaymentResponse {
  error: boolean;
  message: string;
  data?: PaymentRecord;
}

export async function POST(req: NextRequest): Promise<NextResponse<RecordPaymentResponse>> {
  try {
    const body = (await req.json()) as Partial<PaymentRecordInsert>;

    const bookingId = Number((body as any)?.booking_id);
    const tripId = Number((body as any)?.trip_id);
    if (!Number.isFinite(bookingId) || bookingId <= 0) throw new HttpException(400, 'booking_id is required');
    if (!Number.isFinite(tripId) || tripId <= 0) throw new HttpException(400, 'trip_id is required');

    const paymentMethod = (body as any)?.payment_method;
    if (typeof paymentMethod !== 'string' || paymentMethod.trim().length === 0) {
      throw new HttpException(400, 'payment_method is required');
    }

    // Verify booking exists (basic guard)
    const { data: booking, error: bookingError } = await supabaseAdmin
      .from('bookings')
      .select('id, trip_id, booker_id, agency_id')
      .eq('id', bookingId)
      .single();
    if (bookingError) throw new HttpException(500, bookingError.message);
    if (!booking) throw new HttpException(404, 'Booking not found');
    if (booking.trip_id !== tripId) throw new HttpException(409, 'trip_id does not match booking');

    const payload: PaymentRecordInsert = {
      agency_id: (booking as any).agency_id,
      booking_id: bookingId,
      trip_id: tripId,
      user_id: (body.user_id as any) ?? booking.booker_id ?? null,
      currency: (body.currency as any) ?? 'XAF',
      ticket_amount: (body.ticket_amount as any) ?? 0,
      reservation_fee_amount: (body.reservation_fee_amount as any) ?? 0,
      discount_amount: (body.discount_amount as any) ?? 0,
      amount_due_now: (body.amount_due_now as any) ?? 0,
      amount_due_at_counter: (body.amount_due_at_counter as any) ?? 0,
      payment_method: paymentMethod,
      provider: (body.provider as any) ?? null,
      provider_reference: (body.provider_reference as any) ?? null,
      status: (body.status as any) ?? 'RECORDED',
      verified_at: (body.verified_at as any) ?? null,
      metadata: (body.metadata as any) ?? null,
      verification_details: (body.verification_details as any) ?? null,
    };

    const { data: inserted, error } = await supabaseAdmin
      .from('payment_records')
      .insert(payload)
      .select('*')
      .single();
    if (error) throw new HttpException(500, error.message);
    if (!inserted) throw new HttpException(500, 'Failed to record payment');

    return NextResponse.json(
      { error: false, message: 'Payment recorded', data: inserted as PaymentRecord },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (error: unknown) {
    const httpError = error as { status?: number; message?: string };
    return NextResponse.json(
      { error: true, message: httpError.message || 'Failed to record payment' },
      { status: httpError.status || 500, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}

