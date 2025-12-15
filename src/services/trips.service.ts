import { supabaseAdmin } from '@databases/supabase';
import { HttpException } from '../exceptions/HttpException';
import type { Trip } from '../interfaces/trips.interface';

class TripService {
  public async searchTrips(params: {
    from?: string;
    to?: string;
    journeyDate?: string;
    departureTime?: string;
  }): Promise<Trip[]> {
    let query = supabaseAdmin
      .from('trips')
      .select(`
        *,
        agencies!trips_agency_id_fkey (
          logo
        )
      `);

    if (params.from) {
      query = query.eq('from_location', params.from);
    }

    if (params.to) {
      query = query.eq('to_location', params.to);
    }

    if (params.journeyDate) {
      query = query.eq('journey_date', params.journeyDate);
    }

    if (params.departureTime) {
      query = query.gte('departure', params.departureTime);
    }

    query = query.order('departure', { ascending: true });

    const { data, error } = await query;

    if (error) {
      throw new HttpException(500, error.message);
    }

    // Attach current agency_logo from joined agencies table (overrides stale trips.agency_logo)
    return ((data || []) as any[]).map((trip: any) => {
      const tripWithCurrentLogo = {
        ...trip,
        agency_logo: trip.agencies?.logo || trip.agency_logo || null,
      };
      delete tripWithCurrentLogo.agencies;
      return tripWithCurrentLogo;
    }) as Trip[];
  }
}

export default TripService;
