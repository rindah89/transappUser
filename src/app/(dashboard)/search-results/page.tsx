import type { Metadata } from 'next';
import { Suspense } from 'react';
import SearchResultsClient from '../../../components/SearchResults/SearchResultsClient';
import { getTrips } from '../../../lib/server-data-fetching';
import { SpinnerCircular } from 'spinners-react';

export const metadata: Metadata = {
  title: 'Search Results',
  description: 'View available trips for your journey',
};

interface SearchResultsPageProps {
  searchParams: {
    from?: string;
    to?: string;
    journeyDate?: string;
    departureTime?: string;
  };
}

export default async function SearchResultsPage({ searchParams }: SearchResultsPageProps) {
  // Fetch trips server-side
  const trips = await getTrips({
    from: searchParams.from,
    to: searchParams.to,
    journeyDate: searchParams.journeyDate,
    departureTime: searchParams.departureTime,
  });

  return (
    <Suspense fallback={
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <SpinnerCircular color="#bcc014" size={50} />
      </div>
    }>
      <SearchResultsClient 
        initialTrips={trips}
        searchParams={searchParams}
      />
    </Suspense>
  );
}

