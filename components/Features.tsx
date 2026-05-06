import { features } from "@/lib/landingPage";
import React from "react";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Powerful Features for Modern Depots
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to manage your container depot efficiently and
            effectively
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group 
                bg-card border border-border 
                rounded-xl p-6 
                transition-all duration-200 
                hover:shadow-md hover:-translate-y-1"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 
                  bg-primary/10 text-primary 
                  rounded-lg flex items-center justify-center mb-4 
                  transition-colors group-hover:bg-primary/15"
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>

                {/* Desc */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
