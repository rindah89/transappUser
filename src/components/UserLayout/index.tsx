'use client'

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import useToggle from '../../Hooks/useToggle';
import Header from './Header';
import Footer from './Footer';
import Drawer from './Mobile/Drawer';
import BottomNav from './Mobile/BottomNav'
import Action from './Action';

interface UserLayoutProps {
  children: React.ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  const [drawer, drawerAction] = useToggle(false);
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
      document.title = `${currentPage} | Book on TransApp`;
    }
  }, [pathname]);

  return (
    <React.Fragment>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <Header action={drawerAction.toggle} />
      <main className="ta-app-content">{children}</main>
      <BottomNav onMenu={() => drawerAction.toggle()} />
      <Action />
      <Footer />
    </React.Fragment>
  );
};

export default UserLayout;
