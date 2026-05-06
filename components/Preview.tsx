import { Clock, TrendingUp } from "lucide-react";
import Image from "next/image";
import React from "react";

const Preview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Intuitive Dashboard Interface
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor your entire depot operation from a single, powerful
            dashboard
          </p>
        </div>

        <div className="relative">
          {/* Glow */}
          <div
            className="absolute inset-0 
            bg-gradient-to-tr from-primary/15 to-primary/5 
            rounded-2xl blur-3xl"
          />

          {/* Image Card */}
          <div className="relative bg-card rounded-2xl shadow-xl border border-border p-4">
            <Image
              src="/prev-image.jpg"
              alt="dashboard preview"
              priority
              width={1080}
              height={720}
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* Card 1 */}
          <div
            className="absolute top-8 -left-4 lg:left-8 
            bg-card border border-border 
            rounded-lg shadow-md p-4 max-w-xs"
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-8 h-8 
                bg-primary/10 text-primary 
                rounded flex items-center justify-center"
              >
                <TrendingUp className="w-4 h-4" />
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Container Efficiency
                </p>
                <p className="text-lg font-semibold text-foreground">+45%</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="absolute bottom-8 -right-4 lg:right-8 
            bg-card border border-border 
            rounded-lg shadow-md p-4 max-w-xs"
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-8 h-8 
                bg-primary/10 text-primary 
                rounded flex items-center justify-center"
              >
                <Clock className="w-4 h-4" />
              </div>

              <div>
                <p className="text-xs text-muted-foreground">Processing Time</p>
                <p className="text-lg font-semibold text-foreground">-60%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
