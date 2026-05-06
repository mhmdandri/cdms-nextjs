import { Container } from "lucide-react";
import Image from "next/image";
import React from "react";

const IllustrationRegister = () => {
  return (
    <div
      className="hidden lg:flex lg:w-1/2 relative 
      bg-linear-to-br from-primary to-primary/80 
      overflow-hidden"
    >
      {/* Image */}
      <Image
        src="/register-ilus.jpg"
        alt="registerIllustration"
        fill
        priority
        sizes="100%"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay (lebih smooth & premium) */}
      <div
        className="absolute inset-0 
        bg-linear-to-t from-black/70 via-black/40 to-black/10"
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
            Join 500+ Depots Worldwide
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/80">
            Start managing your container operations efficiently with CDMS
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 pt-8 border-t border-white/20">
          <div>
            <div className="text-3xl font-semibold">24/7</div>
            <div className="text-sm text-white/70">Support</div>
          </div>

          <div>
            <div className="text-3xl font-semibold">99.9%</div>
            <div className="text-sm text-white/70">Uptime</div>
          </div>

          <div>
            <div className="text-3xl font-semibold">500+</div>
            <div className="text-sm text-white/70">Client</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IllustrationRegister;
