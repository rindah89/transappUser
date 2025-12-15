'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import aboutImg from '../../assets/images/about_transapp.png';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="about-col px-5 modern-about">
        <div className="container">
          <div className="row align-items-center pb-5">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="mr-5">
                <div
                  className="thumb wow animated fadeInUp modern-about-image"
                  data-wow-duration="2000ms"
                  data-wow-delay="200ms"
                >
                  <div className="about-image-wrapper">
                    <Image 
                      src={aboutImg} 
                      alt="About TransApp" 
                      width={500} 
                      height={400}
                      className="about-main-image"
                    />
                    <div className="about-image-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="modern-about-content">
                <div className="about-section-label">
                  <span>About Us</span>
                </div>
                <div className="d-flex justify-content-lg-left align-items-lg-left text-lg-left justify-content-center align-items-center text-center">
                  <h2 className="appie-title-2 modern-about-title">{t('about_app')}</h2>
                </div>
                <div className="d-flex justify-content-lg-left align-items-lg-left text-lg-left justify-content-center align-items-center text-center">
                  <p className="about-p modern-about-text">{t('about_p')}</p>
                </div>
                <div className="about-features-list">
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>Easy Booking Process</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>Secure Payment System</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>24/7 Customer Support</span>
                  </div>
                </div>
                <div className="text-lg-left text-center">
                  <Link className="main-btn mt-2 modern-about-btn" href="/about-transapp">
                    {t('read_more')}
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .modern-about {
          padding: 100px 0;
          background: #ffffff;
          position: relative;
        }

        .modern-about-image {
          position: relative;
        }

        .about-image-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .about-image-wrapper:hover {
          transform: translateY(-10px);
        }

        .about-main-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .about-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(22, 47, 39, 0.1) 0%, rgba(45, 90, 71, 0.1) 100%);
          pointer-events: none;
        }

        .modern-about-content {
          padding-left: 30px;
        }

        .about-section-label {
          margin-bottom: 15px;
        }

        .about-section-label span {
          display: inline-block;
          padding: 6px 16px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .modern-about-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #162f27;
          margin-bottom: 25px;
          line-height: 1.3;
        }

        .modern-about-text {
          font-size: 1.1rem;
          color: #64748b;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .about-features-list {
          margin-bottom: 35px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          padding: 12px 0;
        }

        .feature-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          margin-right: 15px;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);
        }

        .feature-item span {
          font-size: 1rem;
          color: #334155;
          font-weight: 500;
        }

        .modern-about-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: linear-gradient(135deg, #162f27 0%, #2d5a47 100%);
          color: white;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(22, 47, 39, 0.3);
          border: none;
        }

        .modern-about-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(22, 47, 39, 0.4);
          background: linear-gradient(135deg, #2d5a47 0%, #162f27 100%);
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .modern-about-btn:hover .btn-arrow {
          transform: translateX(5px);
        }

        @media (max-width: 992px) {
          .modern-about {
            padding: 60px 0;
          }

          .modern-about-content {
            padding-left: 0;
            margin-top: 40px;
          }

          .modern-about-title {
            font-size: 2rem;
          }

          .about-features-list {
            text-align: left;
          }
        }
      `}</style>
    </>
  );
};

export default About;
