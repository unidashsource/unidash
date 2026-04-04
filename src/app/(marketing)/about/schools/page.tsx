"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Upload, BarChart3, Star, Server, CheckSquare, GraduationCap } from "lucide-react";

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
      description: "Upload official transcripts and letters of recommendation in bulk. A common recommendation form can be applied to multiple university applications."
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
    "Priority customer support and specialized training sessions",
    "Co-marketing opportunities and verified network badge"
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 py-20 relative">
        <div className="max-w-5xl mx-auto container-padding text-center space-y-8 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-slate-700 tracking-wide uppercase">Counselor Portal</span>
          </div>
          <h1 className="text-slate-900 font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            An Administrative Platform <br className="hidden md:block" /> for High Schools
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-balance max-w-3xl mx-auto">
            The Unidash Counselor Portal is a powerful, integrated tool designed to streamline administrative workflows and provide actionable, data-driven insights.
          </p>
        </div>
      </section>

      {/* Core Functionalities */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Core Functionalities</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Built for performance and reliability at a national scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {functionalities.map((functionality, index) => (
              <Card key={index} className="border-none shadow-sm shadow-slate-200/50 bg-white h-full hover:shadow-md transition-shadow">
                <CardContent className="p-10 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
                    <functionality.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">{functionality.title}</h4>
                  <p className="text-slate-600 text-base leading-relaxed">{functionality.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Counselor Dashboard Visual representation */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Dashboard Visualization</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A unified interface representing the tools available in the portal.
            </p>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200 shadow-lg relative overflow-hidden max-w-5xl mx-auto">
            <div className="absolute top-0 left-0 w-full h-2 bg-slate-400"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-slate-200 pb-6">
              <div className="flex gap-3 items-center">
                <Server className="w-6 h-6 text-slate-400" />
                <span className="font-bold text-slate-700 text-lg">Administrator Console</span>
              </div>
              <Badge variant="outline" className="bg-white px-3 py-1 text-slate-600 border-slate-300 uppercase tracking-widest">Verified School Network</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="text-left p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                <p className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wider">Active Students</p>
                <div className="text-4xl font-extrabold text-slate-900">247</div>
              </div>
              <div className="text-left p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                <p className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wider">Applications Processed</p>
                <div className="text-4xl font-extrabold text-blue-600">1,456</div>
              </div>
              <div className="text-left p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                <p className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wider">Placement Target</p>
                <div className="text-4xl font-extrabold text-green-600">89%</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-lg">Recent Automated Submissions</h4>
              <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-sm">
                {[
                  { student: "Priya Sharma", uni: "VIT Vellore", status: "Transcripts Uploaded" },
                  { student: "Rahul Kumar", uni: "SRM University", status: "Evaluation Pending" },
                  { student: "Ananya Gupta", uni: "Manipal Academy", status: "Fully Processed" }
                ].map((row, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 hover:bg-slate-50 transition-colors gap-4">
                    <div className="flex items-center gap-4">
                      <CheckSquare className="w-5 h-5 text-green-600" />
                      <div>
                        <span className="font-bold text-slate-900 block">{row.student}</span>
                        <span className="text-sm text-slate-500 font-medium">{row.uni}</span>
                      </div>
                    </div>
                    <Badge className="bg-slate-100 text-slate-700 border-none px-3 py-1 self-start sm:self-auto">{row.status}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pioneer Program */}
      <section className="py-20 md:py-28 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">Enterprise Partnership</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">The Pioneer School Program</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We are carefully selecting forward-thinking institutions to join our Pioneer Program. Participants receive early access, direct input into the platform's compliance and feature roadmap, and a complimentary perpetual license for the Counselor Portal.
              </p>
              <div className="pt-4">
                <Button size="lg" className="h-14 px-8 text-base shadow-md font-semibold">
                  Request an Institutional Demo
                </Button>
              </div>
            </div>
            
            <Card className="shadow-lg border-slate-200 bg-white">
              <CardContent className="p-10 md:p-12 space-y-8">
                <h4 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-6">Pioneer Benefits Include:</h4>
                <div className="space-y-6">
                  {pioneerBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 border border-slate-200">
                        <CheckSquare className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <p className="text-slate-700 text-lg leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}