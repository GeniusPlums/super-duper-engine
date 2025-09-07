import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Receipt, Shield, Clock, CheckCircle, Smartphone, Zap, Droplets, Wifi } from "lucide-react"
import Link from "next/link"

export default function BillPaymentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Receipt className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Bill Payments</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Pay all your bills easily - Electricity, Water, Mobile, DTH, and more
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-secondary">
              Start Paying Bills
            </Button>
          </Link>
        </div>
      </section>

      {/* What is Bill Payment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Easy Bill Payments</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Never miss a bill payment again! With mudrape bill payment service, you can pay all your monthly bills
              quickly and safely. No need to stand in long queues or worry about due dates.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Pay electricity, water, gas, mobile, DTH, broadband, and many other bills instantly. Get confirmation SMS
              and receipt for every payment you make.
            </p>
          </div>
        </div>
      </section>

      {/* Bills You Can Pay */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Bills You Can Pay</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Electricity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Pay your electricity bill for all major power boards
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Droplets className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Water & Gas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">Pay water and gas bills for municipal corporations</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Smartphone className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Mobile & DTH</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">Recharge mobile and pay DTH bills for all operators</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Wifi className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Broadband</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">Pay broadband and internet bills for all providers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Pay Bills */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How to Pay Bills</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Visit mudrape Agent</h3>
                <p className="text-muted-foreground">Go to your nearest mudrape agent with your bill or bill details</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Provide Bill Details</h3>
                <p className="text-muted-foreground">
                  Give your consumer number, mobile number, and bill amount to the agent
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Verify Amount</h3>
                <p className="text-muted-foreground">Agent will fetch your bill and show you the amount to pay</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Pay Cash</h3>
                <p className="text-muted-foreground">Pay the bill amount plus small service charge in cash</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">5</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Get Confirmation</h3>
                <p className="text-muted-foreground">
                  Receive printed receipt and SMS confirmation. Your bill is paid instantly!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Pay Bills with mudrape?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Instant Payment</h3>
              <p className="text-muted-foreground">Bills are paid instantly and you get immediate confirmation</p>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">100% Safe</h3>
              <p className="text-muted-foreground">Secure payment system with transaction tracking</p>
            </div>

            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No Late Fees</h3>
              <p className="text-muted-foreground">Pay bills on time and avoid late payment charges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Bills */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Popular Bill Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Utility Bills</CardTitle>
                <CardDescription>Essential services for your home</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Electricity (MSEB, BSES, CESC, etc.)</li>
                  <li>• Water (Municipal Corporations)</li>
                  <li>• Gas (Indane, Bharat Gas, HP Gas)</li>
                  <li>• Piped Gas (IGL, MGL, etc.)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Communication Bills</CardTitle>
                <CardDescription>Stay connected with family and friends</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Mobile Recharge (All Operators)</li>
                  <li>• DTH (Tata Sky, Airtel, Dish TV, etc.)</li>
                  <li>• Broadband (BSNL, Airtel, Jio, etc.)</li>
                  <li>• Landline (BSNL, MTNL, etc.)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Pay Your Bills Today</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Quick, safe, and convenient bill payment service at your doorstep
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Find Agent Near You
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
