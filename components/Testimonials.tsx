import { testimonials } from "@/lib/landingPage";
import { Star } from "lucide-react";
import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of satisfied depot operators worldwide
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <div
              key={index}
              className="bg-card border border-border 
              rounded-xl p-8 
              transition-all duration-200 
              hover:shadow-md hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                &ldquo;{testi.quote}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testi.author}</p>
                <p className="text-sm text-muted-foreground">{testi.role}</p>
                <p className="text-xs text-muted-foreground/70">
                  {testi.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
