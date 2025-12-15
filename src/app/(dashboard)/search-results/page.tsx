import type { Metadata } from 'next';
import SearchResults from '../../../pages/Users/SearchResults';

export const metadata: Metadata = {
  title: 'Search Results',
  description: 'View available trips',
};

export default function SearchResultsPage() {
  return <SearchResults />;
}

