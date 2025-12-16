'use client'

import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { useStateMachine } from "little-state-machine";
import { updateAction, updateBooking } from "../../utils/updateActions";
import { roundPriceToNearest50 } from "../../utils/helpers";
import Link from "next/link";

const TicketSummary: React.FC = () => {
  const { t } = useTranslation();
  const { state } = useStateMachine({ updateAction, updateBooking });

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.setAttribute('style', 'background: #f8f8f8!important;');
    }
  }, []);

  const booking = (state?.booking as any)?.booking?.data;
  const trip = (state?.trip as any)?.trip;

  if (!booking || !trip) {
    return (
      <div className="page-content">
        <Container fluid={false}>
          <div className="row">
            <div className="col-md-9 col-lg-6 col-xl-5 mx-auto my-4 box">
              <p>{t('no_booking_data') || 'No booking data available'}</p>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={false}>
          <div className="row">
            <div className="col-md-9 col-lg-6 col-xl-5 mx-auto my-4 box">
              <h3>{t('ticket_summary')}</h3>
              <ul>
                <li>
                  {t('ticket_number')}: <span>{booking.ticketNumber}</span>
                </li>
                <li>
                  {t('from')}: <span>{trip.from_location || trip.from}</span>
                </li>
                <li>
                  {t('to')}: <span>{trip.to_location || trip.to}</span>
                </li>
                <li>
                  {t('journey_date')}: <span>{moment(trip.journey_date || trip.journeyDate).format("DD-MM-YYYY")}</span>
                </li>
                <li>
                  {t('time')}: <span>{trip.departure || trip.departure_time}</span>
                </li>
                <li>
                  {t('fare')}: <span>{roundPriceToNearest50(trip.price)}</span>
                </li>
              </ul>
              <Link href="/user-checkout" className="btn-buy">
                {t('continue')}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default TicketSummary;
