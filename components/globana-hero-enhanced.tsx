"use client"
import { motion } from "framer-motion"
import { Shield, ArrowUpRight, Gift } from "lucide-react"
import Link from "next/link"

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-1">
    <div className="text-3xl font-semibold tracking-tight text-[#1D3557]">{value}</div>
    <div className="text-sm text-gray-500">{label}</div>
  </div>
)

function MiniBars() {
  return (
    <div className="mt-6 flex h-36 items-end gap-4 rounded-xl bg-gradient-to-b from-[#00BFA6]/10 to-white p-4">
      {[18, 48, 72, 96].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0, opacity: 0.6 }}
          animate={{ height: h }}
          transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
          className="w-10 rounded-xl bg-gradient-to-t from-[#00BFA6]/20 to-[#00BFA6] shadow-inner"
        />
      ))}
    </div>
  )
}

function GlobePulse() {
  return (
    <motion.svg
      initial={{ rotate: -8 }}
      animate={{ rotate: 0 }}
      transition={{ duration: 2, type: "spring" }}
      width="220"
      height="220"
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="globana-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00BFA6" />
          <stop offset="100%" stopColor="#1D3557" />
        </linearGradient>
      </defs>
      <circle cx="110" cy="110" r="56" fill="url(#globana-grad)" opacity="0.95" />
      <circle cx="94" cy="98" r="10" fill="white" opacity="0.45" />
      <circle cx="132" cy="126" r="8" fill="white" opacity="0.35" />
      <motion.ellipse
        cx="110"
        cy="110"
        rx="100"
        ry="34"
        stroke="white"
        strokeOpacity="0.6"
        fill="none"
        animate={{ strokeDashoffset: [200, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        strokeDasharray="200 200"
      />
      <motion.circle
        cx="210"
        cy="110"
        r="4"
        fill="white"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY }}
      />
    </motion.svg>
  )
}

export default function GlobanaHeroEnhanced() {
  return (
    <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-8 px-4 pb-14 pt-8 md:grid-cols-2 md:px-0">
      {/* Left: headline */}
      <div className="flex flex-col justify-center space-y-8 pr-2">
        <div>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-[#1D3557] md:text-6xl">
            Move money
            <br />
            across borders
            <span className="text-[#00BFA6]"> instantly</span>
          </h1>
          <p className="mt-4 max-w-md text-gray-600 leading-relaxed">
            Globana makes sending, saving, and spending money across countries effortless.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#F4C542]/20 via-[#F4C542]/10 to-transparent border border-[#F4C542]/30 p-4 shadow-sm"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#F4C542]/20 to-transparent"
            animate={{
              x: [-200, 400],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <div className="relative flex items-center gap-3">
            <div className="rounded-full bg-[#F4C542] p-2 shadow-md">
              <Gift className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#1D3557]">Exclusive Welcome Bonus</div>
              <div className="text-xs text-gray-600">Join the waitlist to unlock your surprise gift!</div>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center gap-4">
          <Link
            href="/waitlist"
            className="inline-flex items-center rounded-full bg-[#00BFA6] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#00BFA6]/90 focus:outline-none focus:ring-2 focus:ring-[#00BFA6] focus:ring-offset-2"
          >
            Join Waitlist <ArrowUpRight className="ml-1 inline h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-8 pt-2 md:max-w-sm">
          <Stat label="Countries Supported" value="10+" />
          <Stat label="Supported Currencies" value="NGN & USD" />
        </div>
      </div>

      {/* Right: animated card grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Secure card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative col-span-1 overflow-hidden rounded-xl bg-gradient-to-b from-[#1D3557] to-[#1D3557]/90 p-6 text-white shadow-lg"
        >
          <div className="absolute inset-0">
            <svg
              className="absolute inset-0 h-full w-full opacity-20"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="globana-rg" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00BFA6" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              <rect width="400" height="400" fill="url(#globana-rg)" />
              {[...Array(12)].map((_, i) => (
                <circle
                  key={i}
                  cx="200"
                  cy="200"
                  r={20 + i * 14}
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.12"
                />
              ))}
            </svg>
          </div>

          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#00BFA6]/20 p-2 ring-1 ring-white/10">
                <Shield className="h-5 w-5" />
              </div>
              <span className="text-xs uppercase tracking-wider text-[#00BFA6]">Advanced Security</span>
            </div>
            <div className="mt-6 text-xl leading-snug text-white/95">
              Fraud protection
              <br /> keeps your money safe
            </div>
            <motion.div
              className="absolute right-6 top-6 h-12 w-12 rounded-full bg-[#00BFA6]/40"
              animate={{
                boxShadow: ["0 0 0 0 rgba(0,191,166,0.35)", "0 0 0 16px rgba(0,191,166,0)"],
              }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>

        {/* Currencies card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative col-span-1 overflow-hidden rounded-xl bg-gradient-to-b from-[#00BFA6] to-[#3EC1D3] p-6 text-white shadow-lg"
        >
          <div className="pointer-events-none absolute -right-8 -top-10 opacity-70">
            <GlobePulse />
          </div>
          <div className="relative mt-24 text-sm text-white/90">Global Reach</div>
          <div className="text-xl font-medium leading-snug">
            10+ countries
            <br /> in one platform
          </div>
        </motion.div>

        {/* Naira & USD payment card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="col-span-1 rounded-xl bg-white p-6 text-[#1D3557] shadow-lg ring-1 ring-gray-200"
        >
          <div className="text-sm text-gray-500">Instant Payments</div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-2xl font-semibold tracking-tight">NGN</span>
            <span className="text-gray-400">⇄</span>
            <span className="text-2xl font-semibold tracking-tight">USD</span>
          </div>
          <div className="mt-1 text-xs text-[#00BFA6]">Send & receive in seconds</div>
          <MiniBars />
        </motion.div>

        <div className="hidden md:block" />
      </div>
    </div>
  )
}
