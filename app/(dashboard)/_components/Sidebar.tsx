"use client";
import {
  Calendar,
  ClipboardList,
  FileText,
  LayoutDashboard,
  LogIn,
  Map,
  Package,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menuItems = [
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/dashboard/containers", label: "Containers", icon: Package },
  { path: "/dashboard/inventory", label: "Inventory", icon: ClipboardList },
  { path: "/dashboard/gate", label: "Gate In / Gate Out", icon: LogIn },
  { path: "/dashboard/yard", label: "Yard Management", icon: Map },
  { path: "/dashboard/booking", label: "Booking", icon: Calendar },
  { path: "/dashboard/reports", label: "Reports", icon: FileText },
  { path: "/dashboard/users", label: "Users", icon: Users },
  { path: "/dashboard/settings", label: "Settings", icon: Settings },
];

const Sidebar = () => {
  const path = usePathname();
  return (
    <div className="w-64 bg-[#1E3A8A] text-white flex flex-col">
      <div className="p-6 border-b border-blue-700">
        <h1 className="text-xl font-bold">CDMS</h1>
        <p className="text-xs text-blue-200 mt-1">Container Depot System</p>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.path === "/dashboard"
              ? path === "/dashboard"
              : path.startsWith(item.path);

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-blue-700 text-white"
                  : "text-blue-100 hover:bg-blue-800"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
