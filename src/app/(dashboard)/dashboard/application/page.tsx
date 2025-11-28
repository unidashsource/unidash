import { redirect } from "next/navigation";

export default function ApplicationRoot() {
  // Redirect to the first section of the Master Application
  redirect("/dashboard/application/personal");
}
