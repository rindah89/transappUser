'use client'

import React from "react";
import ForgotPassword from "../../components/Common/ForgotPassword";

const UserReset: React.FC = () => {
  return (
    <React.Fragment>
      <ForgotPassword route="users/user-reset" />
    </React.Fragment>
  );
};

export default UserReset;
