"use client";
import React from "react";

type Props = {
  recentActivities: {
    id: string;
    status: string;
    location: string;
    timestamp: string;
    statusColor: string;
  }[];
};
const DashboardRecent = ({ recentActivities }: Props) => {
  return (
    <div className="bg-card rounded-xl shadow-sm border border-border">
      <div className="px-6 py-4 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">
          Recent Activities
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/40">
            <tr>
              {["Container ID", "Status", "Location", "Timestamp"].map(
                (head) => (
                  <th
                    key={head}
                    className="px-6 py-3 text-left text-xs font-medium 
                    text-muted-foreground uppercase tracking-wider"
                  >
                    {head}
                  </th>
                ),
              )}
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {recentActivities.map((activity) => (
              <tr
                key={activity.id}
                className="hover:bg-muted/40 transition-colors"
              >
                {/* ID */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                  {activity.id}
                </td>

                {/* Status */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium
                        ${
                          activity.statusColor === "green"
                            ? "bg-green-500/10 text-green-500"
                            : activity.statusColor === "blue"
                              ? "bg-blue-500/10 text-blue-500"
                              : activity.statusColor === "orange"
                                ? "bg-orange-500/10 text-orange-500"
                                : "bg-purple-500/10 text-purple-500"
                        }`}
                  >
                    {activity.status}
                  </span>
                </td>

                {/* Location */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                  {activity.location}
                </td>

                {/* Timestamp */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                  {activity.timestamp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardRecent;
