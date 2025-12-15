import type { Metadata } from 'next';
import Login from '../../../pages/Users/Login';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in to your TransApp account',
};

export default function LoginPage() {
  return <Login />;
}

