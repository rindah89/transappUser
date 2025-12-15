'use client'

import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { useTranslation } from "react-i18next";

const Privacy: React.FC = () => {
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
            <h1 className="page-header">{t('privacy')}</h1>
          </div>
        </Container>
      </div>

      <Container className="mt-5 pt-5">
        <p className="about-textp">{t('privacy_p')}</p>

        <h2 className="about-heading">{t('property_rights')}</h2>
        <p className="about-textp">{t('property_p1')}</p>
        <p className="about-textp">{t('property_p2')}</p>

        <h2 className="about-heading">{t('changes')}</h2>
        <p className="about-textp">{t('changes_p1')}</p>
        <p className="about-textp">{t('changes_p2')}</p>
        <p className="about-textp">{t('changes_p3')}</p>
        <p className="about-textp">{t('changes_p4')}</p>

        <h2 className="about-heading">{t('contract')}</h2>
        <p className="about-textp">{t('contract_p1')}</p>
        <p className="about-textp">{t('contract_p2')}</p>

        <h2 className="about-heading">{t('contacts')}</h2>
        <p className="about-textp">{t('contacts_p')}</p>

        <h2 className="about-heading">{t('severability')}</h2>
        <p className="about-textp">{t('severability_p')}</p>

        <h2 className="about-heading">{t('law')}</h2>
        <p className="about-textp">{t('law_p')}</p>

        <h2 className="about-heading">{t('venue')}</h2>
        <p className="about-textp">{t('venue_p')}</p>

        <h2 className="about-heading">{t('dispute')}</h2>
        <p className="about-textp">{t('amicable')}</p>
        <p className="about-textp">{t('resolution_p1')}</p>
        <p className="about-textp">{t('resolution_p2')}</p>
        <p className="about-textp">{t('resolution_p3')}</p>
      </Container>
    </>
  );
};

export default Privacy;
