import React from "react";
import DashboardKPI from "./_components/DashboardKPI";
import DashboardChart from "./_components/DashboardChart";
import DashboardRecent from "./_components/DashboardRecent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Container Depot Management System",
};

const containerMovementData = [
  { date: "Mon", incoming: 45, outgoing: 38 },
  { date: "Tue", incoming: 52, outgoing: 41 },
  { date: "Wed", incoming: 38, outgoing: 45 },
  { date: "Thu", incoming: 60, outgoing: 52 },
  { date: "Fri", incoming: 55, outgoing: 48 },
  { date: "Sat", incoming: 42, outgoing: 39 },
  { date: "Sun", incoming: 35, outgoing: 32 },
];

const yardUtilizationData = [
  { zone: "Zone A", utilized: 85, available: 15 },
  { zone: "Zone B", utilized: 72, available: 28 },
  { zone: "Zone C", utilized: 93, available: 7 },
  { zone: "Zone D", utilized: 67, available: 33 },
  { zone: "Zone E", utilized: 78, available: 22 },
];

const recentActivities = [
  {
    id: "CONT-2024-001",
    status: "Gate In",
    location: "Zone A-12",
    timestamp: "2026-04-26 09:45",
    statusColor: "green",
  },
  {
    id: "CONT-2024-002",
    status: "Gate Out",
    location: "Zone C-08",
    timestamp: "2026-04-26 09:30",
    statusColor: "blue",
  },
  {
    id: "CONT-2024-003",
    status: "Maintenance",
    location: "Workshop",
    timestamp: "2026-04-26 09:15",
    statusColor: "orange",
  },
  {
    id: "CONT-2024-004",
    status: "Gate In",
    location: "Zone B-15",
    timestamp: "2026-04-26 09:00",
    statusColor: "green",
  },
  {
    id: "CONT-2024-005",
    status: "Relocated",
    location: "Zone D-22",
    timestamp: "2026-04-26 08:45",
    statusColor: "purple",
  },
];

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>

        <p className="text-muted-foreground mt-1">
          Overview of container depot operations
        </p>
      </div>
      <DashboardKPI />
      <DashboardChart
        containerMovementData={containerMovementData}
        yardUtilizationData={yardUtilizationData}
      />
      <DashboardRecent recentActivities={recentActivities} />
    </div>
  );
};

export default DashboardPage;
