'use client'

import React, { useEffect } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { useTranslation } from "react-i18next";
import Search from "../../components/Common/Search";
import PopularRoutes from "../../components/Common/PopularRoutes";

const BookTicket: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.setAttribute("style", "background: #162f26!important;");
    }
  }, []);

  return (
    <div className="booking">
      <Container>
        <Row className="mt-lg-5 pt-lg-5 mb-lg-5">
          <Col lg={6}>
            <div className="">
              <h1 className="booking-h2">
                <span className="booking_1">{t('booking_1')}</span> {t('booking_text')}
              </h1>
            </div>
          </Col>

          <Col lg={6} className="mb-lg-5">
            <Card className="booking-card ta-search-card">
              <CardBody>
                <Search text="book" />
                <div className="mt-4">
                  <PopularRoutes />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookTicket;
