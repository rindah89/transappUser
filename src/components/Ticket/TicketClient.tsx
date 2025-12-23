/**
 * Client Component - Ticket display with interactions
 * Handles print, download, cancel actions
 */

'use client';

import React, { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Container } from 'reactstrap';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import type { Booking } from '../../interfaces/booking.interface';
import { Building2, CalendarDays, Clock, Download, Printer, User, XCircle } from 'lucide-react';
import { roundPriceToNearest50 } from '../../utils/helpers';
import { cancelBookingAction } from '../../lib/server-actions';
import { formatDateDisplay } from '../../utils/dateHelpers';
import Image from 'next/image';

interface TicketClientProps {
  booking: Booking | null;
  bookingId: number;
}

const TicketClient: React.FC<TicketClientProps> = ({ booking, bookingId }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const shouldPrint = searchParams?.get('print') === '1';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.setAttribute('style', 'background: #f6f7fb!important;');
    }
  }, []);

  useEffect(() => {
    // Redirect to payment screen if booking is pending payment
    if (booking && booking.status === 'PENDING_PAYMENT') {
      router.push(`/reservation-fee-payment/${bookingId}`);
      return;
    }
  }, [booking, bookingId, router]);

  useEffect(() => {
    if (shouldPrint && booking) {
      // Allow paint before printing
      setTimeout(() => window.print(), 200);
    }
  }, [shouldPrint, booking]);

  const cancel = async (): Promise<void> => {
    if (!booking) return;
    const ok = typeof window === 'undefined' ? true : window.confirm(t('confirm_cancel_booking') || 'Cancel this booking?');
    if (!ok) return;
    
    try {
      const result = await cancelBookingAction(booking.id);
      
      if (result?.error) {
        toast.error(result.message || 'Failed to cancel');
      } else {
        toast.success(result?.message || 'Cancelled');
        router.push('/user-bookings');
      }
    } catch (err: any) {
      toast.error(err.message || 'An unexpected error occurred');
    }
  };

  if (!booking) {
    return (
      <div className="page-content">
        <Container fluid={false}>
          <div className="ta-ticket">
            <div className="ta-empty">
              <p className="mb-0">{t('no_booking_data') || 'No ticket found.'}</p>
              <div className="mt-3 d-flex gap-2 flex-wrap ta-no-print">
                <Link className="btn btn-sm btn-outline-secondary ta-btn" href="/user-bookings">
                  {t('back') || 'Back to bookings'}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  const ticketNumber = booking.ticket_number || `#${booking.id}`;
  const agencyName = (booking as any).agency_name || 'TransApp';
  const agencyLogo = (booking as any).agency_logo || null;
  const status = booking.status || '-';

  return (
    <div className="page-content">
      <Container fluid={false}>
        <div className="ta-ticket">
          <div className="ta-ticket__header ta-no-print">
            <Link className="btn btn-sm btn-outline-secondary ta-btn" href="/user-bookings">
              {t('back') || 'Back'}
            </Link>
          </div>

          <article className="ta-boarding-pass" id="ticket-info">
            <header className="ta-boarding-pass__header">
              <div className="ta-boarding-pass__brand">
                <div className="ta-boarding-pass__agency">
                  {agencyLogo ? (
                    <Image 
                      src={agencyLogo} 
                      alt={agencyName} 
                      width={24} 
                      height={24} 
                      style={{ borderRadius: '4px', marginRight: '8px' }}
                      unoptimized={agencyLogo.startsWith('http') && !agencyLogo.includes('supabase.co')}
                    />
                  ) : (
                    <Building2 size={16} />
                  )}
                  <span>{agencyName}</span>
                </div>
                <div className="ta-boarding-pass__title">{t('boarding_pass') || 'Boarding pass'}</div>
              </div>

              <div className="ta-boarding-pass__barcode">
                <div className="ta-boarding-pass__barcodeLabel">{t('ticket_number') || 'Ticket number'}</div>
                <div className="ta-boarding-pass__barcodeValue">{ticketNumber}</div>
              </div>
            </header>

            <section className="ta-boarding-pass__route">
              <div className="ta-boarding-pass__routeCol">
                <div className="ta-boarding-pass__routeLabel">{t('from') || 'From'}</div>
                <div className="ta-boarding-pass__routeCity">{booking.departure_city}</div>
              </div>
              <div className="ta-boarding-pass__routeMid" aria-hidden="true">
                <span className="ta-boarding-pass__routeLine" />
              </div>
              <div className="ta-boarding-pass__routeCol ta-boarding-pass__routeCol--right">
                <div className="ta-boarding-pass__routeLabel">{t('to') || 'To'}</div>
                <div className="ta-boarding-pass__routeCity">{booking.arrival_city}</div>
              </div>
            </section>

            <div className="ta-perf" aria-hidden="true">
              <span className="ta-perf__cut ta-perf__cut--left" />
              <span className="ta-perf__line" />
              <span className="ta-perf__cut ta-perf__cut--right" />
            </div>

            <section className="ta-boarding-pass__details">
              <div className="ta-kv">
                <div className="ta-kv__k">
                  <User size={16} />
                  <span>{t('passenger') || 'Passenger'}</span>
                </div>
                <div className="ta-kv__v">{booking.name || '-'}</div>
              </div>

              <div className="ta-kv">
                <div className="ta-kv__k">
                  <CalendarDays size={16} />
                  <span>{t('journey_date') || 'Date'}</span>
                </div>
                <div className="ta-kv__v">{formatDateDisplay(booking.journey_date)}</div>
              </div>

              <div className="ta-kv">
                <div className="ta-kv__k">
                  <Clock size={16} />
                  <span>{t('time') || 'Time'}</span>
                </div>
                <div className="ta-kv__v">{booking.departure_time}</div>
              </div>

              <div className="ta-kv">
                <div className="ta-kv__k">
                  <span>{t('seat') || 'Seat'}</span>
                </div>
                <div className="ta-kv__v">{booking.seat || '-'}</div>
              </div>

              <div className="ta-kv">
                <div className="ta-kv__k">
                  <span>{t('status') || 'Status'}</span>
                </div>
                <div className="ta-kv__v">
                  <span className="ta-status is-neutral">{status}</span>
                </div>
              </div>

              <div className="ta-kv ta-kv--right">
                <div className="ta-kv__k">
                  <span>{t('price') || 'Price'}</span>
                </div>
                <div className="ta-kv__v ta-kv__v--price">{roundPriceToNearest50(booking.price)} XAF</div>
              </div>
            </section>

            <footer className="ta-boarding-pass__actions ta-no-print">
              <button type="button" className="btn btn-sm btn-primary ta-btn" onClick={() => window.print()}>
                <Printer size={16} />
                <span>{t('print') || 'Print'}</span>
              </button>
              <Link className="btn btn-sm btn-outline-secondary ta-btn" href={`/ticket/${booking.id}?print=1`}>
                <Download size={16} />
                <span>{t('download') || 'Download'}</span>
              </Link>
              <button type="button" className="btn btn-sm btn-outline-danger ta-btn" onClick={cancel}>
                <XCircle size={16} />
                <span>{t('Cancel') || 'Cancel'}</span>
              </button>
            </footer>
          </article>
        </div>
      </Container>
    </div>
  );
};

export default TicketClient;

