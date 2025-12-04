"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  User, 
  Users, 
  GraduationCap, 
  FileCheck, 
  Trophy, 
  LucideIcon,
  Menu,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";

type SidebarItem = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export function ContextualSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  let sidebarTitle = "";
  let sidebarItems: SidebarItem[] = [];

  // 1. Define Logic (Same as before)
  if (pathname.startsWith("/dashboard/application")) {
    sidebarTitle = "Common Application";
    sidebarItems = [
      { name: "Personal Details", href: "/dashboard/application/personal", icon: User },
      { name: "Family Information", href: "/dashboard/application/family", icon: Users },
      { name: "Academic History", href: "/dashboard/application/academics", icon: GraduationCap },
      { name: "Standardized Tests", href: "/dashboard/application/tests", icon: FileCheck },
      { name: "Extracurriculars", href: "/dashboard/application/activities", icon: Trophy },
    ];
  } else if (pathname.startsWith("/dashboard/colleges")) {
    sidebarTitle = "My Colleges";
    sidebarItems = []; 
  }

  if (sidebarItems.length === 0) {
    return null; 
  }

  // Find active item to display name on Mobile
  const activeItem = sidebarItems.find(item => pathname === item.href) || sidebarItems[0];

  return (
    <>
      {/* --- DESKTOP VIEW (Sidebar) --- */}
      <aside className="hidden lg:block w-64 border-r bg-muted/10 min-h-[calc(100vh-64px)] shrink-0">
        <div className="p-6 sticky top-16">
          <h3 className="font-semibold text-lg mb-4 px-2 tracking-tight">{sidebarTitle}</h3>
          <nav className="space-y-1">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-sm" 
                      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* --- MOBILE VIEW (Top Dropdown Sheet) --- */}
      <div className="lg:hidden w-full border-b bg-background sticky top-16 z-30">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="w-full justify-between px-6 py-6 h-auto font-normal rounded-none">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">
                  {sidebarTitle}:
                </span>
                <span className="font-semibold flex items-center gap-2">
                  <activeItem.icon className="h-4 w-4" />
                  {activeItem.name}
                </span>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="pt-10">
            <SheetTitle className="sr-only">Section Menu</SheetTitle>

            <h3 className="font-semibold text-lg mb-4 px-2">{sidebarTitle}</h3>
            <nav className="grid gap-1">
              {sidebarItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-md transition-colors",
                      isActive 
                        ? "bg-primary/10 text-primary" 
                        : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
