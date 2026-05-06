"use client";
import { Menu, Package, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "@bprogress/next";
import NavbarMobile from "./mobile/NavbarMobile";

const Navbar = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/90 dark:bg-primary/80 flex items-center justify-center shadow-sm">
              <Package className="w-5 h-5 text-primary-foreground" />
            </div>

            <span className="text-xl font-semibold tracking-tight text-foreground">
              CDMS
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Features
            </Link>
            <Link
              href="#benefits"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Benefits
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Testimonials
            </Link>

            <button
              onClick={() => router.push("/auth/login")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Sign In
            </button>

            {/* CTA */}
            <button
              onClick={() =>
                router.push("/auth/register", {
                  scroll: false,
                  startPosition: 0.3,
                })
              }
              className="text-sm px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get Started
            </button>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && <NavbarMobile />}
    </nav>
  );
};

export default Navbar;
