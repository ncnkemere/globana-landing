export default function ValueProposition() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 text-center">
      <h2 className="text-4xl font-bold tracking-tight text-[#1D3557] sm:text-5xl md:text-6xl">
        The Future of <span className="text-[#00BFA6]">Global Finance</span> is Coming Soon
      </h2>
      <p className="mx-auto max-w-2xl text-lg text-gray-600">
        Seamlessly send money across borders with Naira and USD payments. Join our waitlist to be the first to
        experience effortless cross-border transactions.
      </p>

      {/* Welcome Bonus Highlight */}
      <div className="mx-auto max-w-md rounded-full bg-[#F4C542]/10 px-6 py-3">
        <div className="flex items-center justify-center">
          <span className="mr-2 text-2xl">🎉</span>
          <span className="font-semibold text-[#1D3557]">Early birds get a surprise bonus!</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <div className="flex items-center rounded-full bg-[#F5F6FA] px-4 py-2">
          <span className="mr-2 h-2 w-2 rounded-full bg-[#00BFA6]"></span>
          <span className="text-sm font-medium">Instant Transfers</span>
        </div>
        <div className="flex items-center rounded-full bg-[#F5F6FA] px-4 py-2">
          <span className="mr-2 h-2 w-2 rounded-full bg-[#F4C542]"></span>
          <span className="text-sm font-medium">NGN & USD Support</span>
        </div>
        <div className="flex items-center rounded-full bg-[#F5F6FA] px-4 py-2">
          <span className="mr-2 h-2 w-2 rounded-full bg-[#1D3557]"></span>
          <span className="text-sm font-medium">10+ Countries</span>
        </div>
      </div>
    </div>
  )
}
