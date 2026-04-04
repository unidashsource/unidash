"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, BarChart3, CreditCard, Eye, CheckCircle2, UserCircle } from "lucide-react";

export default function StudentsPage() {
  const features = [
    {
      icon: FileText,
      title: "Universal Profile",
      description: "Enter your academic and personal information once. The platform securely stores it for all your applications."
    },
    {
      icon: Shield,
      title: "Centralized Document Hub", 
      description: "Upload mark sheets, identity proofs, and other documents a single time in a secure, validated vault."
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
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 py-20 relative">
        <div className="max-w-5xl mx-auto container-padding text-center space-y-8 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
            <UserCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-slate-700 tracking-wide uppercase">Applicant Portal</span>
          </div>
          <h1 className="text-slate-900 font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            A Purpose-Built Platform <br className="hidden md:block" /> for Students and Parents
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-balance max-w-3xl mx-auto">
            Eliminate repetitive tasks and gain a clear, organized view of your entire application process. Focus on making the right decision, not managing paperwork.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Standardized Application Tools</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to apply to multiple institutions efficiently and securely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-sm shadow-slate-200/50 bg-white h-full hover:shadow-md transition-shadow">
                <CardContent className="p-10 space-y-6 flex flex-col md:flex-row items-start gap-6">
                  <div className="w-14 h-14 shrink-0 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-lg">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parental Oversight */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Complete Transparency <br className="hidden lg:block" />for Parents</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  A designated parent portal provides a high-level view of application progress, impending deadlines, and financial obligations. Built on banking-grade security architecture.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 shrink-0 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div className="pt-2">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Secure & Private</h4>
                    <p className="text-slate-600">All applicant data is encrypted at rest and in transit.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 shrink-0 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <div className="pt-2">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Real-time Status Updates</h4>
                    <p className="text-slate-600">Automated email and portal notifications for critical milestones.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-6 gap-4">
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Dashboard Overview</h3>
                    <Badge variant="outline" className="bg-white px-3 py-1 text-slate-600 border-slate-300">Parent View</Badge>
                  </div>
                  
                  <div className="space-y-4 pt-2">
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                      <div className="mt-1 w-2 h-2 rounded-full bg-blue-500"></div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Application Status</h4>
                        <p className="text-slate-600">5 total applications &middot; 2 pending institutional review</p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                      <div className="mt-1 w-2 h-2 rounded-full bg-orange-500"></div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Critical Deadlines</h4>
                        <p className="text-slate-600">University of Delhi Application due in 3 days</p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                      <div className="mt-1 w-2 h-2 rounded-full bg-green-500"></div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Document Verification</h4>
                        <p className="text-slate-600 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" /> All core documents verified
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-center px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Ready to Simplify Your Admissions Journey?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join the waitlist to be among the first students to utilize India's standardized university application platform.
          </p>
          <Button variant="secondary" size="lg" className="h-14 px-10 text-base shadow-lg rounded-md mt-4">
            Create Student Account
          </Button>
        </div>
      </section>
    </div>
  );
}