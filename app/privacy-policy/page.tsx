// app/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Globana",
  description:
    "Read Globana’s Privacy Policy describing how we collect, use, share, and protect personal data.",
  robots: { index: true, follow: true },
};

type Section = {
  id: string;
  title: string;
  body: React.ReactNode;
};

export default function PrivacyPolicyPage() {
  const effectiveDate = "May 13, 2025";
  const lastUpdated = "February 25, 2026";

  const sections: Section[] = [
    {
      id: "introduction",
      title: "1. Introduction",
      body: (
        <>
          <p>
            Globana (“<strong>Globana</strong>,” “<strong>we</strong>,” “
            <strong>our</strong>,” or “<strong>us</strong>”) is committed to
            protecting your personal data and maintaining transparency regarding
            how information is collected, used, processed, and shared when you
            use our mobile application, website, and related financial services
            (collectively, the “<strong>Services</strong>”).
          </p>
          <p>
            Globana operates as a technology platform that interfaces with
            licensed financial institutions and regulated service providers.
            Certain financial services accessible through the platform are
            provided by third-party partners that act as independent data
            controllers under applicable law.
          </p>
          <p>
            By using the Services, you acknowledge and consent to the practices
            described in this Privacy Policy.
          </p>
        </>
      ),
    },
    {
      id: "roles",
      title: "2. Roles and Data Responsibility",
      body: (
        <>
          <p>Depending on the activity, Globana may act as:</p>
          <ul>
            <li>
              <strong>Data Controller</strong> for account information,
              communications, and platform usage data
            </li>
            <li>
              <strong>Data Processor or Intermediary</strong> for financial and
              identity data processed by regulated partners
            </li>
          </ul>
          <p>
            Licensed banking partners and financial service providers are
            independently responsible for data required to provide regulated
            services, including identity verification, transaction monitoring,
            and regulatory reporting.
          </p>
        </>
      ),
    },
    {
      id: "information-we-collect",
      title: "3. Information We Collect",
      body: (
        <>
          <p>We collect the following categories of data:</p>

          <h3>A. Information You Provide</h3>
          <ul>
            <li>Full name</li>
            <li>Date of birth</li>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Government-issued identification details</li>
            <li>Account credentials</li>
          </ul>

          <h3>B. Identity Verification Information</h3>
          <p>
            To comply with financial regulations, identity verification data
            (including biometric identifiers such as selfies or liveness checks)
            may be collected and processed by our regulated verification and
            banking partners. Globana does not independently store biometric
            data.
          </p>

          <h3>C. Financial Information</h3>
          <p>Handled primarily by partner financial institutions:</p>
          <ul>
            <li>Transaction records</li>
            <li>Wallet balances</li>
            <li>Payment instructions</li>
            <li>Linked account information</li>
          </ul>

          <h3>D. Technical and Usage Data</h3>
          <p>We may collect:</p>
          <ul>
            <li>Device type</li>
            <li>Operating system</li>
            <li>App activity logs</li>
            <li>IP address</li>
            <li>Interaction events</li>
            <li>Cookie or similar tracking data</li>
          </ul>
        </>
      ),
    },
    {
      id: "how-we-collect",
      title: "4. How We Collect Information",
      body: (
        <>
          <p>We collect data through:</p>
          <ul>
            <li>Direct user submission</li>
            <li>Partner integrations</li>
            <li>Automated technologies</li>
            <li>Identity verification workflows</li>
            <li>Transaction processing systems</li>
          </ul>
        </>
      ),
    },
    {
      id: "legal-basis",
      title: "5. Legal Basis for Processing",
      body: (
        <>
          <p>
            We process personal data only where permitted under applicable law,
            including when:
          </p>
          <ul>
            <li>Necessary to provide requested services</li>
            <li>Required to comply with legal obligations</li>
            <li>Necessary to prevent fraud or misuse</li>
            <li>You provide consent</li>
            <li>
              Processing is required for legitimate business interests that do
              not override your rights
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "how-we-use",
      title: "6. How We Use Your Information",
      body: (
        <>
          <p>We use information to:</p>
          <ul>
            <li>Create and maintain accounts</li>
            <li>Facilitate financial services</li>
            <li>Verify identity</li>
            <li>Prevent fraud and unauthorized activity</li>
            <li>Respond to inquiries</li>
            <li>Improve platform functionality</li>
            <li>Comply with regulatory obligations</li>
            <li>Send service notifications and updates</li>
            <li>
              Deliver optional promotional communications (where permitted)
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "automated-processing",
      title: "7. Automated Processing and Compliance Screening",
      body: (
        <>
          <p>
            Financial services accessed through Globana may involve automated
            systems operated by our partners to:
          </p>
          <ul>
            <li>verify identity</li>
            <li>detect fraud</li>
            <li>screen against sanctions lists</li>
            <li>monitor transactions for suspicious activity</li>
          </ul>
          <p>
            These processes are required for regulatory compliance and fraud
            prevention.
          </p>
        </>
      ),
    },
    {
      id: "sharing",
      title: "8. Sharing of Information",
      body: (
        <>
          <p>We do not sell personal data.</p>
          <p>We may share data with:</p>

          <h3>Service Providers</h3>
          <p>
            Technology vendors, analytics providers, and infrastructure partners.
          </p>

          <h3>Financial Institutions &amp; Compliance Providers</h3>
          <p>
            Licensed banks, payment processors, KYC vendors, and regulatory
            compliance partners.
          </p>

          <h3>Authorities</h3>
          <p>
            Where disclosure is required by law, regulation, court order, or
            lawful governmental request.
          </p>

          <h3>Business Transfers</h3>
          <p>
            If Globana undergoes merger, acquisition, or restructuring.
          </p>

          <p>
            All third-party providers are contractually required to safeguard
            personal data.
          </p>
        </>
      ),
    },
    {
      id: "cross-border",
      title: "9. Cross-Border Data Transfers",
      body: (
        <p>
          Your information may be processed outside your country of residence,
          including jurisdictions where our partners operate. When transfers
          occur, appropriate safeguards are used to ensure compliance with
          applicable data protection laws.
        </p>
      ),
    },
    {
      id: "retention",
      title: "10. Data Retention",
      body: (
        <>
          <p>
            Globana retains personal data only for as long as necessary to:
          </p>
          <ul>
            <li>provide services</li>
            <li>comply with legal obligations</li>
            <li>resolve disputes</li>
            <li>enforce agreements</li>
          </ul>
          <p>
            Financial and identity records may be retained by regulated partners
            for legally mandated retention periods, which may extend for several
            years after account closure.
          </p>
        </>
      ),
    },
    {
      id: "security",
      title: "11. Data Security",
      body: (
        <>
          <p>
            We implement administrative, technical, and organizational safeguards
            designed to protect personal data against unauthorized access,
            disclosure, or misuse. These include:
          </p>
          <ul>
            <li>encryption in transit and at rest</li>
            <li>access control restrictions</li>
            <li>monitoring systems</li>
            <li>vendor due diligence</li>
            <li>periodic security reviews</li>
          </ul>
          <p>
            No system is completely secure; users are responsible for
            safeguarding login credentials.
          </p>
        </>
      ),
    },
    {
      id: "rights",
      title: "12. Your Rights",
      body: (
        <>
          <p>
            Subject to applicable law, you may have the right to:
          </p>
          <ul>
            <li>access your data</li>
            <li>request correction</li>
            <li>request deletion of platform-held data</li>
            <li>restrict processing</li>
            <li>withdraw consent</li>
            <li>request a copy of your information</li>
          </ul>
          <p>
            Requests may be submitted using the contact information below.
          </p>
          <p>
            <strong>Note:</strong> Certain financial records must be retained by
            regulated partners for compliance purposes and may not be deletable
            upon request.
          </p>
        </>
      ),
    },
    {
      id: "children",
      title: "13. Children’s Privacy",
      body: (
        <p>
          Globana does not provide services to individuals under the age of 18
          and does not knowingly collect data from minors.
        </p>
      ),
    },
    {
      id: "third-party-services",
      title: "14. Third-Party Services",
      body: (
        <p>
          The Services may contain links or integrations with third-party
          platforms. Globana is not responsible for the privacy practices of
          external services.
        </p>
      ),
    },
    {
      id: "changes",
      title: "15. Changes to This Policy",
      body: (
        <p>
          We may update this Privacy Policy periodically. Material updates will
          be communicated through in-app notifications, email, or website notice.
          Continued use of the Services after updates constitutes acceptance.
        </p>
      ),
    },
    {
      id: "contact",
      title: "16. Contact",
      body: (
        <>
          <p>For privacy-related questions or requests:</p>
          <p>
            <strong>Globana Privacy Team</strong>
            <br />
            <a href="mailto:admin@encoholdings.com">admin@encoholdings.com</a>
          </p>
        </>
      ),
    },
  ];

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.h1}>Privacy Policy</h1>
          <p style={styles.meta}>
            <strong>Effective Date:</strong> {effectiveDate}
            <br />
            <strong>Last Updated:</strong> {lastUpdated}
          </p>
        </header>

        <nav aria-label="Table of contents" style={styles.toc}>
          <h2 style={styles.h2}>Contents</h2>
          <ol style={styles.ol}>
            {sections.map((s) => (
              <li key={s.id} style={styles.li}>
                <a href={`#${s.id}`} style={styles.link}>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section style={styles.sections}>
          {sections.map((s) => (
            <article key={s.id} id={s.id} style={styles.article}>
              <h2 style={styles.sectionTitle}>{s.title}</h2>
              <div style={styles.body}>{s.body}</div>
              <hr style={styles.hr} />
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    padding: "48px 16px",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    maxWidth: 860,
    lineHeight: 1.6,
  },
  header: {
    marginBottom: 24,
  },
  h1: {
    fontSize: 32,
    margin: 0,
    letterSpacing: "-0.02em",
  },
  meta: {
    marginTop: 10,
    marginBottom: 0,
    opacity: 0.85,
  },
  toc: {
    border: "1px solid rgba(0,0,0,0.12)",
    borderRadius: 12,
    padding: 16,
    marginBottom: 28,
  },
  h2: {
    fontSize: 18,
    margin: "0 0 10px 0",
  },
  ol: {
    margin: 0,
    paddingLeft: 18,
  },
  li: {
    margin: "6px 0",
  },
  link: {
    textDecoration: "underline",
  },
  sections: {},
  article: {
    scrollMarginTop: 90,
  },
  sectionTitle: {
    fontSize: 20,
    margin: "22px 0 10px 0",
    letterSpacing: "-0.01em",
  },
  body: {
    fontSize: 15.5,
  },
  hr: {
    margin: "22px 0",
    border: "none",
    borderTop: "1px solid rgba(0,0,0,0.10)",
  },
};