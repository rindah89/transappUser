'use client'

import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import logo from "../../assets/images/transapp-logo.svg";
import { toast } from "react-hot-toast";
import { useStateMachine } from "little-state-machine";
import { updateUser, updateClient } from "../../utils/updateActions";
import { useForm } from "react-hook-form";
import type { User } from "../../interfaces/user.interface";
import { Eye, EyeOff, User as UserIcon, Mail, Lock } from "lucide-react";

interface FormProps {
  account?: string;
  buttonText: string;
  buttonLink: string;
  source?: string;
  facebook?: string;
  google?: string;
}

interface FormData {
  name?: string;
  email: string;
  password: string;
}

const Form: React.FC<FormProps> = ({
  account,
  buttonText,
  buttonLink,
  source,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  if (typeof document !== 'undefined') {
    document.body.setAttribute('style', 'background: #f1f5f7!important;');
  }

  const redirectTo = useMemo(() => {
    const raw = searchParams?.get('redirect');
    if (!raw) return undefined;
    // Prevent open redirects: only allow same-origin absolute paths.
    if (!raw.startsWith('/') || raw.startsWith('//')) return undefined;
    return raw;
  }, [searchParams]);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { actions } = useStateMachine({ updateUser, updateClient });
  const [loading, setLoading] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePassword = (): void => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onSubmitSignup = async (formData: FormData): Promise<void> => {
    const toastId = toast.loading('Creating account...');
    try {
      setLoading(true);
      
      if (!formData.password || formData.password.length < 6) {
        toast.error('Password must be at least 6 characters', { id: toastId });
        return;
      }

      const { data } = await axios.post<{ error: boolean; message: string; data?: User & { token?: string } }>("api/v1/users/signup", {
        email: formData.email,
        password: formData.password,
        name: formData.name,
      });
      
      if (data.error) {
        toast.error(data.message || 'Signup failed', { id: toastId });
      } else {
        const nextUser = data.data;
        const token = nextUser?.token || '';

        if (!nextUser || !token) {
          // Extremely defensive fallback: if session couldn't be created, ask user to login
          toast.success((data.message || 'Account created successfully.') + ' Please login to continue.', { id: toastId });
          router.push("/login?redirect=%2Fbook");
          return;
        }

        actions.updateUser({ data: nextUser });
        if (typeof window !== 'undefined') {
          localStorage.setItem("authClient", JSON.stringify({ user: nextUser, token }));
        }

        toast.success(data.message || 'Account created successfully.', { id: toastId });
        // Use redirect parameter if available, otherwise default to /book
        const destination = redirectTo || "/book";
        
        // Use a small delay to ensure state and localStorage are updated before redirect
        // This is especially important for mobile and when navigating to protected routes
        setTimeout(() => {
          // Use router.replace to avoid adding to history stack
          router.replace(destination);
        }, 150);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Signup failed', { id: toastId });
      } else {
        toast.error('An unexpected error occurred', { id: toastId });
      }
    } finally {
      setLoading(false);
    }
  };

  const onSubmitLogin = async (formData: FormData): Promise<void> => {
    const toastId = toast.loading('Signing in...');
    try {
      setLoading(true);
      
      if (!formData.password) {
        toast.error('Password is required', { id: toastId });
        return;
      }

      const { data } = await axios.post<{ error: boolean; message: string; data?: User & { token?: string } }>("api/v1/users/login", {
        email: formData.email,
        password: formData.password,
      });
      
      if (data.error) {
        toast.error(data.message || 'Login failed', { id: toastId });
      } else {
        actions.updateUser({ data: data.data });

        if (typeof window !== 'undefined') {
          localStorage.setItem(
            "authClient",
            JSON.stringify({ user: data.data, token: data.data?.token || "" })
          );
        }

        toast.success(data.message || 'Login successful', { id: toastId });
        router.push(redirectTo || "/");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Login failed', { id: toastId });
      } else {
        toast.error('An unexpected error occurred', { id: toastId });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex flex-column opacity-mask"
      data-opacity-mask="rgba(0, 0, 0, 0.05)"
    >
      <div className="container my-auto">
        <div className="row">
          <div className="col-md-9 col-lg-7 col-xl-5 mx-auto my-4">
            <div className="ta-auth-panel">
              <div className="ta-auth-header-band">
                <figure>
                  <a href="#0">
                    <Image src={logo} width={86} height={80} alt="TransApp Logo" />
                  </a>
                </figure>
              </div>
              <div className="ta-auth-header">
                <h2 className="ta-auth-title">
                  {source === 'login' ? t("welcome_back") || "Welcome Back" : t("create_account") || "Create Account"}
                </h2>
                <p className="ta-auth-subtitle">
                  {source === 'login' ? t("login_subtitle") || "Sign in to continue to your account" : t("signup_subtitle") || "Create an account to get started"}
                </p>
              </div>

              <form 
                className="ta-auth-form" 
                onSubmit={source === 'login' ? handleSubmit(onSubmitLogin) : handleSubmit(onSubmitSignup)}
              >
                {source === 'login' ? null : (
                  <div className="ta-form-group">
                    <label htmlFor="name" className="ta-form-label">
                      <UserIcon size={16} />
                      <span>{t("name")}</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="ta-form-input"
                      placeholder={t("enter_your_name") || "Enter your name"}
                      {...register("name", {
                        required: true,
                      })}
                    />
                    {errors.name && (
                      <p className="ta-form-error">{t("name_required") || t("agency_name_err")}</p>
                    )}
                  </div>
                )}
                
                <div className="ta-form-group">
                  <label htmlFor="email_address" className="ta-form-label">
                    <Mail size={16} />
                    <span>{t("email_address")}</span>
                  </label>
                  <input
                    type="email"
                    id="email_address"
                    className="ta-form-input"
                    placeholder={t("enter_your_email") || "Enter your email address"}
                    {...register("email", {
                      required: true,
                      pattern:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />
                  {errors.email && (
                    <p className="ta-form-error">{t("email_err")}</p>
                  )}
                </div>
                
                <div className="ta-form-group">
                  <label htmlFor="password" className="ta-form-label">
                    <Lock size={16} />
                    <span>{t("password")}</span>
                  </label>
                  <div className="ta-password-wrapper">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      id="password"
                      className="ta-form-input"
                      placeholder={t("enter_your_password") || "Enter your password"}
                      {...register("password", {
                        required: true,
                        minLength: 6,
                      })}
                    />
                    <button
                      type="button"
                      className="ta-password-toggle"
                      onClick={togglePassword}
                      aria-label={isPasswordVisible ? t("hide_password") || "Hide password" : t("show_password") || "Show password"}
                    >
                      {isPasswordVisible ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="ta-form-error">{t("password_err")}</p>
                  )}
                </div>

                {buttonLink !== '/login' && (
                  <div className="ta-form-footer-link">
                    <a href="/user-forgot">{t("forgot_password")}?</a>
                  </div>
                )}

                <button type="submit" className="ta-btn-primary" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="ta-spinner"></span>
                      {t("loading") || "Loading..."}
                    </>
                  ) : (
                    buttonText
                  )}
                </button>
              </form>
              {source === 'triplogin' ? null : source === "login" ? (
                <>
                  <div className="divider">
                    <span>{t("or") || "or"}</span>
                  </div>
                  <button
                    type="button"
                    className="ta-btn-secondary"
                    onClick={() => {
                      router.push(redirectTo || "/");
                    }}
                  >
                    {t("continue_as_guest") || "Continue as Guest"}
                  </button>
                  <p className="ta-auth-footer">
                    {account} <a href="/register">{t("sign_up")}</a>
                  </p>
                </>
              ) : (
                <p className="ta-auth-footer">
                  {account} <a href="/login">{t("login")}</a>
                </p>
              )}
              {source === 'triplogin' && (
                <div className="ta-auth-footer-section">
                  <div className="divider">
                    <span>{t("or")}</span>
                  </div>
                  <p className="ta-auth-footer">
                    No online account? <a href="/ticket-form">{t("guest_checkout")}</a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
