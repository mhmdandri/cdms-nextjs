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
  color?: "blue" | "green" | "orange" | "purple";
};

const KPICard = ({
  title,
  value,
  icon: Icon,
  trend,
  color = "blue",
}: KPICardProps) => {
  const colorClasses = {
    blue: {
      bg: "bg-blue-500/10",
      text: "text-blue-500",
      iconBg: "bg-blue-500/15",
    },

    green: {
      bg: "bg-green-500/10",
      text: "text-green-500",
      iconBg: "bg-green-500/15",
    },

    orange: {
      bg: "bg-orange-500/10",
      text: "text-orange-500",
      iconBg: "bg-orange-500/15",
    },

    purple: {
      bg: "bg-purple-500/10",
      text: "text-purple-500",
      iconBg: "bg-purple-500/15",
    },
  }[color];

  return (
    <div
      className="bg-card border border-border rounded-xl p-6 
      shadow-sm hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between">
        {/* Content */}
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-2">{title}</p>

          <p className="text-3xl font-semibold text-foreground tracking-tight">
            {value}
          </p>

          {trend && (
            <div className="mt-3 flex items-center gap-2">
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full
                ${
                  trend.isPositive
                    ? "bg-green-500/10 text-green-500"
                    : "bg-red-500/10 text-red-500"
                }`}
              >
                {trend.isPositive ? "▲" : "▼"} {Math.abs(trend.value)}%
              </span>

              <span className="text-xs text-muted-foreground">
                from last week
              </span>
            </div>
          )}
        </div>

        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center
          ${colorClasses.bg}`}
        >
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center
            ${colorClasses.iconBg}`}
          >
            <Icon className={`w-5 h-5 ${colorClasses.text}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPICard;
