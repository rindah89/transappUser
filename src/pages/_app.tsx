'use client'

import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { StateMachineProvider } from 'little-state-machine';
import { AuthProvider } from '../context/auth';
import '../i18n';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateMachineProvider>
      <AuthProvider>
        <Toaster />
        <Component {...pageProps} />
      </AuthProvider>
    </StateMachineProvider>
  );
}








