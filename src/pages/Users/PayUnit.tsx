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
import { formatDateDisplay } from "../../utils/dateHelpers";
import type { BookingInsert } from "../../interfaces/booking.interface";

const currentYear = new Date().getFullYear();

function setMonth(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleString("default", { month: "short" });
}

const PayUnit: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const transaction = typeof window !== 'undefined' ? localStorage.getItem('transactionID') : null;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [ticket, setTicket] = useState<string>('');
  const [seat, setSeat] = useState<string | null>(null);
  const { state } = useStateMachine({ updateSearch, updateAction });

  const [loading, setLoading] = useState<boolean>(true);
  const PAYUNIT_USERNAME = "4d70631d-397c-4efd-929a-87fcd3a9d162";
  const PAYUNIT_PASSWORD = "2a8f415d-d9d2-4834-a573-b12c1375b94c";

  const token = `${PAYUNIT_USERNAME}:${PAYUNIT_PASSWORD}`;
  const encodedToken = typeof Buffer !== 'undefined' ? Buffer.from(token).toString("base64") : btoa(token);

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

  const checkPaymentStatus = async (): Promise<string | null> => {
    if (!transaction || typeof window === 'undefined') return null;

    const config = {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_PAYUNIT_API_KEY || "sand_oCYvry8nlC13jE8vg8om99clqyHBAe",
        mode: "test",
        "Content-Type": "application/json",
        Authorization: "Basic " + encodedToken,
      },
    };

    try {
      const { data } = await axios.get<{ error: boolean; message: string; data?: { transaction_status: string } }>(
        `https://app.payunit.net/api/gateway/paymentstatus/${transaction}`,
        config
      );
      if (data?.error) {
        toast.error(data.message);
        return null;
      } else {
        return data.data?.transaction_status || null;
      }
    } catch (error: unknown) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Failed to check payment status');
      } else {
        toast.error('An unexpected error occurred');
      }
      return null;
    }
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
      agency_name: trip.agency_name || trip.agencyName,
      journey_date: trip.journey_date || trip.journeyDate,
      price: trip.price,
      departure_city: trip.from_location || trip.from,
      arrival_city: trip.to_location || trip.to,
      departure_time: trip.departure || trip.departure_time,
      ticket_number: tid.rnd(),
      seat: null,
      status: "",
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

    setLoading(true);
    const checkStatus = async (): Promise<void> => {
      const sleep = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));
      let isPending = true;
      let transaction_status: string | null = '';

      do {
        transaction_status = await checkPaymentStatus();
        if (transaction_status && transaction_status.toLowerCase() !== 'pending') {
          isPending = false;
        }
        await sleep(30000); // every 30 seconds
      } while (isPending);

      if (transaction_status === "SUCCESS") {
        createBooking();
      } else {
        toast.error('Failed to process payment');
        setLoading(false);
      }
    };

    checkStatus();
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
                        <p className="text-center booking-p">{t('date')}: {formatDateDisplay(trip.journey_date || trip.journeyDate)}</p>
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

export default PayUnit;
