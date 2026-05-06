"use client";
import React from "react";
import Illustration from "./Illustration";
import Form from "./Form";

const LoginForm = () => {
  return (
    <div className="flex min-h-screen">
      {/* LEFT - Illustration */}
      <div
        className="hidden lg:flex lg:w-1/2 relative 
        bg-linear-to-br from-primary to-primary/80 
        overflow-hidden"
      >
        <Illustration />
      </div>

      {/* RIGHT - Form */}
      <div
        className="flex-1 flex items-center justify-center p-8 
        bg-linear-to-b from-background to-muted/40"
      >
        <Form />
      </div>
    </div>
  );
};

export default LoginForm;
