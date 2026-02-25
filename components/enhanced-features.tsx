import { Zap, Shield, TrendingUp } from "lucide-react"
import AnimatedSection from "./animated-section"
import { TransferMockup, DashboardMockup, SecurityMockup } from "./product-mockups"

export default function EnhancedFeatures() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-[#F4C542]" />,
      title: "Instant Global Transfers",
      description:
        "Send Naira and USD anywhere in the world in seconds, not days. Our advanced infrastructure ensures your transfers are processed instantly.",
      mockup: <TransferMockup />,
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#00BFA6]" />,
      title: "Smart Financial Dashboard",
      description:
        "Get real-time insights into your transactions, spending patterns, and financial activity with our intelligent dashboard and analytics.",
      mockup: <DashboardMockup />,
    },
    {
      icon: <Shield className="h-6 w-6 text-[#1D3557]" />,
      title: "Advanced Security",
      description:
        "Advanced security with multi-layer protection, fraud detection, and encrypted transactions for complete peace of mind.",
      mockup: <SecurityMockup />,
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection delay={0} className="text-center mb-16">
          <p className="text-[#00BFA6] font-medium text-sm uppercase tracking-wide mb-4">
            WHAT TOOLS DOES GLOBANA OFFER?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D3557] mb-6">Powerful Financial Tools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover powerful tools that transform how you manage your finances with AI-driven insights and personalized
            recommendations.
          </p>
        </AnimatedSection>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index + 1}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="mb-6 p-3 bg-[#F5F6FA] rounded-2xl w-fit">{feature.icon}</div>
                  <h3 className="text-3xl font-bold text-[#1D3557] mb-6">{feature.title}</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{feature.description}</p>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#00BFA6] rounded-full mr-3"></div>
                      <span className="text-gray-600">Real-time processing</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#F4C542] rounded-full mr-3"></div>
                      <span className="text-gray-600">24/7 customer support</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#1D3557] rounded-full mr-3"></div>
                      <span className="text-gray-600">Enterprise-grade security</span>
                    </div>
                  </div>
                </div>

                <div className={`flex justify-center ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  {feature.mockup}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
