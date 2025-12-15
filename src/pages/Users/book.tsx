'use client'

import React, { useEffect } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { useTranslation } from "react-i18next";
import { useStateMachine } from "little-state-machine";
import Link from "next/link";
import Search from "../../components/Common/Search";
import PopularRoutes from "../../components/Common/PopularRoutes";

const BookTicket: React.FC = () => {
  const { t } = useTranslation();
  const { state } = useStateMachine({});
  
  // Check if user is authenticated
  const userEmail = (state?.user as any)?.data?.data?.email ?? (state?.user as any)?.data?.email;
  const isGuest = !userEmail;

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.setAttribute("style", "background: #162f26!important;");
    }
  }, []);

  return (
    <div className="booking">
      <Container>
        {isGuest && (
          <Row className="mt-4">
            <Col lg={12}>
              <div className="alert alert-light border d-flex align-items-center gap-3 mb-4">
                <span style={{ fontSize: '24px' }}>👤</span>
                <div className="flex-grow-1">
                  <strong>{t('book_as_guest') || 'Book as Guest'}</strong>
                  <p className="mb-0 small text-muted">
                    {t('guest_booking_info') || 'You can book tickets without creating an account. Simply search for trips and click "Get Ticket" to proceed.'}
                  </p>
                </div>
                <Link href="/register" className="btn btn-sm btn-primary">
                  {t('sign_up') || 'Sign Up'}
                </Link>
              </div>
            </Col>
          </Row>
        )}
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
