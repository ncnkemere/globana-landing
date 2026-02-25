"use client"

import type React from "react"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { Gift, ArrowRight, CheckCircle, AlertCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const EmailSignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear any previous status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus({ type: null, message: "" })

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.email.includes("@")) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all fields with valid information.",
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message || "You've been added to our waitlist! We'll notify you when we launch.",
        })
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
        })
        // Also show toast for additional feedback
        toast({
          title: "Success!",
          description: "Welcome to the Globana waitlist! 🎉",
        })
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        })
        toast({
          title: "Error",
          description: result.message || "Failed to join waitlist.",
          variant: "destructive",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
      toast({
        title: "Error",
        description: "Network error. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full rounded-2xl bg-white p-8 shadow-lg border border-gray-100">
      {/* Welcome Bonus Banner */}
      <div className="mb-6 rounded-xl bg-gradient-to-r from-[#F4C542]/10 to-[#F4C542]/5 p-4 text-center">
        <div className="flex items-center justify-center mb-2">
          <Gift className="mr-2 h-6 w-6 text-[#F4C542]" />
          <span className="text-lg font-bold text-[#1D3557]">Exclusive Welcome Bonus</span>
        </div>
        <p className="text-sm text-gray-600">Join our waitlist and get a surprise bonus when we launch!</p>
      </div>

      <h3 className="mb-2 text-center text-2xl font-bold text-[#1D3557]">Join the Waitlist</h3>
      <p className="mb-8 text-center text-gray-600">Getting started takes less than 30 seconds</p>

      {/* Success/Error Message */}
      {submitStatus.type && (
        <div
          className={`mb-6 rounded-xl p-4 ${
            submitStatus.type === "success" ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
          }`}
        >
          <div className="flex items-center">
            {submitStatus.type === "success" ? (
              <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
            )}
            <p className={`text-sm font-medium ${submitStatus.type === "success" ? "text-green-800" : "text-red-800"}`}>
              {submitStatus.message}
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-[#1D3557]">
              First Name
            </label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              className="h-12 rounded-xl border-gray-200 bg-gray-50/50 px-4 text-base focus-visible:ring-[#00BFA6]"
              required
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-[#1D3557]">
              Last Name
            </label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              className="h-12 rounded-xl border-gray-200 bg-gray-50/50 px-4 text-base focus-visible:ring-[#00BFA6]"
              required
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-[#1D3557]">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="h-12 rounded-xl border-gray-200 bg-gray-50/50 px-4 text-base focus-visible:ring-[#00BFA6]"
            required
            disabled={isLoading}
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="flex h-12 w-full items-center justify-center rounded-xl bg-[#00BFA6] text-base font-medium text-white hover:bg-[#00BFA6]/90 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              Joining Waitlist...
            </>
          ) : (
            <>
              Join Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>

        <p className="text-center text-sm text-gray-500">
          By requesting access, you agree to our Privacy Policy and Terms of Service.
        </p>
      </form>
    </div>
  )
}

export default EmailSignupForm
