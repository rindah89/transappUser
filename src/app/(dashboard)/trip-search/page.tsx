import type { Metadata } from 'next';
import TripSearch from '../../../pages/Users/TripSearch';

export const metadata: Metadata = {
  title: 'Search Trips',
  description: 'Search for available bus trips',
};

export default function TripSearchPage() {
  return <TripSearch />;
}

