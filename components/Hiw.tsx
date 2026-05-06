import { steps } from "@/lib/landingPage";
import { ArrowRight } from "lucide-react";
import React from "react";

const Hiw = () => {
  return (
    <section className="py-20 bg-linear-to-b from-background to-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-foreground mb-2">
            How It Works
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started in three simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div
                className="bg-card border border-border 
                rounded-xl p-8 
                transition-all duration-200 
                hover:shadow-md hover:-translate-y-1"
              >
                {/* Number */}
                <div
                  className="text-5xl font-bold 
                  text-primary/20 mb-4"
                >
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <ArrowRight
                  className="hidden md:block 
                  absolute top-1/2 -right-8 
                  w-8 h-8 text-muted-foreground/40"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hiw;
