'use client'

import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { useTranslation } from "react-i18next";

const Terms: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.setAttribute("style", "background: #fff !important;");
    }
  }, []);

  return (
    <>
      <div className="booking">
        <Container>
          <div className="py-5">
            <h1 className="page-header">{t('terms')}</h1>
          </div>
        </Container>
      </div>

      <Container className="mt-5 pt-5">
        <h2 className="about-heading">{t('terms_and_conditions')}</h2>
        <div className="">
          <p className="about-textp">
            {t('terms_govern')} {t('app_use')} {t('other_use')} {t('must_read')} {t('app_address')} {t('app_add')}
          </p>
        </div>

        <h2 className="about-heading">{t('sale_conditions')}</h2>
        <h3 className="about-heading">{t('paid_products')}</h3>
        <p className="about-textp">{t('paid_p1')}</p>
        <p className="about-textp">{t('paid_p2')}</p>

        <h2 className="about-heading">{t('product_desc')}</h2>
        <p className="about-textp">{t('desc_p1')}</p>
        <p className="about-textp">{t('desc_p2')}</p>
        <p className="about-textp">{t('desc_p3')}</p>

        <h2 className="about-heading">{t('purchasing')}</h2>
        <p className="about-textp">{t('purchasing_p1')}</p>
        <p className="about-textp">{t('purchasing_p2')}</p>
        <p className="about-textp">{t('purchasing_l1')}</p>
        <p className="about-textp">{t('purchasing_l2')}</p>

        <h2 className="about-heading">{t('order_submission')}</h2>
        <p className="about-textp">{t('order_p1')}</p>
        <p className="about-textp">{t('order_p2')}</p>
        <p className="about-textp">{t('order_p3')}</p>
        <p className="about-textp">{t('order_p4')}</p>
        <p className="about-textp">{t('order_p5')}</p>

        <h2 className="about-heading">{t('price2')}</h2>
        <p className="about-textp">{t('price_p1')}</p>
        <p className="about-textp">{t('price_p2')}</p>
        <p className="about-textp">{t('price_p3')}</p>

        <h2 className="about-heading">{t('payment_method')}</h2>
        <p className="about-textp">{t('payment_p1')}</p>
        <p className="about-textp">{t('payment_p2')}</p>
        <p className="about-textp">{t('payment_p3')}</p>
        <p className="about-textp">{t('payment_p4')}</p>

        <h2 className="about-heading">{t('paypal')}</h2>
        <p className="about-textp">{t('paypal_p1')}</p>
        <p className="about-textp">{t('paypal_p2')}</p>
        <p className="about-textp">{t('paypal_use')}</p>
        <p className="about-textp">{t('paypal_use_p1')}</p>

        <h2 className="about-heading">{t('delivery')}</h2>
        <p className="about-textp">{t('delivery_service')}</p>
        <p className="about-textp">{t('delivery_p1')}</p>

        <h2 className="about-heading">{t('disclaimer')}</h2>
        <h3 className="about-heading">{t('disclaimer_h1')}</h3>
        <p className="about-textp">{t('disclaimer_p1')}</p>
        <p className="about-textp">{t('disclaimer_p2')}</p>
        <p className="about-textp">{t('disclaimer_p3')}</p>
        <p className="about-textp">{t('disclaimer_p4')}</p>
        <p className="about-textp">{t('disclaimer_p5')}</p>
        <p className="about-textp">{t('disclaimer_p6')}</p>
        <p className="about-textp">{t('disclaimer_p7')}</p>
        <p className="about-textp">{t('disclaimer_p8')}</p>
        <p className="about-textp">{t('disclaimer_p9')}</p>
        <p className="about-textp">{t('disclaimer_p10')}</p>
        <p className="about-textp">{t('disclaimer_p11')}</p>

        <h2 className="about-heading">{t('indemnification')}</h2>
        <p className="about-textp">{t('ind_p1')}</p>
        <p className="about-textp">{t('ind_p2')}</p>
        <p className="about-textp">{t('ind_p3')}</p>
        <p className="about-textp">{t('ind_p4')}</p>
        <p className="about-textp">{t('ind_p5')}</p>
        <p className="about-textp">{t('ind_p6')}</p>
        <p className="about-textp">{t('ind_p7')}</p>
        <p className="about-textp">{t('ind_p8')}</p>

        <h2 className="about-heading">{t('provisions')}</h2>
        <p className="about-textp">{t('waiver_p')}</p>

        <h2 className="about-heading">{t('service_interuption')}</h2>
        <p className="about-textp">{t('service_p1')}</p>
        <p className="about-textp">{t('service_p2')}</p>
        <p className="about-textp">{t('service_p3')}</p>

        <h2 className="about-heading">{t('reselling')}</h2>
        <p className="about-textp">{t('reselling_p')}</p>
      </Container>
    </>
  );
};

export default Terms;
