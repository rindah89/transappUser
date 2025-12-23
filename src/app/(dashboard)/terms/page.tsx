import type { Metadata } from 'next';
import TermsContent from '../../../components/Terms/TermsContent';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'TransApp terms and conditions - Read our terms of service',
};

export default function TermsPage() {
  return <TermsContent />;
}

