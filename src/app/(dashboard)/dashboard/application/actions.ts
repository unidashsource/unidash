"use server";

import { createClient } from "@/lib/supabase/server";
import { personalDetailsSchema } from "@/lib/schemas/profile";
import { revalidatePath } from "next/cache";

export async function updatePersonalDetails(data: any) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { error: "Unauthorized" };
  }

  // 1. Validate data on server side
  const result = personalDetailsSchema.safeParse(data);
  if (!result.success) {
    return { error: "Invalid data format" };
  }

  // 2. Upsert (Update if exists, Insert if new)
  const { error } = await supabase
    .from("student_personal")
    .upsert({
      user_id: user.id,
      ...result.data,
      // Convert Date object to string for DB if needed, but Supabase handles ISO strings well
      dob: result.data.dob.toISOString(), 
      updated_at: new Date().toISOString(),
    });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/dashboard/application/personal");
  return { success: true };
}
