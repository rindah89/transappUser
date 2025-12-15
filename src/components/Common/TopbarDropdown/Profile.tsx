'use client'

import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useStateMachine } from "little-state-machine";
import { updateUser } from "../../../utils/updateActions";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { List } from "lucide-react";

interface ProfileMenuProps {
  storageKey?: string;
  logoutRoute?: string;
  redirectTo?: string;
  source?: string;
  forgot?: string;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  storageKey = 'authClient',
  logoutRoute,
  redirectTo = '/login',
  source,
  forgot = '/user-forgot',
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { actions, state } = useStateMachine({ updateUser });
  const [open, setOpen] = useState<boolean>(false);

  const toggle = (): void => {
    setOpen(!open);
  };

  const logOut = async (): Promise<void> => {
    if (typeof window === 'undefined') return;

    try {
      // Sign out from Supabase Auth first
      const { supabase } = await import('@databases/supabase');
      if (supabase) {
        const { error: signOutError } = await supabase.auth.signOut();

        if (signOutError) {
          console.error('Supabase sign out error:', signOutError);
        }
      }

      // Call logout API route to clear server-side cookies
      try {
        await axios.post(logoutRoute || '/api/v1/users/logout');
      } catch {
        // Continue even if API call fails
      }

      // Clear local storage
      localStorage.removeItem(storageKey);
      const blank = {};
      actions.updateUser(blank);
      
      router.push(redirectTo);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Logout failed');
      } else {
        toast.error('An unexpected error occurred');
      }
      // Still redirect even on error
      router.push(redirectTo);
    }
  };

  const getBookings = (): void => {
    router.push('/user-bookings');
  };

  const changePassword = async (): Promise<void> => {
    if (typeof window === 'undefined') return;
    
    const data = localStorage.getItem(storageKey);
    if (!data) {
      router.push(forgot);
      return;
    }

    try {
      if (logoutRoute) {
        await axios.post(logoutRoute, JSON.parse(data));
      }
      localStorage.removeItem(storageKey);
      router.push(forgot);
      const blank = {};
      actions.updateUser(blank);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Failed to change password');
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };

  const userState = (state as { user?: { data?: { data?: { email?: string; permissions?: string; agencyLogo?: string; agencyName?: string } } } })?.user;
  const userEmail =
    (userState as any)?.data?.email ??
    (userState as any)?.data?.data?.email ??
    (() => {
      if (typeof window === 'undefined') return undefined;
      try {
        const raw = localStorage.getItem(storageKey);
        if (!raw) return undefined;
        const parsed = JSON.parse(raw);
        return parsed?.user?.email ?? parsed?.data?.email ?? parsed?.data?.data?.email;
      } catch {
        return undefined;
      }
    })();

  const userPermissions =
    (userState as any)?.data?.permissions ??
    (userState as any)?.data?.data?.permissions;

  const agencyLogo =
    (userState as any)?.data?.agencyLogo ??
    (userState as any)?.data?.data?.agencyLogo;

  const agencyName =
    (userState as any)?.data?.agencyName ??
    (userState as any)?.data?.data?.agencyName;
  const isAdmin = userPermissions === "CRUD_admins";

  return (
    <React.Fragment>
      <Dropdown
        isOpen={open}
        toggle={toggle}
        className="d-inline-block user-dropdown"
      >
        {isAdmin ? (
          <DropdownToggle
            tag="button"
            className="btn header-item waves-effect"
            id="page-header-user-dropdown"
          >
            <i className="mdi mdi-chevron-down d-none ml-1 d-xl-inline-block"></i>
          </DropdownToggle>
        ) : (
          <DropdownToggle
            tag="button"
            className={source === "user" ? "btn header-item2 waves-effect" : "btn header-item waves-effect"}
            id="page-header-user-dropdown"
          >
            {source === "user" ? (
              <>
                <span className="d-none d-xl-inline-block ml-1 text-transform">
                  {userEmail}
                </span>
              </>
            ) : (
              <>
                {agencyLogo && (
                  <Image
                    className="rounded-circle header-profile-user mr-1"
                    src={agencyLogo}
                    alt="Header Avatar"
                    width={32}
                    height={32}
                  />
                )}
                <span className="d-none d-xl-inline-block ml-1 text-transform">
                  {agencyName}
                </span>
              </>
            )}
            <i className="mdi mdi-chevron-down d-none ml-1 d-xl-inline-block"></i>
          </DropdownToggle>
        )}

        <DropdownMenu end>
          <DropdownItem divider />
          <DropdownItem className="" tag="button" type="button" onClick={getBookings}>
            <List className="align-middle mr-1 text-danger" size={16} />{" "}
            {t("my_bookings")}
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem className="" tag="button" type="button" onClick={changePassword}>
            <i className="ri-edit-circle-line align-middle mr-1"></i>{" "}
            {t("reset_password")}
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem className="" tag="button" type="button" onClick={logOut}>
            <i className="ri-shut-down-line align-middle mr-1 text-danger"></i>{" "}
            {t("Logout")}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default ProfileMenu;
