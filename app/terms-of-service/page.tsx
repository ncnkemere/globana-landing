// app/terms-of-service/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Globana",
  description: "Globana Terms of Service governing use of the platform and financial access services.",
};

export default function TermsPage() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.h1}>Terms of Service</h1>

        <p><strong>Effective Date:</strong> February 25, 2026</p>

        <Section title="1. Agreement to Terms">
          <p>
            These Terms of Service (“Terms”) constitute a legally binding agreement between you and <strong>Enco Holdings LLC</strong>, a Wyoming limited liability company (“Globana,” “we,” “us,” or “our”), governing your access to and use of Globana’s mobile application, website, and related services (collectively, the “Services”).
          </p>
          <p>
            By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, you may not use the Services.
          </p>
        </Section>

        <Section title="2. Nature of the Services">
          <p>
            Globana provides a technology platform that enables users to access financial services offered by licensed financial institutions and regulated partners.
          </p>
          <p>
            Globana is <strong>not a bank, money transmitter, or deposit-holding institution</strong>. Financial services accessible through the platform are provided by third-party financial institutions and partners that operate under their own regulatory licenses and terms.
          </p>
          <p>
            Globana does not hold customer funds and does not control bank accounts or payment rails.
          </p>
        </Section>

        <Section title="3. Eligibility">
          <ul>
            <li>You must be at least 18 years old.</li>
            <li>You must have legal capacity to enter a binding contract.</li>
            <li>You must not be located in a jurisdiction subject to applicable sanctions or legal restrictions.</li>
          </ul>
        </Section>

        <Section title="4. Account Registration and Verification">
          <p>
            To use certain Services, you must create an account and provide accurate, complete information. You agree to comply with identity verification and compliance procedures required by Globana or its partners.
          </p>
          <p>
            Failure to provide accurate information may result in suspension or termination of access.
          </p>
        </Section>

        <Section title="5. Fees">
          <p>
            Certain services may involve fees, including but not limited to currency conversion margins, withdrawal fees, and card issuance fees. Any applicable fees will be disclosed to you within the application before you confirm a transaction or request a service.
          </p>
          <p>
            Globana reserves the right to modify pricing at any time. Updated fees will always be displayed prior to transaction confirmation.
          </p>
        </Section>

        <Section title="6. Third-Party Financial Providers">
          <p>
            Financial transactions initiated through Globana are processed by licensed banking institutions and regulated partners. These entities may have their own terms, privacy policies, and regulatory obligations that apply independently of Globana.
          </p>
          <p>
            By using the Services, you authorize Globana to share necessary information with such partners to provide requested services.
          </p>
        </Section>

        <Section title="7. Compliance and Monitoring">
          <p>
            To comply with legal and regulatory requirements, transactions and accounts may be monitored, reviewed, or restricted by Globana or its partners. We reserve the right to delay, block, or refuse transactions where required for compliance, fraud prevention, or risk management purposes.
          </p>
        </Section>

        <Section title="8. Prohibited Use">
          <p>You agree not to use the Services for:</p>
          <ul>
            <li>Fraud or unlawful activity</li>
            <li>Money laundering or terrorist financing</li>
            <li>Sanctions violations</li>
            <li>Unauthorized access or interference with systems</li>
            <li>Abuse of platform infrastructure</li>
          </ul>
        </Section>

        <Section title="9. Suspension and Termination">
          <p>
            Globana may suspend or terminate access to Services at any time if required to:
          </p>
          <ul>
            <li>comply with law or regulation</li>
            <li>protect users or partners</li>
            <li>investigate suspicious activity</li>
            <li>enforce these Terms</li>
          </ul>
        </Section>

        <Section title="10. Intellectual Property">
          <p>
            All software, branding, designs, text, graphics, and platform content are the exclusive property of Globana or its licensors and are protected by intellectual property laws.
          </p>
        </Section>

        <Section title="11. Service Availability">
          <p>
            We do not guarantee uninterrupted access to the Services. Availability may be affected by maintenance, updates, partner system outages, or events beyond our control.
          </p>
        </Section>

        <Section title="12. Disclaimer of Warranties">
          <p>
            The Services are provided “as is” and “as available” without warranties of any kind, express or implied.
          </p>
        </Section>

        <Section title="13. Limitation of Liability">
          <p>
            To the fullest extent permitted by law, Globana shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill arising from your use of the Services.
          </p>
        </Section>

        <Section title="14. Indemnification">
          <p>
            You agree to indemnify and hold harmless Globana, its affiliates, partners, and service providers from any claims, damages, liabilities, and expenses arising from your use of the Services or violation of these Terms.
          </p>
        </Section>

        <Section title="15. Dispute Resolution">
          <p>
            These Terms are governed by the laws of the State of Wyoming, United States.
          </p>
          <p>
            Any dispute shall be resolved through binding arbitration. Proceedings shall occur in the jurisdiction corresponding to your country of residence unless otherwise required by applicable law.
          </p>
          <p>
            You waive any right to participate in class actions or jury trials.
          </p>
        </Section>

        <Section title="16. Changes to Terms">
          <p>
            We may update these Terms from time to time. Material changes will be communicated through the platform or via email. Continued use of the Services constitutes acceptance of the updated Terms.
          </p>
        </Section>

        <Section title="17. Contact">
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

function Section({ title, children }: any) {
  return (
    <section style={{ marginTop: 30 }}>
      <h2 style={styles.h2}>{title}</h2>
      <div style={styles.text}>{children}</div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: { display: "flex", justifyContent: "center", padding: "40px 16px" },
  container: { maxWidth: 820, width: "100%", lineHeight: 1.6 },
  h1: { fontSize: 34, marginBottom: 10 },
  h2: { fontSize: 20, marginBottom: 10 },
  text: { fontSize: 16 }
};