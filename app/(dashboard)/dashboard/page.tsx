"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";
import { toast } from "sonner";

const Dashboard = () => {
  const handleToast = () => {
    const logout = toast.loading("Logging out...");
    setTimeout(() => {
      toast.dismiss(logout);
    }, 2000);
    signOut({ callbackUrl: "/auth/login" });
  };
  return (
    <div className="min-h-screen mx-auto flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold dark:text-black">
        Welcome to the Dashboard
      </h1>
      <Button variant="default" onClick={handleToast}>
        Toast
      </Button>
    </div>
  );
};

export default Dashboard;
