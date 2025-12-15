'use client'

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface NonAuthLayoutProps {
  children: React.ReactNode;
}

const NonAuthLayout: React.FC<NonAuthLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const capitalizeFirstLetter = (str: string | null | undefined): string => {
        const safeStr = str ?? '';
        if (safeStr === '/') return 'Home';
        if (safeStr.length < 2) return safeStr;
        return safeStr.charAt(1).toUpperCase() + safeStr.slice(2);
      };

      const currentPage = capitalizeFirstLetter(pathname);
      document.title = `${currentPage} | Book on Transapp`;
    }
  }, [pathname]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default NonAuthLayout;
