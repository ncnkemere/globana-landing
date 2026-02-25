import NavigationHeader from "@/components/navigation-header"
import EmailSignupForm from "@/components/email-signup-form"

export const metadata = {
  title: "Join Waitlist - Globana Pay",
  description: "Join our waitlist and get an exclusive surprise bonus when we launch!",
}

export default function WaitlistPage() {
  return (
    <>
      <NavigationHeader />

      <main className="min-h-screen bg-gradient-to-b from-[#F5F6FA] to-white">
        {/* Centered Waitlist Form */}
        <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-20">
          <div className="w-full max-w-lg">
            <EmailSignupForm />
          </div>
        </section>
      </main>
    </>
  )
}
