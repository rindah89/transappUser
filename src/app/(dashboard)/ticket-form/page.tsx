import type { Metadata } from 'next';
import TicketForm from '../../../pages/Users/TicketForm';

export const metadata: Metadata = {
  title: 'Ticket Form',
  description: 'Complete your ticket booking',
};

export default function TicketFormPage() {
  return <TicketForm />;
}

