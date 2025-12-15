import type { Metadata } from 'next';
import Home from '../pages/Users/index';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Book your bus tickets easily and securely with TransApp',
};

export default function RootPage() {
  return <Home />;
}

