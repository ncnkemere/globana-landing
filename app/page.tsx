import NavigationHeader from "@/components/navigation-header"
import SocialLinks from "@/components/social-links"
import Image from "next/image"
import EnhancedFeatures from "@/components/enhanced-features"
import SecuritySection from "@/components/security-section"
import ContactSection from "@/components/contact-section"
import AnimatedSection from "@/components/animated-section"
import GlobanaHeroEnhanced from "@/components/globana-hero-enhanced"

export default function Home() {
  return (
    <>
      <NavigationHeader />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-24 pb-20 bg-gradient-to-b from-[#F5F6FA] to-white">
          <div className="container mx-auto px-4">
            <GlobanaHeroEnhanced />
          </div>
        </section>

        {/* Enhanced Features Section */}
        <EnhancedFeatures />

        {/* Security Section */}
        <SecuritySection />

        {/* Contact Section */}
        <section className="py-20 bg-[#F5F6FA]">
          <div className="container mx-auto px-4">
            <AnimatedSection delay={0} className="w-full">
              <ContactSection />
            </AnimatedSection>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-[#1D3557]">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Transform Your Global Finances</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of users who are already experiencing the future of borderless banking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-[#00BFA6] font-semibold">✓ NGN & USD payments</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-[#F4C542] font-semibold">✓ Instant transfers</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-white font-semibold">✓ Advanced security</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer id="about" className="bg-white py-16 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <Image src="/images/logo.png" alt="Globana Logo" width={40} height={40} className="h-10 w-10" />
                  <span className="text-xl font-bold text-[#1D3557]">Globana</span>
                </div>
                <p className="text-gray-600 mb-6 max-w-md">
                  Revolutionizing global money movement with instant transfers, lower fees, and seamless cross-border
                  payments.
                </p>
                <SocialLinks />
              </div>

              <div>
                <h3 className="font-semibold text-[#1D3557] mb-4">Product</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <a href="#features" className="hover:text-[#00BFA6] transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#security" className="hover:text-[#00BFA6] transition-colors">
                      Security
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[#1D3557] mb-4">Company</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <a href="#about" className="hover:text-[#00BFA6] transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="privacy-policy" className="hover:text-[#00BFA6] transition-colors">
                      Privacy Policy
                      </a>
                  </li>
                  <li>
                    <a href="terms-of-service" className="hover:text-[#00BFA6] transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8 text-center text-gray-500">
              <p>© {new Date().getFullYear()} Globana Inc. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
