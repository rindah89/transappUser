'use client'

import React, { useEffect, useMemo, useState, useCallback, useRef } from "react";
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
  const bookingRef = useRef<any>(null);
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

      const stateAny = state as any;
      const userEmail = stateAny?.user?.data?.data?.email || stateAny?.user?.data?.email;
      const userToken = stateAny?.user?.data?.data?.token || stateAny?.user?.data?.token;
      const isAuthenticated = userEmail && userToken;

      // Try authenticated booking first if user appears to be logged in
      if (isAuthenticated) {
        try {
          const { data } = await axios.post<{ error: boolean; message: string; data?: any }>(
            `api/v1/bookings/create-booking/${tripForPayment.id}`,
            bookingPayload
          );

          if ((data as any)?.error) {
            // If 401 Unauthorized, fall back to anonymous booking
            if ((data as any)?.message?.includes('Unauthorized') || (data as any)?.message?.includes('401')) {
              throw new Error('Authentication failed, using anonymous booking');
            }
            toast.error((data as any)?.message || 'Booking failed');
            return;
          }

          toast.success((data as any)?.message || 'Booking created');
          getModal({ modal_static: false });
          const bookingId = (data as any)?.data?.id;
          if (bookingId) {
            bookingRef.current = data.data;
            // Redirect to reservation fee payment screen
            router.push(`/reservation-fee-payment/${bookingId}`);
          }
          return;
        } catch (authError: unknown) {
          // If authentication fails (401), fall back to anonymous booking
          if (axios.isAxiosError(authError) && authError.response?.status === 401) {
            console.log('Authentication failed, falling back to anonymous booking');
            // Continue to anonymous booking flow below
          } else if ((authError as any)?.message?.includes('Authentication failed')) {
            // Continue to anonymous booking flow below
          } else {
            throw authError;
          }
        }
      }

      // Anonymous booking flow (also used as fallback for failed auth)
      const { data } = await axios.post<{ error: boolean; message: string; data?: any }>(
        `api/v1/bookings/anon-booking/${tripForPayment.id}`,
        bookingPayload
      );

      if ((data as any)?.error) {
        toast.error((data as any)?.message || 'Booking failed');
        return;
      }

      toast.success((data as any)?.message || 'Booking created');
      getModal({ modal_static: false });
      const bookingId = (data as any)?.data?.id;
      if (bookingId) {
        bookingRef.current = data.data;
        // Redirect to reservation fee payment screen
        router.push(`/reservation-fee-payment/${bookingId}`);
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
        const status = error.response?.status;
        
        // If PayUnit fails, still create booking and redirect to payment screen
        // User can pay reservation fee there
        if (typeof status === 'number' && (status === 403 || status === 401 || status === 400 || status >= 500)) {
          try {
            await createBookingFallback();
            // After booking is created, redirect to payment screen
            if (bookingRef.current?.id) {
              router.push(`/reservation-fee-payment/${bookingRef.current.id}`);
            }
            return;
          } catch (e: unknown) {
            toast.error((e as any)?.message || 'Failed to create booking');
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
    if (seat) {
      setValue('seat', seat, { shouldValidate: true, shouldDirty: true });
      // Force a re-render to update the selected state
      const form = document.querySelector('form');
      if (form) {
        const event = new Event('input', { bubbles: true });
        form.dispatchEvent(event);
      }
    }
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
    const touchStartTimeRef = useRef<number>(0);
    const touchStartPosRef = useRef<{ x: number; y: number } | null>(null);
    
    // Handle mouse clicks (desktop)
    const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isTaken && seat) {
        pickSeat(seat);
      }
    }, [isTaken, seat]);
    
    // Handle touch start - only track position, don't prevent default (allows native iOS scrolling)
    const handleTouchStart = useCallback((e: React.TouchEvent<HTMLButtonElement>) => {
      const touch = e.touches[0];
      touchStartPosRef.current = { x: touch.clientX, y: touch.clientY };
      touchStartTimeRef.current = Date.now();
      // Don't prevent default here - allows native iOS scrolling
    }, []);
    
    // Handle touch end to detect taps vs swipes
    const handleTouchEnd = useCallback((e: React.TouchEvent<HTMLButtonElement>) => {
      if (!touchStartPosRef.current) return;
      
      const touch = e.changedTouches[0];
      const deltaX = Math.abs(touch.clientX - touchStartPosRef.current.x);
      const deltaY = Math.abs(touch.clientY - touchStartPosRef.current.y);
      const deltaTime = Date.now() - touchStartTimeRef.current;
      
      // Only treat as tap if movement is small and quick (not a scroll)
      if (deltaX < 10 && deltaY < 10 && deltaTime < 300) {
        e.preventDefault();
        e.stopPropagation();
        if (!isTaken && seat) {
          pickSeat(seat);
        }
      }
      
      touchStartPosRef.current = null;
    }, [isTaken, seat]);
    
    return (
      <button
        type="button"
        className={`ta-seat ${isTaken ? 'is-taken' : 'is-available'} ${isSelected ? 'is-selected' : ''}`}
        disabled={isTaken}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-label={`Seat ${seat}${isTaken ? ' (taken)' : isSelected ? ' (selected)' : ''}`}
        tabIndex={isTaken ? -1 : 0}
        style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          minWidth: '44px',
          minHeight: '44px',
          cursor: isTaken ? 'not-allowed' : 'pointer',
          pointerEvents: isTaken ? 'none' : 'auto',
          touchAction: 'manipulation',
          WebkitTapHighlightColor: 'transparent'
        }}
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
          <form onSubmit={handleSubmit(makePaymentOnPayunit)} id="booking-form">
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
          </form>
        </ModalBody>
        <ModalFooter>
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', width: '100%' }}>
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
              <Button type="submit" color="primary" form="booking-form">
                {buttonText}
              </Button>
            </>
          )}
        </ModalFooter>
      </Modal>
    </>
  );
};

export default UserBookingModal;
