'use client'

import React from 'react';
import Image from 'next/image';
import apple from '../../assets/images/store-1.svg';
import { useTranslation } from 'react-i18next';

const Action: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <div className="appie-project-container">
          <div className="row">
            <div
              className="appie-project-3-box d-block d-sm-flex justify-content-between align-items-center wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="400ms"
            >
              <div className="col-lg-6">
                <div className="d-flex flex-column justify-content-lg-start justfy-content-center align-items-lg-start align-items-center">
                  <h4 className="title">TransApp</h4>
                </div>
                <div className="d-flex flex-column justify-content-lg-start justfy-content-center align-items-lg-start align-items-center">
                  <p className="action-p">{t('action_p')}</p>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <div className="row">
                  <div className="col-lg-6">
                    <span>
                      <Image className="mr-2 mb-3" src={apple} alt="App Store" width={150} height={50} />
                    </span>
                  </div>
                  <div className="col-lg-6">
                    <span>
                      <Image src={apple} alt="Google Play" className="mb-3" width={150} height={50} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Action;
