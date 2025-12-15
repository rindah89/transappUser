'use client'

import React from 'react';
import { Toaster } from "react-hot-toast";
import { StateMachineProvider } from "little-state-machine";
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { AuthProvider } from '../context/auth';
import '../i18n';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StateMachineProvider>
      <AuthProvider>
        <Toaster />
        {children}
      </AuthProvider>
    </StateMachineProvider>
  );
}
