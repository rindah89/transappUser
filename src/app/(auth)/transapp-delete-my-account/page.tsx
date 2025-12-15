import type { Metadata } from 'next';
import DeleteAccount from '../../../pages/Users/DeleteAccount';

export const metadata: Metadata = {
  title: 'Delete Account',
  description: 'Delete your TransApp account',
};

export default function DeleteAccountPage() {
  return <DeleteAccount />;
}

