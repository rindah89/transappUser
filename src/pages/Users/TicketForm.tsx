'use client'

import React, { useState, useEffect } from "react";
import { SpinnerCircular } from 'spinners-react';
import { Row, Col, Card, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { useStateMachine } from "little-state-machine";
import {
  updateBooking,
  updateAction,
  updateUser,
} from "../../utils/updateActions";
import ShortUniqueId from "short-unique-id";
import axios from "axios";

interface TicketFormValues {
  name: string;
  idCardNo: string | null;
  payerName: string;
  phoneNumber: string | null;
  payerEmail: string;
  numberOfSeats: number;
  ticketType: string;
  seat: string;
}

const TicketForm: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const [values, setValues] = useState<TicketFormValues>({
    name: "",
    idCardNo: null,
    payerName: "",
    phoneNumber: null,
    payerEmail: "",
    numberOfSeats: 1,
    ticketType: "One-way",
    seat: "",
  });

  const { name, idCardNo, payerName, phoneNumber, payerEmail, numberOfSeats, ticketType, seat } = values;

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.setAttribute("style", "background: #f8f8f8!important;");
    }
  }, []);

  const handleChange = (field: keyof TicketFormValues) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValues({ ...values, [field]: event.target.value });
  };

  const { actions, state } = useStateMachine({
    updateBooking,
    updateAction,
    updateUser,
  });

  const createBooking = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    setLoading(true);

    const trip = (state?.trip as any)?.trip;
    if (!trip) {
      toast.error('No trip selected');
      setLoading(false);
      return;
    }

    try {
      const userEmail = (state?.user as any)?.data?.data?.email;
      if (!userEmail) {
        const { data } = await axios.post<{ error: boolean; message: string; data?: any }>(
          `api/v1/bookings/anon-booking/${trip.id}`,
          values
        );
        if (data?.error) {
          toast.error(data.message);
        } else {
          actions.updateBooking({ booking: data.data });
          const id = (data as any)?.data?.id;
          router.push(id ? `/ticket/${id}` : "/ticket-summary");
          toast.success(data.message);
          setLoading(false);
        }
      } else {
        const { data } = await axios.post<{ error: boolean; message: string; data?: any }>(
          `api/v1/bookings/create-booking/${trip.id}`,
          values
        );
        if (data?.error) {
          toast.error(data.message);
        } else {
          actions.updateBooking({ booking: data.data });
          makePayment();
          toast.success(data.message);
          setLoading(false);
        }
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Failed to create booking');
      } else {
        toast.error('An unexpected error occurred');
      }
      setLoading(false);
    }
  };

  const makePayment = async (): Promise<void> => {
    const uid = new ShortUniqueId({ length: 7, dictionary: "alphanum_upper" });
    const headers = {
      'Content-Type': "application/json",
      'Authorization': "Basic 4d70631d-397c-4efd-929a-87fcd3a9d1622a8f415d-d9d2-4834-a573-b12c1375b94c",
      "x-api-key": process.env.NEXT_PUBLIC_PAYUNIT_API_KEY || "sand_wjYGZXPZoSYMsV8p8jvlXjMCnK1bnW",
      'mode': 'test',
    };

    const trip = (state?.trip as any)?.trip;
    const booked = {
      total_amount: trip?.price || 100,
      currency: "XAF",
      transaction_id: uid.rnd(),
      return_url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://transapp-api.herokuapp.com'}/api/v1/bookings/payunit-return`,
    };

    try {
      const { data } = await axios.post(
        `https://app.payunit.net/api/gateway/initialize`,
        booked,
        { headers }
      );
      if (data?.error) {
        toast.error(data.message);
      } else {
        router.push("/ticket-summary");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Payment initialization failed');
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };

  const trip = (state?.trip as any)?.trip;

  return (
    <div className="container ticket-form">
      <Row>
        <Col lg={6}>
          <form>
            <Card>
              <Card.Body>
                <h6>Enter Passenger Details</h6>
                <Row>
                  <Col lg={6}>
                    <div className="form-group">
                      <label htmlFor="name">{t("name")}</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="form-control"
                        onChange={handleChange("name")}
                        value={name}
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="form-group">
                      <label htmlFor="idCardNo">{t("id_card")}</label>
                      <input
                        type="text"
                        name="idCardNo"
                        id="idCardNo"
                        required
                        className="form-control"
                        onChange={handleChange("idCardNo")}
                        value={idCardNo || ''}
                      />
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <h6>{t('seat') || 'Seat'}</h6>
                <div className="form-group">
                  <label htmlFor="seat">{t('seat') || 'Seat'}</label>
                  <select
                    id="seat"
                    name="seat"
                    required
                    className="form-control"
                    value={seat}
                    onChange={handleChange("seat")}
                  >
                    <option value="">{t('select') || 'Select'}</option>
                    {Array.from({ length: Number(trip?.seats || 0) }, (_, i) => String(i + 1)).map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <h6>Details of Person Paying</h6>
                <Row>
                  <Col lg={6}>
                    <div className="form-group">
                      <label htmlFor="payerName">{t("name")}</label>
                      <input
                        type="text"
                        name="payerName"
                        id="payerName"
                        required
                        className="form-control"
                        onChange={handleChange("payerName")}
                        value={payerName}
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="form-group">
                      <label htmlFor="payerEmail">{t("email_address")}</label>
                      <input
                        type="email"
                        name="payerEmail"
                        id="payerEmail"
                        required
                        className="form-control"
                        onChange={handleChange("payerEmail")}
                        value={payerEmail}
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="form-group">
                      <label htmlFor="phoneNumber">{t("phone")}</label>
                      <input
                        type="number"
                        name="phoneNumber"
                        id="phoneNumber"
                        required
                        className="form-control"
                        onChange={handleChange("phoneNumber")}
                        value={phoneNumber || ''}
                      />
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <small>
                  You will be redirected to related website to do this transaction
                </small>
                <Row className="mt-5">
                  <Col lg={12}>
                    {loading ? (
                      <>
                        <SpinnerCircular /> <p>Just a moment please buddy...</p>
                      </>
                    ) : (
                      <Button className="w-100" variant="success" onClick={createBooking}>
                        MAKE PAYMENT NOW
                      </Button>
                    )}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </form>
        </Col>
        <Col lg={6} className="mt-3">
          {trip && (
            <>
              <div>
                <h6>Onward Trip Details</h6>
                <small>{trip.agency_name || trip.agencyName}</small>
              </div>
              <Row>
                <Col lg={6}>
                  <Row>
                    <Col>
                      <small>{trip.from_location || trip.from}</small>
                    </Col>
                    <Col>
                      <span> To </span>
                    </Col>
                    <Col>
                      <small>{trip.to_location || trip.to}</small>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <small>{trip.journey_date || trip.journeyDate}</small>
                </Col>
                <Col>
                  <small>{trip.departure || trip.departure_time}</small>
                </Col>
                <Col>
                  <small>{trip.arrival ? moment(trip.arrival).format("LT") : ''}</small>
                </Col>
              </Row>
              <hr className="mt-4" />
              <Row>
                <Col>
                  <h6>Passenger Details</h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>
                    <small>Name</small>
                  </div>
                  <div>
                    <small>{name}</small>
                  </div>
                </Col>
                <Col>
                  <div>
                    <small>ID Card</small>
                  </div>
                  <div>
                    <small>{idCardNo}</small>
                  </div>
                </Col>
                <Col>
                  <div>
                    <small>Number Of Seats</small>
                  </div>
                  <div>
                    <small>{numberOfSeats}</small>
                  </div>
                </Col>
                <Col>
                  <div>
                    <small>Type</small>
                  </div>
                  <div>
                    <small>{ticketType}</small>
                  </div>
                </Col>
              </Row>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default TicketForm;
