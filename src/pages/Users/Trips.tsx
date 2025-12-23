'use client'

import React, { useEffect, useState, useCallback } from 'react';
import { Container } from "reactstrap";
import axios from 'axios';
import { SpinnerCircular } from 'spinners-react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import type { Booking } from '../../interfaces/booking.interface';
import { CalendarDays, Clock, Download, Eye, XCircle } from 'lucide-react';
import { roundPriceToNearest50 } from '../../utils/helpers';
import { formatDateDisplay } from '../../utils/dateHelpers';

interface BookingsResponse {
  error: boolean;
  message: string;
  data?: Booking[];
}

const Trips: React.FC = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<Booking[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [workingId, setWorkingId] = useState<number | null>(null);

  const fetchTrips = useCallback(async (): Promise<void> => {
    try {
      const { data } = await axios.get<BookingsResponse>(`api/v1/bookings/user-bookings`);
      if (data?.error) {
        toast.error(data.message);
        setLoading(false);
      } else if (data.data) {
        setData(data.data);
        setLoading(false);
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        toast.error(err.message || 'Failed to fetch bookings');
      } else {
        toast.error('An unexpected error occurred');
      }
      setLoading(false);
    }
  }, []);

  const cancelBooking = async (bookingId: number): Promise<void> => {
    if (typeof window !== 'undefined') {
      const ok = window.confirm(t('confirm_cancel_booking') || 'Cancel this booking?');
      if (!ok) return;
    }

    setWorkingId(bookingId);
    try {
      const { data } = await axios.post<{ error: boolean; message: string; data?: any }>(
        `api/v1/bookings/cancel/${bookingId}`
      );
      if ((data as any)?.error) {
        toast.error((data as any)?.message || 'Failed to cancel booking');
      } else {
        toast.success((data as any)?.message || 'Booking cancelled');
        await fetchTrips();
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        toast.error((err.response?.data as any)?.message || err.message || 'Failed to cancel booking');
      } else {
        toast.error('An unexpected error occurred');
      }
    } finally {
      setWorkingId(null);
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.setAttribute('style', 'background: #f6f7fb!important;');
    }
    fetchTrips();
  }, [fetchTrips]);

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
      <section className="ta-bookings">
        <div className="container">
          <div className="ta-bookings__header">
            <div>
              <h1 className="ta-bookings__title">{t('my_bookings') || 'My bookings'}</h1>
              <p className="ta-bookings__subtitle">{t('my_bookings_subtitle') || 'View, download, or cancel your tickets.'}</p>
            </div>
          </div>

          {data.length === 0 ? (
            <div className="ta-empty">
              <p className="mb-0">{t('no_bookings') || 'No bookings found'}</p>
            </div>
          ) : (
            <div className="ta-bookings__list">
              {data.map((trip: Booking) => {
                const isWorking = workingId === trip.id;
                const status = (trip.status || '-').toString();
                const statusClass =
                  status.toLowerCase().includes('cancel') ? 'is-danger' :
                  status.toLowerCase().includes('confirm') ? 'is-success' :
                  status.toLowerCase().includes('paid') ? 'is-success' :
                  status.toLowerCase().includes('pending') ? 'is-warning' :
                  'is-neutral';

                return (
                  <article key={trip.id} className="ta-ticket-card">
                    <div className="ta-ticket-card__top">
                      <div className="ta-ticket-card__route">
                        <div className="ta-ticket-card__cities">
                          <span className="ta-ticket-card__city">{trip.departure_city}</span>
                          <span className="ta-ticket-card__arrow">→</span>
                          <span className="ta-ticket-card__city">{trip.arrival_city}</span>
                        </div>
                          <div className="ta-ticket-card__agency">{trip.agency_name}</div>
                        <div className="ta-ticket-card__meta">
                          <span className="ta-pill">
                            <span className="ta-pill__label">{t('ticket_number') || 'Number'}</span>
                            <span className="ta-pill__value">{trip.ticket_number}</span>
                          </span>
                        </div>
                      </div>

                      <div className="ta-ticket-card__status">
                        <span className={`ta-status ${statusClass}`}>
                          {t('status') || 'Status'}: {status}
                        </span>
                      </div>
                    </div>

                    <div className="ta-ticket-card__grid">
                      <div className="ta-kv">
                        <div className="ta-kv__k">
                          <CalendarDays size={16} />
                          <span>{t('journey_date') || 'Date'}</span>
                        </div>
                        <div className="ta-kv__v">{formatDateDisplay(trip.journey_date)}</div>
                      </div>

                      <div className="ta-kv">
                        <div className="ta-kv__k">
                          <Clock size={16} />
                          <span>{t('departure_time') || t('time') || 'Time'}</span>
                        </div>
                        <div className="ta-kv__v">{trip.departure_time}</div>
                      </div>

                      <div className="ta-kv">
                        <div className="ta-kv__k">
                          <span>{t('seat') || 'Seat'}</span>
                        </div>
                        <div className="ta-kv__v">{trip.seat || '-'}</div>
                      </div>

                      <div className="ta-kv ta-kv--right">
                        <div className="ta-kv__k">
                          <span>{t('price') || 'Price'}</span>
                        </div>
                        <div className="ta-kv__v ta-kv__v--price">{roundPriceToNearest50(trip.price)} XAF</div>
                      </div>
                    </div>

                    <div className="ta-ticket-card__actions">
                      <Link className="btn btn-sm btn-outline-primary ta-btn" href={`/ticket/${trip.id}`}>
                        <Eye size={16} />
                        <span>{t('view') || 'View'}</span>
                      </Link>
                      <Link className="btn btn-sm btn-outline-secondary ta-btn" href={`/ticket/${trip.id}?print=1`}>
                        <Download size={16} />
                        <span>{t('download') || 'Download'}</span>
                      </Link>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger ta-btn"
                        disabled={isWorking}
                        aria-busy={isWorking}
                        onClick={() => cancelBooking(trip.id)}
                      >
                        <XCircle size={16} />
                        <span>{isWorking ? (t('loading') || 'Canceling…') : (t('Cancel') || 'Cancel')}</span>
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Trips;
