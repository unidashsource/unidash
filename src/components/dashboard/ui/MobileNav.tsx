"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, LayoutDashboard, FileText, School, Search, CreditCard, User, Files, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function MobileNav({ signOutAction, userProfile }: { signOutAction: any, userProfile: any }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "My Application", href: "/dashboard/application", icon: FileText },
    { name: "My Colleges", href: "/dashboard/colleges", icon: School },
    { name: "College Search", href: "/dashboard/search", icon: Search },
    { name: "Documents", href: "/dashboard/documents", icon: Files },
    { name: "Fees", href: "/dashboard/fees", icon: CreditCard },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="xl:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
        <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>

        <div className="flex flex-col h-full bg-background">
          <div className="p-6 border-b">
            <Link href="/" className="flex items-center gap-2 font-semibold" onClick={() => setOpen(false)}>
              <span className="h-8 w-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-lg">U</span>
              <span className="text-xl">Unidash</span>
            </Link>
          </div>
          
          <div className="flex-1 overflow-auto py-4">
            <nav className="grid gap-1 px-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors",
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
          </div>

          <div className="p-6 border-t bg-muted/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                {userProfile?.full_name?.[0] || "U"}
              </div>
              <div>
                <p className="text-sm font-medium">{userProfile?.full_name}</p>
                <p className="text-xs text-muted-foreground truncate max-w-[150px]">{userProfile?.email}</p>
              </div>
            </div>
            <form action={signOutAction}>
              <Button variant="outline" className="w-full justify-start gap-2">
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </form>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
