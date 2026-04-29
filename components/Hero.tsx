"use client";
import { ArrowRight, Zap } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Hero = () => {
  const router = useRouter();
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-linear-to-b from-blue-50 to-white py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-primary rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              Trusted by 500+ Depots Worldwide
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Smart Container Depot Management System
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Streamline your conatiner operations, track inventory in
              real-time, and optimize yard efficiency with out comprehensive
              depot management solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => router.push("/login")}
                className="cursor-pointer px-8 py-4 bg-primary text-white rounded-lg hover:bg-blue-800 transition-colors font-medium shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
              <button className="cursor-pointer px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-medium">
                Request Demo
              </button>
            </div>
          </div>
          <div className="relative w-full aspect-video">
            <div className="absolute inset-0 bg-linear-to-tr from-[#1E3A8A]/20 to-[#F97316]/20 rounded-2xl blur-3xl"></div>
            <Image
              src="/hero.jpeg"
              alt="container"
              sizes="100%"
              fill
              priority
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
