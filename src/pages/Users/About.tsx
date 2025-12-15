'use client'

import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.setAttribute("style", "background: #fff !important;");
    }
  }, []);

  return (
    <>
      <div className="booking">
        <Container>
          <div className="py-5">
            <h1 className="page-header">{t('about')}</h1>
          </div>
        </Container>
      </div>

      <Container className="mt-5 pt-5">
        <h2 className="about-heading">{t('our_company')}</h2>
        <p className="about-textp">{t('about_p1')}</p>
        <p className="about-textp">{t('about_p2')}</p>
        <p className="about-textp">{t('about_p3')}</p>

        <h2 className="about-heading">{t('app_info')}</h2>
        <p className="about-textp">{t('info_p1')}</p>
        <p className="about-textp">{t('info_p2')}</p>

        <h2 className="about-heading">{t('how_it_works2')}</h2>
        <p className="about-textp">{t('how_p2')}</p>

        <h2 className="about-heading">{t('use_terms')}</h2>
        <p className="about-textp">{t('use_p1')}</p>
        <p className="about-textp">{t('use_p2')}</p>
        <p className="about-textp">{t('use_p3')}</p>
        <p className="about-textp">{t('use_p4')}</p>

        <h2 className="about-heading">{t('account_registration')}</h2>
        <p className="about-textp">{t('account_p1')}</p>
        <p className="about-textp">{t('account_p2')}</p>
        <p className="about-textp">{t('account_p3')}</p>
        <p className="about-textp">{t('account_p4')}</p>
        <p className="about-textp">{t('account_p5')}</p>

        <h2 className="about-heading">{t('account_suspension')}</h2>
        <p className="about-textp">{t('suspension_p1')}</p>
        <p className="about-textp">{t('suspension_p2')}</p>
        <p className="about-textp">{t('suspension_p3')}</p>

        <h2 className="about-heading">{t('app_content')}</h2>
        <p className="about-textp">{t('content_p1')}</p>
        <p className="about-textp">{t('content_p2')}</p>
        <p className="about-textp">{t('content_p3')}</p>

        <h2 className="about-heading">{t('app_rights')}</h2>
        <p className="about-textp">{t('rights_p1')}</p>
        <p className="about-textp">{t('rights_p2')}</p>
        <p className="about-textp">{t('rights_p3')}</p>
        <p className="about-textp">{t('rights_p4')}</p>

        <h2 className="about-heading">{t('external_use')}</h2>
        <p className="about-textp">{t('external_p1')}</p>
        <p className="about-textp">{t('external_p2')}</p>

        <h2 className="about-heading">{t('acceptable_use')}</h2>
        <p className="about-textp">{t('aceptable_p1')}</p>
        <p className="about-textp">{t('acceptable_p2')}</p>
        <p className="about-textp">{t('acceptable_p3')}</p>
        <p className="about-textp">{t('acceptable_l1')}</p>
        <p className="about-textp">{t('acceptable_l2')}</p>
        <p className="about-textp">{t('acceptable_l3')}</p>
        <p className="about-textp">{t('acceptable_l4')}</p>

        <h2 className="about-heading">{t('use_conditions')}</h2>
        <p className="about-textp">{t('conditions_p1')}</p>
        <p className="about-textp">{t('conditions_p2')}</p>
      </Container>
    </>
  );
};

export default About;
