import { Container } from "lucide-react";
import Image from "next/image";
import React from "react";

const Illustration = () => {
  return (
    <>
      {/* Image */}
      <Image
        src="/ilustration.jpg"
        alt="illustration"
        sizes="100%"
        fill
        priority
        className="object-cover absolute inset-0 w-full h-full"
      />

      {/* Overlay (lebih soft & modern) */}
      <div
        className="absolute inset-0 bg-linear-to-t 
        from-black/70 via-black/40 to-black/10"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end p-12 text-white">
        <div className="mb-8">
          {/* Logo */}
          <div
            className="inline-flex items-center justify-center w-16 h-16 
            bg-white/10 backdrop-blur-sm rounded-2xl mb-6"
          >
            <Container className="w-10 h-10 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-4xl font-semibold tracking-tight mb-3">
            Welcome to CDMS
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/80">
            Manage your container operations efficiently with our comprehensive
            depot management system
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
          <div>
            <div className="text-3xl font-semibold">1,247</div>
            <div className="text-sm text-white/70">Containers</div>
          </div>

          <div>
            <div className="text-3xl font-semibold">24/7</div>
            <div className="text-sm text-white/70">Operations</div>
          </div>

          <div>
            <div className="text-3xl font-semibold">99%</div>
            <div className="text-sm text-white/70">Uptime</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Illustration;
