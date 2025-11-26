"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Upload, BarChart3, Star } from "lucide-react";

export default function SchoolsPage() {
  const functionalities = [
    {
      icon: Users,
      title: "Student Caseload Management",
      description: "View and manage your entire roster of students, tracking their shortlists and application progress."
    },
    {
      icon: Upload,
      title: "Efficient Document Submission",
      description: "Upload official transcripts and letters of recommendation in bulk. A common recommendation form can be applied to multiple university applications for a single student."
    },
    {
      icon: BarChart3,
      title: "Reporting & Analytics",
      description: "Generate reports on application trends, most-applied-to universities, and acceptance rates to inform your counseling strategy."
    }
  ];

  const pioneerBenefits = [
    "Early access to the platform before public launch",
    "Direct input on feature development and UI/UX feedback",
    "Complimentary lifetime license for the Counselor Portal",
    "Priority customer support and onboarding",
    "Co-marketing opportunities and case study features"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-6">
          <h1>An Administrative Platform for High School Counselors</h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-balance">
            The Unidash Counselor Portal is a complimentary tool designed to streamline 
            administrative tasks and provide data-driven insights for your counseling department.
          </p>
        </div>
      </section>

      {/* Core Functionalities */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-4 mb-16">
            <h2>Core Functionalities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools to help counselors manage student applications efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {functionalities.map((functionality, index) => (
              <Card key={index} className="hover:shadow-medium transition-smooth border-border">
                <CardContent className="p-8 space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                    <functionality.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold">{functionality.title}</h4>
                  <p className="text-muted-foreground">{functionality.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pioneer Program */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-6 h-6 text-secondary" />
                <Badge variant="secondary">Exclusive Program</Badge>
              </div>
              <h2>The Pioneer School Program</h2>
              <p className="text-xl text-muted-foreground">
                We invite institutions to join our Pioneer Program for early access, direct input 
                on feature development, and a complimentary lifetime license for the Counselor Portal.
              </p>
              <Button variant="secondary" size="lg">
                Request a Demo for Your School
              </Button>
            </div>
            <Card className="shadow-medium border-border">
              <CardContent className="p-8 space-y-6">
                <h4 className="text-xl font-semibold">Pioneer Benefits Include:</h4>
                <div className="space-y-4">
                  {pioneerBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-4 mb-16">
            <h2>Counselor Dashboard Preview</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get a glimpse of the comprehensive tools available in the Counselor Portal
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-large border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">247</div>
                <p className="text-sm text-blue-600 font-medium">Total Students</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">1,456</div>
                <p className="text-sm text-green-600 font-medium">Applications Submitted</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">89%</div>
                <p className="text-sm text-purple-600 font-medium">Acceptance Rate</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Recent Applications</h4>
              <div className="space-y-3">
                {["Priya Sharma - VIT Vellore", "Rahul Kumar - SRM University", "Ananya Gupta - Manipal Academy"].map((student, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium text-foreground">{student}</span>
                    <Badge variant="outline">Submitted</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}