"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image src="/jvmpay-logo.png" alt="JVMPay Logo" width={120} height={40} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors">Services</button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/services/aeps"
                  className="block px-4 py-2 text-card-foreground hover:bg-muted rounded-t-lg"
                >
                  AEPS
                </Link>
                <Link href="/services/dmt" className="block px-4 py-2 text-card-foreground hover:bg-muted">
                  DMT
                </Link>
                <Link href="/services/micro-atm" className="block px-4 py-2 text-card-foreground hover:bg-muted">
                  Micro ATM
                </Link>
                <Link
                  href="/services/bill-payments"
                  className="block px-4 py-2 text-card-foreground hover:bg-muted rounded-b-lg"
                >
                  Bill Payments
                </Link>
              </div>
            </div>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </Link>
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-secondary">Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/services/aeps" className="block px-3 py-2 text-foreground hover:text-primary">
                AEPS
              </Link>
              <Link href="/services/dmt" className="block px-3 py-2 text-foreground hover:text-primary">
                DMT
              </Link>
              <Link href="/services/micro-atm" className="block px-3 py-2 text-foreground hover:text-primary">
                Micro ATM
              </Link>
              <Link href="/services/bill-payments" className="block px-3 py-2 text-foreground hover:text-primary">
                Bill Payments
              </Link>
              <Link href="/about" className="block px-3 py-2 text-foreground hover:text-primary">
                About Us
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-foreground hover:text-primary">
                Contact Us
              </Link>
              <div className="px-3 py-2">
                <Link href="/contact">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-secondary">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
