'use client'

import React from 'react';
import UserLayout from '../components/UserLayout';
import Home from '../pages/Users/index';

export default function RootPage() {
  return (
    <UserLayout>
      <Home />
    </UserLayout>
  );
}

