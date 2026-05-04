import React from "react";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (!session) return redirect("/auth/login");
  const userLogin = {
    fullName: session.user?.name || "User",
    email: session.user?.email || "",
  };
  return (
    <div className="flex h-screen bg-gray-50 ">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar data={userLogin} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
