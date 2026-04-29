import { Clock, TrendingUp } from "lucide-react";
import Image from "next/image";
import React from "react";

const Preview = () => {
  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Intuitive Dashboard Interface
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor your entire dpepot operation from a single, powerful
            dashboard
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-tr from-[#1E3A8A]/10 to-[#F97316]/10 rounded-2xl blur-3xl"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-4">
            <Image
              src="/prev-image.jpg"
              alt="dashboardprev"
              priority
              width={1080}
              height={720}
              className="rounded-lg w-full"
            />
          </div>
          <div className="absolute top-8 -left-4 lg:left-8 bg-white rounded-lg shadow-xl p-4 max-w-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Container Efficiency</p>
                <p className="text-lg font-bold text-gray-900">+45%</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 -right-4 lg:right-8 bg-white rounded-lg shadow-xl p-4 max-w-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                <Clock className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Processing Time</p>
                <p className="text-lg font-bold text-gray-900">-60%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
