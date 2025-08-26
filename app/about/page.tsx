import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Shield, Target, Award, MapPin } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About JVMPay</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Empowering Rural India with Simple and Secure Financial Services
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Who We Are</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Jaharvir Infinet Pvt Ltd is a leading fintech service provider empowering digital financial transactions
              across India. With a strong focus on financial inclusion, we deliver secure, fast, and user-friendly
              solutions that connect millions of Indians to essential financial services.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              From urban centers to remote villages, Jaharvir Infinet is building a trusted digital ecosystem that
              simplifies banking and makes financial services accessible to everyone.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              JVMPay was born from a simple belief: everyone deserves access to safe and easy financial services, no
              matter where they live. We saw that people in rural areas often had to travel long distances just to
              withdraw money, send funds to family, or pay their bills.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our founders, who grew up in small towns, understood these challenges firsthand. They decided to bring
              banking services directly to rural communities through technology that is simple, secure, and accessible
              to everyone.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Today, JVMPay serves thousands of customers across India, helping them manage their money with confidence
              and convenience. We are proud to be a trusted partner in their financial journey.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  To make financial services accessible, affordable, and easy to use for every person in rural India. We
                  believe that distance should never be a barrier to managing your money safely.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  To create a financially inclusive India where every person, regardless of their location, has the
                  tools and services they need to build a better future for themselves and their families.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Trust & Security</h3>
              <p className="text-muted-foreground">
                Your money and personal information are always safe with us. We use the highest security standards to
                protect every transaction.
              </p>
            </div>

            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Customer First</h3>
              <p className="text-muted-foreground">
                Everything we do is focused on making your life easier. We listen to your needs and constantly improve
                our services.
              </p>
            </div>

            <div className="text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Simplicity</h3>
              <p className="text-muted-foreground">
                We believe financial services should be simple and easy to understand. No complicated processes or
                confusing terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What Makes Us Different</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Local Presence</h3>
                <p className="text-muted-foreground">
                  We work with local agents and shops in your area, so you always have someone nearby who can help you
                  with your financial needs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Understanding Rural Needs</h3>
                <p className="text-muted-foreground">
                  Our team comes from rural backgrounds and understands the unique challenges you face. We design our
                  services specifically for rural communities.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  Thousands of customers trust us with their money every day. We have successfully processed millions of
                  transactions safely and securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Our Commitment to You</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            We promise to always put your needs first, keep your money safe, and make financial services as simple as
            possible. Your trust is our most valuable asset.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" variant="secondary">
                Start Using JVMPay
              </Button>
            </Link>
            <Link href="/privacy">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Read Privacy Policy
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
