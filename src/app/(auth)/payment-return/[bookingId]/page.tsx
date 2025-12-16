'use client'

import { useEffect } from 'react'
import { useParams, useSearchParams, useRouter } from 'next/navigation'
import axios from 'axios'
import { Container } from 'reactstrap'
import { SpinnerCircular } from 'spinners-react'
import { toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

export default function PaymentReturnPage() {
  const { t } = useTranslation()
  const router = useRouter()
  const params = useParams() as { bookingId?: string }
  const searchParams = useSearchParams()
  const bookingId = params?.bookingId

  useEffect(() => {
    const processPayment = async (): Promise<void> => {
      if (!bookingId) {
        toast.error(t('invalid_booking_id') || 'Invalid booking ID')
        router.push('/')
        return
      }

      const transactionId = searchParams?.get('transaction_id')
      const amount = searchParams?.get('amount')
      const status = searchParams?.get('transaction_status') || searchParams?.get('status')

      // Get stored promo code if any
      const promoCode = localStorage.getItem('pending_payment_promo_code') || null

      try {
        // Complete the reservation payment
        const { data } = await axios.post(
          `/api/v1/bookings/${bookingId}/complete-reservation-payment`,
          {
            transaction_id: transactionId,
            payment_method: 'ONLINE',
            amount: amount ? Number(amount) : null,
            discount: 0, // Will be calculated server-side if promo code exists
            promo_code: promoCode,
          }
        )

        if (data?.error) {
          toast.error(data.message || t('payment_processing_failed') || 'Payment processing failed')
          router.push(`/reservation-fee-payment/${bookingId}`)
          return
        }

        // Clear stored payment info
        localStorage.removeItem('pending_payment_booking_id')
        localStorage.removeItem('pending_payment_transaction_id')
        localStorage.removeItem('pending_payment_amount')
        localStorage.removeItem('pending_payment_promo_code')

        toast.success(t('reservation_fee_paid_success') || 'Reservation fee paid successfully!')
        router.push(`/ticket/${bookingId}`)
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          toast.error((err.response?.data as any)?.message || t('payment_processing_failed') || 'Payment processing failed')
        } else {
          toast.error(t('unexpected_error') || 'An unexpected error occurred')
        }
        router.push(`/reservation-fee-payment/${bookingId}`)
      }
    }

    void processPayment()
  }, [bookingId, searchParams, router])

  return (
      <Container className="py-5">
        <div className="text-center">
          <SpinnerCircular color="#bcc015" size={50} />
          <p className="mt-3">{t('processing_payment') || 'Processing your payment...'}</p>
        </div>
      </Container>
  )
}

