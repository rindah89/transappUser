import type { Metadata } from 'next';
import InAppPayment from '../../../pages/Users/InAppPayment';

export const metadata: Metadata = {
  title: 'Payment Return',
  description: 'Payment processing result',
};

export default function PayUnitReturnPage() {
  return <InAppPayment />;
}

