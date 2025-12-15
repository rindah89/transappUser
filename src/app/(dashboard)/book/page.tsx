import type { Metadata } from 'next';
import BookTicket from '../../../pages/Users/book';

export const metadata: Metadata = {
  title: 'Book Ticket',
  description: 'Book your bus ticket',
};

export default function BookPage() {
  return <BookTicket />;
}

