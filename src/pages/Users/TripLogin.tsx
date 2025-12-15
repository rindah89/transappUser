'use client'

import React from 'react';
import Form from '../../components/Common/Form';
import { useTranslation } from 'react-i18next';

const TripLogin: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="">
      <Form
        buttonLink="/guest-checkout"
        buttonText={t("login")}
        account={t("guest_checkout")}
        source="triplogin"
        facebook={t("facebook_login")}
        google={t("google_login")}
      />
    </section>
  );
};

export default TripLogin;
