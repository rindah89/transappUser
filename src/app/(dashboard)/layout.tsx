'use client'

import React from 'react';
import UserLayout from '../../components/UserLayout';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserLayout>{children}</UserLayout>;
}

