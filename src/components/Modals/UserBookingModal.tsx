'use client'

import React, { useEffect, useMemo, useState, useCallback } from "react";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useStateMachine } from "little-state-machine";
import {
  updateBooking,
  updateAction,
  updateUser,
} from "../../utils/updateActions";
import ShortUniqueId from "short-unique-id";
import { useForm } from "react-hook-form";
import axios from "axios";
import { SpinnerCircular } from 'spinners-react';
import type { Trip } from "../../interfaces/trips.interface";
import { useRouter } from "next/navigation";
import { CreditCard, Mail, MapPin, Phone, User, X } from "lucide-react";

interface UserBookingModalProps {
  modal: { modal_static: boolean };
  getModal: (value: { modal_static: boolean }) => void;
  booking?: Trip;
  buttonText?: string;
}

interface BookingFormData {
  name: string;
  idCardNo: string;
  phoneNumber: string;
  payerEmail: string;
  seat: string;
}

const UserBookingModal: React.FC<UserBookingModalProps> = ({
  modal,
  getModal,
  booking,
  buttonText = "Pay Now",
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const {
    register,
    reset,
    getValues,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>();

  const [loading, setLoading] = useState<boolean>(false);
  const { state } = useStateMachine({
    updateBooking,
    updateAction,
    updateUser,
  });
  const stateAny = state as any;
  // `updateAction({ trip: tripObj })` stores the Trip directly at `state.trip` (not `state.trip.trip`)
  const selectedTrip: Trip | undefined = (stateAny?.trip?.trip as Trip | undefined) ?? (stateAny?.trip as Trip | undefined);

  const uid = new ShortUniqueId({ length: 10, dictionary: "alphanum_upper" });
  const transaction_id = uid.rnd();

  useEffect(() => {
    if (booking) {
      reset({
        data: booking,
      } as any);
    }
  }, [booking, reset]);

  // Prefill form with user details if authenticated
  useEffect(() => {
    if (!modal.modal_static) return; // Only prefill when modal is open
    
    // Get user data from state (handle different possible paths)
    const userData = (state?.user as any)?.data?.data || (state?.user as any)?.data || (state?.user as any);
    
    if (userData && (userData.email || userData.name)) {
      // User is authenticated, prefill form fields
      if (userData.name) setValue('name', userData.name);
      if (userData.id_card_number) setValue('idCardNo', userData.id_card_number);
      if (userData.phone_number) setValue('phoneNumber', userData.phone_number);
      if (userData.email) setValue('payerEmail', userData.email);
    }
  }, [modal.modal_static, state?.user, setValue]);

  const makePaymentOnPayunit = async (): Promise<void> => {
    setLoading(true);
    const phone = getValues("phoneNumber");
    const name = getValues('name');
    const idCard = getValues('idCardNo');
    const payerEmail = getValues('payerEmail');
    const seat = getValues('seat');

    if (!seat) {
      toast.error(t('seat_required') || 'Please select a seat');
      setLoading(false);
      return;
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem("phone", phone);
      localStorage.setItem("phoneNumber", phone);
      localStorage.setItem("name", name);
      localStorage.setItem("idCard", idCard);
      localStorage.setItem("email", payerEmail);
      localStorage.setItem("seat", seat);
      localStorage.setItem("transactionID", transaction_id);
    }

    const tripForPayment = selectedTrip;
    const booked = {
      total_amount: tripForPayment?.price || 100,
      currency: "XAF",
      transaction_id: transaction_id,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://transapp-user.herokuapp.com'}/payunit-return/:transaction_id/:transaction_amount/:transaction_gateway/:transaction_status/:purchaseRef/:currency`,
    };

    const createBookingFallback = async (): Promise<void> => {
      if (!tripForPayment?.id) {
        toast.error('No trip selected');
        return;
      }

      const bookingPayload = {
        phone_number: phone ? Number(phone) : null,
        number_of_seats: "1",
        ticket_type: "One-way",
        name: name || '',
        id_card_no: idCard || null,
        payer_email: payerEmail || null,
        seat: seat,
        trip_id: tripForPayment.id,
        agency_name: tripForPayment.agency_name,
        journey_date: tripForPayment.journey_date,
        price: tripForPayment.price,
        departure_city: tripForPayment.from_location,
        arrival_city: tripForPayment.to_location,
        departure_time: tripForPayment.departure,
      };

      // Logged-in users create a real booking (server validates auth via bearer token / cookies)
      const { data } = await axios.post<{ error: boolean; message: string; data?: any }>(
        `api/v1/bookings/create-booking/${tripForPayment.id}`,
        bookingPayload
      );

      if ((data as any)?.error) {
        toast.error((data as any)?.message || 'Booking failed');
        return;
      }

      toast.success((data as any)?.message || 'Booking created (dev mode)');
      getModal({ modal_static: false });
      const bookingId = (data as any)?.data?.id;
      if (bookingId) {
        router.push(`/ticket/${bookingId}`);
      }
    };

    try {
      // IMPORTANT: Call our server-side proxy to avoid browser CORS issues with PayUnit.
      const { data } = await axios.post(`api/v1/payunit/initialize`, booked);
      if (data?.error) {
        toast.error(data.message);
        setLoading(false);
      } else {
        if (data.status === "SUCCESS" && typeof window !== 'undefined') {
          window.location.href = data.data.transaction_url;
        }
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const msg = (error.response?.data as any)?.message || 'Payment initialization failed';
        // In local dev, PayUnit often fails due to credentials / environment; fall back to booking creation
        // so you can still test the booking pipeline end-to-end.
        if (process.env.NODE_ENV !== 'production') {
          toast.error(msg + ' — creating booking directly (dev fallback).');
          try {
            await createBookingFallback();
          } catch (e: unknown) {
            toast.error((e as any)?.message || 'Booking fallback failed');
          } finally {
            setLoading(false);
          }
          return;
        }
        toast.error(msg);
      } else {
        toast.error('An unexpected error occurred');
      }
      setLoading(false);
    }
  };

  const tripForDisplay = selectedTrip;

  const [takenSeats, setTakenSeats] = useState<string[]>([]);
  const [loadingSeats, setLoadingSeats] = useState<boolean>(false);
  const seatCount = useMemo(() => {
    const n = Number(tripForDisplay?.seats);
    return Number.isFinite(n) && n > 0 ? n : 0;
  }, [tripForDisplay?.seats]);

  useEffect(() => {
    const load = async (): Promise<void> => {
      if (!modal.modal_static) return;
      if (!tripForDisplay?.id) return;
      setLoadingSeats(true);
      try {
        const { data } = await axios.get<{ error: boolean; message: string; data?: { takenSeats: string[] } }>(
          `api/v1/bookings/trip-seats/${tripForDisplay.id}`
        );
        if ((data as any)?.error) {
          setTakenSeats([]);
        } else {
          setTakenSeats((data as any)?.data?.takenSeats || []);
        }
      } catch {
        setTakenSeats([]);
      } finally {
        setLoadingSeats(false);
      }
    };
    load();
  }, [modal.modal_static, tripForDisplay?.id]);

  const pickSeat = useCallback((seat: string): void => {
    setValue('seat', seat, { shouldValidate: true, shouldDirty: true });
  }, [setValue]);

  const selectedSeat = watch('seat');
  const seatRows = useMemo(() => {
    if (seatCount <= 0) return [];
    const seats = Array.from({ length: seatCount }, (_, i) => String(i + 1));
    const rows: Array<{ left: [string | null, string | null]; right: [string | null, string | null] }> = [];
    for (let i = 0; i < seats.length; i += 4) {
      rows.push({
        left: [seats[i] ?? null, seats[i + 1] ?? null],
        right: [seats[i + 2] ?? null, seats[i + 3] ?? null],
      });
    }
    return rows;
  }, [seatCount]);

  const SeatButton = ({ seat }: { seat: string | null }) => {
    if (!seat) return <div className="ta-seat ta-seat--empty" aria-hidden="true" />;
    const isTaken = takenSeats.includes(seat);
    const isSelected = selectedSeat === seat;
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isTaken) {
        pickSeat(seat);
      }
    };
    
    return (
      <button
        type="button"
        className={`ta-seat ${isTaken ? 'is-taken' : 'is-available'} ${isSelected ? 'is-selected' : ''}`}
        disabled={isTaken}
        onClick={handleClick}
        aria-label={`Seat ${seat}${isTaken ? ' (taken)' : isSelected ? ' (selected)' : ''}`}
      >
        {seat}
      </button>
    );
  };

  return (
    <>
      <Modal
        isOpen={modal.modal_static}
        backdrop="static"
        centered
        size="lg"
        contentClassName="ta-modal"
      >
        <ModalHeader className="ta-modal__header">
          <div className="ta-modal__headerInner">
            <div>
              <div className="ta-modal__kicker">{t('booking_details') || 'Booking details'}</div>
              <div className="ta-modal__title">
                <MapPin size={18} />
                <span>{tripForDisplay?.from_location || '-'}</span>
                <span className="ta-modal__arrow">→</span>
                <span>{tripForDisplay?.to_location || '-'}</span>
              </div>
            </div>
            <button
              type="button"
              className="ta-modal__close"
              onClick={() => getModal({ modal_static: false })}
              aria-label={t('close') || 'Close'}
            >
              <X size={18} />
            </button>
          </div>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(makePaymentOnPayunit)}>
            <Row>
              <Col lg={6}>
                <div className="ta-field">
                  <label htmlFor="name" className="ta-field__label">{t("name")}</label>
                  <div className="ta-field__control">
                    <span className="ta-field__icon" aria-hidden="true"><User size={16} /></span>
                    <input
                      type="text"
                      id="name"
                      className="form-control ta-input"
                      {...register("name", { required: true, minLength: 2 })}
                    />
                  </div>
                </div>
                {errors.name && (
                  <p style={{ color: "red" }}>{t("agency_branch_err")}</p>
                )}
              </Col>
              <Col lg={6}>
                <div className="ta-field">
                  <label htmlFor="idCardNo" className="ta-field__label">{t("id_card")}</label>
                  <div className="ta-field__control">
                    <span className="ta-field__icon" aria-hidden="true"><CreditCard size={16} /></span>
                    <input
                      type="text"
                      id="idCardNo"
                      className="form-control ta-input"
                      {...register("idCardNo", { required: true })}
                    />
                  </div>
                </div>
                {errors.idCardNo && (
                  <p style={{ color: "red" }}>{t("id_card_err")}</p>
                )}
              </Col>

              <Col lg={6}>
                <div className="ta-field">
                  <label htmlFor="phoneNumber" className="ta-field__label">{t("phone")}</label>
                  <div className="ta-field__control">
                    <span className="ta-field__icon" aria-hidden="true"><Phone size={16} /></span>
                    <input
                      type="tel"
                      inputMode="numeric"
                      id="phoneNumber"
                      placeholder={t('valid_momo_number') || "Valid money transfer number"}
                      className="form-control ta-input"
                      {...register("phoneNumber", { required: true, minLength: 9, maxLength: 12 })}
                    />
                  </div>
                </div>
                {errors.phoneNumber && (
                  <p style={{ color: "red" }}>{t("phone_err")}</p>
                )}
              </Col>

              <Col lg={6}>
                <div className="ta-field">
                  <label htmlFor="payerEmail" className="ta-field__label">{t("email_address")}</label>
                  <div className="ta-field__control">
                    <span className="ta-field__icon" aria-hidden="true"><Mail size={16} /></span>
                    <input
                      type="email"
                      id="payerEmail"
                      className="form-control ta-input"
                      {...register("payerEmail", { required: true })}
                    />
                  </div>
                </div>
                {errors.payerEmail && (
                  <p style={{ color: "red" }}>{t("phone_err")}</p>
                )}
              </Col>
            </Row>

            <div className="ta-seatmap mt-3">
              <div className="ta-seatmap__header">
                <div>
                  <div className="ta-seatmap__title">{t('seat') || 'Seat'}</div>
                  <div className="ta-seatmap__subtitle">
                    {loadingSeats ? (t('loading') || 'Loading...') : (t('select_seat') || 'Select your seat')}
                  </div>
                </div>
                <div className="ta-seatmap__legend">
                  <span className="ta-legend is-available">{t('available') || 'Available'}</span>
                  <span className="ta-legend is-selected">{t('selected') || 'Selected'}</span>
                  <span className="ta-legend is-taken">{t('taken') || 'Taken'}</span>
                </div>
              </div>

              <input type="hidden" {...register("seat", { required: true })} />
              {errors.seat ? (
                <div className="text-danger mt-1">{t('seat_required') || 'Please select a seat'}</div>
              ) : null}

              {seatCount > 0 ? (
                <div className="ta-seatmap__bus" role="group" aria-label={t('seat_map') || 'Seat map'}>
                  <div className="ta-seatmap__driver" aria-hidden="true">{t('driver') || 'Driver'}</div>
                  <div className="ta-seatmap__rows">
                    {seatRows.map((row, idx) => (
                      <div key={idx} className="ta-seatmap__row">
                        <div className="ta-seatmap__side">
                          <SeatButton seat={row.left[0]} />
                          <SeatButton seat={row.left[1]} />
                        </div>
                        <div className="ta-seatmap__aisle" aria-hidden="true" />
                        <div className="ta-seatmap__side">
                          <SeatButton seat={row.right[0]} />
                          <SeatButton seat={row.right[1]} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-muted">{t('no_seat_map') || 'Seat map not available for this trip'}</div>
              )}
            </div>

            <ModalFooter>
              {loading ? (
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
                    onClick={() => getModal({ modal_static: false })}
                  >
                    {t("cancel")}
                  </Button>
                  <Button type="submit" color="primary">
                    {buttonText}
                  </Button>
                </>
              )}
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default UserBookingModal;
