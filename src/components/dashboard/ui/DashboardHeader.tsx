"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  FileText, 
  School, 
  Search, 
  CreditCard, 
  User, 
  Files,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

export function DashboardHeader({ userProfile, signOutAction }: { userProfile: any, signOutAction: any }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "My Application", href: "/dashboard/application", icon: FileText }, // The Master Form
    { name: "My Colleges", href: "/dashboard/colleges", icon: School },
    { name: "College Search", href: "/dashboard/search", icon: Search },
    { name: "Documents", href: "/dashboard/documents", icon: Files },
    { name: "Fees", href: "/dashboard/fees", icon: CreditCard },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-6">
        {/* LEFT: Logo */}
        {/* 1. LEFT: Mobile Menu + Logo */}
      <div className="flex items-center gap-4">
        <MobileNav userProfile={userProfile} signOutAction={signOutAction} />
        
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <span className="h-8 w-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-lg">U</span>
          <span className="text-xl tracking-tight hidden md:block">Unidash</span>
        </Link>
      </div>

        {/* CENTER: Top Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT: User Profile & Logout */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden lg:block">
            <p className="text-sm font-medium leading-none">{userProfile?.full_name || "User"}</p>
            <p className="text-xs text-muted-foreground">Student ID: {userProfile?.id?.slice(0, 8)}</p>
          </div>
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
            {userProfile?.full_name?.[0] || "U"}
          </div>
          <form action={signOutAction}>
            <Button variant="ghost" size="icon" title="Sign Out">
              <LogOut className="h-5 w-5 text-muted-foreground" />
            </Button>
          </form>
        </div>
      </div>
    </header>
  );
}
