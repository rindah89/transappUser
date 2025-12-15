'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const pathname = usePathname();

  return (
    <>
      <ul className="modern-nav-list">
        <li>
          <Link
            href="/"
            className={`modern-nav-link ${pathname === '/' ? 'active' : ''}`}
          >
            {t('home')}
          </Link>
        </li>
        <li>
          <Link
            href="/book"
            className={`modern-nav-link ${pathname === '/book' ? 'active' : ''}`}
          >
            {t('book_trip')}
          </Link>
        </li>
        <li>
          <Link
            href="/user-bookings"
            className={`modern-nav-link ${pathname === '/user-bookings' ? 'active' : ''}`}
          >
            {t('tickets') || 'Tickets'}
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
