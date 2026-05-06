import { benefits } from "@/lib/landingPage";
import React from "react";

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Transform Your Operations
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience measurable improvements in efficiency, accuracy, and
            profitability
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center group transition-transform duration-200 hover:-translate-y-1"
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 
                  bg-gradient-to-br from-primary/90 to-primary/70 
                  rounded-2xl flex items-center justify-center 
                  mx-auto mb-4 
                  shadow-sm group-hover:shadow-md transition-shadow"
                >
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
