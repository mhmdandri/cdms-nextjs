"use client";
import { ArrowRight, Zap } from "lucide-react";
import React from "react";
import { useRouter } from "@bprogress/next";
import Image from "next/image";

const Hero = () => {
  const router = useRouter();

  return (
    <section
      id="hero"
      className="relative overflow-hidden 
      bg-linear-to-b from-background to-muted/40 
      py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 
              bg-primary/10 text-primary 
              rounded-full text-sm font-medium mb-6"
            >
              <Zap className="h-4 w-4" />
              Trusted by 500+ Depots Worldwide
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6">
              Smart Container Depot Management System
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              Streamline your container operations, track inventory in
              real-time, and optimize yard efficiency with our comprehensive
              depot management solution
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => router.push("/auth/register")}
                className="cursor-pointer px-8 py-4 
                bg-primary text-primary-foreground 
                rounded-lg 
                hover:bg-primary/90 
                transition-all duration-200 
                font-medium 
                shadow-sm hover:shadow-md 
                flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </button>

              <button
                className="cursor-pointer px-8 py-4 
                border border-border 
                text-foreground 
                rounded-lg 
                hover:bg-muted 
                transition-colors 
                font-medium"
              >
                Request Demo
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative w-full aspect-video">
            {/* Glow background */}
            <div
              className="absolute inset-0 
              bg-linear-to-tr 
              from-primary/20 to-primary/5 
              rounded-2xl blur-3xl"
            ></div>

            <Image
              src="/hero.jpeg"
              alt="container"
              sizes="100%"
              fill
              priority
              className="relative rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
