'use client'

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Form from "../../components/Common/Form";

const Register: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.setAttribute('style', 'background: #f1f5f7!important;');
    }
  }, []);

  return (
    <section className="">
      <Form
        buttonLink="/login"
        buttonText={t("sign_up")}
        account={t("has_account")}
        facebook={t("facebook_signup")}
        google={t("google_signup")}
      />
    </section>
  );
};

export default Register;
