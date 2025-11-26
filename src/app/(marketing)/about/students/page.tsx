"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileText, BarChart3, CreditCard, Eye } from "lucide-react";

export default function StudentsPage() {
  const features = [
    {
      icon: FileText,
      title: "Universal Profile",
      description: "Enter your academic and personal information once. The platform securely stores it for all your applications."
    },
    {
      icon: FileText,
      title: "Centralized Document Hub", 
      description: "Upload mark sheets, identity proofs, and other documents a single time in a secure vault."
    },
    {
      icon: BarChart3,
      title: "Unified Dashboard",
      description: "Track the status of every application in real-time from one screen. Manage deadlines with automated reminders."
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Process all university application fees through a single, secure gateway with a consolidated receipt."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-6">
          <h1>A Purpose-Built Platform for Students and Parents</h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-balance">
            The Unidash platform is designed to eliminate repetitive tasks and provide a clear, 
            organized view of your entire application process, allowing you to focus on making 
            informed decisions.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-4 mb-16">
            <h2>Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Streamlined tools designed to simplify your university application journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-medium transition-smooth border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parental Oversight */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2>Transparency for Parents</h2>
              <p className="text-xl text-muted-foreground">
                A linked parent view allows for monitoring of application progress and deadlines, 
                ensuring a supportive and organized process. Our platform uses industry-standard 
                encryption to protect all sensitive data.
              </p>
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Secure & Private</h4>
                  <p className="text-muted-foreground">
                    All student data is encrypted and protected with bank-level security protocols.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Eye className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Real-time Updates</h4>
                  <p className="text-muted-foreground">
                    Parents receive notifications about important deadlines and application status changes.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-medium border border-border">
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium">Application Status</h4>
                  <p className="text-sm text-muted-foreground">5 applications submitted, 2 pending</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-medium">Upcoming Deadlines</h4>
                  <p className="text-sm text-muted-foreground">VIT Application due in 3 days</p>
                </div>
                <div className="border-l-4 border-success pl-4">
                  <h4 className="font-medium">Documents</h4>
                  <p className="text-sm text-muted-foreground">All required documents uploaded</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-8">
          <h2 className="text-white">Ready to Simplify Your University Applications?</h2>
          <p className="text-xl text-primary-foreground/90">
            Join thousands of students who are waiting for the launch of India&apos;s most comprehensive 
            university application platform.
          </p>
          <Button variant="secondary" size="lg">
            Join the Student Waitlist
          </Button>
        </div>
      </section>
    </div>
  );
}