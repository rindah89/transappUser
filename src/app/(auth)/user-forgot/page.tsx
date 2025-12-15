import type { Metadata } from 'next';
import UserForgot from '../../../pages/Users/UserForgot';

export const metadata: Metadata = {
  title: 'Forgot Password',
  description: 'Reset your TransApp account password',
};

export default function UserForgotPage() {
  return <UserForgot />;
}

