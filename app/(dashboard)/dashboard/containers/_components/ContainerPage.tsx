"use client";
import { useRouter } from "@bprogress/next";
import { Download, Edit, Eye, Filter, Search, Trash2 } from "lucide-react";
import React, { useState } from "react";

const containerData = [
  {
    id: "CONT-2024-001",
    number: "MSCU1234567",
    size: "40ft",
    status: "Available",
    location: "Zone A-12",
    lastUpdate: "2026-04-26 09:45",
  },
  {
    id: "CONT-2024-002",
    number: "TCLU9876543",
    size: "20ft",
    status: "In Use",
    location: "Zone C-08",
    lastUpdate: "2026-04-26 09:30",
  },
  {
    id: "CONT-2024-003",
    number: "HLXU5551234",
    size: "40ft",
    status: "Maintenance",
    location: "Workshop",
    lastUpdate: "2026-04-26 09:15",
  },
  {
    id: "CONT-2024-004",
    number: "SUDU8889999",
    size: "20ft",
    status: "Available",
    location: "Zone B-15",
    lastUpdate: "2026-04-26 09:00",
  },
  {
    id: "CONT-2024-005",
    number: "CSNU4445678",
    size: "40ft",
    status: "In Use",
    location: "Zone D-22",
    lastUpdate: "2026-04-26 08:45",
  },
  {
    id: "CONT-2024-006",
    number: "MEDU7771234",
    size: "20ft",
    status: "Available",
    location: "Zone A-05",
    lastUpdate: "2026-04-26 08:30",
  },
  {
    id: "CONT-2024-007",
    number: "OOLU3336789",
    size: "40ft",
    status: "Maintenance",
    location: "Workshop",
    lastUpdate: "2026-04-26 08:15",
  },
  {
    id: "CONT-2024-008",
    number: "YMLU2229876",
    size: "20ft",
    status: "In Use",
    location: "Zone E-18",
    lastUpdate: "2026-04-26 08:00",
  },
];

const ContainerPage = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sizeFilter, setSizeFilter] = useState("all");

  const filteredContainers = containerData.filter((container) => {
    const matchesSearch =
      container.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      container.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || container.status.toLowerCase() === statusFilter;

    const matchesSize = sizeFilter === "all" || container.size === sizeFilter;

    return matchesSearch && matchesStatus && matchesSize;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Containers</h1>

          <p className="text-muted-foreground mt-1">
            Manage and track all containers
          </p>
        </div>

        <button
          className="px-4 py-2 rounded-lg
          bg-primary text-primary-foreground
          hover:bg-primary/90
          transition-all flex items-center gap-2 shadow-sm"
        >
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>

      {/* Table Card */}
      <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          {/* Search */}
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2
              w-5 h-5 text-muted-foreground"
            />

            <input
              type="text"
              placeholder="Search by container number or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2
              bg-background border border-border
              rounded-lg text-foreground
              placeholder:text-muted-foreground
              focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-3 flex-wrap">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 bg-background border border-border
              rounded-lg text-foreground
              focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="all">All Status</option>
              <option value="available">Available</option>
              <option value="in use">In Use</option>
              <option value="maintenance">Maintenance</option>
            </select>

            <select
              value={sizeFilter}
              onChange={(e) => setSizeFilter(e.target.value)}
              className="px-4 py-2 bg-background border border-border
              rounded-lg text-foreground
              focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="all">All Size</option>
              <option value="20ft">20ft</option>
              <option value="40ft">40ft</option>
            </select>

            <button
              className="px-4 py-2 border border-border rounded-lg
              hover:bg-muted transition-colors
              flex items-center gap-2 text-foreground"
            >
              <Filter className="w-4 h-4" />
              More Filters
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-auto rounded-xl border border-border">
          <table className="w-full">
            <thead className="bg-muted/40">
              <tr>
                {[
                  "Container Number",
                  "Size",
                  "Status",
                  "Location",
                  "Last Update",
                  "Action",
                ].map((head) => (
                  <th
                    key={head}
                    className="px-6 py-3 text-left text-xs font-medium
                    text-muted-foreground uppercase tracking-wider"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-border">
              {filteredContainers.map((container) => (
                <tr
                  key={container.id}
                  className="hover:bg-muted/40 transition-colors"
                >
                  {/* Number */}
                  <td
                    className="px-6 py-4 whitespace-nowrap
                    text-sm font-medium text-foreground"
                  >
                    {container.number}
                  </td>

                  {/* Size */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className="inline-flex items-center px-2.5 py-1
                      rounded-full text-xs font-medium
                      bg-muted text-foreground"
                    >
                      {container.size}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-1
                      rounded-full text-xs font-medium
                      ${
                        container.status === "Available"
                          ? "bg-green-500/10 text-green-500"
                          : container.status === "In Use"
                            ? "bg-blue-500/10 text-blue-500"
                            : "bg-orange-500/10 text-orange-500"
                      }`}
                    >
                      {container.status}
                    </span>
                  </td>

                  {/* Location */}
                  <td
                    className="px-6 py-4 whitespace-nowrap
                    text-sm text-muted-foreground"
                  >
                    {container.location}
                  </td>

                  {/* Timestamp */}
                  <td
                    className="px-6 py-4 whitespace-nowrap
                    text-sm text-muted-foreground"
                  >
                    {container.lastUpdate}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() =>
                          router.push(`/dashboard/containers/${container.id}`)
                        }
                        className="p-2 rounded-lg
                        text-blue-500 hover:bg-blue-500/10
                        transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      <button
                        className="p-2 rounded-lg
                        text-muted-foreground hover:bg-muted
                        hover:text-foreground
                        transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>

                      <button
                        className="p-2 rounded-lg
                        text-red-500 hover:bg-red-500/10
                        transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div
          className="mt-4 flex flex-col sm:flex-row
          items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            Showing {filteredContainers.length} of {containerData.length}{" "}
            containers
          </p>

          <div className="flex gap-2">
            <button
              className="px-3 py-1 border border-border rounded-lg
              hover:bg-muted transition-colors text-foreground"
            >
              Previous
            </button>

            <button
              className="px-3 py-1 rounded-lg
              bg-primary text-primary-foreground
              hover:bg-primary/90 transition-colors"
            >
              1
            </button>

            <button
              className="px-3 py-1 border border-border rounded-lg
              hover:bg-muted transition-colors text-foreground"
            >
              2
            </button>

            <button
              className="px-3 py-1 border border-border rounded-lg
              hover:bg-muted transition-colors text-foreground"
            >
              3
            </button>

            <button
              className="px-3 py-1 border border-border rounded-lg
              hover:bg-muted transition-colors text-foreground"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerPage;
