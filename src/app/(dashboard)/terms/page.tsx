import type { Metadata } from 'next';
import Terms from '../../../pages/Users/Terms';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'TransApp terms and conditions',
};

export default function TermsPage() {
  return <Terms />;
}

