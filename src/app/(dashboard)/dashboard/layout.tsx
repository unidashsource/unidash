import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/ui/DashboardHeader";
import { ContextualSidebar } from "@/components/dashboard/ui/ContextualSidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Fetch minimal profile data for the header
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  async function signOut() {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* 1. TOP NAVIGATION */}
      <DashboardHeader userProfile={profile} signOutAction={signOut} />

      <div className="flex flex-1">
        {/* 2. CONTEXTUAL SIDEBAR (Changes based on page) */}
        <ContextualSidebar />

        {/* 3. MAIN PAGE CONTENT */}
        <main className="flex-1 p-6 md:p-8 overflow-auto">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
