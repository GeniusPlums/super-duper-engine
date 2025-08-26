import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">Cookie Policy</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding how JVM Pay uses cookies to enhance your experience
            </p>
          </div>

          {/* Acceptance of Terms */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing JVM Pay services, you agree to these Terms & Conditions and our use of cookies as described
                in this policy.
              </p>
            </CardContent>
          </Card>

          {/* Use of Cookies */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Use of Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website and mobile app use cookies and similar technologies to improve user experience. Cookies are
                small text files placed on your device to track preferences and usage patterns, helping us provide
                better and more personalized services.
              </p>
            </CardContent>
          </Card>

          {/* Types of Cookies */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-6">Types of Cookies Used</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary">Essential Cookies</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Required for login, payment processing, and account security. These cookies are necessary for the
                    basic functioning of our services.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary">Performance Cookies</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Collect anonymous data on site usage for analytics. Help us understand how users interact with our
                    platform to improve services.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary">Functional Cookies</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Store user preferences such as language settings and location preferences to provide a personalized
                    experience.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary">Advertising Cookies</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Track engagement with JVM Pay promotions and advertisements to show relevant offers and measure
                    campaign effectiveness.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Managing Cookies */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Managing Cookies</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Users can disable cookies via browser or app settings. Most web browsers automatically accept cookies,
                  but you can modify your browser settings to decline cookies if you prefer.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Important:</strong> Some JVM Pay services may not function properly if cookies are disabled.
                    Essential cookies are required for secure transactions and account access.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Consent */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Consent</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using our website and mobile application, you consent to the use of cookies as outlined in this
                policy. Your continued use of JVM Pay services indicates your acceptance of our cookie practices.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Questions About Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about our use of cookies or this Cookie Policy, please contact our support
                team. We are committed to transparency and will help you understand how we use cookies to improve your
                JVM Pay experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
