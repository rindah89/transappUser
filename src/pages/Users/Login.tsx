'use client'

import React from "react";
import { useTranslation } from "react-i18next";
import Form from "../../components/Common/Form";

const Login: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="mt-5">
      <Form
        buttonLink="/register"
        buttonText={t("login")}
        account={t("no_account_yet")}
        source="login"
        facebook={t("facebook_login")}
        google={t("google_login")}
      />
    </section>
  );
};

export default Login;
