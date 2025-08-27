import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Shield, Clock, CheckCircle, Smartphone, MapPin } from "lucide-react"
import Link from "next/link"

export default function MicroATMPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <CreditCard className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Micro ATM</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Complete ATM services at your local shop - Withdraw, deposit, and check balance easily
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-secondary">
              Find Micro ATM Near You
            </Button>
          </Link>
        </div>
      </section>

      {/* What is Micro ATM */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What is Micro ATM?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Micro ATM brings banking services to your neighborhood. It's a small device that works like a regular ATM
              but is available at local shops, medical stores, and other convenient locations near you.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              You can withdraw cash, deposit money, check your account balance, and get mini statements without
              traveling to a bank or ATM. It works with your debit card and PIN, just like a regular ATM.
            </p>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Available Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="text-center">
                <CreditCard className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Cash Withdrawal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Withdraw cash from your bank account using debit card and PIN
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Balance Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">Check your current account balance instantly</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Smartphone className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Mini Statement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">Get printed statement of your recent transactions</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Cash Deposit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">Deposit cash directly into your bank account</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How to Use Micro ATM</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Find Micro ATM Location</h3>
                <p className="text-muted-foreground">
                  Visit any shop or location with JVMPay Micro ATM service near you
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Insert Your Debit Card</h3>
                <p className="text-muted-foreground">Insert your bank debit card into the Micro ATM device</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Select Service</h3>
                <p className="text-muted-foreground">
                  Choose what you want to do - withdraw, deposit, balance check, or mini statement
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Enter PIN</h3>
                <p className="text-muted-foreground">Enter your 4-digit debit card PIN for security</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">5</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Complete Transaction</h3>
                <p className="text-muted-foreground">
                  Your transaction is processed and you receive cash, receipt, or statement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Use Micro ATM?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Nearby Location</h3>
              <p className="text-muted-foreground">Available at local shops in your neighborhood</p>
            </div>

            <div className="text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Extended Hours</h3>
              <p className="text-muted-foreground">Available during shop hours, often longer than bank hours</p>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Same Security</h3>
              <p className="text-muted-foreground">Same security as regular ATM with PIN protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Use Micro ATM Today</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Banking services available right in your neighborhood
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Find Location Near You
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
