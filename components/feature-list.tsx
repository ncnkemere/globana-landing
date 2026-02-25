import { Shield, Zap, Sparkles } from "lucide-react"

export default function FeatureList() {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-[#1D3557]" />,
      title: "Secure",
      description: "Advanced security with encryption and fraud protection",
    },
    {
      icon: <Zap className="h-6 w-6 text-[#00BFA6]" />,
      title: "Fast",
      description: "Instant transactions and real-time financial insights",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-[#F4C542]" />,
      title: "Innovative",
      description: "Cutting-edge technology that simplifies your financial life",
    },
  ]

  return (
    <div className="mt-12 grid gap-8 md:grid-cols-3">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-[#F5F6FA] p-3">{feature.icon}</div>
          <h3 className="mb-2 text-lg font-semibold text-[#1D3557]">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
