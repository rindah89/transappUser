'use client'

import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import Image, { type StaticImageData } from 'next/image';
import usFlag from "../../../assets/images/flags/us.jpg";
import france from "../../../assets/images/flags/french.jpg";

interface LanguageDropdownProps {
  user?: boolean;
}

interface LanguageState {
  lng: string;
  flag: StaticImageData | string;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ user = false }) => {
  const { t } = useTranslation();
  const [menu, setMenu] = useState<boolean>(false);
  const [languageState, setLanguageState] = useState<LanguageState>({
    lng: t('french'),
    flag: france,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentLang = localStorage.getItem('i18nextLng') || 'eng';
      if (currentLang === 'fr') {
        setLanguageState({ lng: t('french'), flag: france });
      } else {
        setLanguageState({ lng: t('english'), flag: usFlag });
      }
    }
  }, [t]);

  const toggle = (): void => {
    setMenu(!menu);
  };

  const changeLanguageAction = (lng: string): void => {
    i18n.changeLanguage(lng);
    
    if (lng === "fr") {
      setLanguageState({ lng: t('french'), flag: france });
    } else if (lng === "eng") {
      setLanguageState({ lng: t('english'), flag: usFlag });
    }
  };

  return (
    <React.Fragment>
      <Dropdown isOpen={menu} toggle={toggle} className="d-none d-sm-inline-block">
        {user ? (
          <DropdownToggle tag="button" className="btn header-item2 waves-effect">
            <Image className="" src={languageState.flag} alt="Header Language" height={16} width={16} />
            {'  '}
            <span className="align-middle">{languageState.lng}</span>
          </DropdownToggle>
        ) : (
          <DropdownToggle tag="button" className="btn header-item waves-effect">
            <Image className="" src={languageState.flag} alt="Header Language" height={16} width={16} />
            {'  '}
            <span className="align-middle">{languageState.lng}</span>
          </DropdownToggle>
        )}

        <DropdownMenu end>
          <DropdownItem
            active={languageState.lng === t('english')}
            onClick={() => changeLanguageAction('eng')}
            className="notify-item"
          >
            <Image src={usFlag} alt="flag" className="mr-1" height={12} width={12} />
            <span className="align-middle">{t('english')}</span>
          </DropdownItem>

          <DropdownItem
            active={languageState.lng === t('french')}
            onClick={() => changeLanguageAction('fr')}
            className="notify-item"
          >
            <Image src={france} alt="flag" className="mr-1" height={12} width={12} />
            <span id="lang-text">{t('french')}</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default LanguageDropdown;
