'use client'

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useStateMachine } from "little-state-machine";
import { updateSearch, updateAction, SearchState } from "../../utils/updateActions";
import { Card, Row, Col, CardBody, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import moment from "moment";
import axios from 'axios';
import { SpinnerCircular } from 'spinners-react';
import Image from 'next/image';
import logo from "../../assets/images/client-2.png";
import { useTranslation } from 'react-i18next';
import { toast } from 'react-hot-toast';
import UserBookingModal from '../../components/Modals/UserBookingModal';
import type { Trip } from '../../interfaces/trips.interface';
import Link from 'next/link';
import Search from '../../components/Common/Search';
import PopularRoutes from '../../components/Common/PopularRoutes';
import TripFiltersResponsive from '../../components/Trips/TripFiltersResponsive';
import { DEFAULT_TRIP_FILTERS, applyTripFilters, sortTrips, availableSeats } from '../../utils/tripFilters';

const TripSearch: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [ticket, setTicket] = useState<string>('');
  const [seat, setSeat] = useState<string | null>(null);
  const { actions, state } = useStateMachine({ updateSearch, updateAction });

  const [data, setData] = useState<Trip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [filters, setFilters] = useState(DEFAULT_TRIP_FILTERS);
  const tripRef = useRef<Trip | null>(null);
  const [modal, setModal] = useState<{ modal_static: boolean }>({ modal_static: false });
  const [modalSuccess, setModalSuccess] = useState<{ modal_static: boolean }>({ modal_static: false });
  const [modalFailure, setModalFailure] = useState<{ modal_static: boolean }>({ modal_static: false });

  const searchState = (state?.search as any) as SearchState;
  // Backend stores `journey_date` as `YYYY-MM-DD` (see `public.trips.journey_date`), so query params
  // must match that format or searches return 0 results.
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

  function hideFailureModal(): void {
    setIsVisible(false);
    setModalFailure({ modal_static: false });
  }

  const showModal = (): void => {
    setModal({ modal_static: true });
  };

  const hideSuccessModal = (): void => {
    setSuccess(false);
    setModalSuccess({ modal_static: false });
    setTicket('');
    setSeat(null);
  };

  const getCurrentTrip = (trip: Trip): void => {
    tripRef.current = trip;
    actions.updateAction({ trip: tripRef.current });
    showModal();
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
    if (typeof document !== 'undefined') {
      document.body.setAttribute('style', 'background: #f1f5f7!important;');
    }
    fetchTrips();
  }, [fetchTrips]);

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
        <div className="container">
          {!loading && (errorMessage || !hasResults) && (
            <div className="row pt-5 mb-4">
              <div className="col-lg-12">
                <Card>
                  <CardBody>
                    {errorMessage ? (
                      <>
                        <h4 className="mb-2">{t('Failed')} / {t('error') || 'Error'}</h4>
                        <p className="mb-3">
                          {errorMessage}
                        </p>
                      </>
                    ) : (
                      <>
                        <h4 className="mb-2">{t('no_bus') || 'No buses found'}</h4>
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
                  </CardBody>
                </Card>
              </div>
            </div>
          )}

          <div className="row pt-5 mb-4">
            <div className="col-lg-12">
              {hasResults ? (
                <h6>
                  {hasFilteredResults ? filteredTrips.length : 0} {t('buses')} {t('from')} {from} {t('to')} {to}
                </h6>
              ) : (
                <h6>{filterNoSeatsAvailable.length} {t('no_bus')} {t('from')} {from} {t('to')} {to}</h6>
              )}
            </div>
          </div>

          {hasResults && (
            <TripFiltersResponsive trips={filterNoSeatsAvailable} filters={filters} onChange={setFilters} />
          )}

          <div className="row">
            <div className="col-lg-12">
              {!hasFilteredResults && hasResults ? (
                <Card>
                  <CardBody>
                    <h5 className="mb-2">No trips match your filters</h5>
                    <p className="mb-0 text-muted">Try widening your price/time window or resetting filters.</p>
                  </CardBody>
                </Card>
              ) : null}

              {filteredTrips.map((trip: Trip) => (
                <Card key={trip.id} className="ta-trip-card">
                  <CardBody className="ta-trip-card__body">
                    <div className="ta-trip-card__left">
                      <div className="ta-trip-card__logo">
                        {trip.agency_logo ? (
                          <Image src={trip.agency_logo} alt="agency logo" width={44} height={44} />
                        ) : (
                          <Image src={logo} alt="logo" width={44} height={44} />
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
                          {t('get_ticket')}
                        </Button>
                      ) : (
                        <Button disabled className="ta-btn-primary">
                          {t('sold_out') || 'Sold Out'}
                        </Button>
                      )}
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>

          <UserBookingModal
            getModal={setModal}
            modal={modal}
            booking={tripRef.current || undefined}
            buttonText={t("buy")}
          />
          {success && (
            <Modal isOpen={modalSuccess.modal_static} toggle={hideSuccessModal} centered size="sm">
              <ModalHeader toggle={hideSuccessModal}>{t('Success')}!</ModalHeader>
              <ModalBody>
                <Row>
                  <Col lg={12}>
                    <p className="text-center">{t('ticket_num')} {ticket}</p>
                    <p className="text-center">{t('seat')}: {seat}</p>
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

export default TripSearch;
