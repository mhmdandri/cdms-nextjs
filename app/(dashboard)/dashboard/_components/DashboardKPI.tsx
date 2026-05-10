"use client";
import React from "react";
import KPICard from "../../_components/KPICard";
import { LogIn, LogOut, Package, TrendingUp } from "lucide-react";

const DashboardKPI = () => {
  return (
    <>
      {/* KPI */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Containers"
          value="1.247"
          icon={Package}
          trend={{ value: 12, isPositive: true }}
        />

        <KPICard
          title="Available Slots"
          value="358"
          icon={TrendingUp}
          trend={{ value: 5, isPositive: false }}
          color="green"
        />

        <KPICard
          title="Incoming Today"
          value="47"
          icon={LogIn}
          color="purple"
        />

        <KPICard
          title="Outgoing Today"
          value="39"
          icon={LogOut}
          color="orange"
        />
      </div>
    </>
  );
};

export default DashboardKPI;
