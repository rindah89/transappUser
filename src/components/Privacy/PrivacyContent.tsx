/**
 * Server Component - Privacy Policy content
 * Static content, no client-side JavaScript needed
 */

import { Container } from "reactstrap";

export default function PrivacyContent() {
  return (
    <>
      <div className="booking">
        <Container>
          <div className="py-5">
            <h1 className="page-header">Privacy Policy</h1>
          </div>
        </Container>
      </div>

      <Container className="mt-5 pt-5">
        <p className="about-textp">
          At TransApp, we are committed to protecting your privacy. This Privacy Policy explains 
          how we collect, use, disclose, and safeguard your information when you use our platform 
          to book bus tickets.
        </p>

        <h2 className="about-heading">Property Rights</h2>
        <p className="about-textp">
          All content, features, and functionality of the TransApp platform, including but not 
          limited to text, graphics, logos, icons, images, and software, are the exclusive 
          property of TransApp and are protected by international copyright, trademark, and 
          other intellectual property laws.
        </p>
        <p className="about-textp">
          You may not reproduce, distribute, modify, create derivative works of, publicly display, 
          or otherwise use any content from our platform without our prior written permission.
        </p>

        <h2 className="about-heading">Changes to Privacy Policy</h2>
        <p className="about-textp">
          We reserve the right to update or modify this Privacy Policy at any time. Any changes 
          will be effective immediately upon posting on this page.
        </p>
        <p className="about-textp">
          We will notify you of any material changes by posting the new Privacy Policy on this page 
          and updating the "Last Updated" date.
        </p>
        <p className="about-textp">
          Your continued use of our platform after any changes constitutes your acceptance of the 
          new Privacy Policy.
        </p>
        <p className="about-textp">
          We encourage you to review this Privacy Policy periodically to stay informed about how 
          we are protecting your information.
        </p>

        <h2 className="about-heading">Contract and Agreement</h2>
        <p className="about-textp">
          By using TransApp, you agree to be bound by this Privacy Policy and our Terms and Conditions. 
          If you do not agree with any part of this policy, you must not use our platform.
        </p>
        <p className="about-textp">
          This Privacy Policy, together with our Terms and Conditions, constitutes the entire agreement 
          between you and TransApp regarding your use of our platform.
        </p>

        <h2 className="about-heading">Contact Information</h2>
        <p className="about-textp">
          If you have any questions or concerns about this Privacy Policy, please contact us at 
          support@transapp.com or through our customer service channels.
        </p>

        <h2 className="about-heading">Severability</h2>
        <p className="about-textp">
          If any provision of this Privacy Policy is found to be invalid or unenforceable, the 
          remaining provisions will continue to be valid and enforceable to the fullest extent 
          permitted by law.
        </p>

        <h2 className="about-heading">Governing Law</h2>
        <p className="about-textp">
          This Privacy Policy is governed by and construed in accordance with the laws of the 
          jurisdiction in which TransApp operates, without regard to its conflict of law provisions.
        </p>

        <h2 className="about-heading">Venue</h2>
        <p className="about-textp">
          Any legal action or proceeding arising out of or relating to this Privacy Policy shall 
          be brought exclusively in the courts of the jurisdiction in which TransApp operates.
        </p>

        <h2 className="about-heading">Dispute Resolution</h2>
        <p className="about-textp">
          We encourage you to contact us first if you have any concerns or disputes regarding 
          this Privacy Policy. We are committed to resolving any issues amicably.
        </p>
        <p className="about-textp">
          If a dispute cannot be resolved through direct communication, we may agree to mediation 
          or other alternative dispute resolution methods.
        </p>
        <p className="about-textp">
          In the event that alternative dispute resolution is unsuccessful, the dispute will be 
          resolved through binding arbitration or in the courts as specified in the Venue section.
        </p>
      </Container>
    </>
  );
}

