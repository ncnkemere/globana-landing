export const metadata = {
  title: "Terms of Service",
  robots: { index: false, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mt-8 space-y-4">
        <p>
          These Terms govern your access to and use of Globana’s app and website. By using Globana, you agree to these Terms.
        </p>

        <h2 className="text-xl font-semibold mt-6">Eligibility</h2>
        <p>You must be legally able to enter into a contract and comply with applicable laws.</p>

        <h2 className="text-xl font-semibold mt-6">Your Account</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You are responsible for safeguarding your credentials.</li>
          <li>You agree to provide accurate information.</li>
          <li>We may suspend accounts for security or legal reasons.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">Prohibited Use</h2>
        <p>You may not misuse the service, attempt fraud, or violate laws.</p>

        <h2 className="text-xl font-semibold mt-6">Disclaimers</h2>
        <p>Service is provided “as is” to the maximum extent permitted by law.</p>

        <h2 className="text-xl font-semibold mt-6">Contact</h2>
        <p>
          For questions, contact <a className="underline" href="mailto:support@globana.com">support@globana.com</a>.
        </p>
      </section>
    </main>
  );
}
