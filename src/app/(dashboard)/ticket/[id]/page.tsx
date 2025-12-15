import type { Metadata } from 'next'
import TicketPage from '../../../../pages/Users/TicketPage'

export const metadata: Metadata = {
  title: 'Ticket',
  description: 'View and download your ticket',
}

export default function TicketIdPage() {
  return <TicketPage />
}



