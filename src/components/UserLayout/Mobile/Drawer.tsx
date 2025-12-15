'use client'

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LanguageDropdown from '../../Common/TopbarDropdown/LanguageDropdown';
import ProfileMenu from '../../Common/TopbarDropdown/Profile';
import { useStateMachine } from "little-state-machine";
import { updateClient } from "../../../utils/updateActions";
import logo from "../../../assets/images/transapp-logo.svg";
import { useTranslation } from 'react-i18next';
import { X, Facebook, Twitter } from 'lucide-react';

interface DrawerProps {
  drawer: boolean;
  action: (e?: React.MouseEvent) => void;
  closeDrawer?: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ drawer, action, closeDrawer }) => {
  const { t } = useTranslation();
  const { state } = useStateMachine({ updateClient });
  const pathname = usePathname();

  // Close drawer when route changes
  useEffect(() => {
    if (drawer && closeDrawer) {
      closeDrawer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const userEmail =
    (state?.user as any)?.data?.email ??
    (state?.user as any)?.data?.data?.email ??
    (() => {
      if (typeof window === 'undefined') return undefined;
      try {
        const raw = localStorage.getItem('authClient');
        if (!raw) return undefined;
        const parsed = JSON.parse(raw);
        return parsed?.user?.email ?? parsed?.data?.email ?? parsed?.data?.data?.email;
      } catch {
        return undefined;
      }
    })();

  const isAuthenticated = Boolean(userEmail);
  const tripsHref = isAuthenticated ? '/user-bookings' : `/login?redirect=${encodeURIComponent('/user-bookings')}`;

  // Handler that closes drawer without preventing navigation
  const handleLinkClick = () => {
    if (drawer && closeDrawer) {
      closeDrawer();
    } else if (drawer) {
      // Fallback: call action without event to avoid preventDefault
      action(undefined as any);
    }
  };

  return (
    <>
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          action(e);
        }}
        className={`off_canvars_overlay ${drawer ? 'active' : ''}`}
      />
      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className={`offcanvas_menu_wrapper ${drawer ? 'active' : ''}`}>
                <div className="canvas_close">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      action(e);
                    }}
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="offcanvas-brand text-center mb-40">
                  <Image src={logo} alt="TransApp Logo" width={120} height={40} />
                </div>

                <div className="offcanvas-actions d-flex align-items-center justify-content-center gap-2 mb-4">
                  {!isAuthenticated ? (
                    <Link 
                      className="btn login-btn" 
                      href="/login" 
                      onClick={handleLinkClick}
                    >
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

                  <LanguageDropdown user={true} />
                </div>

                <div id="menu" className="text-left">
                  <ul className="offcanvas_main_menu d-flex flex-column pt-5">
                    <li>
                      <Link
                        href="/"
                        onClick={handleLinkClick}
                        className={`link-color mt-3 ${pathname === '/' ? 'active' : ''}`}
                      >
                        {t('home')}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/book"
                        onClick={handleLinkClick}
                        className={`link-color mt-3 ${pathname === '/book' ? 'active' : ''}`}
                      >
                        {t('book_trip')}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={tripsHref}
                        onClick={handleLinkClick}
                        className={`link-color mt-3 ${pathname === '/user-bookings' ? 'active' : ''}`}
                      >
                        {t('tickets') || 'Tickets'}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about-transapp"
                        onClick={handleLinkClick}
                        className={`link-color mt-3 ${pathname === '/about-transapp' ? 'active' : ''}`}
                      >
                        {t('about')}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/terms"
                        onClick={handleLinkClick}
                        className={`link-color mt-3 ${pathname === '/terms' ? 'active' : ''}`}
                      >
                        {t('terms_of_service')}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/privacy-policy"
                        onClick={handleLinkClick}
                        className={`link-color mt-3 ${pathname === '/privacy-policy' ? 'active' : ''}`}
                      >
                        {t('privacy_policy')}
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="offcanvas-social">
                  <ul className="text-center">
                    <li>
                      <a href="#">
                        <Facebook size={20} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Twitter size={20} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
