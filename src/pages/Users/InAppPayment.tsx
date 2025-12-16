'use client'

import React, { useEffect, useState } from 'react';
import { useStateMachine } from "little-state-machine";
import { updateSearch, updateAction } from "../../utils/updateActions";
import { Row, Col, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import moment from "moment";
import axios from 'axios';
import ShortUniqueId from "short-unique-id";
import { SpinnerCircular } from 'spinners-react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import type { BookingInsert } from "../../interfaces/booking.interface";

const currentYear = new Date().getFullYear();

function setMonth(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleString("default", { month: "short" });
}

const InAppPayment: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const transaction = typeof window !== 'undefined' ? localStorage.getItem('transactionID') : null;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [ticket, setTicket] = useState<string>('');
  const [seat, setSeat] = useState<string | null>(null);
  const { state } = useStateMachine({ updateSearch, updateAction });

  const [loading, setLoading] = useState<boolean>(true);
  const [modalSuccess, setModalSuccess] = useState<{ modal_static: boolean }>({ modal_static: false });
  const [modalFailure, setModalFailure] = useState<{ modal_static: boolean }>({ modal_static: false });

  function hideFailureModal(): void {
    setIsVisible(false);
    setModalFailure({ modal_static: false });
  }

  const hideSuccessModal = (): void => {
    setSuccess(false);
    setModalSuccess({ modal_static: false });
    router.replace('/book');
  };

  const createBooking = async (): Promise<void> => {
    if (typeof window === 'undefined') return;

    const phone = localStorage.getItem('phone');
    const name = localStorage.getItem("name");
    const idCard = localStorage.getItem("idCard");
    const payerEmail = localStorage.getItem("email");

    const trip = (state?.trip as any)?.trip;
    if (!trip) {
      toast.error('No trip selected');
      setLoading(false);
      return;
    }

    const tid = new ShortUniqueId({ length: 7, dictionary: "alphanum_upper" });
    const bookingData: Partial<BookingInsert> = {
      phone_number: phone ? Number(phone) : null,
      number_of_seats: "1",
      ticket_type: "One-way",
      transaction_id: transaction || null,
      month: setMonth(trip.journey_date || trip.journeyDate),
      year: currentYear.toString(),
      week: moment(trip.journey_date || trip.journeyDate).format("W"),
      name: name || '',
      id_card_no: idCard || null,
      payer_email: payerEmail || null,
      trip_id: trip.id,
      ticket_number: tid.rnd(),
      seat: null,
      status: "",
      agency_name: trip.agency_name || trip.agencyName,
      journey_date: trip.journey_date || trip.journeyDate,
      price: trip.price,
      departure_city: trip.from_location || trip.from,
      arrival_city: trip.to_location || trip.to,
      departure_time: trip.departure || trip.departure_time,
    };

    try {
      const userEmail = (state?.user as any)?.data?.data?.email;
      const userToken = (state?.user as any)?.data?.data?.token || (state?.user as any)?.data?.token;
      const isAuthenticated = userEmail && userToken;
      
      // Try authenticated booking first if user appears to be logged in
      if (isAuthenticated) {
        try {
          const { data } = await axios.post<{ error: boolean; message: string; data?: any }>(
            `api/v1/bookings/create-booking/${trip.id}`,
            bookingData
          );
          if (data?.error) {
            // If 401 Unauthorized, fall back to anonymous booking
            throw new Error(data.message || 'Authentication failed');
          } else if (data.data) {
            setSuccess(true);
            setSeat(data.data.seat);
            setTicket(data.data.ticket_number || data.data.ticketNumber);
            localStorage.removeItem('phone');
            localStorage.removeItem("name");
            localStorage.removeItem("idCard");
            localStorage.removeItem("email");
            setLoading(false);
            return;
          }
        } catch (authError: unknown) {
          // If authentication fails (401), fall back to anonymous booking
          if (axios.isAxiosError(authError) && authError.response?.status === 401) {
            console.log('Authentication failed, falling back to anonymous booking');
            // Continue to anonymous booking flow below
          } else {
            throw authError;
          }
        }
      }
      
      // Anonymous booking flow (also used as fallback for failed auth)
      const { data } = await axios.post<{ error: boolean; message: string; data?: any }>(
        `api/v1/bookings/anon-booking/${trip.id}`,
        bookingData
      );
      if (data?.error) {
        toast.error(data.message);
        setLoading(false);
      } else if (data.data) {
        setSuccess(true);
        setSeat(data.data.seat);
        setTicket(data.data.ticket_number || data.data.ticketNumber);
        localStorage.removeItem('phone');
        localStorage.removeItem("name");
        localStorage.removeItem("idCard");
        localStorage.removeItem("email");
        setLoading(false);
      }
    } catch (error: unknown) {
      setLoading(false);
      setIsVisible(true);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Failed to create booking');
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };

  useEffect(() => {
    if (!transaction) {
      setLoading(false);
      return;
    }

    createBooking();
  }, [transaction]);

  const trip = (state?.trip as any)?.trip;

  if (loading) {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid className="">
            <div className="loader-outer">
              <div className="loader-inner">
                <SpinnerCircular color="#bcc014" size={30} />
              </div>
            </div>
          </Container>
        </div>
      </React.Fragment>
    );
  }

  return (
    <>
      <section className="trip-search mb-5">
        <div className="container pt-5">
          {success && (
            <Modal isOpen={modalSuccess.modal_static} toggle={hideSuccessModal} centered size="sm">
              <ModalHeader toggle={hideSuccessModal}>{t('Success')}!</ModalHeader>
              <ModalBody>
                <Row>
                  <Col lg={12}>
                    <p className="text-center booking-p">{t('ticket_num')} {ticket}</p>
                    <p className="text-center booking-p">{t('seat')}: {seat}</p>
                    {trip && (
                      <>
                        <p className="text-center booking-p">{t('date')}: {trip.journey_date || trip.journeyDate}</p>
                        <p className="text-center booking-p">{t('time')}: {trip.departure || trip.departure_time}</p>
                        <p className="text-center booking-p">{t('to')}: {trip.to_location || trip.to}</p>
                      </>
                    )}
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={hideSuccessModal}>OK</Button>
              </ModalFooter>
            </Modal>
          )}
          {isVisible && (
            <Modal isOpen={modalFailure.modal_static} toggle={hideFailureModal} centered size="sm">
              <ModalHeader toggle={hideFailureModal}>{t('Failed')}!</ModalHeader>
              <ModalBody>
                <Row>
                  <Col lg={12}>
                    <p className="text-center">{t('failed_booking')}</p>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={hideFailureModal}>OK</Button>
              </ModalFooter>
            </Modal>
          )}
        </div>
      </section>
    </>
  );
};

export default InAppPayment;
