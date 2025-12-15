'use client'

import React from "react";
import axios from "axios";
import Image from "next/image";
import logo from "../../assets/images/transapp-logo.svg";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

interface DeleteFormData {
  email: string;
}

const DeleteAccount: React.FC = () => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<DeleteFormData>();

  const onSubmitRemoveAccount = async ({ email }: DeleteFormData): Promise<void> => {
    try {
      const { data } = await axios.post<{ error: boolean; message: string }>(`api/v1/users/user-delete-account`, {
        email,
      });
      if (data.error) {
        toast.error(data.message || 'Error occurred');
      } else {
        reset({ email: "" });
        toast.success(data.message);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Failed to delete account');
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };

  return (
    <React.Fragment>
      <div
        className="min-vh-100 d-flex flex-column opacity-mask"
        data-opacity-mask="rgba(0, 0, 0, 0.4)"
      >
        <div className="my-auto text-center pt-5">
          <h4>Enter the email address you used to create an account on Transapp.</h4>
          <h4>The following will be removed immediately from our system</h4>
          <ul>
            <li className="del-box">Name</li>
            <li className="del-box">Email</li>
            <li className="del-box">Password</li>
          </ul>
        </div>
        <div className="container my-auto">
          <div className="row">
            <div className="col-md-9 col-lg-7 col-xl-5 mx-auto my-4">
              <div className="panel header_2 center">
                <figure>
                  <a href="#0">
                    <Image src={logo} width={86} height={80} alt="TransApp Logo" />
                  </a>
                </figure>

                <form
                  className="input_style_1"
                  onSubmit={handleSubmit(onSubmitRemoveAccount)}
                >
                  <div className="form-group">
                    <label htmlFor="email_address">{t("email_address")}</label>
                    <input
                      type="email"
                      id="email_address"
                      className="form-control"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <p style={{ color: "red" }}>{t("email_err")}</p>
                    )}
                  </div>

                  <button type="submit" className="btn_1 full-width">
                    {t("submit")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DeleteAccount;
