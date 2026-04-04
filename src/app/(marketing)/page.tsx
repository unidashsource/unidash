"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, GraduationCap, Building, Search, BookOpen, FileText, Activity, ShieldCheck, Database, LayoutDashboard, Send, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const universityLogos = [
    { name: "University of Delhi", icon: Building },
    { name: "VIT Vellore", icon: Building },
    { name: "Manipal Academy", icon: Building },
    { name: "Ashoka University", icon: Building },
    { name: "Shiv Nadar Institution", icon: Building },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary/10">
      {/* 1. Immersive Enterprise Hero */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200 pt-6 lg:pt-10 pb-20 lg:pb-32">
        {/* Subtle grid background for density */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60"></div>
        
        <div className="max-w-7xl mx-auto container-padding flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          {/* Hero Typography */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              The Standard for Indian Higher Education
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] text-balance">
              Unified Infrastructure for <span className="text-primary block mt-2">University Admissions</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Unidash is the centralized, secure, and standardized application ecosystem connecting applicants, high schools, and premier universities across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button size="lg" className="h-14 px-8 text-base font-semibold shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full bg-primary hover:-translate-y-0.5 transition-all duration-300">
                Partner with Unidash
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-base font-semibold rounded-full border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 group" asChild>
                <Link href="/about/students">
                  For Students <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Dashboard Mockup (Data Dense & Professional) */}
          <div className="flex-1 w-full relative min-h-[500px]">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 rounded-2xl border border-slate-200/80 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden"
            >
              {/* Mock Topbar */}
              <div className="h-12 bg-white border-b border-slate-100 flex items-center px-4 justify-between">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                </div>
                <div className="h-5 w-48 bg-slate-50 rounded-md border border-slate-100"></div>
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-slate-200"></div>
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-slate-300"></div>
                </div>
              </div>
              
              {/* Mock Content */}
              <div className="flex h-full p-4 gap-4">
                {/* Mock Sidebar */}
                <div className="hidden sm:flex w-40 flex-col space-y-2">
                  <div className="h-8 rounded-md bg-slate-50 border border-slate-100 flex items-center px-3 gap-2"><LayoutDashboard className="w-3 h-3 text-slate-400"/><div className="h-2 w-16 bg-slate-300 rounded"></div></div>
                  <div className="h-8 rounded-md flex items-center px-3 gap-2"><Users className="w-3 h-3 text-slate-400"/><div className="h-2 w-20 bg-slate-200 rounded"></div></div>
                  <div className="h-8 rounded-md flex items-center px-3 gap-2"><FileText className="w-3 h-3 text-slate-400"/><div className="h-2 w-12 bg-slate-200 rounded"></div></div>
                </div>
                
                {/* Mock Main Area */}
                <div className="flex-1 flex flex-col gap-4">
                  {/* Stats */}
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between h-24">
                        <div className="flex justify-between items-center"><div className="h-2 w-12 bg-slate-200 rounded"></div><Activity className="w-3 h-3 text-slate-300"/></div>
                        <div>
                          <div className="h-5 w-16 bg-slate-800 rounded mb-2"></div>
                          <div className="h-1.5 w-full bg-slate-50 rounded"><div className={`h-full bg-primary rounded w-${i}/3`}></div></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Table */}
                  <div className="bg-white flex-1 rounded-xl border border-slate-100 shadow-sm p-4 overflow-hidden">
                    <div className="flex justify-between mb-4 border-b border-slate-50 pb-3">
                      <div className="h-3 w-24 bg-slate-200 rounded"></div>
                      <div className="h-5 w-16 bg-slate-50 rounded-full border border-slate-100"></div>
                    </div>
                    <div className="space-y-3">
                      {[1, 2, 3, 4].map((j) => (
                        <div key={j} className="flex items-center justify-between pb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] text-slate-400 font-medium">JD</div>
                            <div className="flex flex-col gap-1.5"><div className="h-2.5 w-24 bg-slate-800 rounded"></div><div className="h-1.5 w-16 bg-slate-300 rounded"></div></div>
                          </div>
                          <div className="h-5 w-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-[9px] font-bold tracking-wide">VERIFIED</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Trust Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.6, duration: 0.6 }} 
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-slate-200/60 flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6"/>
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">Enterprise Security</div>
                <div className="text-slate-500 text-xs font-medium">SOC-2 & GDPR Compliant</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Elevated Trust Stats & Marquee */}
      <section className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto container-padding">
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-12 mb-16 px-4 md:px-8 py-8 md:py-12 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
            {[
              { val: "1,000+", label: "Partner Institutions" },
              { val: "2.5M+", label: "Applications Processed" },
              { val: "99.9%", label: "Uptime Guaranteed" },
              { val: "256-bit", label: "Data Encryption" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-1">{stat.val}</p>
                <p className="text-sm font-semibold text-slate-500 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
              Trusted by the Nation's Leading Educational Institutions
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60">
              {universityLogos.map((uni, idx) => (
                <div key={idx} className="flex items-center text-slate-600 hover:text-slate-900 transition-colors cursor-default">
                  <uni.icon className="w-6 h-6 mr-2" />
                  <span className="font-bold text-lg tracking-tight">{uni.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. The "Platform Proof" Bento Grid */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Purpose-Built Infrastructure</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We standardize the sprawling application process into discrete, highly structured data pipelines, removing redundancy for applicants and generating clean, usable data for institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento 1: Large Core Feature */}
            <div className="col-span-1 md:col-span-2 bg-white rounded-3xl border border-slate-200/60 p-8 md:p-12 shadow-sm relative overflow-hidden group">
              <div className="relative z-10 w-full md:w-2/3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Unified Data Ontology</h3>
                <p className="text-slate-600 leading-relaxed max-w-sm">
                  One standardized profile schema handles demographic, academic, and extracurricular data, mapping natively to thousands of individual university CRM requirements.
                </p>
              </div>
              {/* Graphic Element */}
              <div className="absolute right-0 bottom-0 md:-right-10 md:-bottom-10 w-64 h-64 bg-slate-50 border border-slate-100 rounded-tl-2xl p-6 shadow-[-10px_-10px_30px_rgba(0,0,0,0.03)] hidden sm:block transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2">
                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-slate-200 rounded"></div>
                  <div className="h-4 w-1/2 bg-slate-200 rounded"></div>
                  <div className="h-10 w-full bg-white border border-slate-200 rounded-md mt-4 flex items-center px-4"><div className="h-2 w-1/3 bg-slate-300 rounded"></div></div>
                  <div className="h-10 w-full bg-white border border-slate-200 rounded-md flex items-center px-4"><div className="h-2 w-1/2 bg-slate-300 rounded"></div></div>
                </div>
              </div>
            </div>

            {/* Bento 2: Vertical Feature */}
            <div className="col-span-1 bg-white rounded-3xl border border-slate-200/60 p-8 md:p-12 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Verified Document Exchange</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Securely transmit counselor recommendations, official transcripts, and standardized test scores with end-to-end encryption.
              </p>
            </div>

            {/* Bento 3: Vertical Feature */}
            <div className="col-span-1 bg-white rounded-3xl border border-slate-200/60 p-8 md:p-12 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1-Click Batch Submission</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Applicants can aggregate supplementals and submit to multiple institutions simultaneously, tracking all live decision statuses.
              </p>
            </div>

            {/* Bento 4: Large Anchor */}
            <div className="col-span-1 md:col-span-2 bg-primary rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] text-white relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
               <div className="relative z-10 w-full md:w-2/3">
                <h3 className="text-2xl font-bold text-white mb-3">Flawless CRM Integrations</h3>
                <p className="text-primary-foreground/80 leading-relaxed max-w-md mb-8">
                  For institutions, Unidash connects directly to Slate, Salesforce, and custom endpoints via our robust GraphQL API, eliminating manual data entry completely.
                </p>
                <Button className="bg-white text-primary hover:bg-slate-50 font-bold px-6 rounded-full shadow-lg">
                  View Developer Docs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Structured B2B Audiences */}
      <section className="bg-white py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Architected for the Ecosystem</h2>
            <p className="text-lg text-slate-600">
              Unidash offers dedicated, highly specialized workflow portals calibrated to the distinct operational realities of each stakeholder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow rounded-2xl overflow-hidden flex flex-col group">
              <div className="bg-slate-50 p-6 border-b border-slate-100 flex items-center justify-center h-40">
                 <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-700 group-hover:scale-110 group-hover:text-primary transition-all duration-300">
                   <Users className="w-8 h-8" />
                 </div>
              </div>
              <CardContent className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Applicant Portal</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  A centralized hub for students to research, manage essays, and execute submissions with zero redundant data entry.
                </p>
                <Link href="/about/students" className="text-primary font-semibold text-sm flex items-center group-hover:underline">
                  Explore Student Featues <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow rounded-2xl overflow-hidden flex flex-col group">
              <div className="bg-slate-50 p-6 border-b border-slate-100 flex items-center justify-center h-40">
                 <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-700 group-hover:scale-110 group-hover:text-primary transition-all duration-300">
                   <GraduationCap className="w-8 h-8" />
                 </div>
              </div>
              <CardContent className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Counselor Dashboard</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  Enterprise caseload management enabling high schools to securely transmit transcripts and recommendations at scale.
                </p>
                <Link href="/about/schools" className="text-primary font-semibold text-sm flex items-center group-hover:underline">
                  View Counselor Tools <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* University Card is HIGHLIGHTED to attract the B2B buyer */}
            <Card className="border-primary/20 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-2xl overflow-hidden flex flex-col group relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
              <div className="bg-primary/5 p-6 border-b border-primary/10 flex items-center justify-center h-40">
                 <div className="w-16 h-16 rounded-2xl bg-primary shadow-sm flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300">
                   <Building className="w-8 h-8" />
                 </div>
              </div>
              <CardContent className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Institution Enrollment</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  Access a broader applicant pool and ingest clean, structured applicant data perfectly formatted for your admission CRM.
                </p>
                <Link href="/about/universities" className="text-primary font-semibold text-sm flex items-center group-hover:underline">
                  Become a Member <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}
