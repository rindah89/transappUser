import type { Metadata } from 'next';
import Privacy from '../../../pages/Users/Privacy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'TransApp privacy policy',
};

export default function PrivacyPage() {
  return <Privacy />;
}

