import type { Metadata } from 'next';
import TripLogin from '../../../pages/Users/TripLogin';

export const metadata: Metadata = {
  title: 'Trip Login',
  description: 'Login to view trip details',
};

export default function TripLoginPage() {
  return <TripLogin />;
}

