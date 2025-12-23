'use client'

import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import { useTranslation } from "react-i18next";
import { useStateMachine } from "little-state-machine";
import {
  updateBooking,
  updateAction,
  updateUser,
} from "../../utils/updateActions";
import { roundPriceToNearest50 } from "../../utils/helpers";
import { formatDateDisplay } from "../../utils/dateHelpers";
import { SpinnerCircular } from 'spinners-react';

interface SummaryModalProps {
  createBooking: () => void;
  createCashBooking?: () => void;
  working: boolean;
  modalSummary: { modal_static: boolean };
  setWorking: (value: boolean) => void;
  setModalSummary: (value: { modal_static: boolean }) => void;
  buttonText?: string;
  cashButtonText?: string;
}


const SummaryModal: React.FC<SummaryModalProps> = ({
  createBooking,
  createCashBooking,
  working,
  modalSummary,
  setModalSummary,
  buttonText = "Pay Now",
  cashButtonText = "Pay Cash",
}) => {
  const { t } = useTranslation();
  const { state } = useStateMachine({
    updateBooking,
    updateAction,
    updateUser,
  });

  const stateAny = state as any;
  const trip = stateAny?.trip?.trip;
  const ticketPrice = roundPriceToNearest50(trip?.price || 0);
  // Calculate reservation fee: 10% of rounded ticket price, capped at 500 XAF, then rounded to nearest 50
  const reservationFeeBase = ticketPrice ? Math.min((ticketPrice / 100) * 10, 500) : 0;
  const reservationFee = roundPriceToNearest50(reservationFeeBase);

  // Reservation fee payment is currently waived (100% discount), so it always goes through.
  const reservationDiscount = reservationFee;
  const reservationDueNow = 0;
  const payAtCounter = Number.isFinite(ticketPrice) ? ticketPrice : 0;
  const currency = 'XAF';

  const confirmReservation = (): void => {
    // Prefer the "cash at counter" path when available.
    if (createCashBooking) {
      createCashBooking();
      return;
    }
    createBooking();
  };

  return (
    <>
      <Modal isOpen={modalSummary.modal_static} backdrop="static" centered size="md">
        <ModalHeader toggle={() => setModalSummary({ modal_static: false })}>
          <h3>{t('ticket_summary')}</h3>
        </ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-md-9 col-lg-6 col-xl-5 mx-auto">
              <ul className="">
                <li>{t('Agency')}: <span>{trip?.agency_name || trip?.agencyName}</span></li>
                <li>{t('from')}: <span>{trip?.from_location || trip?.from}</span></li>
                <li>{t('to')}: <span>{trip?.to_location || trip?.to}</span></li>
                <li>{t('journey_date')}: <span>{trip?.journey_date || trip?.journeyDate ? formatDateDisplay(trip.journey_date || trip.journeyDate) : '-'}</span></li>
                <li>{t('time')}: <span>{trip?.departure || trip?.departure_time}</span></li>
                <li>{t('fare')}: <span>{ticketPrice} {currency}</span></li>
                <li>{t('reservation_fee') || t('booking_fee')}: <span>{reservationFee} {currency}</span></li>
                <li>
                  {t('discount') || 'Discount'}:{' '}
                  <span style={{ color: 'green', fontWeight: 700 }}>
                    -{reservationDiscount} {currency} (100%)
                  </span>
                </li>
                <li>
                  {t('due_now') || 'Due now'}:{' '}
                  <span style={{ fontWeight: 800 }}>{reservationDueNow} {currency}</span>
                </li>
                <li>
                  {t('pay_at_counter') || 'Pay at counter'}:{' '}
                  <span style={{ fontWeight: 800 }}>{payAtCounter} {currency}</span>
                </li>
              </ul>
              <div className="mt-3">
                <div className="alert alert-warning mb-2" role="alert" style={{ fontSize: 14 }}>
                  <strong>{t('important') || 'Important'}:</strong>{' '}
                  {(t('arrive_one_hour_early') as any) || 'Please arrive at least 1 hour before the journey starts to complete payment and check-in.'}
                </div>
                <div className="text-muted" style={{ fontSize: 14 }}>
                  {(t('cash_payment_note') as any) || 'Tickets are paid in cash at the counter. Your reservation fee is currently waived (100% discount).'}
                </div>
              </div>
            </div>
          </div>

          <ModalFooter>
            <div className="text-center">
              <p className="summary-p">Note: {t('reservation_note')}</p>
            </div>
            {working ? (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
                <SpinnerCircular
                  color="#bcc015"
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            ) : (
              <>
                <Button
                  color="light"
                  onClick={() => setModalSummary({ modal_static: false })}
                >
                  {t("cancel")}
                </Button>
                <Button type="submit" onClick={confirmReservation} color="primary">
                  {cashButtonText || buttonText || (t("confirm_reservation") as any) || 'Confirm Reservation'}
                </Button>
              </>
            )}
          </ModalFooter>
        </ModalBody>
      </Modal>
    </>
  );
};

export default SummaryModal;
