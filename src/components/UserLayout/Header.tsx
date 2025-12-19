'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import logo from "../../assets/images/transapp-logo.svg";
import StickyMenu from '../../lib/StickyMenu';
import LanguageDropdown from "../Common/TopbarDropdown/LanguageDropdown";
import { useTranslation } from 'react-i18next';
import Navigation from '../../routes/Navigation';
import { useStateMachine } from "little-state-machine";
import { updateClient } from "../../utils/updateActions";
import ProfileMenu from '../Common/TopbarDropdown/Profile';
import { Menu, ArrowLeft } from 'lucide-react';

interface HomeHeaderProps {
  action?: (e: React.MouseEvent) => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ action }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const { state } = useStateMachine({ updateClient });
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined);
  const [hydrated, setHydrated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile mode
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Check if we can go back (not on home page)
  const canGoBack = pathname !== '/';

  useEffect(() => {
    StickyMenu();
  }, []);

  useEffect(() => {
    setHydrated(true);

    // Support multiple historical shapes of `state.user`
    const fromState =
      (state?.user as any)?.data?.email ??
      (state?.user as any)?.data?.data?.email ??
      (state?.user as any)?.user?.email ??
      undefined;

    if (fromState) {
      setUserEmail(fromState);
      return;
    }

    // Fallback to localStorage (survives refresh)
    try {
      const raw = localStorage.getItem('authClient');
      if (!raw) return;
      const parsed = JSON.parse(raw);
      const fromStorage =
        parsed?.user?.email ??
        parsed?.data?.email ??
        parsed?.data?.data?.email ??
        undefined;
      if (fromStorage) setUserEmail(fromStorage);
    } catch {
      // ignore
    }
  }, [state?.user]);

  const isAuthenticated = hydrated && Boolean(userEmail);

  return (
    <React.Fragment>
      <header className="appie-header-area appie-sticky mb-5 modern-header">
        <div className="container">
          <div className="header-nav-box modern-header-container">
            <div className="modern-header-inner">
              {/* Back button for mobile */}
              {isMobile && canGoBack && (
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="ta-back-button d-lg-none"
                  aria-label="Go back"
                >
                  <ArrowLeft size={24} />
                </button>
              )}
              
              <div className="modern-header-logo">
                <div className="appie-logo-box modern-logo-box">
                  <Link href="/" className="logo-link">
                    <Image 
                      src={logo} 
                      alt="TransApp Logo" 
                      width={120} 
                      height={40}
                      className="modern-logo"
                    />
                  </Link>
                </div>
              </div>

              <div className="modern-header-nav d-none d-lg-flex">
                <div className="appie-header-main-menu modern-nav-menu">
                  <Navigation />
                </div>
              </div>

              <div className="modern-header-actions-wrapper">
                <div className="appie-btn-box modern-header-actions">
                  {/* Hide login/profile and menu toggle in mobile - use bottom nav instead */}
                  <div className="d-none d-lg-flex align-items-center gap-2">
                    {!isAuthenticated ? (
                      <Link className="btn login-btn modern-login-btn" href="/login">
                        {t('login')}
                      </Link>
                    ) : (
                      <ProfileMenu
                        source="user"
                        logoutRoute="/api/v1/users/logout"
                        storageKey="authClient"
                        forgot="/user-forgot"
                      />
                    )}

                    {action && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          action(e);
                        }}
                        onTouchEnd={(e) => {
                          // Optimized for iOS - handle on touch end for better responsiveness
                          e.preventDefault();
                          e.stopPropagation();
                          action(e as any);
                        }}
                        className="toggle-btn canvas_open modern-menu-toggle"
                        aria-label="Open menu"
                        aria-expanded="false"
                        style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                      >
                        <Menu size={24} />
                      </button>
                    )}
                  </div>

                  {/* Language dropdown - visible on all screen sizes */}
                  <LanguageDropdown user={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default HomeHeader;
