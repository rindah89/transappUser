import type { Metadata } from 'next';
import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import UserBookingsClient from '../../../components/UserBookings/UserBookingsClient';
import { getServerUser, getUserBookings } from '../../../lib/server-data-fetching';
import { SpinnerCircular } from 'spinners-react';

export const metadata: Metadata = {
  title: 'My Bookings',
  description: 'View your booking history and manage your tickets',
};

export default async function UserBookingsPage() {
  // Get authenticated user
  const user = await getServerUser();
  
  // If not authenticated, redirect to login
  if (!user) {
    redirect('/login');
  }

  // Fetch user bookings server-side
  const bookings = await getUserBookings(user.id);

  return (
    <Suspense fallback={
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <SpinnerCircular color="#bcc014" size={50} />
      </div>
    }>
      <UserBookingsClient initialBookings={bookings} />
    </Suspense>
  );
}

