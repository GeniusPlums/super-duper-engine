import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Users, Phone, Mail, FileText, Database, UserCheck } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            How we protect your personal information and comply with Indian data protection laws
          </p>
          <p className="text-sm text-muted-foreground">Last updated: December 2024</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Introduction</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              MudraPe ("MudraPe", "we", "our", "us") is committed to protecting your privacy and
              ensuring that your personal information is handled responsibly. This Privacy Policy outlines how we
              collect, process, store, and share your information in compliance with the Digital Personal Data
              Protection Act, 2023 (DPDP Act), RBI guidelines, and other applicable laws of India.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Information We Collect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Personal Identification Data</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Name, date of birth</li>
                  <li>• Aadhaar number</li>
                  <li>• PAN details</li>
                  <li>• Address</li>
                  <li>• Contact details</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Financial Data</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Bank account details</li>
                  <li>• Transaction history</li>
                  <li>• Settlement information</li>
                  <li>• Payment records</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Device & Usage Data</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• IP address</li>
                  <li>• Device identifiers</li>
                  <li>• Cookies</li>
                  <li>• App usage behavior</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <UserCheck className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Biometric Data</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Fingerprint data</li>
                  <li>• Iris scan data</li>
                  <li>• For AEPS services only</li>
                  <li>• Secure authentication</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Purpose of Processing</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Service Provision</h3>
                <p className="text-muted-foreground">
                  To provide services such as AEPS, DMT, BBPS, recharges, and travel bookings.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Regulatory Compliance</h3>
                <p className="text-muted-foreground">
                  To comply with RBI and NPCI regulations, anti-money laundering (AML) laws, and KYC norms.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Service Improvement</h3>
                <p className="text-muted-foreground">To improve services through analytics and customer feedback.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Fraud Prevention</h3>
                <p className="text-muted-foreground">To prevent fraud, unauthorized access, or misuse of services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Data Sharing & Disclosure</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We may share your data with the following entities as required for service provision and legal compliance:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Regulatory Authorities</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Banks and NBFCs</li>
                    <li>• NPCI (National Payments Corporation of India)</li>
                    <li>• RBI (Reserve Bank of India)</li>
                    <li>• Other regulatory authorities as required</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Service Partners</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Payment processors</li>
                    <li>• Technology partners</li>
                    <li>• Third-party vendors (bound by confidentiality)</li>
                    <li>• Law enforcement (when mandated by law)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Data Security</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Industry-Standard Encryption</h3>
              <p className="text-muted-foreground text-sm">
                Advanced encryption protocols to protect data in transit and at rest.
              </p>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Multi-Factor Authentication</h3>
              <p className="text-muted-foreground text-sm">
                Multiple layers of authentication for secure access control.
              </p>
            </div>

            <div className="text-center">
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Continuous Monitoring</h3>
              <p className="text-muted-foreground text-sm">
                24/7 monitoring systems to detect and prevent security threats.
              </p>
            </div>

            <div className="text-center">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Secure Firewalls</h3>
              <p className="text-muted-foreground text-sm">Advanced firewall protection to safeguard user data.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">User Rights</h2>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    As per DPDP Act, you have the right to:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <span className="text-primary">•</span>
                        <span>Access your personal data</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary">•</span>
                        <span>Request corrections or updates</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary">•</span>
                        <span>Request deletion (where legally permissible)</span>
                      </li>
                    </ul>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <span className="text-primary">•</span>
                        <span>Withdraw consent for non-essential data processing</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary">•</span>
                        <span>File complaints with data protection authorities</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary">•</span>
                        <span>Receive information about data breaches</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    To exercise any of these rights, please contact us using the information provided below. We will
                    respond to your request within the timeframe specified by applicable law.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Questions About Privacy?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            If you have any questions about this Privacy Policy or how we handle your information, please contact us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-primary-foreground">
              <Phone className="h-5 w-5" />
              <span>+91 12345 67890</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-primary-foreground">
              <Mail className="h-5 w-5" />
              <span>privacy@mudrape.com</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
