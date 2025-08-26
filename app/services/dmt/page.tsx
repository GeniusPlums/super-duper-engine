import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Banknote, Shield, Clock, CheckCircle, Smartphone, Users } from "lucide-react"
import Link from "next/link"

export default function DMTPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Banknote className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">DMT Service</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Domestic Money Transfer - Send money instantly to any bank account in India
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-secondary">
              Start Sending Money
            </Button>
          </Link>
        </div>
      </section>

      {/* What is DMT */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What is DMT?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              DMT (Domestic Money Transfer) facilitates immediate money transfers across India, ensuring quick access to
              funds for your family and business needs. Our service is operational around the clock, including weekends
              and bank holidays, so you can send money whenever you need to.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With universal banking support, you can transfer money to any bank account in India. The money reaches the
              recipient's bank account within minutes with real-time tracking, and they get an SMS confirmation. It's
              safe, fast, and much cheaper than traditional money transfer methods.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">DMT Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Instant Fund Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Facilitates immediate money transfers across India, ensuring quick access to funds within minutes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>High Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Offers a reliable transaction experience with a robust success rate and bank-level security
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Banknote className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Service is operational around the clock, including weekends and bank holidays
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Universal Banking Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Allows transactions to any bank account in India, enhancing accessibility for all users
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Smartphone className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Real-Time Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Users can track their transactions in real-time, providing peace of mind with SMS updates
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Seamless Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Designed for both retailers and consumers, ensuring a smooth transaction process with printed receipts
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Send Money */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How to Send Money</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Visit JVMPay Agent</h3>
                <p className="text-muted-foreground">Go to your nearest JVMPay agent with your ID proof</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Provide Recipient Details</h3>
                <p className="text-muted-foreground">Give recipient's name, mobile number, and bank account details</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Enter Amount</h3>
                <p className="text-muted-foreground">Tell the agent how much money you want to send</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Pay Cash</h3>
                <p className="text-muted-foreground">Pay the amount plus small service charge in cash</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">5</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Get Receipt</h3>
                <p className="text-muted-foreground">
                  Receive printed receipt and SMS confirmation. Money is sent instantly!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charges */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Transfer Charges</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Amount Range</h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">₹1 - ₹1,000</p>
                    <p className="text-muted-foreground">₹1,001 - ₹5,000</p>
                    <p className="text-muted-foreground">₹5,001 - ₹25,000</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Service Charge</h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">₹5 only</p>
                    <p className="text-muted-foreground">₹10 only</p>
                    <p className="text-muted-foreground">₹15 only</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  * Maximum ₹25,000 per transaction. Daily limit: ₹25,000 per mobile number.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Send Money Today</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Fast, safe, and affordable money transfer to anywhere in India
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
