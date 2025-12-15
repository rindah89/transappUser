'use client'

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useTranslation } from "react-i18next";
import { useStateMachine } from "little-state-machine";
import { updateSearch, updateAction, updateBooking, SearchState } from "../../utils/updateActions";
import { Container, Button } from "reactstrap";
import { io, Socket } from 'socket.io-client';
import moment from "moment";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { SpinnerCircular } from 'spinners-react';
import ConfirmationModal from '../../components/Modals/ConfirmationModal';
import ReservationModal from '../../components/Modals/ReservationModal';
import SummaryModal from '../../components/Modals/SummaryModal';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import type { Trip } from '../../interfaces/trips.interface';
import type { Booking } from '../../interfaces/booking.interface';
import Link from 'next/link';
import Search from '../../components/Common/Search';
import PopularRoutes from '../../components/Common/PopularRoutes';
import TripFiltersResponsive from '../../components/Trips/TripFiltersResponsive';
import { DEFAULT_TRIP_FILTERS, applyTripFilters, sortTrips, availableSeats } from '../../utils/tripFilters';
import { useRouter } from 'next/navigation';

// Use Next.js API routes instead of direct external API calls (proxy pattern)
// Socket.io endpoint - can be configured via environment variable
const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_URL || process.env.NEXT_PUBLIC_API_URL || "https://api.bookontransapp.com";

const SearchResults: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { actions, state } = useStateMachine({ updateSearch, updateAction, updateBooking });
  
  // Check if user is authenticated
  const userEmail = (state?.user as any)?.data?.data?.email ?? (state?.user as any)?.data?.email;
  const isGuest = !userEmail;

  const [data, setData] = useState<Trip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [filters, setFilters] = useState(DEFAULT_TRIP_FILTERS);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [working, setWorking] = useState<boolean>(false);
  const tripRef = useRef<Trip | null>(null);
  const bookingRef = useRef<Booking | null>(null);
  const [modal, setModal] = useState<{ modal_static: boolean }>({ modal_static: false });
  const [modalSummary, setModalSummary] = useState<{ modal_static: boolean }>({ modal_static: false });
  const [modalConfirm, setModalConfirm] = useState<{ modal_static: boolean }>({ modal_static: false });

  const searchState = (state?.search as any) as SearchState;
  // Backend stores `journey_date` as `YYYY-MM-DD` (see `public.trips.journey_date`)
  const journeyDate =
    typeof searchState?.journeyDate === 'string'
      ? searchState.journeyDate
      : searchState?.journeyDate
        ? moment(searchState.journeyDate).format('YYYY-MM-DD')
        : '';
  const from = typeof searchState?.from === 'string' ? searchState.from : (searchState?.from as any)?.value || '';
  const to = typeof searchState?.to === 'string' ? searchState.to : (searchState?.to as any)?.value || '';
  // Backend stores `departure` as `HH:mm` (24h, no AM/PM)
  const departureTime =
    typeof searchState?.departureTime === 'string'
      ? searchState.departureTime
      : searchState?.departureTime
        ? moment(searchState.departureTime).format('HH:mm')
        : '';

  const initialJourneyDate = searchState?.journeyDate ? moment(searchState.journeyDate).toDate() : undefined;
  const initialDepartureTime = searchState?.departureTime
    ? moment(searchState.departureTime, ['HH:mm', 'hh:mm A']).toDate()
    : undefined;

  const showModal = (): void => {
    setModal({ modal_static: true });
  };

  const hideModal = (): void => {
    setModal({ modal_static: false });
  };

  const downloadTicket = (): void => {
    const input = document.getElementById('ticket-info');
    if (!input) return;

    html2canvas(input, { logging: true, useCORS: true }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        format: "a4",
        unit: "mm",
      });
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      pdf.save("ticket.pdf");
    });

    setModalConfirm({ modal_static: false });
    setWorking(false);
  };

  const getCurrentTrip = (trip: Trip): void => {
    tripRef.current = trip;
    actions.updateAction({ trip: tripRef.current });
    showModal();
  };

  const showSummary = (): void => {
    setIsLoading(false);
    setModalSummary({ modal_static: true });
  };

  const fetchTrips = useCallback(async (): Promise<void> => {
    try {
      setErrorMessage(null);
      setLoading(true);
      const { data } = await axios.get<{ error: boolean; message: string; data?: Trip[] }>(`api/v1/trips/trip-search`, {
        params: { from, to, journeyDate, departureTime }
      });
      if (data?.error) {
        setErrorMessage(data.message || 'Failed to fetch trips');
        toast.error(data.message);
      } else {
        const trips = data.data ?? [];
        setData(trips);
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const msg = err.response?.data?.message || err.message || 'Failed to fetch trips';
        setErrorMessage(msg);
        toast.error(msg);
      } else {
        setErrorMessage('An unexpected error occurred');
        toast.error('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  }, [from, to, journeyDate, departureTime]);

  useEffect(() => {
    const socket: Socket = io(ENDPOINT);
    socket.on("trip:update", () => {
      fetchTrips();
    });

    fetchTrips();

    return () => {
      socket.disconnect();
    };
  }, [fetchTrips]);

  const createBookingInternal = async (opts?: { paymentMethod?: 'PAY_NOW' | 'CASH' }): Promise<void> => {
    setWorking(true);
    setIsLoading(true);

    const phone = typeof window !== 'undefined'
      ? (localStorage.getItem('phone') || localStorage.getItem('phoneNumber'))
      : null;
    const name = typeof window !== 'undefined' ? localStorage.getItem("name") : null;
    const idCard = typeof window !== 'undefined' ? localStorage.getItem("idCard") : null;
    const payerEmail = typeof window !== 'undefined' ? localStorage.getItem("email") : null;
    const seat = typeof window !== 'undefined' ? localStorage.getItem("seat") : null;

    if (!tripRef.current) {
      toast.error('No trip selected');
      setWorking(false);
      return;
    }

    const trip = tripRef.current;
    const bookingData: Partial<Booking> = {
      phone_number: phone ? Number(phone) : null,
      number_of_seats: "1",
      ticket_type: "One-way",
      name: name || '',
      id_card_no: idCard || null,
      payer_email: payerEmail || null,
      trip_id: trip.id,
      agency_name: trip.agency_name,
      journey_date: trip.journey_date,
      price: trip.price,
      departure_city: trip.from_location,
      arrival_city: trip.to_location,
      departure_time: trip.departure,
      seat: seat || null,
      status: opts?.paymentMethod === 'CASH' ? 'CASH_PENDING' : '',
    };

    try {
      const userEmail = (state?.user as any)?.data?.data?.email;
      if (!userEmail) {
        const { data } = await axios.post<{ error: boolean; message: string; data?: Booking }>(
          `api/v1/bookings/anon-booking/${trip.id}`,
          bookingData
        );
        if (data?.error) {
          toast.error(data.message);
          setIsLoading(false);
          setWorking(false);
        } else if (data.data) {
          bookingRef.current = data.data;
          actions.updateBooking({ booking: bookingRef.current });
          if (typeof window !== 'undefined') {
            localStorage.removeItem('phone');
            localStorage.removeItem('phoneNumber');
            localStorage.removeItem("name");
            localStorage.removeItem("idCard");
            localStorage.removeItem("email");
            localStorage.removeItem("seat");
          }
          setWorking(false);
          setModalSummary({ modal_static: false });
          setModalConfirm({ modal_static: false });
          hideModal();
          fetchTrips();
          router.push(`/ticket/${data.data.id}${opts?.paymentMethod === 'CASH' ? '' : ''}`);
        }
      } else {
        const { data } = await axios.post<{ error: boolean; message: string; data?: Booking }>(
          `api/v1/bookings/create-booking/${trip.id}`,
          bookingData
        );
        if (data?.error) {
          toast.error(data.message);
          setWorking(false);
        } else if (data.data) {
          actions.updateBooking({ booking: data.data });
          if (typeof window !== 'undefined') {
            localStorage.removeItem('phone');
            localStorage.removeItem('phoneNumber');
            localStorage.removeItem("name");
            localStorage.removeItem("idCard");
            localStorage.removeItem("email");
            localStorage.removeItem("seat");
          }
          setWorking(false);
          setModalSummary({ modal_static: false });
          setModalConfirm({ modal_static: false });
          router.push(`/ticket/${data.data.id}`);
        }
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Failed to create booking');
      } else {
        toast.error('An unexpected error occurred');
      }
      setWorking(false);
      setIsLoading(false);
    }
  };

  const createBooking = (): void => {
    void createBookingInternal({ paymentMethod: 'PAY_NOW' });
  };

  const createCashBooking = (): void => {
    void createBookingInternal({ paymentMethod: 'CASH' });
  };

  const filterNoSeatsAvailable = data.filter((trip: Trip) => {
    return trip.reserved !== trip.seats;
  });

  const filteredTrips = sortTrips(applyTripFilters(filterNoSeatsAvailable, filters), filters.sort);
  const hasResults = filterNoSeatsAvailable.length > 0;
  const hasFilteredResults = filteredTrips.length > 0;

  if (loading) {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid className="">
            <div className="loader-outer">
              <div className="loader-inner">
                <SpinnerCircular color="#bcc014" size={50} />
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
        <div className="container-fluid">
          {(errorMessage || !hasResults) && (
            <div className="row pt-4">
              <div className="col-lg-12">
                <div className="alert alert-light border">
                  {errorMessage ? (
                    <>
                      <h5 className="mb-2">{t('Failed')} / {t('error') || 'Error'}</h5>
                      <p className="mb-3">{errorMessage}</p>
                    </>
                  ) : (
                    <>
                      <h5 className="mb-2">{t('no_bus') || 'No buses found'}</h5>
                      <p className="mb-3">
                        {t('no_bus') || 'No buses were found for your search.'} {from && to ? (
                          <>({from} → {to})</>
                        ) : null}
                      </p>
                    </>
                  )}
                  <div className="d-flex gap-2 flex-wrap">
                    <Button color="primary" onClick={() => fetchTrips()}>
                      {t('retry') || 'Retry'}
                    </Button>
                  </div>

                  <div className="mt-4">
                    <h6 className="mb-3">{t('modify_search') || 'Modify search'}</h6>
                    <Search
                      text="book"
                      initialFrom={from || undefined}
                      initialTo={to || undefined}
                      initialJourneyDate={initialJourneyDate}
                      initialDepartureTime={initialDepartureTime}
                    />
                    <div className="mt-4">
                      <PopularRoutes />
                    </div>
                    <div className="mt-3">
                      <Link href="/book" className="btn btn-outline-secondary">
                        {t('back') || 'Back'}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isGuest && hasResults && (
            <div className="row pt-4">
              <div className="col-lg-12">
                <div className="alert alert-light border d-flex align-items-center gap-2">
                  <span>👤</span>
                  <div className="flex-grow-1">
                    <strong>{t('book_as_guest') || 'Book as Guest'}</strong>
                    <p className="mb-0 small text-muted">
                      {t('guest_booking_info') || 'You can book tickets without creating an account. Simply click "Get Ticket" and fill in your details.'}
                    </p>
                  </div>
                  <Link href="/register" className="btn btn-sm btn-outline-primary">
                    {t('sign_up') || 'Sign Up'}
                  </Link>
                </div>
              </div>
            </div>
          )}
          <div className="row pt-5">
            <div className="col-lg-2">
              {hasResults ? (
                <h6>
                  {hasFilteredResults ? filteredTrips.length : 0} {t('buses')} {t('from')} {from} {t('to')} {to}
                </h6>
              ) : (
                <h6>{filterNoSeatsAvailable.length} {t('no_bus')} {t('from')} {from} {t('to')} {to}</h6>
              )}
            </div>
          </div>
        </div>
        <div className="container-fluid">
          {hasResults && (
            <TripFiltersResponsive trips={filterNoSeatsAvailable} filters={filters} onChange={setFilters} />
          )}

          {!hasFilteredResults && hasResults ? (
            <div className="row mt-3">
              <div className="col-lg-12">
                <div className="alert alert-light border">
                  <h5 className="mb-2">No trips match your filters</h5>
                  <p className="mb-0 text-muted">Try widening your price/time window or resetting filters.</p>
                </div>
              </div>
            </div>
          ) : null}

          <div className="row mt-3">
            <div className="col-lg-12">
              {filteredTrips.map((trip: Trip) => (
                <div key={trip.id} className="mb-3">
                  <div className="card ta-trip-card">
                    <div className="card-body ta-trip-card__body">
                      <div className="ta-trip-card__left">
                        <div className="ta-trip-card__logo">
                          {trip.agency_logo ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={trip.agency_logo} alt="agency logo" width={44} height={44} />
                          ) : (
                            <span className="fw-bold">{String(trip.agency_name || 'T').slice(0, 1)}</span>
                          )}
                        </div>
                        <div className="ta-trip-card__meta">
                          <div className="ta-trip-card__top">
                            <div className="ta-trip-card__agency">{trip.agency_name}</div>
                            <span className="badge rounded-pill text-bg-light">
                              {trip.trip_type || 'Standard'}
                            </span>
                          </div>
                          <div className="ta-trip-card__route">
                            <strong>{trip.from_location}</strong> <span className="text-muted">→</span>{' '}
                            <strong>{trip.to_location}</strong>
                          </div>
                          <div className="ta-trip-card__sub">
                            <span>{t('departure')}: {String(trip.departure || '')}</span>
                            <span className="ta-dot">•</span>
                            <span>{t('available_seats')}: {availableSeats(trip)}</span>
                          </div>
                        </div>
                      </div>

                      <div className="ta-trip-card__right">
                        <div className="ta-trip-card__price">
                          <div className="ta-trip-card__price-label">{t('price')}</div>
                          <div className="ta-trip-card__price-value">{trip.price} XAF</div>
                        </div>
                        {trip.reserved !== trip.seats ? (
                          <Button
                            color="primary"
                            className="ta-btn-primary"
                            onClick={() => getCurrentTrip(trip)}
                          >
                            {t('reserve_ticket')}
                          </Button>
                        ) : (
                          <Button disabled className="ta-btn-primary">
                            {t('sold_out') || 'Sold Out'}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ReservationModal
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        getModal={setModal}
        modal={modal}
        booking={tripRef.current || undefined}
        showSummary={showSummary}
        buttonText={t("next")}
      />
      <SummaryModal
        createBooking={createBooking}
        createCashBooking={createCashBooking}
        working={working}
        modalSummary={modalSummary}
        setWorking={setWorking}
        setModalSummary={setModalSummary}
        buttonText={(t("confirm_reservation") as any) || "Confirm reservation"}
        cashButtonText={(t("confirm_reservation") as any) || "Confirm reservation"}
      />
      <ConfirmationModal
        downloadTicket={downloadTicket}
        working={working}
        modalConfirm={modalConfirm}
        setModalConfirm={setModalConfirm}
        buttonText={t("download_ticket")}
      />
    </>
  );
};

export default SearchResults;
