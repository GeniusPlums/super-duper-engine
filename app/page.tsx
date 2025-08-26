import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Smartphone, Banknote, Receipt, Shield, Users, Clock } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative tricolor-accent">
        <div className="absolute inset-0 z-0">
          <img
            src="/rural-indian-family-using-mobile-banking-services-.png"
            alt="Rural Indian family using mobile banking"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Simple Banking for <span className="text-primary">Rural India</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            JVMPay brings secure and easy financial services to your doorstep. Send money, pay bills, and access banking
            services with just a few taps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-tricolor-gradient text-white hover:opacity-90 text-lg px-8 py-3">
                Start Using JVMPay
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for digital banking, designed for simplicity and trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* AEPS */}
            <Card className="hover:shadow-lg transition-shadow tricolor-accent">
              <CardHeader className="text-center">
                <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <img
                    src="/fingerprint-scanner-device-aadhaar-authentication.png"
                    alt="AEPS Fingerprint Scanner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 bg-saffron rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">AEPS</CardTitle>
                <CardDescription>Aadhaar Enabled Payment System</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Use your Aadhaar and fingerprint to withdraw cash, check balance, and transfer money safely.
                </p>
                <Link href="/services/aeps">
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* DMT */}
            <Card className="hover:shadow-lg transition-shadow tricolor-accent">
              <CardHeader className="text-center">
                <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <img
                    src="/indian-family-receiving-money-transfer-mobile-bank.png"
                    alt="Money Transfer Service"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Banknote className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">DMT</CardTitle>
                <CardDescription>Domestic Money Transfer</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Send money instantly to any bank account across India. Fast, secure, and affordable.
                </p>
                <Link href="/services/dmt">
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Micro ATM */}
            <Card className="hover:shadow-lg transition-shadow tricolor-accent">
              <CardHeader className="text-center">
                <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <img
                    src="/micro-atm-device-at-local-indian-shop-rural-bankin.png"
                    alt="Micro ATM Device"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Micro ATM</CardTitle>
                <CardDescription>Mini Banking Services</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Complete ATM services at your local shop. Withdraw cash, deposit money, and check balance.
                </p>
                <Link href="/services/micro-atm">
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Bill Payments */}
            <Card className="hover:shadow-lg transition-shadow tricolor-accent">
              <CardHeader className="text-center">
                <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <img
                    src="/indian-person-paying-electricity-water-mobile-bill.png"
                    alt="Bill Payment Services"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 bg-green rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Receipt className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Bill Payments</CardTitle>
                <CardDescription>Pay All Your Bills</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Pay electricity, water, mobile, and other bills easily. Never miss a payment again.
                </p>
                <Link href="/services/bill-payments">
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose JVMPay?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by millions across India with the largest network of financial service providers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-muted rounded-lg tricolor-accent">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                <img
                  src="/network-of-retail-shops-across-india-map-coverage.png"
                  alt="Retail Network"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-3xl font-bold text-saffron mb-2">52,000+</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Retail Partners</h3>
              <p className="text-muted-foreground text-sm">
                Doorstep financial services available at your nearest shop
              </p>
            </div>

            <div className="text-center p-6 bg-muted rounded-lg tricolor-accent">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                <img
                  src="/distribution-network-logistics-delivery-trucks-ind.png"
                  alt="Distributor Network"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">8,000+</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Distributors</h3>
              <p className="text-muted-foreground text-sm">Ensuring smooth service delivery across all regions</p>
            </div>

            <div className="text-center p-6 bg-muted rounded-lg tricolor-accent">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                <img
                  src="/business-management-operations-team-india-fintech.png"
                  alt="Super Distributors"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-3xl font-bold text-green mb-2">1,600+</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Super Distributors</h3>
              <p className="text-muted-foreground text-sm">Managing seamless operations and network growth</p>
            </div>

            <div className="text-center p-6 bg-muted rounded-lg tricolor-accent">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                <img
                  src="/map-of-india-showing-complete-coverage-all-states.png"
                  alt="Pan-India Coverage"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-3xl font-bold text-saffron mb-2">All States</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Pan-India Coverage</h3>
              <p className="text-muted-foreground text-sm">
                Operating in all states and major territories across India
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">100% Secure & Trusted</h3>
              <p className="text-muted-foreground">
                Bank-level security with RBI compliance. Trusted by millions of users across urban and rural India.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Financial Inclusion</h3>
              <p className="text-muted-foreground">
                Bringing last-mile banking solutions to everyone. Designed specifically for rural India's needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Always Available</h3>
              <p className="text-muted-foreground">
                24/7 services through our vast network. Fast, reliable, and user-friendly fintech solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-tricolor-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of users who trust JVMPay for their daily financial needs
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white text-primary hover:bg-white/90">
              Start Using JVMPay Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
