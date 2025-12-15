'use client'

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import featureImg from '../../assets/images/trans.jpeg';
import featureImg2 from '../../assets/images/sia.jpeg';

const Features: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="features modern-features">
        <div className="container">
          <div className="section-header">
            <div className="section-label">
              <span>Features</span>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <h2 className="how-h2 mb-4 modern-features-title">{t('features')}</h2>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <p className="features-p modern-features-subtitle">{t('features_p')}</p>
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-lg-6">
              <div className="post-item-1 modern-feature-card">
                <div className="feature-image-wrapper">
                  <Image 
                    src={featureImg} 
                    alt="Feature" 
                    width={500} 
                    height={300}
                    className="feature-image"
                  />
                  <div className="feature-overlay"></div>
                  <div className="feature-badge">
                    <span>New</span>
                  </div>
                </div>
                <div className="b-post-details modern-feature-content">
                  <div className="feature-icon-wrapper">
                    <div className="feature-icon">🚌</div>
                  </div>
                  <h2 className="features-h3 modern-feature-title">{t('gerer')}</h2>
                  <p className="features-pcard modern-feature-description">{t('gerer_text')}</p>
                  <div className="feature-link">
                    <span>Learn more</span>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="post-item-1 modern-feature-card">
                <div className="feature-image-wrapper">
                  <Image 
                    src={featureImg2} 
                    alt="Feature" 
                    width={500} 
                    height={300}
                    className="feature-image"
                  />
                  <div className="feature-overlay"></div>
                  <div className="feature-badge feature-badge-2">
                    <span>Popular</span>
                  </div>
                </div>
                <div className="b-post-details modern-feature-content">
                  <div className="feature-icon-wrapper">
                    <div className="feature-icon feature-icon-2">✈️</div>
                  </div>
                  <h2 className="features-h3 modern-feature-title">{t('sia')}</h2>
                  <p className="features-pcard modern-feature-description">{t('sia_text')}</p>
                  <div className="feature-link">
                    <span>Learn more</span>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .modern-features {
          padding: 100px 0;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          position: relative;
        }

        .section-header {
          margin-bottom: 60px;
        }

        .section-label {
          margin-bottom: 15px;
          text-align: center;
        }

        .section-label span {
          display: inline-block;
          padding: 6px 16px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .modern-features-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #162f27;
          margin-bottom: 20px;
        }

        .modern-features-subtitle {
          font-size: 1.1rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .modern-feature-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
          margin-bottom: 30px;
        }

        .modern-feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .feature-image-wrapper {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
        }

        .feature-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .modern-feature-card:hover .feature-image {
          transform: scale(1.1);
        }

        .feature-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(22, 47, 39, 0.3) 100%);
          pointer-events: none;
        }

        .feature-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 10;
        }

        .feature-badge span {
          display: inline-block;
          padding: 8px 16px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          box-shadow: 0 4px 10px rgba(102, 126, 234, 0.3);
        }

        .feature-badge-2 span {
          background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
          box-shadow: 0 4px 10px rgba(245, 158, 11, 0.3);
        }

        .modern-feature-content {
          padding: 35px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .feature-icon-wrapper {
          margin-bottom: 20px;
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .feature-icon-2 {
          background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
        }

        .modern-feature-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #162f27;
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .modern-feature-description {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 20px;
          flex: 1;
        }

        .feature-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #162f27;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: auto;
        }

        .feature-link:hover {
          color: #667eea;
          gap: 12px;
        }

        .feature-link .arrow {
          transition: transform 0.3s ease;
        }

        .feature-link:hover .arrow {
          transform: translateX(5px);
        }

        @media (max-width: 992px) {
          .modern-features {
            padding: 60px 0;
          }

          .modern-features-title {
            font-size: 2.2rem;
          }

          .feature-image-wrapper {
            height: 240px;
          }

          .modern-feature-content {
            padding: 25px;
          }
        }

        @media (max-width: 768px) {
          .modern-features-title {
            font-size: 1.8rem;
          }

          .modern-feature-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Features;
