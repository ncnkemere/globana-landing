"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Mail, MessageSquare, ArrowRight, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all fields.",
      })
      return
    }

    if (!formData.email.includes("@")) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Message sent successfully! We'll get back to you soon.",
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        })

        // Also show toast for additional feedback
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        })
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        })
        toast({
          title: "Something went wrong",
          description: result.message || "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-auto w-full max-w-6xl rounded-2xl bg-white p-8 shadow-sm lg:p-12">
      <div className="mb-8 text-center">
        <h2 className="mb-3 text-3xl font-bold text-[#1D3557]">Contact Us</h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Have questions about Globana? We're here to help. Reach out to our team and we'll get back to you as soon as
          possible.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Contact Form */}
        <div className="space-y-6">
          {/* Success/Error Message */}
          {submitStatus.type && (
            <div
              className={`rounded-xl p-4 ${
                submitStatus.type === "success"
                  ? "bg-green-50 border border-green-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              <div className="flex items-center">
                {submitStatus.type === "success" ? (
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                )}
                <p
                  className={`text-sm font-medium ${
                    submitStatus.type === "success" ? "text-green-800" : "text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#1D3557]">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-gray-200 focus-visible:ring-[#00BFA6]"
                placeholder="John Doe"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#1D3557]">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="border-gray-200 focus-visible:ring-[#00BFA6]"
                placeholder="john@example.com"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#1D3557]">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="min-h-[120px] border-gray-200 focus-visible:ring-[#00BFA6]"
                placeholder="How can we help you?"
                disabled={isSubmitting}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full bg-gradient-to-r from-[#00BFA6] to-[#3EC1D3] text-white hover:opacity-90 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-8 rounded-xl bg-[#F5F6FA] p-6">
          <div className="text-center">
            <h3 className="mb-6 text-xl font-semibold text-[#1D3557]">Other Ways to Reach Us</h3>
          </div>

          <div className="flex items-center rounded-lg bg-white p-4 transition-all hover:shadow-md">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#00BFA6]/10">
              <Mail className="h-5 w-5 text-[#00BFA6]" />
            </div>
            <div>
              <h4 className="font-medium text-[#1D3557]">Email Us</h4>
              <p className="text-sm text-gray-600">admin@encoholdings.com</p>
            </div>
          </div>

          <div className="flex items-center rounded-lg bg-white p-4 transition-all hover:shadow-md">
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F4C542]/10">
              <MessageSquare className="h-5 w-5 text-[#F4C542]" />
            </div>
            <div>
              <h4 className="font-medium text-[#1D3557]">Live Chat</h4>
              <p className="text-sm text-gray-600">Available 9am-5pm EST</p>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>We typically respond within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  )
}
