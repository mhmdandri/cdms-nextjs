"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, LogOut, User2 } from "lucide-react";
import { signOut } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "@bprogress/next";
import { getInitials } from "@/lib/utils";
import BreadcrumbComponent from "@/components/Breadcrumb";

type Props = {
  data: {
    fullName: string;
    email: string;
  };
};
const notifications = [
  {
    id: 1,
    title: "Pesanan baru",
    description: "Ada pesanan baru dari customer",
    time: "2 menit lalu",
    read: false,
  },
  {
    id: 2,
    title: "Pembayaran berhasil",
    description: "Invoice INV-2026 berhasil dibayar",
    time: "10 menit lalu",
    read: false,
  },
  {
    id: 3,
    title: "Update sistem",
    description: "Sistem berhasil diperbarui",
    time: "1 jam lalu",
    read: true,
  },
];

const Navbar = ({ data }: Props) => {
  const router = useRouter();

  const unreadCount = notifications.filter((item) => !item.read).length;

  const handleLogout = async () => {
    try {
      await signOut({
        redirect: false,
      });
      router.replace("/auth/login", {
        scroll: false,
        startPosition: 0.3,
      });
      router.refresh();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div
      className="bg-background/80 backdrop-blur-md 
      border-b border-border px-6 py-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <BreadcrumbComponent />
        </div>
        {/* Right side */}
        <div className="flex items-center gap-4 ml-4">
          {/* Notification */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="
                  relative p-2 rounded-lg
                  hover:bg-muted transition-colors
                "
              >
                <Bell className="w-5 h-5 text-muted-foreground" />

                {unreadCount > 0 && (
                  <span
                    className="
                      absolute -top-1 -right-1
                      min-w-5 h-5 px-1
                      flex items-center justify-center
                      rounded-full bg-primary
                      text-[10px] text-white font-medium
                    "
                  >
                    {unreadCount}
                  </span>
                )}
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-90">
              <DropdownMenuLabel className="flex items-center justify-between">
                <span>Notifications</span>

                {unreadCount > 0 && (
                  <span className="text-xs text-muted-foreground">
                    {unreadCount} unread
                  </span>
                )}
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <div className="max-h-75 overflow-y-auto">
                {notifications.length > 0 ? (
                  notifications.map((item) => (
                    <DropdownMenuItem
                      key={item.id}
                      className="
                        flex flex-col items-start
                        gap-1 p-4 cursor-pointer
                      "
                    >
                      <div className="flex items-start justify-between w-full">
                        <p className="text-sm font-medium">{item.title}</p>

                        {!item.read && (
                          <span className="w-2 h-2 rounded-full bg-primary mt-1" />
                        )}
                      </div>

                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>

                      <span className="text-[11px] text-muted-foreground">
                        {item.time}
                      </span>
                    </DropdownMenuItem>
                  ))
                ) : (
                  <div className="p-6 text-center text-sm text-muted-foreground">
                    Tidak ada notifikasi
                  </div>
                )}
              </div>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                className="justify-center font-medium cursor-pointer"
                onClick={() => router.push("/notifications")}
              >
                Lihat semua notifikasi
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User */}
          <div className="flex items-center gap-3 pl-4 border-l border-border">
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">
                {data.fullName}
              </p>
              <p className="text-xs text-muted-foreground">{data.email}</p>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="w-10 h-10 rounded-full 
                  bg-primary text-primary-foreground 
                  flex items-center justify-center 
                  hover:opacity-90 transition"
                >
                  {getInitials(data.fullName)}
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="mr-1 w-48">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>

                  <DropdownMenuItem>
                    <User2 className="mr-2 w-4 h-4" />
                    Profile
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    onSelect={handleLogout}
                    className="text-destructive focus:text-destructive"
                  >
                    <LogOut className="mr-2 w-4 h-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
