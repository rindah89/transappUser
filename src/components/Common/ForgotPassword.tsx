'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import logo from '../../assets/images/transapp-logo.svg';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';

interface ForgotPasswordProps {
  route: string;
}

interface ForgotFormData {
  email: string;
}

interface ResetFormData {
  password: string;
  resetCode: string;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ route }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [visible, setVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [resetCode, setResetCode] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePassword = (): void => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const forgotForm = useForm<ForgotFormData>();
  const resetForm = useForm<ResetFormData>();
  
  const errors = visible ? resetForm.formState.errors : forgotForm.formState.errors;
  const handleSubmit = visible ? resetForm.handleSubmit : forgotForm.handleSubmit;

  const onSubmitForgot = async (): Promise<void> => {
    try {
      if (!email) {
        toast.error('Email is required');
        return;
      }

      const { data } = await axios.post<{ error: boolean; message: string }>(`api/v1/${route}`, { email });
      if (data.error) {
        toast.error(data.message || 'Error occurred');
      } else {
        toast.success(data.message || 'Password reset email sent. Please check your email.');
        setVisible(true);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Failed to process request');
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };

  const onSubmitReset = async (): Promise<void> => {
    try {
      if (!email || !password) {
        toast.error('Email and password are required');
        return;
      }

      if (password.length < 6) {
        toast.error('Password must be at least 6 characters');
        return;
      }

      const { data } = await axios.post<{ error: boolean; message: string }>('api/v1/users/user-reset', {
        email,
        password,
        resetCode, // For backward compatibility, but Supabase Auth uses token from URL
      });
      if (data.error) {
        toast.error(data.message || 'Error occurred');
      } else {
        toast.success(data.message || 'Password reset successful');
        router.push('/login');
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Failed to reset password');
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };

  return (
    <div
      className="min-vh-100 d-flex flex-column opacity-mask"
      data-opacity-mask="rgba(0, 0, 0, 0.4)"
    >
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
                onSubmit={!visible ? handleSubmit(onSubmitForgot) : handleSubmit(onSubmitReset)}
              >
                {!visible ? (
                  <div className="form-group">
                    <label htmlFor="email_address">{t('email_address')}</label>
                    <input
                      type="email"
                      name="email_address"
                      id="email_address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                    {'email' in errors && errors.email && (
                      <p style={{ color: 'red' }}>{t('email_err')}</p>
                    )}
                  </div>
                ) : (
                  <>
                    <label htmlFor="password">{t('password')}</label>
                    <div className="row">
                      <div className="input-group mb-3 col-lg-12">
                        <input
                          type={isPasswordVisible ? 'text' : 'password'}
                          name="password"
                          id="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="input-group-prepend bg-white">
                          <span
                            className="input-group-text border-left-0 rounded-right bg-white"
                            id="basic-addon1"
                          >
                            {isPasswordVisible ? (
                              <Eye
                                onClick={togglePassword}
                                style={{ cursor: 'pointer' }}
                                size={18}
                              />
                            ) : (
                              <EyeOff
                                onClick={togglePassword}
                                style={{ cursor: 'pointer' }}
                                size={18}
                              />
                            )}
                          </span>
                        </div>
                      </div>
                    </div>

                    {'password' in errors && errors.password && (
                      <p style={{ color: 'red' }}>{t('password_err')}</p>
                    )}

                    <div className="form-group">
                      <label htmlFor="resetCode">{t('resetCode')}</label>
                      <input
                        type="text"
                        name="resetCode"
                        id="resetCode"
                        value={resetCode}
                        onChange={(e) => setResetCode(e.target.value)}
                        className="form-control"
                      />
                      {'resetCode' in errors && errors.resetCode && (
                        <p style={{ color: 'red' }}>{t('password_err')}</p>
                      )}
                    </div>
                  </>
                )}

                <button type="submit" className="btn_1 full-width">
                  {!visible ? t('submit') : t('reset_password')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
