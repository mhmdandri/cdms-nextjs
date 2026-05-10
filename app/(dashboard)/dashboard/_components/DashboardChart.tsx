"use client";
import React from "react";
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

type Props = {
  containerMovementData: { date: string; incoming: number; outgoing: number }[];
  yardUtilizationData: { zone: string; utilized: number; available: number }[];
};

const DashboardChart = ({
  containerMovementData,
  yardUtilizationData,
}: Props) => {
  return (
    <>
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Container Movement
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={containerMovementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />

              <XAxis dataKey="date" stroke="var(--muted-foreground)" />

              <YAxis stroke="var(--muted-foreground)" />

              <Tooltip
                contentStyle={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  color: "var(--foreground)",
                }}
              />

              <Legend />

              <Line
                type="monotone"
                dataKey="incoming"
                stroke="var(--primary)"
                strokeWidth={3}
                dot={false}
                name="Incoming"
              />

              <Line
                type="monotone"
                dataKey="outgoing"
                stroke="#F97316"
                strokeWidth={3}
                dot={false}
                name="Outgoing"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Yard Utilization
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={yardUtilizationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />

              <XAxis dataKey="zone" stroke="var(--muted-foreground)" />

              <YAxis stroke="var(--muted-foreground)" />

              <Tooltip
                contentStyle={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  color: "var(--foreground)",
                }}
              />

              <Legend />

              <Bar
                dataKey="utilized"
                fill="var(--primary)"
                name="Utilized %"
                radius={[6, 6, 0, 0]}
              />

              <Bar
                dataKey="available"
                fill="var(--primary)"
                name="Available %"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default DashboardChart;
