"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const router = useRouter();
  return (
    <section className="py-20 bg-linear-to-br from-[#1E3A8A] to-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          Start Managing Your Depot Today
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join 500+ depots worldwide that trust CDMS for their container
          operations
        </p>
        <button
          onClick={() => router.push("/auth/login")}
          className="px-8 py-4 bg-white text-[#1E3A8A] rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg inline-flex items-center gap-2"
        >
          Get Started Free
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default CTA;
