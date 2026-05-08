import { LucideIcon } from "lucide-react";
import React from "react";

type KPICardProps = {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: string;
};

const KPICard = ({
  title,
  value,
  icon: Icon,
  trend,
  color = "blue",
}: KPICardProps) => {
  const colorClasses = {
    blue: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    green:
      "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    orange:
      "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
    purple:
      "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  }[color];
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {trend && (
            <p
              className={`text-sm mt-2 ${trend.isPositive ? "text-green-600" : "text-red-600"}`}
            >
              {trend.isPositive ? "▲" : "▼"} {Math.abs(trend.value)}% from last
              week
            </p>
          )}
        </div>
        <div
          className={`w-12 h-12 rounded-lg ${colorClasses} flex items-center justify-center`}
        >
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default KPICard;
