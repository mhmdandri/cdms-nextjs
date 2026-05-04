import React from "react";
import Register from "./_components/Register";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const session = await auth();
  if (session) return redirect("/dashboard");
  return (
    <>
      <Register />
    </>
  );
};

export default RegisterPage;
