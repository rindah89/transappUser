import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@databases/supabase';
import { HttpException } from '@exceptions/HttpException';

interface TripSeatsResponse {
  error: boolean;
  message: string;
  data?: {
    tripId: number;
    takenSeats: string[];
  };
}

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ tripId: string }> }
): Promise<NextResponse<TripSeatsResponse>> {
  try {
    const { tripId: tripIdParam } = await context.params;
    const tripId = Number(tripIdParam);
    if (!Number.isFinite(tripId)) {
      return NextResponse.json(
        { error: true, message: 'Invalid trip id' },
        { status: 400, headers: { 'Cache-Control': 'no-store' } }
      );
    }

    const { data, error } = await supabaseAdmin
      .from('bookings')
      .select('seat,status')
      .eq('trip_id', tripId)
      .not('seat', 'is', null);

    if (error) throw new HttpException(500, error.message);

    const takenSeats = (data || [])
      .filter((r: any) => (r?.status || '').toUpperCase() !== 'CANCELLED')
      .map((r: any) => String(r.seat))
      .filter(Boolean);

    return NextResponse.json<TripSeatsResponse>(
      { error: false, message: 'Trip seats retrieved successfully', data: { tripId, takenSeats } },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (error: unknown) {
    const httpError = error as { status?: number; message?: string };
    return NextResponse.json<TripSeatsResponse>(
      { error: true, message: httpError.message || 'Failed to retrieve trip seats' },
      { status: httpError.status || 500, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}



