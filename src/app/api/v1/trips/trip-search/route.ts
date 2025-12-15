import { NextRequest, NextResponse } from 'next/server';
import TripService from '@services/trips.service';
import type { Trip } from '@interfaces/trips.interface';

const tripService = new TripService();

interface TripSearchResponse {
  error: boolean;
  message: string;
  data?: Trip[];
}

interface TripSearchParams {
  from?: string;
  to?: string;
  journeyDate?: string;
  departureTime?: string;
}

// Next.js 16 best practice: Use async request APIs
export async function GET(request: NextRequest): Promise<NextResponse<TripSearchResponse>> {
  try {
    
    const searchParams = request.nextUrl.searchParams;
    const params: TripSearchParams = {
      from: searchParams.get('from') || undefined,
      to: searchParams.get('to') || undefined,
      journeyDate: searchParams.get('journeyDate') || undefined,
      departureTime: searchParams.get('departureTime') || undefined,
    };

    const trips: Trip[] = await tripService.searchTrips(params);
    
    return NextResponse.json<TripSearchResponse>({
      error: false,
      message: 'Trips retrieved successfully',
      data: trips,
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    });
  } catch (error: unknown) {
    const httpError = error as { status?: number; message?: string };
    return NextResponse.json<TripSearchResponse>(
      {
        error: true,
        message: httpError.message || 'Failed to search trips',
      },
      { 
        status: httpError.status || 500,
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    );
  }
}
