import React from "react";
import KPICard from "../../_components/KPICard";
import { LogIn, LogOut, Package, TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { date } from "zod";

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
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Overview of container depot operations
        </p>
      </div>
      <div>
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">
            Container Movement
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={containerMovementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey={date} stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="incoming"
                stroke="#1E3A8A"
                strokeWidth={2}
                name="Incoming"
              />
              <Line
                type="monotone"
                dataKey="outgoing"
                stroke="#F97316"
                strokeWidth={2}
                name="Outgoing"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Yard Utilization
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={yardUtilizationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="zone" stroke="6b7280" />
              <YAxis stroke="#6b7820" />
              <Tooltip />
              <Legend />
              <Bar dataKey="utilized" fill="#1E3A8A" name="Utilized %" />
              <Bar dataKey="available" fill="#10B981" name="Available %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
