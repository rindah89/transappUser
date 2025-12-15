import type { Metadata } from 'next';
import PayUnit from '../../../pages/Users/PayUnit';

export const metadata: Metadata = {
  title: 'Payment',
  description: 'Complete your payment',
};

export default function PayPage() {
  return <PayUnit />;
}

