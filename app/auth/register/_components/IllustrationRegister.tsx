import { Container } from "lucide-react";
import Image from "next/image";
import React from "react";

const IllustrationRegister = () => {
  return (
    <div className="hidden lg:flex lg:w-1/2 relative bg-linear-to-br from-[#1E3A8A] to-[#1E40AF] overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <Image
        src="/ilustration.jpg"
        alt="registerIllustration"
        fill
        priority
        sizes="100%"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent"></div>
      <div className="relative z-10 flex flex-col justify-end p-12 text-white">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
            <Container className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold mb-3">
            Join 500+ Depots Worldwide
          </h1>
          <p className="text-lg text-blue-100">
            Start managing your container operations efficiently with CDMS
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 pt-8 border-t border-white/20">
          <div>
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-sm text-blue-200">Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold">99.9%</div>
            <div className="text-sm text-blue-200">Uptime</div>
          </div>
          <div>
            <div className="text-3xl font-bold">500+</div>
            <div className="text-sm text-blue-200">Client</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IllustrationRegister;
