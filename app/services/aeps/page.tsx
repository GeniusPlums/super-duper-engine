import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Shield, Clock, CheckCircle, Fingerprint, CreditCard } from "lucide-react"
import Link from "next/link"

export default function AEPSPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Smartphone className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Aadhaar-Enabled Payment Innovations</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Empowering Payments through Aadhaar Technology - Secure banking with just your fingerprint, no cards needed
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-secondary">
              Get Started with AEPS
            </Button>
          </Link>
        </div>
      </section>

      {/* What is AEPS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What is AEPS?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              AEPS (Aadhaar Enabled Payment System) allows cash withdrawals, balance inquiries, and mini statements
              through secure Aadhaar authentication. Using advanced biometric security, it ensures safe transactions
              with your unique fingerprint, eliminating the need for debit cards or mobile wallets.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Specially designed for financial inclusion, AEPS targets rural and unbanked populations across India,
              promoting financial access for all. Experience quick and hassle-free transactions that enhance customer
              satisfaction while bringing banking services to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What You Can Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <CreditCard className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Cash Withdrawal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Withdraw cash from your bank account using Aadhaar and fingerprint authentication
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Balance Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Check your bank account balance instantly with biometric verification
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Smartphone className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Mini Statement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">Get your last 10 transactions printed securely</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Fingerprint className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Aadhaar Pay</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Direct payments from Aadhaar-linked bank accounts, streamlining transactions
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Biometric Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Advanced biometric authentication ensures maximum security for all transactions
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>No Card Needed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Eliminates the need for debit cards or mobile wallets - just your fingerprint
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How to Use AEPS</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Visit JVMPay Agent</h3>
                <p className="text-muted-foreground">Find your nearest JVMPay agent or shop with AEPS service</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Provide Aadhaar Number</h3>
                <p className="text-muted-foreground">Tell the agent your 12-digit Aadhaar number</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Select Your Bank</h3>
                <p className="text-muted-foreground">Choose your bank from the list shown on screen</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Scan Fingerprint</h3>
                <p className="text-muted-foreground">Place your finger on the scanner for verification</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">5</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Complete Transaction</h3>
                <p className="text-muted-foreground">
                  Your transaction is processed and you receive your cash or receipt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose AEPS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Biometric Security</h3>
              <p className="text-muted-foreground">
                Advanced biometric authentication ensures secure transactions using your unique fingerprint
              </p>
            </div>

            <div className="text-center">
              <Fingerprint className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No Cards or PINs</h3>
              <p className="text-muted-foreground">
                Eliminates the need for debit cards, mobile wallets, or remembering PIN numbers
              </p>
            </div>

            <div className="text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Quick & Hassle-Free</h3>
              <p className="text-muted-foreground">
                Swift transaction experience available 24/7 at our agent locations
              </p>
            </div>
          </div>

          <div className="mt-12 text-center bg-muted rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Financial Inclusion for All</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              AEPS specifically targets rural and unbanked populations, bringing essential banking services to every
              corner of India. Our mission is to promote financial access for all, ensuring no one is left behind in the
              digital banking revolution.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Use AEPS?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Find your nearest JVMPay agent and start using AEPS today
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
