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
import { useTranslation } from "react-i18next";
import { useStateMachine } from "little-state-machine";
import {
  updateBooking,
  updateAction,
  updateUser,
} from "../../utils/updateActions";
import { useForm } from "react-hook-form";
import { SpinnerCircular } from 'spinners-react';
import type { Trip } from "../../interfaces/trips.interface";
import axios from "axios";
import { toast } from "react-hot-toast";
import { CreditCard, Mail, MapPin, Phone, User, X } from "lucide-react";

interface ReservationModalProps {
  modal: { modal_static: boolean };
  getModal: (value: { modal_static: boolean }) => void;
  booking?: Trip;
  showSummary: () => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  buttonText?: string;
}

interface BookingFormData {
  name: string;
  idCardNo: string;
  phoneNumber: string;
  payerEmail: string;
  seat: string;
}


const ReservationModal: React.FC<ReservationModalProps> = ({
  modal,
  getModal,
  booking,
  showSummary,
  isLoading,
  setIsLoading,
  buttonText = "Continue",
}) => {
  const { t } = useTranslation();
  const {
    register,
    reset,
    getValues,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>();

  const { state } = useStateMachine({
    updateBooking,
    updateAction,
    updateUser,
  });

  // Check if user is authenticated
  const userEmail = (state?.user as any)?.data?.data?.email ?? (state?.user as any)?.data?.email;
  const isGuest = !userEmail;

  const saveLocal = async (): Promise<void> => {
    setIsLoading(true);
    const phone = getValues("phoneNumber");
    const name = getValues('name');
    const idCard = getValues('idCardNo');
    const payerEmail = getValues('payerEmail');
    const seat = getValues('seat');

    if (!seat) {
      toast.error(t('seat_required') || 'Please select a seat');
      setIsLoading(false);
      return;
    }

    if (typeof window !== 'undefined') {
      // Keep both keys for backward compatibility (some pages read `phone`, others `phoneNumber`)
      localStorage.setItem("phone", phone);
      localStorage.setItem("phoneNumber", phone);
      localStorage.setItem("name", name);
      localStorage.setItem("idCard", idCard);
      localStorage.setItem("email", payerEmail);
      localStorage.setItem("seat", seat);
    }

    getModal({ modal_static: false });
    showSummary();
  };

  useEffect(() => {
    if (booking) {
      reset({
        data: booking,
      } as any);
    }
  }, [booking, reset]);

  const stateAny = state as any;
  const trip = stateAny?.trip?.trip;

  const [takenSeats, setTakenSeats] = useState<string[]>([]);
  const [loadingSeats, setLoadingSeats] = useState<boolean>(false);

  const seatCount = useMemo(() => {
    const n = Number(trip?.seats);
    return Number.isFinite(n) && n > 0 ? n : 0;
  }, [trip?.seats]);

  useEffect(() => {
    const load = async (): Promise<void> => {
      if (!modal.modal_static) return;
      if (!trip?.id) return;
      setLoadingSeats(true);
      try {
        const { data } = await axios.get<{ error: boolean; message: string; data?: { takenSeats: string[] } }>(
          `api/v1/bookings/trip-seats/${trip.id}`
        );
        if ((data as any)?.error) {
          toast.error((data as any)?.message || 'Failed to load seats');
          setTakenSeats([]);
        } else {
          setTakenSeats((data as any)?.data?.takenSeats || []);
        }
      } catch (err: unknown) {
        setTakenSeats([]);
      } finally {
        setLoadingSeats(false);
      }
    };
    load();
  }, [modal.modal_static, trip?.id]);

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
              <div className="ta-modal__kicker">{t('reservation') || 'Reservation'}</div>
              <div className="ta-modal__title">
                <MapPin size={18} />
                <span>{trip?.from_location || trip?.from || '-'}</span>
                <span className="ta-modal__arrow">→</span>
                <span>{trip?.to_location || trip?.to || '-'}</span>
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
        <ModalBody >
          {isGuest && (
            <div className="alert alert-info mb-3 d-flex align-items-center gap-2" role="alert">
              <span>ℹ️</span>
              <div>
                <strong>{t('guest_checkout') || 'Guest Checkout'}</strong>
                <p className="mb-0 small">{t('guest_checkout_info') || 'You can book without creating an account. Your booking will be saved with the information you provide.'}</p>
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit(saveLocal)} className="p-2">
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
              {isLoading ? (
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

export default ReservationModal;
