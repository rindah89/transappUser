import type { Metadata } from 'next';
import AboutContent from '../../../components/About/AboutContent';

export const metadata: Metadata = {
  title: 'About TransApp',
  description: 'Learn more about TransApp - Your trusted bus booking platform',
};

export default function AboutPage() {
  return <AboutContent />;
}

