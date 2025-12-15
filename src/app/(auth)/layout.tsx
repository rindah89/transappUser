'use client'

import React from 'react';
import NonAuthLayout from '../../components/NonAuthLayout';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NonAuthLayout>{children}</NonAuthLayout>;
}

