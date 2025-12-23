/**
 * Server Actions for Next.js 16
 * All mutations happen server-side
 * 'use server' directive required
 */

'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { supabaseAdmin } from '../lib/supabase';

/**
 * Create a booking - Server Action
 */
export async function createBookingAction(formData: FormData) {
  try {
    const cookieStore = await cookies();
    const authToken = cookieStore.get('sb-access-token')?.value;
    
    // Get user
    let userId: number | null = null;
    if (authToken) {
      const { data: { user } } = await supabaseAdmin.auth.getUser(authToken);
      if (user) {
        const { data: userData } = await supabaseAdmin
          .from('users')
          .select('id')
          .eq('auth_id', user.id)
          .single();
        userId = userData?.id || null;
      }
    }

    const tripId = Number(formData.get('tripId'));
    const phoneNumber = formData.get('phoneNumber')?.toString();
    const name = formData.get('name')?.toString();
    const seat = formData.get('seat')?.toString();
    const paymentMethod = formData.get('paymentMethod')?.toString() || 'PAY_NOW';

    if (!tripId || !phoneNumber || !name) {
      return {
        error: true,
        message: 'Missing required fields',
      };
    }

    // Get trip details
    const { data: trip, error: tripError } = await supabaseAdmin
      .from('trips')
      .select('*')
      .eq('id', tripId)
      .single();

    if (tripError || !trip) {
      return {
        error: true,
        message: 'Trip not found',
      };
    }

    // Create booking
    const bookingData = {
      trip_id: tripId,
      booker_id: userId,
      phone_number: phoneNumber,
      name: name,
      seat: seat || null,
      number_of_seats: 1,
      ticket_type: 'One-way',
      journey_date: trip.journey_date,
      price: trip.price,
      departure_city: trip.from_location,
      arrival_city: trip.to_location,
      departure_time: trip.departure,
      agency_name: trip.agency_name,
      status: paymentMethod === 'CASH' ? 'CASH_PENDING' : '',
    };

    const { data: booking, error: bookingError } = await supabaseAdmin
      .from('bookings')
      .insert(bookingData)
      .select()
      .single();

    if (bookingError || !booking) {
      return {
        error: true,
        message: bookingError?.message || 'Failed to create booking',
      };
    }

    // Revalidate relevant paths
    revalidatePath('/search-results');
    revalidatePath('/user-bookings');

    // Redirect to reservation fee payment
    redirect(`/reservation-fee-payment/${booking.id}`);
  } catch (error: any) {
    console.error('Error in createBookingAction:', error);
    return {
      error: true,
      message: error.message || 'An unexpected error occurred',
    };
  }
}

/**
 * Cancel booking - Server Action
 */
export async function cancelBookingAction(bookingId: number) {
  try {
    const cookieStore = await cookies();
    const authToken = cookieStore.get('sb-access-token')?.value;
    
    if (!authToken) {
      return {
        error: true,
        message: 'Unauthorized',
      };
    }

    // Get user
    const { data: { user } } = await supabaseAdmin.auth.getUser(authToken);
    if (!user) {
      return {
        error: true,
        message: 'Unauthorized',
      };
    }

    const { data: userData } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('auth_id', user.id)
      .single();

    // Get booking
    const { data: booking, error: bookingError } = await supabaseAdmin
      .from('bookings')
      .select('*')
      .eq('id', bookingId)
      .single();

    if (bookingError || !booking) {
      return {
        error: true,
        message: 'Booking not found',
      };
    }

    // Verify ownership (booker_id is the column name in the database)
    const bookingUserId = (booking as any).booker_id || (booking as any).user_id;
    if (bookingUserId && bookingUserId !== userData?.id) {
      return {
        error: true,
        message: 'Unauthorized',
      };
    }

    // Update booking status
    const { error: updateError } = await supabaseAdmin
      .from('bookings')
      .update({ status: 'CANCELLED' })
      .eq('id', bookingId);

    if (updateError) {
      return {
        error: true,
        message: updateError.message || 'Failed to cancel booking',
      };
    }

    // Release seat (if needed)
    if (booking.trip_id && booking.seat) {
      // Update trip reserved count
      await supabaseAdmin.rpc('decrement_reserved_seats', {
        trip_id: booking.trip_id,
      });
    }

    revalidatePath('/user-bookings');
    revalidatePath('/search-results');

    return {
      error: false,
      message: 'Booking cancelled successfully',
    };
  } catch (error: any) {
    console.error('Error in cancelBookingAction:', error);
    return {
      error: true,
      message: error.message || 'An unexpected error occurred',
    };
  }
}

/**
 * Update search state - Server Action
 * Can be used to update search parameters
 */
export async function updateSearchAction(_searchParams: {
  from?: string;
  to?: string;
  journeyDate?: string;
  departureTime?: string;
}) {
  // This could store search params in cookies or session
  // For now, we'll just revalidate the search results page
  revalidatePath('/search-results');
  
  return {
    error: false,
    message: 'Search updated',
  };
}

