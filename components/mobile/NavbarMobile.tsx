"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "@bprogress/next";

const NavbarMobile = () => {
  const router = useRouter();

  return (
    <div className="md:hidden border-t border-border bg-background">
      <div className="px-4 py-4 space-y-3">
        {/* Links */}
        {[
          { href: "#features", label: "Features" },
          { href: "#benefits", label: "Benefits" },
          { href: "#pricing", label: "Pricing" },
          { href: "#testimonials", label: "Testimonials" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block text-muted-foreground hover:text-foreground transition-colors"
          >
            {item.label}
          </Link>
        ))}

        {/* Sign In */}
        <button
          onClick={() =>
            router.push("/auth/login", { scroll: false, startPosition: 0.3 })
          }
          className="block w-full text-left 
          text-muted-foreground hover:text-foreground 
          transition-colors"
        >
          Sign In
        </button>

        {/* CTA */}
        <button
          onClick={() =>
            router.push("/auth/login", { scroll: false, startPosition: 0.3 })
          }
          className="block w-full px-4 py-2 
          bg-primary text-primary-foreground 
          rounded-lg 
          hover:bg-primary/90 
          transition-all text-center font-medium shadow-sm"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavbarMobile;
