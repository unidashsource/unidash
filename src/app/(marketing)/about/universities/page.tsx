"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Zap, BarChart3, Settings, Crown } from "lucide-react";

export default function UniversitiesPage() {
  const benefits = [
    {
      icon: Users,
      title: "Expand Applicant Reach",
      description: "Connect with a large, verified, and diverse pool of students from across India."
    },
    {
      icon: Zap,
      title: "Streamline Application Processing",
      description: "Receive standardized, complete applications and documents, reducing manual data entry and follow-ups."
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description: "Utilize our dashboard to access rich analytics on your applicant pool, helping you make informed, data-driven admissions decisions."
    },
    {
      icon: Settings,
      title: "Customizable Requirements",
      description: "Add supplementary questions or specific document requests to your institution's application on the platform."
    }
  ];

  const partnerBenefits = [
    "Priority onboarding and dedicated account management",
    "Featured placement at platform launch", 
    "Opportunity to help shape platform development",
    "Early access to advanced analytics and reporting tools",
    "Co-marketing and thought leadership opportunities",
    "Reduced platform fees for the first year"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-6">
          <h1>A Strategic Partner for University Admissions</h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-balance">
            Unidash provides universities with a modern, efficient channel to expand their reach 
            and streamline the admissions process from initial application to final decision.
          </p>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-4 mb-16">
            <h2>Platform Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed to enhance your admissions process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-medium transition-smooth border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Partner Program */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="w-6 h-6 text-secondary" />
                <Badge variant="secondary">Exclusive Partnership</Badge>
              </div>
              <h2 className="text-white">Become a Founding University Partner</h2>
              <p className="text-xl text-primary-foreground/90">
                We are actively partnering with leading universities. Founding partners receive 
                priority onboarding, featured placement at launch, and the opportunity to help 
                shape the platform&apos;s development.
              </p>
              <Button variant="secondary" size="lg">
                Inquire About Partnership
              </Button>
            </div>
            <Card className="shadow-large bg-white border-border">
              <CardContent className="p-8 space-y-6">
                <h4 className="text-xl font-semibold text-foreground">Founding Partner Benefits:</h4>
                <div className="space-y-4">
                  {partnerBenefits.map((benefit, index) => (
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

      {/* Analytics Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-4 mb-16">
            <h2>University Analytics Dashboard</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get insights into your applicant pool with comprehensive analytics
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-large border border-border">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">3,247</div>
                <p className="text-sm text-blue-600 font-medium">Total Applications</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg border border-green-100">
                <div className="text-3xl font-bold text-green-600 mb-2">1,856</div>
                <p className="text-sm text-green-600 font-medium">Qualified Candidates</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">28</div>
                <p className="text-sm text-purple-600 font-medium">States Represented</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-2">92%</div>
                <p className="text-sm text-orange-600 font-medium">Complete Applications</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Top Applying States</h4>
                <div className="space-y-3">
                  {[
                    { state: "Maharashtra", count: "487 applications" },
                    { state: "Tamil Nadu", count: "342 applications" },
                    { state: "Karnataka", count: "298 applications" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium text-foreground">{item.state}</span>
                      <span className="text-muted-foreground">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Application Status</h4>
                <div className="space-y-3">
                  {[
                    { status: "Under Review", count: "1,456", color: "bg-yellow-100 text-yellow-800" },
                    { status: "Accepted", count: "342", color: "bg-green-100 text-green-800" },
                    { status: "Pending Documents", count: "89", color: "bg-blue-100 text-blue-800" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium text-foreground">{item.status}</span>
                      <Badge className={item.color}>{item.count}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}