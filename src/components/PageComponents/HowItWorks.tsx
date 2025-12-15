'use client'

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Groupimg from '../../assets/images/how1.svg';
import Groupimgtwo from '../../assets/images/how2.svg';
import Groupimgthree from '../../assets/images/how3.svg';

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="how-col pb-5 modern-how-it-works">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex flex-column justify-content-center align-items-center text-center">
              <div className="section-header">
                <div className="section-label">
                  <span>How It Works</span>
                </div>
                <h2 className="how-h2 mb-4 modern-section-title">{t('how_it_works')}</h2>
                <p className="how-pmain modern-section-subtitle">{t('how_p')}</p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="text-center">
                <div
                  className="thumb wow animated fadeInUp modern-step-image"
                  data-wow-duration="2000ms"
                  data-wow-delay="200ms"
                >
                  <div className="step-image-wrapper">
                    <div className="step-number-badge">01</div>
                    <Image src={Groupimg} alt="Step 1" width={400} height={300} className="step-image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pt-lg-5 d-flex flex-column justify-content-lg-start align-items-lg-start justify-content-center align-items-center modern-step-content">
                <div className="step-content-card">
                  <h2 className="how-h2-primary modern-step-title">{t('download_app')}</h2>
                  <p className="how-p modern-step-description">{t('download_p')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 order-lg-2">
              <div className="text-center">
                <div
                  className="thumb wow animated fadeInUp modern-step-image"
                  data-wow-duration="2000ms"
                  data-wow-delay="200ms"
                >
                  <div className="step-image-wrapper">
                    <div className="step-number-badge step-number-badge-2">02</div>
                    <Image src={Groupimgtwo} alt="Step 2" width={400} height={300} className="step-image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="pt-lg-5 d-flex flex-column justify-content-lg-start align-items-lg-start justify-content-center align-items-center modern-step-content">
                <div className="step-content-card">
                  <h2 className="how-h2-primary modern-step-title">{t('book_trip')}</h2>
                  <p className="how-p modern-step-description">{t('book_p')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="text-center">
                <div
                  className="thumb wow animated fadeInUp modern-step-image"
                  data-wow-duration="2000ms"
                  data-wow-delay="200ms"
                >
                  <div className="step-image-wrapper">
                    <div className="step-number-badge step-number-badge-3">03</div>
                    <Image src={Groupimgthree} alt="Step 3" width={400} height={300} className="step-image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pt-lg-5 d-flex flex-column justify-content-lg-start align-items-lg-start justify-content-center align-items-center modern-step-content">
                <div className="step-content-card">
                  <h2 className="how-h2-primary modern-step-title">{t('travel')}</h2>
                  <p className="how-p modern-step-description">{t('travel_p')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .modern-how-it-works {
          padding: 100px 0;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          position: relative;
        }

        .section-header {
          margin-bottom: 60px;
        }

        .section-label {
          margin-bottom: 15px;
        }

        .section-label span {
          display: inline-block;
          padding: 6px 16px;
          background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
          color: white;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .modern-section-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #162f27;
          margin-bottom: 20px;
        }

        .modern-section-subtitle {
          font-size: 1.1rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .modern-step-image {
          position: relative;
        }

        .step-image-wrapper {
          position: relative;
          display: inline-block;
          padding: 20px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .step-image-wrapper:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
        }

        .step-number-badge {
          position: absolute;
          top: -15px;
          left: -15px;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 700;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
          z-index: 10;
        }

        .step-number-badge-2 {
          background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
        }

        .step-number-badge-3 {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
        }

        .step-image {
          position: relative;
          z-index: 1;
          border-radius: 10px;
        }

        .modern-step-content {
          padding: 20px;
        }

        .step-content-card {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          width: 100%;
          max-width: 500px;
        }

        .step-content-card:hover {
          transform: translateX(10px);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
        }

        .modern-step-title {
          font-size: 2rem;
          font-weight: 700;
          color: #162f27;
          margin-bottom: 20px;
          line-height: 1.3;
        }

        .modern-step-description {
          font-size: 1.05rem;
          color: #64748b;
          line-height: 1.8;
          margin: 0;
        }

        @media (max-width: 992px) {
          .modern-how-it-works {
            padding: 60px 0;
          }

          .modern-section-title {
            font-size: 2.2rem;
          }

          .step-content-card {
            padding: 30px;
            margin-top: 30px;
          }

          .modern-step-title {
            font-size: 1.6rem;
          }
        }

        @media (max-width: 768px) {
          .modern-section-title {
            font-size: 1.8rem;
          }

          .step-number-badge {
            width: 50px;
            height: 50px;
            font-size: 20px;
            top: -10px;
            left: -10px;
          }
        }
      `}</style>
    </>
  );
};

export default HowItWorks;
