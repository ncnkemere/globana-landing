export const metadata = {
  title: "Delete Account",
  robots: { index: false, follow: true },
};

export default function DeleteAccountPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Delete Your Globana Account</h1>
      <p className="mt-4">
        You can request deletion of your Globana account and associated personal data.
      </p>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">Option 1: Delete inside the app (recommended)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open the Globana app</li>
          <li>Go to <strong>Settings</strong> → <strong>Account</strong></li>
          <li>Tap <strong>Delete Account</strong> and follow the prompts</li>
        </ol>

        <h2 className="text-xl font-semibold mt-6">Option 2: Request deletion here</h2>
        <p className="text-sm text-muted-foreground">
          If you can’t access the app, submit the form below. We may need to verify ownership before processing.
        </p>

        <form className="mt-4 space-y-4 rounded-xl border p-6" method="post" action="/api/delete-account-request">
          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="email">Email associated with your Globana account</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border px-3 py-2"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="details">Additional details (optional)</label>
            <textarea
              id="details"
              name="details"
              className="w-full rounded-md border px-3 py-2"
              rows={4}
              placeholder="If helpful, include phone number, last login, or a brief note."
            />
          </div>

          <button type="submit" className="rounded-md bg-black px-4 py-2 text-white">
            Submit Deletion Request
          </button>

          <p className="text-xs text-muted-foreground">
            Processing time: typically 7–30 days depending on verification and compliance requirements.
          </p>
        </form>

        <h2 className="text-xl font-semibold mt-6">What gets deleted</h2>
        <p>
          We delete or de-identify personal information associated with your account, except where we must retain certain records for legal,
          regulatory, fraud-prevention, or dispute-resolution purposes.
        </p>

        <h2 className="text-xl font-semibold mt-6">Need help?</h2>
        <p>
          Email us at <a className="underline" href="mailto:admin@encoholdings.com">admin@encoholdings.com</a>.
        </p>
      </section>
    </main>
  );
}
