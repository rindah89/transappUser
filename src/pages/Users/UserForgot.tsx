'use client'

import React from "react";
import ForgotPassword from "../../components/Common/ForgotPassword";

const UserForgot: React.FC = () => {
  return (
    <React.Fragment>
      <ForgotPassword route="users/user-forgot" />
    </React.Fragment>
  );
};

export default UserForgot;
