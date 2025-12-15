import type { Metadata } from 'next';
import TicketSummary from '../../../pages/Users/TicketSummary';

export const metadata: Metadata = {
  title: 'Ticket Summary',
  description: 'Review your ticket booking',
};

export default function TicketSummaryPage() {
  return <TicketSummary />;
}

