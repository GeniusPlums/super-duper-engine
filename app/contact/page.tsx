import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Clock } from "lucide-react"

export default function ContactPage() {
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
                  src="/director-jvmpay.png"
                  alt="Director of JVMPay"
                  className="w-48 h-80 rounded-lg mx-auto object-cover shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Director</h3>
              <p className="text-blue-600 font-medium">JVMPay Leadership</p>
              <p className="text-gray-600 text-sm mt-2">
                Leading JVMPay's mission to bring financial services to every corner of India
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
                Interested in becoming a JVMPay partner? Fill out the form below and we'll get back to you.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input id="name" type="text" placeholder="Enter your full name" className="w-full" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" className="w-full" required />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Submit Partnership Request
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
                    <p className="text-gray-600">info@jvmpay.com</p>
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
