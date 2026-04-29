"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const NavbarMobile = () => {
  const router = useRouter();
  return (
    <div className="md:hidden border-t border-gray-200 bg-white">
      <div className="px-4 py-4 space-y-3">
        <Link
          href="#features"
          className="block text-gray-600 hover:text-gray-900"
        >
          Features
        </Link>
        <Link
          href="#benefits"
          className="block text-gray-600 hover:text-gray-900"
        >
          Benefits
        </Link>
        <Link
          href="#pricing"
          className="block text-gray-600 hover:text-gray-900"
        >
          Pricing
        </Link>
        <Link
          href="#testimonials"
          className="block text-gray-600 hover:text-gray-900"
        >
          Testimonials
        </Link>
        <button
          onClick={() => router.push("/login")}
          className="block w-full text-left text-gray-600 hover:text-gray-900"
        >
          Sign In
        </button>
        <button
          onClick={() => router.push("/login")}
          className="block w-full px4 py-2 bg-primary text-white rounded-lg hover:bg-blue-800 transition-colors text-center"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavbarMobile;
