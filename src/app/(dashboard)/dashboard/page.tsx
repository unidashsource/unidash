import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  FileText, 
  Search, 
  AlertCircle,
  CheckCircle2,
  Clock
} from "lucide-react";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // 1. Fetch Profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  // 2. Fetch Applications (Just a count for now)
  const { count: appCount } = await supabase
    .from("applications")
    .select("*", { count: 'exact', head: true })
    .eq("student_id", user.id);

  // TODO: Real logic for profile completion based on 'student_personal' table
  // For now, if they have a name, give them 20%. If they verified email, +20%.
  const profileCompletion = 20; 

  return (
    <div className="space-y-8">
      {/* 1. WELCOME SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back, {profile?.full_name?.split(" ")[0] || "Student"}
          </h1>
          <p className="text-muted-foreground mt-1">
            Here is what's happening with your applications today.
          </p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/dashboard/search">
              <Search className="mr-2 h-4 w-4" />
              Find Universities
            </Link>
          </Button>
        </div>
      </div>

      {/* 2. STATUS CARDS */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{appCount || 0}</div>
            <p className="text-xs text-muted-foreground">
              {appCount === 0 ? "Start your first one!" : "In progress"}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Action Required</CardTitle>
            <AlertCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Complete your profile</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Deadline</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">--</div>
            <p className="text-xs text-muted-foreground">No active deadlines</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Acceptances</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">Good luck!</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* 3. PROFILE COMPLETION WIDGET */}
        <Card className="col-span-4 lg:col-span-3">
          <CardHeader>
            <CardTitle>Profile Completion</CardTitle>
            <CardDescription>
              You need to complete your Common Profile before applying.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Overall Progress</span>
                <span className="text-muted-foreground">{profileCompletion}%</span>
              </div>
              <Progress value={profileCompletion} className="h-2" />
            </div>

            <div className="space-y-2 mt-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="line-through text-muted-foreground">Account Created</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                <span>Personal Details</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                <span>Academic History</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                <span>Document Uploads</span>
              </div>
            </div>

            <Button asChild className="w-full mt-4">
              <Link href="/dashboard/profile/personal">
                Continue Profile <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* 4. RECOMMENDED UNIVERSITIES (Placeholder) */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recommended for You</CardTitle>
            <CardDescription>
              Based on your interests (Coming Soon)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded bg-muted animate-pulse" />
                    <div className="space-y-1">
                      <div className="h-4 w-32 bg-muted rounded animate-pulse" />
                      <div className="h-3 w-20 bg-muted rounded animate-pulse" />
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" disabled>View</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
