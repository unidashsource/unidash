import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { PersonalDetailsForm } from "@/components/dashboard/forms/PersonalDetailsForm";

export default async function PersonalDetailsPage() {
  const supabase = await createClient();
  
  // 1. Get Current User
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  // 2. Fetch Existing Data
  const { data: personalData } = await supabase
    .from("student_personal")
    .select("*")
    .eq("user_id", user.id)
    .single();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Personal Details</h2>
        <p className="text-muted-foreground">
          This information will be used to auto-fill your applications.
        </p>
      </div>
      
      <div className="p-6 border rounded-lg bg-card">
        {/* Pass the fetched data to the form for pre-filling */}
        <PersonalDetailsForm initialData={personalData} />
      </div>
    </div>
  );
}
