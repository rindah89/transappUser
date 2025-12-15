'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import heroImg from '../../assets/images/hero.png';
import AppleImage from '../../assets/images/App-Store---eng.svg';
import GoogleImage from '../../assets/images/Google-Play---eng.svg';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="appie-hero-area modern-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="appie-hero-content modern-hero-content">
                <div className="hero-badge">
                  <span className="badge-text">🚀 Fast & Reliable</span>
                </div>
                <h1 className="appie-title pt-5 modern-title">
                  {t('hero_linea')}
                </h1>
                <Link href="/book" className="hero-link">
                  <h1 className="appie-title modern-title-link">
                    {t('hero_lineb')}
                  </h1>
                </Link>
                <p className="hero-description">
                  Book your bus tickets in minutes. Skip the queues and travel with ease.
                </p>
                <ul className="modern-app-buttons">
                  <li className="mb-3">
                    <Link href="#" className="app-button-link">
                      <Image 
                        src={GoogleImage} 
                        alt="Get it on Google Play" 
                        width={180} 
                        height={60}
                        className="app-button-image"
                      />
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link href="#" className="app-button-link">
                      <Image 
                        src={AppleImage} 
                        alt="Download on the App Store" 
                        width={180} 
                        height={60}
                        className="app-button-image"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="modern-hero-image-wrapper">
                <div
                  className="thumb wow animated fadeInUp modern-hero-thumb"
                  data-wow-duration="2000ms"
                  data-wow-delay="200ms"
                >
                  <div className="hero-image-container">
                    <Image 
                      src={heroImg} 
                      alt="Hero" 
                      width={600} 
                      height={600}
                      className="hero-main-image"
                      priority
                    />
                    <div className="hero-gradient-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </section>
      <style jsx>{`
        .modern-hero {
          position: relative;
          padding: 120px 0 100px;
          background: linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%);
          overflow: hidden;
        }

        .modern-hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-badge {
          margin-bottom: 20px;
        }

        .badge-text {
          display: inline-block;
          padding: 8px 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
          animation: fadeInUp 0.6s ease-out;
        }

        .modern-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 15px;
          background: linear-gradient(135deg, #162f27 0%, #2d5a47 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeInUp 0.8s ease-out;
        }

        .modern-title-link {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 25px;
          background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: all 0.3s ease;
          animation: fadeInUp 1s ease-out;
        }

        .hero-link:hover .modern-title-link {
          transform: translateX(5px);
          background: linear-gradient(135deg, #f97316 0%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.2rem;
          color: #64748b;
          margin-bottom: 35px;
          line-height: 1.7;
          max-width: 500px;
          animation: fadeInUp 1.2s ease-out;
        }

        .modern-app-buttons {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          animation: fadeInUp 1.4s ease-out;
        }

        .app-button-link {
          display: inline-block;
          transition: all 0.3s ease;
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
        }

        .app-button-link:hover {
          transform: translateY(-5px);
          filter: drop-shadow(0 8px 15px rgba(0, 0, 0, 0.2));
        }

        .modern-hero-image-wrapper {
          position: relative;
          z-index: 1;
        }

        .hero-image-container {
          position: relative;
          display: inline-block;
        }

        .hero-main-image {
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
        }

        .hero-gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          border-radius: 20px;
          z-index: 1;
        }

        .hero-shapes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          z-index: 0;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          top: 10%;
          right: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
          bottom: 20%;
          left: 5%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          top: 50%;
          right: 20%;
          animation-delay: 4s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @media (max-width: 992px) {
          .modern-hero {
            padding: 80px 0 60px;
          }

          .modern-title,
          .modern-title-link {
            font-size: 2.5rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .modern-app-buttons {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .modern-title,
          .modern-title-link {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
