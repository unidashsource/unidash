"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { User, Users, GraduationCap, FileCheck, Trophy } from "lucide-react";

export function ContextualSidebar() {
  const pathname = usePathname();

  let sidebarTitle = "";
  let sidebarItems: { name: string; href: string; icon: any }[] = [];

  // LOGIC CHANGE: Trigger on "My Application" section
  if (pathname.startsWith("/dashboard/application")) {
    sidebarTitle = "Common Application";
    sidebarItems = [
      { name: "Personal Details", href: "/dashboard/application/personal", icon: User },
      { name: "Family Information", href: "/dashboard/application/family", icon: Users },
      { name: "Academic History", href: "/dashboard/application/academics", icon: GraduationCap },
      { name: "Standardized Tests", href: "/dashboard/application/tests", icon: FileCheck },
      { name: "Extracurriculars", href: "/dashboard/application/activities", icon: Trophy },
    ];
  } 
  
  // TODO: We can add a sidebar for "My Colleges" later if needed

  if (sidebarItems.length === 0) {
    return null; 
  }

  return (
    <aside className="w-64 border-r bg-muted/10 min-h-[calc(100vh-64px)] hidden md:block">
      <div className="p-6">
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
  );
}
