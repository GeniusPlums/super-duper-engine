import Link from "next/link"
import { Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image src="/jvmpay-logo.png" alt="JVMPay Logo" width={120} height={40} className="h-10 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering rural India with simple and secure financial services. Making digital payments accessible to
              everyone.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <div className="space-y-2">
              <Link
                href="/services/aeps"
                className="block text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                AEPS
              </Link>
              <Link
                href="/services/dmt"
                className="block text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                DMT
              </Link>
              <Link
                href="/services/micro-atm"
                className="block text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Micro ATM
              </Link>
              <Link
                href="/services/bill-payments"
                className="block text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Bill Payments
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-muted-foreground hover:text-primary text-sm transition-colors">
                About Us
              </Link>
              <Link
                href="/privacy"
                className="block text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="block text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Cookie Policy
              </Link>
              <Link href="/terms" className="block text-muted-foreground hover:text-primary text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link
                href="/support"
                className="block text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Support
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">support@jvmpay.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">Gurgaon, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 JVMPay. All rights reserved. | Empowering Rural India with Digital Finance
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
