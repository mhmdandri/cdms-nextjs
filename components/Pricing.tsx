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
      className="py-20 bg-linear-to-b from-background to-muted/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your depot size and needs
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border 
              transition-all duration-200 
              ${
                plan.highlighted
                  ? "bg-card border-primary shadow-xl scale-105"
                  : "bg-card border-border hover:shadow-md"
              }`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 
                  px-4 py-1 bg-primary text-primary-foreground 
                  text-xs font-medium rounded-full shadow-sm"
                >
                  Most Popular
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground ml-2">
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                onClick={() => router.push("/auth/login")}
                className={`w-full py-3 rounded-lg font-medium 
                transition-all duration-200 
                ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md"
                    : "bg-muted text-foreground hover:bg-muted/80"
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
