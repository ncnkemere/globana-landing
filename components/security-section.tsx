import { Shield, Lock, Eye, CheckCircle } from "lucide-react"
import AnimatedSection from "./animated-section"

export default function SecuritySection() {
  const securityFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-[#1D3557]" />,
      title: "Advanced Security",
      description: "Your data is protected with industry-standard security measures to keep your information safe.",
      features: ["256-bit SSL encryption", "Multi-factor authentication", "Regular security audits"],
    },
    {
      icon: <Lock className="h-8 w-8 text-[#00BFA6]" />,
      title: "End-to-End Encryption",
      description:
        "All your financial data is encrypted in transit and at rest, ensuring only you have access to your information.",
      features: ["Zero-knowledge architecture", "Encrypted data storage", "Secure API connections"],
    },
    {
      icon: <Eye className="h-8 w-8 text-[#F4C542]" />,
      title: "Privacy by Design",
      description:
        "We never sell your data. Your financial information stays private and is only used to provide you with better service.",
      features: ["No data selling", "Privacy-focused design", "Transparent privacy policy"],
    },
  ]

  return (
    <section id="security" className="py-20 bg-[#1D3557]">
      <div className="container mx-auto px-4">
        <AnimatedSection delay={0} className="text-center mb-16">
          <p className="text-[#F4C542] font-medium text-sm uppercase tracking-wide mb-4">
            HOW DOES GLOBANA PROTECT YOU?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Your Security, Our Priority</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We use industry-leading security measures to protect your financial data and ensure your money transfers are
            safe and secure.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <AnimatedSection key={index} delay={index + 1}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="mb-6 p-4 bg-white/10 rounded-2xl w-fit">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-[#00BFA6] mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
