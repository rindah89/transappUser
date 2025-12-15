import type { Metadata } from 'next';
import Register from '../../../pages/Users/Register';

export const metadata: Metadata = {
  title: 'Register',
  description: 'Create a new TransApp account',
};

export default function RegisterPage() {
  return <Register />;
}

