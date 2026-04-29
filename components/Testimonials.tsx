import { testimonials } from "@/lib/landingPage";
import { Star } from "lucide-react";
import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of statisfied depot operators worldwide
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#F97316] text-[#F97316]"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &ldquo;{testi.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-gray-900">{testi.author}</p>
                <p className="font-sm text-gray-600">{testi.role}</p>
                <p className="text-sm text-gray-500">{testi.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
