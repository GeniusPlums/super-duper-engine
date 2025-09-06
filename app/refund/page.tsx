import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCw, CheckCircle, Clock, AlertTriangle, User, FileText, Phone, Mail, Shield } from "lucide-react"

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <RefreshCw className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Refund Policy</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Fair and transparent refund procedures for JVMPay services
          </p>
          <p className="text-sm text-muted-foreground">Last updated: December 2024</p>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Refund Policy Overview</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              In the event a request for refund is made by the user for duplicate, incomplete, or rejected
              transactions, JVMPay will refund such amounts as may be decided by JVMPay in its sole discretion.
              All refunds will be made in accordance with the terms and conditions of the relevant service
              provider providing the payment gateway services.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Refund Eligibility</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-green mb-2" />
                <CardTitle className="text-xl">Valid Reasons for Refund</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Technical issues preventing the use of software or applications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Duplicate transactions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Incomplete or rejected transactions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Cancellation of subscription within stipulated period</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-xl">Compliance Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  To be eligible for a refund, you must have complied with:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Terms of use and service agreements</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Contractual agreements related to purchased services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Platform usage guidelines</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Refund Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Refund Process</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Contact Customer Support
                </h3>
                <p className="text-muted-foreground mb-3">
                  Initiate the refund process by contacting our customer support team via email at
                  <strong> support@jvmpay.com</strong>. Include the following information in your email:
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm ml-4">
                  <li>• Your full name</li>
                  <li>• Details of the product or service purchased</li>
                  <li>• Transaction ID and date</li>
                  <li>• Reason for the refund request</li>
                  <li>• Supporting documentation (if applicable)</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Request Evaluation
                </h3>
                <p className="text-muted-foreground">
                  Once your refund request is received, our customer support team will evaluate your
                  request based on the eligibility criteria mentioned above. We may request additional
                  information if needed.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Notification
                </h3>
                <p className="text-muted-foreground">
                  You will be notified of the status of your refund request within <strong>7 business days</strong>
                  of your request submission. We will communicate our decision and the next steps via email.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                  <RefreshCw className="h-5 w-5 mr-2" />
                  Refund Processing
                </h3>
                <p className="text-muted-foreground">
                  If your refund request is approved, we will process the refund within <strong>7 business days</strong>.
                  Refunds will be issued via the same payment method used for the original purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <AlertTriangle className="h-6 w-6 text-saffron mr-3" />
                Important Notice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-saffron/10 border border-saffron/20 p-4 rounded-lg">
                <p className="text-foreground font-medium mb-2">Policy Updates</p>
                <p className="text-muted-foreground text-sm mb-4">
                  JVMPay reserves the right to modify or update this Return and Refund Policy at any time
                  without prior notice. Please review this policy periodically for any changes.
                </p>
                <p className="text-muted-foreground text-sm">
                  At JVMPay, we value your trust and strive to provide seamless financial technology
                  solutions and services. Our Return and Refund Policy is designed to ensure fairness
                  and transparency in handling return and refund requests.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Need Assistance?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            If you have any questions or concerns about our Return and Refund Policy or need assistance
            with a return or refund request, please contact our customer support team:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-primary-foreground">
              <Phone className="h-5 w-5" />
              <span>+91 9289936342</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-primary-foreground">
              <Mail className="h-5 w-5" />
              <span>support@jvmpay.com</span>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-primary-foreground/80 text-sm">
              Thank you for choosing JVMPay for your financial technology needs.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}