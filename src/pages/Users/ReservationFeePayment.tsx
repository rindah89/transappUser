'use client'

import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import axios from 'axios'
import { Container, Row, Col, Button, Card, CardBody } from 'reactstrap'
import { SpinnerCircular } from 'spinners-react'
import { toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import ShortUniqueId from 'short-unique-id'
import { CreditCard, Tag, X, CheckCircle } from 'lucide-react'
import { roundPriceToNearest50 } from '../../utils/helpers'
import { formatDateDisplay } from '../../utils/dateHelpers'
import type { Booking } from '../../interfaces/booking.interface'

interface PaymentFormData {
  promoCode: string
}

interface PromoValidationResponse {
  error: boolean
  message: string
  data?: {
    valid: boolean
    discount_type: 'percentage' | 'fixed'
    discount_value: number
    final_fee: number
    original_fee: number
  }
}

const ReservationFeePayment: React.FC = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const params = useParams() as { bookingId?: string }
  const bookingId = Number(params?.bookingId)

  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(false)
  const [booking, setBooking] = useState<Booking | null>(null)
  const [reservationFee, setReservationFee] = useState(0)
  const [originalFee, setOriginalFee] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [promoApplied, setPromoApplied] = useState(false)
  const [promoCode, setPromoCode] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormData>()

  useEffect(() => {
    if (!Number.isFinite(bookingId)) {
      toast.error(t('invalid_booking_id') || 'Invalid booking ID')
      router.push('/')
      return
    }

    const fetchBooking = async (): Promise<void> => {
      try {
        const { data } = await axios.get<{ error: boolean; message: string; data?: Booking }>(
          `/api/v1/bookings/booking/${bookingId}`
        )

        if (data?.error || !data.data) {
          toast.error(data.message || t('booking_not_found') || 'Booking not found')
          router.push('/')
          return
        }

        setBooking(data.data)

        // Calculate reservation fee
        const tripPrice = Number(data.data.price || 0)
        const roundedPrice = roundPriceToNearest50(tripPrice)
        const feeBase = (roundedPrice / 100) * 10
        const feeCapped = Math.min(feeBase, 500)
        const fee = roundPriceToNearest50(feeCapped)

        setReservationFee(fee)
        setOriginalFee(fee)
        
        // AUTO-APPLY 100% PROMO CODE FOR APP LAUNCH
        // All reservation fees are free during app launch
        // Apply a 100% discount automatically
        setReservationFee(0)
        setDiscount(fee)
        setPromoApplied(true)
        setPromoCode('LAUNCH100') // Set a default promo code name for tracking
        
        setLoading(false)
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          toast.error((err.response?.data as any)?.message || err.message || t('failed_to_load_booking') || 'Failed to load booking')
        } else {
          toast.error(t('unexpected_error') || 'An unexpected error occurred')
        }
        router.push('/')
      }
    }

    void fetchBooking()
  }, [bookingId, router])

  const validatePromoCode = async (code: string): Promise<void> => {
    if (!code || !booking) return

    try {
      const { data } = await axios.post<PromoValidationResponse>('/api/v1/promos/validate', {
        promo_code: code.trim().toUpperCase(),
        trip_id: booking.trip_id,
        reservation_fee: originalFee,
      })

      if (data?.error) {
        toast.error(data.message)
        return
      }

      if (data.data?.valid) {
        setReservationFee(data.data.final_fee)
        setDiscount(data.data.original_fee - data.data.final_fee)
        setPromoApplied(true)
        setPromoCode(code.trim().toUpperCase())
        toast.success(t('promo_code_applied_success') || 'Promo code applied successfully!')
      } else {
        setReservationFee(originalFee)
        setDiscount(0)
        setPromoApplied(false)
        toast.error(t('promo_code_not_found') || 'Promo code not found or expired')
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        toast.error((err.response?.data as any)?.message || t('failed_to_validate_promo') || 'Failed to validate promo code')
      } else {
        toast.error(t('unexpected_error') || 'An unexpected error occurred')
      }
    }
  }

  const onSubmitPromo = (data: PaymentFormData): void => {
    if (data.promoCode) {
      void validatePromoCode(data.promoCode)
    }
  }

  const makePayment = async (): Promise<void> => {
    if (!booking) return

    // PAYUNIT PAYMENT BYPASSED - All reservation fees are free during app launch
    // If amount is 0 (100% discount), skip payment and confirm directly
    if (reservationFee === 0) {
      await confirmReservation()
      return
    }

    // This should not be reached during app launch since all fees are 0
    // But keeping as fallback
    await confirmReservation()

    // PAYUNIT PAYMENT CODE COMMENTED OUT FOR APP LAUNCH
    // setProcessing(true)
    // const uid = new ShortUniqueId({ length: 7, dictionary: 'alphanum_upper' })
    // const transaction_id = uid.rnd()

    // const paymentData = {
    //   total_amount: reservationFee,
    //   currency: 'XAF',
    //   transaction_id,
    //   return_url: `${process.env.NEXT_PUBLIC_APP_URL || window.location.origin}/payment-return/${bookingId}?transaction_id=${transaction_id}&amount=${reservationFee}`,
    // }

    // try {
    //   const { data } = await axios.post('/api/v1/payunit/initialize', paymentData)

    //   if (data?.error) {
    //     // If PayUnit fails, mark as paid anyway (for testing/fallback)
    //     if (process.env.NODE_ENV !== 'production') {
    //       toast(t('payment_gateway_unavailable') || 'Payment gateway unavailable. Marking as paid for testing.')
    //       await completePayment(transaction_id, 'CASH')
    //       return
    //     }
    //     toast.error(data.message || t('payment_init_failed') || 'Payment initialization failed')
    //     setProcessing(false)
    //     return
    //   }

    //   if (data.status === 'SUCCESS' && typeof window !== 'undefined') {
    //     // Store booking ID and transaction info in localStorage
    //     localStorage.setItem('pending_payment_booking_id', String(bookingId))
    //     localStorage.setItem('pending_payment_transaction_id', transaction_id)
    //     localStorage.setItem('pending_payment_amount', String(reservationFee))
    //     if (promoCode) {
    //       localStorage.setItem('pending_payment_promo_code', promoCode)
    //     }
    //     window.location.href = data.data.transaction_url
    //   }
    // } catch (error: unknown) {
    //   if (axios.isAxiosError(error)) {
    //     const status = error.response?.status
    //     if (status === 403 || status === 401 || status === 400 || (status && status >= 500)) {
    //       // Fallback: mark as paid for testing
    //       if (process.env.NODE_ENV !== 'production') {
    //         toast(t('payment_gateway_unavailable') || 'Payment gateway unavailable. Marking as paid for testing.')
    //         await completePayment(transaction_id, 'CASH')
    //         return
    //       }
    //     }
    //     toast.error((error.response?.data as any)?.message || t('payment_init_failed') || 'Payment initialization failed')
    //   } else {
    //     toast.error(t('unexpected_error') || 'An unexpected error occurred')
    //   }
    //   setProcessing(false)
    // }
  }

  const confirmReservation = async (): Promise<void> => {
    if (!booking) return

    setProcessing(true)
    const uid = new ShortUniqueId({ length: 7, dictionary: 'alphanum_upper' })
    const transaction_id = uid.rnd()

    try {
      // During app launch, all reservations are free with 100% promo code
      const { data } = await axios.post(`/api/v1/bookings/${bookingId}/complete-reservation-payment`, {
        transaction_id: transaction_id,
        payment_method: 'PROMO',
        amount: 0,
        discount: originalFee, // Full discount applied
        promo_code: promoCode || 'LAUNCH100', // Use auto-applied promo code
      })

      if (data?.error) {
        toast.error(data.message || t('failed_to_complete_payment') || 'Failed to confirm reservation')
        setProcessing(false)
        return
      }

      toast.success(t('reservation_confirmed') || 'Reservation confirmed successfully!')
      router.push(`/ticket/${bookingId}`)
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        toast.error((err.response?.data as any)?.message || t('failed_to_complete_payment') || 'Failed to confirm reservation')
      } else {
        toast.error(t('unexpected_error') || 'An unexpected error occurred')
      }
      setProcessing(false)
    }
  }

  // PAYUNIT PAYMENT BYPASSED - completePayment function no longer used
  // Kept for future reference when PayUnit is re-enabled
  // const completePayment = async (transactionId: string, method: string): Promise<void> => {
  //   try {
  //     const { data } = await axios.post(`/api/v1/bookings/${bookingId}/complete-reservation-payment`, {
  //       transaction_id: transactionId,
  //       payment_method: method,
  //       amount: reservationFee,
  //       discount: discount,
  //       promo_code: promoCode || null,
  //     })

  //     if (data?.error) {
  //       toast.error(data.message || t('failed_to_complete_payment') || 'Failed to complete payment')
  //       setProcessing(false)
  //       return
  //     }

  //     toast.success(t('reservation_fee_paid_success') || 'Reservation fee paid successfully!')
  //     router.push(`/ticket/${bookingId}`)
  //   } catch (err: unknown) {
  //     if (axios.isAxiosError(err)) {
  //       toast.error((err.response?.data as any)?.message || t('failed_to_complete_payment') || 'Failed to complete payment')
  //     } else {
  //       toast.error(t('unexpected_error') || 'An unexpected error occurred')
  //     }
  //     setProcessing(false)
  //   }
  // }

  if (loading) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <SpinnerCircular color="#bcc015" size={50} />
          <p className="mt-3">{t('loading') || 'Loading...'}</p>
        </div>
      </Container>
    )
  }

  if (!booking) {
    return null
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8} md={10}>
          <Card className="shadow-sm">
            <CardBody className="p-4">
              <div className="mb-4">
                <h2 className="mb-2">{t('reservation_fee_payment') || 'Reservation Fee Payment'}</h2>
                <p className="text-muted">
                  {t('reservation_fee_description') ||
                    'Please pay the reservation fee to confirm your booking. The ticket amount will be paid at the counter.'}
                </p>
              </div>

              <div className="mb-4 p-3 bg-light rounded">
                <div className="d-flex justify-content-between mb-2">
                  <span>{t('ticket_number') || 'Ticket Number'}:</span>
                  <strong>{booking.ticket_number}</strong>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>{t('route') || 'Route'}:</span>
                  <strong>
                    {booking.departure_city} → {booking.arrival_city}
                  </strong>
                </div>
                <div className="d-flex justify-content-between">
                  <span>{t('journey_date') || 'Journey Date'}:</span>
                  <strong>{formatDateDisplay(booking.journey_date)}</strong>
                </div>
              </div>

              <div className="mb-4">
                <form onSubmit={handleSubmit(onSubmitPromo)} className="d-flex gap-2">
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className={`form-control ${errors.promoCode ? 'is-invalid' : ''}`}
                      placeholder={t('enter_promo_code') || 'Enter promo code (optional)'}
                      {...register('promoCode')}
                      style={{ textTransform: 'uppercase' }}
                    />
                  </div>
                  <Button type="submit" color="secondary" outline>
                    <Tag size={16} className="me-1" />
                    {t('apply') || 'Apply'}
                  </Button>
                </form>
                {promoApplied && (
                  <div className="mt-2 text-success">
                    <CheckCircle size={16} className="me-1" />
                    {t('promo_applied') || 'Promo code applied!'} ({promoCode})
                  </div>
                )}
              </div>

              <div className="mb-4 p-3 border rounded">
                <div className="d-flex justify-content-between mb-2">
                  <span>{t('reservation_fee') || 'Reservation Fee'}:</span>
                  <span>{originalFee} XAF</span>
                </div>
                {discount > 0 && (
                  <div className="d-flex justify-content-between mb-2 text-success">
                    <span>{t('discount') || 'Discount'}:</span>
                    <span>-{discount} XAF</span>
                  </div>
                )}
                <hr />
                <div className="d-flex justify-content-between">
                  <strong>{t('total_to_pay') || 'Total to Pay'}:</strong>
                  <strong className={reservationFee === 0 ? 'text-success' : 'text-primary'}>
                    {reservationFee === 0 ? (t('free') || 'Free') : `${reservationFee} XAF`}
                  </strong>
                </div>
              </div>

              <div className="mb-3 p-3 bg-info bg-opacity-10 rounded">
                <p className="mb-0 small">
                  <strong>{t('note') || 'Note'}:</strong>{' '}
                  {reservationFee === 0
                    ? t('free_reservation_note') ||
                      'Your reservation fee is free! You will need to pay the full ticket amount in cash at the counter.'
                    : t('ticket_payment_note') ||
                      'After paying the reservation fee, you will need to pay the full ticket amount in cash at the counter.'}
                </p>
              </div>

              <div className="d-flex gap-2">
                <Button
                  color="light"
                  onClick={() => router.push('/')}
                  disabled={processing}
                  className="flex-grow-1"
                >
                  <X size={16} className="me-1" />
                  {t('cancel') || 'Cancel'}
                </Button>
                <Button
                  color="primary"
                  onClick={makePayment}
                  disabled={processing}
                  className="flex-grow-1"
                >
                  {processing ? (
                    <>
                      <SpinnerCircular color="#fff" size={16} className="me-2" />
                      {t('processing') || 'Processing...'}
                    </>
                  ) : reservationFee === 0 ? (
                    <>
                      <CheckCircle size={16} className="me-1" />
                      {t('confirm_reservation') || 'Confirm Reservation'}
                    </>
                  ) : (
                    <>
                      <CreditCard size={16} className="me-1" />
                      {t('pay_now') || 'Pay Now'} ({reservationFee} XAF)
                    </>
                  )}
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ReservationFeePayment

