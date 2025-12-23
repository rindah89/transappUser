import type { Metadata } from 'next';
import PrivacyContent from '../../../components/Privacy/PrivacyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'TransApp privacy policy - Learn how we protect your information',
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}

