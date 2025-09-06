import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { XCircle, RefreshCw, Clock, AlertTriangle, CheckCircle, Phone, Mail } from "lucide-react"

export default function CancellationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Cancellation Policy</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Understanding our cancellation and refund policies for JVMPay services
          </p>
          <p className="text-sm text-muted-foreground">Last updated: December 2024</p>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Policy Overview</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At JVMPay, we strive to provide reliable and efficient financial services. This cancellation policy
              outlines the terms and conditions regarding cancellations and refunds for our various services.
              Please read this policy carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Key Policy Points */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Key Policy Points</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-green mb-2" />
                <CardTitle className="text-lg">Successful Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Online payments once received will not be refunded for successful bill payment services.
                  Cancellation of applications or bill payments shall not be entertained.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <RefreshCw className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Failed Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  All failed transactions are automatically refunded as per the standard policy of the
                  respective bank. No manual intervention is required for failed transaction refunds.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-saffron mb-2" />
                <CardTitle className="text-lg">Refund Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Refund processing time varies by payment method and follows standard banking policies.
                  Please allow adequate time for the refund to reflect in your account.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Detailed Policy</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <CheckCircle className="h-6 w-6 text-green mr-3" />
                  Successful Bill Payments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Once an online payment is successfully processed and received for bill payment services,
                  it cannot be refunded. This policy ensures the integrity of our payment system and
                  prevents misuse. Cancellation requests for completed bill payments will not be entertained.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <RefreshCw className="h-6 w-6 text-primary mr-3" />
                  Automatic Refunds for Failed Transactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All failed transactions are automatically refunded according to the standard policies
                  of the respective banks. The refund process is initiated immediately upon transaction failure.
                </p>
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Refund Timeline by Payment Method:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• <strong>Net Banking/Debit Card:</strong> Standard number of business days</li>
                    <li>• <strong>Credit Card:</strong> Standard number of days (Next billing cycle)</li>
                    <li>• <strong>UPI/Digital Wallets:</strong> As per respective service provider policies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <AlertTriangle className="h-6 w-6 text-saffron mr-3" />
                  Important Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-saffron/10 border border-saffron/20 p-4 rounded-lg">
                  <p className="text-foreground font-medium mb-2">Verification Required</p>
                  <p className="text-muted-foreground text-sm">
                    We strongly request all taxpayers and users to carefully verify all bill details,
                    amounts, and recipient information before making any payment. Once a payment is
                    successfully processed, it cannot be reversed or cancelled.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Need Help?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            If you have questions about our cancellation policy or need assistance with a transaction,
            please contact our support team:
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
        </div>
      </section>

      <Footer />
    </div>
  )
}

