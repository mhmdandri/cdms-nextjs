import { Container } from "lucide-react";
import Image from "next/image";
import React from "react";

const Illustration = () => {
  return (
    <>
      <div className="absolute inset-0 bg-black/20"></div>
      <Image
        src="/ilustration.jpg"
        alt="ilustration"
        sizes="100%"
        fill
        priority
        className="object-cover absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparet"></div>
      <div className="relative z-10 flex flex-col justify-end p-12 text-white">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop:blur-sm rounded-2xl mb-6">
            <Container className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold mb-3">Welcome to CDMS</h1>
          <p className="text-lg text-blue-100">
            Manage your container operations efficiently with our comprehensive
            depot management system
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
          <div>
            <div className="text-3xl font-bold">1,247</div>
            <div className="text-sm text-blue-200">Containers</div>
          </div>
          <div>
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-sm text-blue-200">Operations</div>
          </div>
          <div>
            <div className="text-3xl font-bold">99%</div>
            <div className="text-sm text-blue-200">Uptime</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Illustration;
