'use client'

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Clock, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"
import { trackEvent } from "@/components/google-analytics"
import { submitContactForm, ApiClientError, getErrorMessage, isRetryableError } from "@/lib/api-client"

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255, 'Name is too long'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').max(20, 'Phone number is too long'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  message: z.string().max(2000, 'Message is too long').optional(),
})

type ContactFormData = z.infer<typeof contactFormSchema>

interface SubmissionState {
  isSubmitting: boolean
  isSuccess: boolean
  error: string | null
  canRetry: boolean
}

export default function ContactPage() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
    canRetry: false,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionState({ isSubmitting: true, isSuccess: false, error: null, canRetry: false })

    try {
      await submitContactForm({
        ...data,
        submissionType: 'partnership',
      })

      // Track successful form submission
      trackEvent('form_submit', 'contact', 'partnership_form')

      setSubmissionState({ isSubmitting: false, isSuccess: true, error: null, canRetry: false })
      reset() // Clear the form

      // Reset success state after 5 seconds
      setTimeout(() => {
        setSubmissionState(prev => ({ ...prev, isSuccess: false }))
      }, 5000)

    } catch (error) {
      console.error('Form submission error:', error)

      if (error instanceof ApiClientError) {
        const errorMessage = getErrorMessage(error)
        const canRetry = isRetryableError(error)

        setSubmissionState({
          isSubmitting: false,
          isSuccess: false,
          error: errorMessage,
          canRetry,
        })
      } else {
        setSubmissionState({
          isSubmitting: false,
          isSuccess: false,
          error: 'An unexpected error occurred. Please try again.',
          canRetry: true,
        })
      }

      // Track form submission error
      trackEvent('form_error', 'contact', 'partnership_form')
    }
  }

  const handleRetry = () => {
    setSubmissionState(prev => ({ ...prev, error: null, canRetry: false }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-balance">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            We're here to help you with queries about our services, partnerships, or opportunities. Connect with us and
            our team will be happy to assist you.
          </p>
        </div>

        <div className="text-center mb-12">
          <Card className="max-w-md mx-auto shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4">
                <img
                  src="/director-mudrape.png"
                  alt="Director of mudrape"
                  className="w-48 h-80 rounded-lg mx-auto object-cover shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Director</h3>
              <p className="text-blue-600 font-medium">mudrape Leadership</p>
              <p className="text-gray-600 text-sm mt-2">
                Leading mudrape's mission to bring financial services to every corner of India
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Partnership Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Partner With Us</CardTitle>
              <CardDescription className="text-gray-600">
                Interested in becoming a mudrape partner? Fill out the form below and we'll get back to you.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {submissionState.isSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-green-800 font-medium">Success!</p>
                    <p className="text-green-700 text-sm">Your partnership request has been submitted successfully. We'll get back to you soon!</p>
                  </div>
                </div>
              )}

              {submissionState.error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <div className="flex-1">
                      <p className="text-red-800 font-medium">Error</p>
                      <p className="text-red-700 text-sm">{submissionState.error}</p>
                    </div>
                  </div>
                  {submissionState.canRetry && (
                    <div className="mt-3">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={handleRetry}
                        className="text-red-700 border-red-300 hover:bg-red-100"
                      >
                        Try Again
                      </Button>
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className={`w-full ${errors.name ? 'border-red-500' : ''}`}
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className={`w-full ${errors.phone ? 'border-red-500' : ''}`}
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address (Optional)
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className={`w-full ${errors.email ? 'border-red-500' : ''}`}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your business or partnership interest..."
                    className={`w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.message ? 'border-red-500' : ''}`}
                    {...register('message')}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={submissionState.isSubmitting}
                >
                  {submissionState.isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Partnership Request'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Get In Touch</CardTitle>
                <CardDescription className="text-gray-600">
                  Reach out to us through any of the following channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">support@mudrape.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Support Hours</h3>
                    <p className="text-gray-600">Monday – Saturday | 9:30 AM – 6:30 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Support Info */}
            <Card className="shadow-lg bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">How We Can Help</h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Service inquiries and support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Partnership opportunities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Technical assistance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Business collaboration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
