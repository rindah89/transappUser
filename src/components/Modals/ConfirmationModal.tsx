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
import { SpinnerCircular } from 'spinners-react';

interface ConfirmationModalProps {
  downloadTicket: () => void;
  working: boolean;
  modalConfirm: { modal_static: boolean };
  setModalConfirm: (value: { modal_static: boolean }) => void;
  buttonText?: string;
}


const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  downloadTicket,
  working,
  modalConfirm,
  setModalConfirm,
  buttonText = "Download",
}) => {
  const { t } = useTranslation();
  const { state } = useStateMachine({
    updateBooking,
    updateAction,
    updateUser,
  });

  const stateAny = state as any;
  const trip = stateAny?.trip?.trip;
  const booking = stateAny?.booking?.booking?.data;

  const ticketPrice = Number(trip?.price || 0);
  const reservationFee = trip?.price ? (trip.price / 100 * 10 > 500 ? 500 : trip.price / 100 * 10) : 0;
  const reservationDiscount = reservationFee; // 100% waived
  const dueNow = 0;
  const payAtCounter = Number.isFinite(ticketPrice) ? ticketPrice : 0;
  const currency = 'XAF';

  return (
    <>
      <Modal isOpen={modalConfirm.modal_static} backdrop="static" centered size="md">
        <ModalHeader toggle={() => setModalConfirm({ modal_static: false })}>
          <h2 style={{ color: 'green', fontWeight: "bold" }}>{t('book_success')}!</h2>
        </ModalHeader>
        <ModalBody>
          <div className="row">
            <div id="ticket-info" className="col-md-9 col-lg-6 col-xl-5 mx-auto">
              <ul className="">
                <li>{t('Agency')}: <span>{trip?.agency_name || trip?.agencyName}</span></li>
                <li>{t('name')}: <span>{booking?.name}</span></li>
                <li>{t('seat')}: <span>{booking?.seat}</span></li>
                <li>{t('ticket_number')}: <span>{booking?.ticket_number || booking?.ticketNumber}</span></li>
                <li>{t('to')}: <span>{trip?.to_location || trip?.to}</span></li>
                <li>{t('journey_date')}: <span>{trip?.journey_date || trip?.journeyDate}</span></li>
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
                  <span style={{ fontWeight: 800 }}>{dueNow} {currency}</span>
                </li>
                <li>
                  {t('pay_at_counter') || 'Pay at counter'}:{' '}
                  <span style={{ fontWeight: 800 }}>{payAtCounter} {currency}</span>
                </li>
              </ul>
              <div className="alert alert-warning mt-3 mb-0" role="alert" style={{ fontSize: 14 }}>
                <strong>{t('important') || 'Important'}:</strong>{' '}
                {(t('arrive_one_hour_early') as any) || 'Please arrive at least 1 hour before the journey starts to complete payment and check-in.'}
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
                  onClick={() => setModalConfirm({ modal_static: false })}
                >
                  {t("cancel")}
                </Button>
                <Button type="submit" onClick={downloadTicket} color="primary">
                  {buttonText}
                </Button>
              </>
            )}
          </ModalFooter>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
