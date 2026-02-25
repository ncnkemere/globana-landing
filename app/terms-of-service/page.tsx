// app/terms-of-service/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Globana",
  description:
    "Globana Terms of Service governing use of the platform and financial access services.",
  robots: { index: true, follow: true },
};

type TocItem = { id: string; title: string };

export default function TermsPage() {
  const effectiveDate = "February 25, 2026";

  const toc: TocItem[] = [
    { id: "agreement", title: "1. Agreement to Terms" },
    { id: "nature", title: "2. Nature of the Services" },
    { id: "eligibility", title: "3. Eligibility" },
    { id: "registration", title: "4. Account Registration and Verification" },
    { id: "fees", title: "5. Fees" },
    { id: "providers", title: "6. Third-Party Financial Providers" },
    { id: "compliance", title: "7. Compliance and Monitoring" },
    { id: "prohibited", title: "8. Prohibited Use" },
    { id: "termination", title: "9. Suspension and Termination" },
    { id: "ip", title: "10. Intellectual Property" },
    { id: "availability", title: "11. Service Availability" },
    { id: "warranties", title: "12. Disclaimer of Warranties" },
    { id: "liability", title: "13. Limitation of Liability" },
    { id: "indemnification", title: "14. Indemnification" },
    { id: "disputes", title: "15. Dispute Resolution" },
    { id: "changes", title: "16. Changes to Terms" },
    { id: "contact", title: "17. Contact" },
  ];

  return (
    <main style={styles.main}>
      {/* Fix #1: plain <style> tag (no styled-jsx) */}
      <style>{`
        .termsProse {
          width: 100%;
          max-width: 820px;
          line-height: 1.75;
        }

        .termsProse h1 {
          font-size: 34px;
          margin: 0 0 8px 0;
          letter-spacing: -0.02em;
        }

        .termsMeta {
          margin: 0 0 22px 0;
          opacity: 0.85;
        }

        .termsToc {
          border: 1px solid rgba(0, 0, 0, 0.12);
          border-radius: 12px;
          padding: 16px;
          margin: 18px 0 28px;
        }

        .termsToc h2 {
          font-size: 18px;
          margin: 0 0 10px 0;
        }

        .termsToc ul {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }

        .termsToc li {
          margin: 8px 0;
        }

        .termsToc a {
          text-decoration: underline;
        }

        .termsProse h2 {
          font-size: 20px;
          margin: 24px 0 10px 0;
          letter-spacing: -0.01em;
        }

        .termsProse p {
          margin: 10px 0;
        }

        .termsProse ul,
        .termsProse ol {
          margin: 10px 0;
          padding-left: 22px;
        }

        .termsProse li {
          margin: 6px 0;
        }

        .termsProse section {
          scroll-margin-top: 96px;
        }

        .termsHr {
          border: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          margin: 24px 0;
        }
      `}</style>

      <div className="termsProse">
        <header>
          <h1>Terms of Service</h1>
          <p className="termsMeta">
            <strong>Effective Date:</strong> {effectiveDate}
          </p>
        </header>

        <nav aria-label="Table of contents" className="termsToc">
          <h2>Contents</h2>
          <ul>
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <Section id="agreement" title="1. Agreement to Terms">
          <p>
            These Terms of Service (“Terms”) constitute a legally binding
            agreement between you and <strong>Enco Holdings LLC</strong>, a
            Wyoming limited liability company (“Globana,” “we,” “us,” or “our”),
            governing your access to and use of Globana’s mobile application,
            website, and related services (collectively, the “Services”).
          </p>
          <p>
            By accessing or using the Services, you agree to be bound by these
            Terms. If you do not agree, you may not use the Services.
          </p>
        </Section>

        <hr className="termsHr" />

        <Section id="nature" title="2. Nature of the Services">
          <p>
            Globana provides a technology platform that enables users to access
            financial services offered by licensed financial institutions and
            regulated partners.
          </p>
          <p>
            Globana is{" "}
            <strong>not a bank, money transmitter, or deposit-holding institution</strong>.
            Financial services accessible through the platform are provided by
            third-party financial institutions and partners that operate under
            their own regulatory licenses and terms.
          </p>
          <p>
            Globana does not hold customer funds and does not control bank
            accounts or payment rails.
          </p>
        </Section>

        <hr className="termsHr" />

        <Section id="eligibility" title="3. Eligibility">
          <ul>
            <li>You must be at least 18 years old.</li>
            <li>You must have legal capacity to enter a binding contract.</li>
            <li>
              You must not be located in a jurisdiction subject to applicable
              sanctions or legal restrictions.
            </li>
          </ul>
        </Section>

        <hr className="termsHr" />

        <Section id="registration" title="4. Account Registration and Verification">
          <p>
            To use certain Services, you must create an account and provide
            accurate, complete information. You agree to comply with identity
            verification and compliance procedures required by Globana or its
            partners.
          </p>
          <p>
            Failure to provide accurate information may result in suspension or
            termination of access.
          </p>
        </Section>

        <hr className="termsHr" />

        <Section id="fees" title="5. Fees">
          <p>
            Certain services may involve fees, including but not limited to
            currency conversion margins, withdrawal fees, and card issuance fees.
            Any applicable fees will be disclosed to you within the application
            before you confirm a transaction or request a service.
          </p>
          <p>
            Globana reserves the right to modify pricing at any time. Updated
            fees will always be displayed prior to transaction confirmation.
          </p>
        </Section>

        <hr className="termsHr" />

        <Section id="providers" title="6. Third-Party Financial Providers">
          <p>
            Financial transactions initiated through Globana are processed by
            licensed banking institutions and regulated partners. These entities
            may have their own terms, privacy policies, and regulatory
            obligations that apply independently of Globana.
          </p>
          <p>
            By using the Services, you authorize Globana to share necessary
            information with such partners to provide requested services.
          </p>
        </Section>

        <hr className="termsHr" />

        <Section id="compliance" title="7. Compliance and Monitoring">
          <p>
            To comply with legal and regulatory requirements, transactions and
            accounts may be monitored, reviewed, or restricted by Globana or its
            partners. We reserve the right to delay, block, or refuse
            transactions where required for compliance, fraud prevention, or
            risk management purposes.
          </p>
        </Section>

        <hr className="termsHr" />

        <Section id="prohibited" title="8. Prohibited Use">
          <p>You agree not to use the Services for:</p>
          <ul>
            <li>Fraud or unlawful activity</li>
            <li>Money laundering or terrorist financing</li>
            <li>Sanctions violations</li>
            <li>Unauthorized access or interference with systems</li>
            <li>Abuse of platform infrastructure</li>
          </ul>
        </Section>

        <hr className="termsHr" />

        <Section id="termination" title="9. Suspension and Termination">
          <p>
            Globana may suspend or terminate access to Services at any time if
            required to:
          </p>
          <ul>
            <li>comply with law or regulation</li>
            <li>protect users or partners</li>
            <li>investigate suspicious activity</li>
            <li>enforce these Terms</li>
          </ul>
        </Section>

        <hr className="termsHr" />

        <Section id="ip" title="10. Intellectual Property">
          <p>
            All software, branding, designs, text, graphics, and platform
            content are the exclusive property of Globana or its licensors and
            are protected by intellectual property laws.
          </p>
        </Section>

        <hr className="termsHr" />

        <Section id="availability" title="11. Service Availability">
          <p>
            We do not guarantee uninterrupted access to the Services.
            Availability may be affected by maintenance, updates, partner system
            outages, or events beyond our control.
          </p>
        </Section>

        <hr className="termsHr" />

        <Section id="warranties" title="12. Disclaimer of Warranties">
          <p>
            The Services are provided “as is” and “as available” without
            warranties of any kind, express or implied.
          </p>
        </Section>

        <hr className="termsHr" />

        <Section id="liability" title="13. Limitation of Liability">
          <p>
            To the fullest extent permitted by law, Globana shall not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages, including loss of profits, data, or goodwill arising from
            your use of the Services.
          </p>
        </Section>

        <hr className="termsHr" />

        <Section id="indemnification" title="14. Indemnification">
          <p>
            You agree to indemnify and hold harmless Globana, its affiliates,
            partners, and service providers from any claims, damages,
            liabilities, and expenses arising from your use of the Services or
            violation of these Terms.
          </p>
        </Section>

        <hr className="termsHr" />

        <Section id="disputes" title="15. Dispute Resolution">
          <p>
            These Terms are governed by the laws of the State of Wyoming, United
            States.
          </p>
          <p>
            Any dispute shall be resolved through binding arbitration.
            Proceedings shall occur in the jurisdiction corresponding to your
            country of residence unless otherwise required by applicable law.
          </p>
          <p>
            You waive any right to participate in class actions or jury trials.
          </p>
        </Section>

        <hr className="termsHr" />

        <Section id="changes" title="16. Changes to Terms">
          <p>
            We may update these Terms from time to time. Material changes will
            be communicated through the platform or via email. Continued use of
            the Services constitutes acceptance of the updated Terms.
          </p>
        </Section>

        <hr className="termsHr" />

        <Section id="contact" title="17. Contact">
          <p>
            For questions about these Terms, contact:
            <br />
            <strong>admin@encoholdings.com</strong>
          </p>
        </Section>
      </div>
    </main>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: { display: "flex", justifyContent: "center", padding: "40px 16px" },
};