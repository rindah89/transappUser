/**
 * Server Component - About page content
 * No client-side JavaScript needed for static content
 */

import { Container } from "reactstrap";

export default function AboutContent() {
  // Static content - can be made dynamic with translations later
  
  return (
    <>
      <div className="booking">
        <Container>
          <div className="py-5">
            <h1 className="page-header">About TransApp</h1>
          </div>
        </Container>
      </div>

      <Container className="mt-5 pt-5">
        <h2 className="about-heading">Our Company</h2>
        <p className="about-textp">
          TransApp is a leading transportation booking platform that connects passengers 
          with reliable bus services across the region. We are committed to making travel 
          accessible, convenient, and affordable for everyone.
        </p>
        <p className="about-textp">
          Our mission is to revolutionize the way people book and manage their bus travel, 
          providing a seamless experience from search to ticket purchase.
        </p>
        <p className="about-textp">
          With TransApp, you can book your tickets in minutes, skip the queues, and travel 
          with confidence knowing your journey is secured.
        </p>

        <h2 className="about-heading">App Information</h2>
        <p className="about-textp">
          Our mobile and web application provides a user-friendly interface for searching, 
          booking, and managing bus tickets. You can access your bookings anytime, anywhere.
        </p>
        <p className="about-textp">
          The app features real-time trip updates, secure payment processing, and instant 
          ticket confirmation.
        </p>

        <h2 className="about-heading">How It Works</h2>
        <p className="about-textp">
          Simply search for your desired route, select your preferred trip, choose your seat, 
          and complete your booking. It's that easy!
        </p>

        <h2 className="about-heading">Terms of Use</h2>
        <p className="about-textp">
          By using TransApp, you agree to our terms and conditions. Please read them carefully 
          before making a booking.
        </p>
        <p className="about-textp">
          All bookings are subject to availability and the terms of the transportation provider.
        </p>
        <p className="about-textp">
          Cancellation and refund policies vary by provider and are clearly stated during 
          the booking process.
        </p>
        <p className="about-textp">
          TransApp acts as a booking platform and is not responsible for the actual transportation 
          services provided by third-party operators.
        </p>

        <h2 className="about-heading">Account Registration</h2>
        <p className="about-textp">
          Creating an account allows you to save your preferences, view booking history, and 
          receive important updates about your trips.
        </p>
        <p className="about-textp">
          You can also book as a guest without creating an account, though some features may 
          be limited.
        </p>
        <p className="about-textp">
          Your personal information is securely stored and will never be shared with third parties 
          without your consent.
        </p>
        <p className="about-textp">
          You can update or delete your account at any time through your account settings.
        </p>
        <p className="about-textp">
          For security purposes, please keep your login credentials confidential and notify us 
          immediately if you suspect any unauthorized access.
        </p>
      </Container>
    </>
  );
}

