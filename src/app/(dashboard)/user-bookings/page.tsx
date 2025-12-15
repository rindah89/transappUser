import type { Metadata } from 'next';
import Trips from '../../../pages/Users/Trips';

export const metadata: Metadata = {
  title: 'My Bookings',
  description: 'View your booking history',
};

export default function UserBookingsPage() {
  return <Trips />;
}

