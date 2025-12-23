/**
 * 404 Not Found Page Component
 * Server Component for better SEO
 */

import Link from 'next/link';
import { Container } from 'reactstrap';
import { Home, Search } from 'lucide-react';
import GoBackButton from './GoBackButton';

export default function NotFoundPage() {
  return (
    <div className="page-content">
      <Container>
        <div className="ta-not-found">
          <div className="ta-not-found__content">
            <div className="ta-not-found__icon">
              <h1 className="ta-not-found__code">404</h1>
            </div>
            
            <h2 className="ta-not-found__title">Page Not Found</h2>
            
            <p className="ta-not-found__message">
              The page you are looking for does not exist or has been moved.
              <br />
              Please check the URL or return to the homepage.
            </p>

            <div className="ta-not-found__actions">
              <Link href="/" className="btn btn-primary ta-btn">
                <Home size={16} />
                <span>Go Home</span>
              </Link>
              
              <Link href="/book" className="btn btn-outline-primary ta-btn">
                <Search size={16} />
                <span>Search Trips</span>
              </Link>
              
              <GoBackButton />
            </div>

            <div className="ta-not-found__suggestions">
              <h3>You might be looking for:</h3>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/book">Book a Trip</Link></li>
                <li><Link href="/user-bookings">My Bookings</Link></li>
                <li><Link href="/about-transapp">About Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

