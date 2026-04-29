"use client";
import { pricingPlans } from "@/lib/landingPage";
import { Check } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
const Pricing = () => {
  const router = useRouter();
  return (
    <section
      id="pricing"
      className="py-20 bg-linear-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your depot size and needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 border-2 ${
                plan.highlighted
                  ? "border-[#1E3A8A] shadow-2xl scale-105"
                  : "border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block px-4 py-1 bg-[#F97316] text-white text-sm font-medium rounded-full mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-600 ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => router.push("/auth/login")}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-[#1E3A8A] text-white hover:bg-blue-800"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
