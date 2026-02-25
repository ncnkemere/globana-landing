export const metadata = {
  title: "Privacy Policy",
  robots: { index: false, follow: true }, // optional: keeps it out of search if you want
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mt-8 space-y-4">
        <p>
          This Privacy Policy explains how Globana collects, uses, and protects your information when you use our app and website.
        </p>

        <h2 className="text-xl font-semibold mt-6">Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Account information (name, email, phone number).</li>
          <li>Identity verification data (if/when required for compliance).</li>
          <li>Transaction and usage data (to provide and improve services).</li>
          <li>Device and technical data (IP address, device identifiers, logs).</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">How We Use Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide and maintain the service.</li>
          <li>Fraud prevention, security, and compliance.</li>
          <li>Customer support and communications.</li>
          <li>Analytics and product improvements.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">Sharing</h2>
        <p>
          We may share information with service providers (e.g., hosting, analytics, identity verification) and as required by law.
        </p>

        <h2 className="text-xl font-semibold mt-6">Contact</h2>
        <p>
          Questions? Contact us at <a className="underline" href="mailto:support@globana.com">support@globana.com</a>.
        </p>
      </section>
    </main>
  );
}
