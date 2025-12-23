/**
 * Client Component - Interactive parts of search results
 * Handles user interactions, modals, socket.io, etc.
 */

'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useTranslation } from "react-i18next";
import { useStateMachine } from "little-state-machine";
import { updateSearch, updateAction, updateBooking, SearchState } from "../../utils/updateActions";
import { Button } from "reactstrap";
import type { Socket } from 'socket.io-client';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import dynamic from 'next/dynamic';
import type { Trip } from '../../interfaces/trips.interface';
import Link from 'next/link';
import Image from 'next/image';
import Search from '../../components/Common/Search';
import PopularRoutes from '../../components/Common/PopularRoutes';
import TripFiltersResponsive from '../../components/Trips/TripFiltersResponsive';
import { DEFAULT_TRIP_FILTERS, applyTripFilters, sortTrips, availableSeats } from '../../utils/tripFilters';
import { roundPriceToNearest50 } from '../../utils/helpers';
import { formatDate, formatTime, toDate, parseTime } from '../../utils/dateHelpers';
import { createBookingAction } from '../../lib/server-actions';
import { TripCardSkeletonList } from '../Skeletons/TripCardSkeleton';

// Lazy load modals
const ConfirmationModal = dynamic(
  () => import('../../components/Modals/ConfirmationModal'),
  { ssr: false, loading: () => null }
);

const ReservationModal = dynamic(
  () => import('../../components/Modals/ReservationModal'),
  { ssr: false, loading: () => null }
);

const SummaryModal = dynamic(
  () => import('../../components/Modals/SummaryModal'),
  { ssr: false, loading: () => null }
);

interface SearchResultsClientProps {
  initialTrips: Trip[];
  searchParams: {
    from?: string;
    to?: string;
    journeyDate?: string;
    departureTime?: string;
  };
}

const SearchResultsClient: React.FC<SearchResultsClientProps> = ({ 
  initialTrips,
  searchParams 
}) => {
  const { t } = useTranslation();
  const { actions, state } = useStateMachine({ updateSearch, updateAction, updateBooking });
  
  const userEmail = (state?.user as any)?.data?.data?.email ?? (state?.user as any)?.data?.email;
  const isGuest = !userEmail;

  const [data, setData] = useState<Trip[]>(initialTrips);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [filters, setFilters] = useState(DEFAULT_TRIP_FILTERS);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [working, setWorking] = useState<boolean>(false);
  const tripRef = useRef<Trip | null>(null);
  const [modal, setModal] = useState<{ modal_static: boolean }>({ modal_static: false });
  const [modalSummary, setModalSummary] = useState<{ modal_static: boolean }>({ modal_static: false });
  const [modalConfirm, setModalConfirm] = useState<{ modal_static: boolean }>({ modal_static: false });

  const searchState = (state?.search as any) as SearchState;
  const journeyDate = searchParams.journeyDate || 
    (searchState?.journeyDate 
      ? formatDate(searchState.journeyDate, 'yyyy-MM-dd')
      : '');
  const from = searchParams.from || 
    (typeof searchState?.from === 'string' ? searchState.from : (searchState?.from as any)?.value || '');
  const to = searchParams.to || 
    (typeof searchState?.to === 'string' ? searchState.to : (searchState?.to as any)?.value || '');
  const departureTime = searchParams.departureTime || 
    (searchState?.departureTime
      ? formatTime(searchState.departureTime, 'HH:mm')
      : '');

  const initialJourneyDate = searchParams.journeyDate 
    ? toDate(searchParams.journeyDate) 
    : (searchState?.journeyDate ? toDate(searchState.journeyDate) : undefined);
  const initialDepartureTime = searchParams.departureTime
    ? parseTime(searchParams.departureTime, ['HH:mm', 'hh:mm a'])
    : (searchState?.departureTime
      ? parseTime(searchState.departureTime, ['HH:mm', 'hh:mm a'])
      : undefined);

  const showModal = (): void => {
    setModal({ modal_static: true });
  };


  const downloadTicket = async (): Promise<void> => {
    try {
      const input = document.getElementById('ticket-info');
      if (!input) {
        toast.error('Ticket information not found');
        return;
      }

      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import('html2canvas'),
        import('jspdf')
      ]);

      const canvas = await html2canvas(input, { 
        logging: false, 
        useCORS: true 
      });
      
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        format: "a4",
        unit: "mm",
      });
      
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      pdf.save("ticket.pdf");
      
      setModalConfirm({ modal_static: false });
      setWorking(false);
    } catch (error) {
      console.error('Error downloading ticket:', error);
      toast.error('Failed to download ticket. Please try again.');
      setWorking(false);
    }
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

  // Socket.io for real-time updates
  useEffect(() => {
    let socket: Socket | null = null;
    
    const initSocket = async () => {
      try {
        const { io } = await import('socket.io-client');
        const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_URL || 
                         process.env.NEXT_PUBLIC_API_URL || 
                         "https://api.bookontransapp.com";
        
        socket = io(ENDPOINT);
        
        socket.on("connect", () => {
          console.log('Socket connected');
        });
        
        socket.on("trip:update", () => {
          fetchTrips();
        });
        
        socket.on("error", (error) => {
          console.error('Socket error:', error);
        });
      } catch (error) {
        console.error('Failed to initialize socket:', error);
      }
    };
    
    initSocket();

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [fetchTrips]);

  const createBookingInternal = async (opts?: { paymentMethod?: 'PAY_NOW' | 'CASH' }): Promise<void> => {
    setWorking(true);
    setIsLoading(true);

    if (!tripRef.current) {
      toast.error('No trip selected');
      setWorking(false);
      return;
    }

    const trip = tripRef.current;
    const phone = typeof window !== 'undefined'
      ? (localStorage.getItem('phone') || localStorage.getItem('phoneNumber'))
      : null;
    const name = typeof window !== 'undefined' ? localStorage.getItem("name") : null;
    const seat = typeof window !== 'undefined' ? localStorage.getItem("seat") : null;

    if (!phone || !name) {
      toast.error('Please fill in all required fields');
      setWorking(false);
      setIsLoading(false);
      return;
    }

    // Use Server Action
    const formData = new FormData();
    formData.append('tripId', trip.id.toString());
    formData.append('phoneNumber', phone);
    formData.append('name', name);
    if (seat) formData.append('seat', seat);
    formData.append('paymentMethod', opts?.paymentMethod || 'PAY_NOW');

    const result = await createBookingAction(formData);

    if (result?.error) {
      toast.error(result.message || 'Failed to create booking');
      setWorking(false);
      setIsLoading(false);
    } else {
      // Server action will redirect, but clean up local state
      if (typeof window !== 'undefined') {
        localStorage.removeItem('phone');
        localStorage.removeItem('phoneNumber');
        localStorage.removeItem("name");
        localStorage.removeItem("idCard");
        localStorage.removeItem("email");
        localStorage.removeItem("seat");
      }
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
      <section className="trip-search mb-5">
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-lg-12">
              <TripCardSkeletonList count={5} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="trip-search mb-5">
        <div className="container-fluid">
          {!loading && (errorMessage || (!hasResults && data.length === 0)) && (
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
          {hasResults && hasFilteredResults && (
            <div className="row pt-5">
              <div className="col-lg-2">
                <h6>
                  {filteredTrips.length} {t('buses')} {t('from')} {from} {t('to')} {to}
                </h6>
              </div>
            </div>
          )}
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
                            <Image 
                              src={trip.agency_logo} 
                              alt="agency logo" 
                              width={44} 
                              height={44}
                              className="ta-trip-card__logo-img"
                              unoptimized={trip.agency_logo.startsWith('http') && !trip.agency_logo.includes('supabase.co')}
                            />
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
                          <div className="ta-trip-card__price-value">{roundPriceToNearest50(trip.price)} XAF</div>
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

export default SearchResultsClient;

