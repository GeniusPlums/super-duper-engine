import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Terms & Conditions of Use</h1>

          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <section className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing JVM Pay services, you agree to these Terms & Conditions. JVM Pay may update these terms
                periodically, and continued use of services will be considered acceptance.
              </p>
            </section>

            {/* Eligibility */}
            <section className="bg-white border border-blue-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Eligibility</h2>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Must be 18 years or older.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Must complete KYC verification as per RBI norms.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Use of services must be for lawful purposes only.
                </li>
              </ul>
            </section>

            {/* Service Usage */}
            <section className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Service Usage</h2>
              <ul className="text-gray-700 leading-relaxed space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  AEPS, money transfer, bill payments, recharges, and other services are subject to transaction limits
                  set by RBI.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  JVM Pay is not liable for delays caused by banks, technical outages, or third-party service providers.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Users are responsible for ensuring accurate beneficiary/account details.
                </li>
              </ul>
            </section>

            {/* Account Suspension & Termination */}
            <section className="bg-white border border-blue-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Account Suspension & Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-3">JVM Pay may suspend or terminate services if:</p>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Fraudulent or suspicious activity is detected.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Regulatory or legal obligations require it.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  User violates these terms.
                </li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                JVM Pay shall not be liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            {/* Jurisdiction */}
            <section className="bg-white border border-blue-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Jurisdiction</h2>
              <p className="text-gray-700 leading-relaxed">
                All disputes are subject to the jurisdiction of courts in New Delhi, India.
              </p>
            </section>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg text-center">
            <p className="text-sm text-gray-600">
              For questions about these Terms & Conditions, please contact us at{" "}
              <a href="mailto:support@mudrape.com" className="text-blue-600 hover:underline">
                support@mudrape.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
