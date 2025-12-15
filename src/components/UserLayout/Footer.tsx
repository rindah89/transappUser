'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../assets/images/logo-transapp-footer-grey.svg";
import facebook from "../../assets/images/Facebook.svg";
import gmail from "../../assets/images/Gmail.svg";
import instagram from "../../assets/images/Instagram.svg";
import twitter from "../../assets/images/Twitter.svg";
import mtn from "../../assets/images/MOMO.png";
import orange from "../../assets/images/OM.svg";
import master from "../../assets/images/Mastercard.svg";
import visa from "../../assets/images/Group-224.svg";
import { useTranslation } from 'react-i18next';

const d = new Date();
const year = d.getFullYear();

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="appie-footer-area appie-footer-3-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about-widget footer-about-widget-3">
                <div className="logo">
                  <Link href="/">
                    <Image src={logo} alt="TransApp Logo" width={150} height={50} />
                  </Link>
                </div>
                <p className="footer-p">
                  ©{year} TransApp Booking Ltd.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-navigation footer-navigation-3">
                <h4 className="title footer-p">{t('quick_links')}</h4>
                <ul>
                  <li>
                    <Link href="/about-transapp">{t('about')}</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-navigation footer-navigation-3">
                <h4 className="title footer-p">{t('legal')}</h4>
                <ul>
                  <li>
                    <Link href="/terms">{t('terms_of_service')}</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">{t('privacy_policy')}</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-navigation footer-navigation-3">
                <h4 className="title footer-p">{t('hotline')}</h4>
                <ul>
                  <li>
                    <Link href="#">
                      support@bookontransapp.com
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      +(237) 695 771 234
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-lg-6 pb-3">
              <span className="">
                <Image src={facebook} alt="facebook" width={50} height={50} />
              </span>
              <span className="">
                <Image src={instagram} alt="instagram" width={50} height={50} />
              </span>
              <span className="">
                <Image src={twitter} alt="twitter" width={50} height={50} />
              </span>
              <span className="">
                <Image src={gmail} alt="gmail" width={50} height={50} />
              </span>
            </div>

            <div className="col-lg-6 pb-3">
              <span className="mr-2">
                <Image src={mtn} alt="mtn" width={50} height={35} />
              </span>
              <span className="mr-2">
                <Image src={orange} alt="orange" width={50} height={50} />
              </span>
              <span className="mr-2">
                <Image src={master} alt="mastercard" width={50} height={50} />
              </span>
              <span className="">
                <Image src={visa} alt="visa" width={50} height={50} />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
