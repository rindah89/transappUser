import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { Suspense } from 'react';
import TicketClient from '../../../../components/Ticket/TicketClient';
import { getBooking, getServerUser } from '../../../../lib/server-data-fetching';
import { SpinnerCircular } from 'spinners-react';

export const metadata: Metadata = {
  title: 'Ticket',
  description: 'View and download your ticket',
};

interface TicketPageProps {
  params: Promise<{ id: string }>;
}

export default async function TicketIdPage({ params }: TicketPageProps) {
  const { id } = await params;
  const bookingId = Number(id);

  if (!Number.isFinite(bookingId)) {
    notFound();
  }

  // Get authenticated user
  const user = await getServerUser();
  
  // Fetch booking server-side
  const booking = await getBooking(bookingId);

  if (!booking) {
    notFound();
  }

  // Verify ownership if user is authenticated
  // Note: booker_id is the column name in the database
  const bookingUserId = (booking as any).booker_id;
  if (user && bookingUserId && bookingUserId !== user.id) {
    redirect('/user-bookings');
  }

  return (
    <Suspense fallback={
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <SpinnerCircular color="#bcc014" size={50} />
      </div>
    }>
      <TicketClient booking={booking} bookingId={bookingId} />
    </Suspense>
  );
}



