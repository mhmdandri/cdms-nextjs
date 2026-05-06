"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, LogOut, User2 } from "lucide-react";
import { signOut } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "@bprogress/next/app";
import { getInitials } from "@/lib/utils";
import BreadcrumbComponent from "@/components/Breadcrumb";

type Props = {
  data: {
    fullName: string;
    email: string;
  };
};

const Navbar = ({ data }: Props) => {
  const router = useRouter();

  const handleLogout = () => {
    try {
      signOut();
      router.push("/auth/login", { scroll: false, startPosition: 0.3 });
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
        {/* Search */}
        <div className="flex-1">
          <BreadcrumbComponent />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 ml-4">
          {/* Notification */}
          <button
            className="relative p-2 rounded-lg 
            hover:bg-muted transition-colors"
          >
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </button>

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
