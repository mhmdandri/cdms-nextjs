import { steps } from "@/lib/landingPage";
import { ArrowRight } from "lucide-react";
import React from "react";

const Hiw = () => {
  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-2">
            How It Workds
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in three simple steps
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-6xl font-bold text-[#F97316]/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-8 w-8 h-8 text-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hiw;
