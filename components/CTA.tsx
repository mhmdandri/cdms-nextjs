"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const router = useRouter();

  return (
    <section
      className="py-20 
      bg-linear-to-br from-primary to-primary/80 
      text-primary-foreground"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6">
          Start Managing Your Depot Today
        </h2>

        {/* Subtitle */}
        <p className="text-lg lg:text-xl text-primary-foreground/80 mb-8">
          Join 500+ depots worldwide that trust CDMS for their container
          operations
        </p>

        {/* Button */}
        <button
          onClick={() => router.push("/auth/login")}
          className="px-8 py-4 
          bg-background text-foreground 
          rounded-lg 
          hover:bg-background/90 
          transition-all duration-200 
          font-medium 
          shadow-sm hover:shadow-md 
          inline-flex items-center gap-2"
        >
          Get Started Free
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default CTA;
