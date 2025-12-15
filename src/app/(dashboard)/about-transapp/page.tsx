import type { Metadata } from 'next';
import About from '../../../pages/Users/About';

export const metadata: Metadata = {
  title: 'About TransApp',
  description: 'Learn more about TransApp',
};

export default function AboutPage() {
  return <About />;
}

