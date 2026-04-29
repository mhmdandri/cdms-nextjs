"use client";
import React from "react";
import Illustration from "./Illustration";
import Form from "./Form";

const LoginForm = () => {
  return (
    <div className="flex min-h-screen">
      {/* Ilustrasi Page Kiri */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-linear-to-br from-[#1E3A8A] to-[#1E40AF] overflow-hidden ">
        <Illustration />
      </div>
      {/* LoginForm Page Kanan */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <Form />
      </div>
    </div>
  );
};

export default LoginForm;
