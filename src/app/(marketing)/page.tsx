"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, GraduationCap, Building, ChevronRight, CheckCircle2, Search, BookOpen, Globe2, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const universityLogos = [
    { name: "University of Delhi", icon: Building },
    { name: "VIT Vellore", icon: Building },
    { name: "Manipal Academy", icon: Building },
    { name: "Ashoka University", icon: Building },
    { name: "Shiv Nadar Institution", icon: Building },
    { name: "O.P. Jindal Global", icon: Building }
  ];

  const statistics = [
    { value: "1,000+", label: "Partner Universities" },
    { value: "50+", label: "Academic Programs" },
    { value: "1", label: "Centralized Profile" },
    { value: "100%", label: "Secure & Verified" }
  ];

  const steps = [
    {
      number: "1",
      title: "Create Your Profile",
      description: "Enter your demographic, academic, and extracurricular details once. Our centralized system securely stores your information for all your applications.",
      icon: Users
    },
    {
      number: "2",
      title: "Explore Universities",
      description: "Search and filter through premier Indian institutions based on your interests, location, and academic profile.",
      icon: Search
    },
    {
      number: "3",
      title: "Submit Applications",
      description: "Review school-specific requirements, attach necessary essays, and submit to multiple universities seamlessly.",
      icon: FileText
    },
    {
      number: "4",
      title: "Track Your Status",
      description: "Monitor application statuses, view counselor recommendations, and receive decisions natively in your portal.",
      icon: CheckCircle2
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto container-padding py-16 md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Your Path to <span className="text-primary">Higher Education</span> Starts Here
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Unidash is the standardized, secure, and unified application platform connecting students with prospective universities across India. 
              Simplify your journey, amplify your opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="h-14 px-8 text-base font-semibold shadow-sm rounded-md bg-primary hover:bg-primary-light">
                Create an Account
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-base font-semibold rounded-md border-slate-300 text-slate-700 hover:bg-slate-50" asChild>
                <Link href="/about/universities">
                  Explore Universities
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Right Visual Image/Graphic */}
          <div className="flex-1 w-full bg-slate-100 rounded-xl overflow-hidden relative shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200 aspect-video md:aspect-square lg:aspect-[4/3] flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 opacity-50"></div>
             {/* A placeholder for a professional photo of students */}
             <div className="text-center z-10 px-6">
                <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-400 font-medium uppercase tracking-widest text-sm">Empowering Education</p>
             </div>
             {/* Decorative UI elements to simulate dashboard */}
             <div className="absolute top-8 left-8 right-8 bg-white/80 backdrop-blur rounded-lg shadow-sm h-12 flex items-center px-4">
                <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-4 h-3 w-1/3 bg-slate-200 rounded-full"></div>
             </div>
             <div className="absolute top-24 left-8 right-8 bottom-8 flex gap-4">
                <div className="w-1/3 bg-white/80 backdrop-blur rounded-lg shadow-sm"></div>
                <div className="w-2/3 bg-white/80 backdrop-blur rounded-lg shadow-sm flex flex-col gap-4 p-4">
                  <div className="h-8 bg-slate-100 rounded-md w-1/2"></div>
                  <div className="h-4 bg-slate-100 rounded-md w-full mt-auto"></div>
                  <div className="h-4 bg-slate-100 rounded-md w-5/6"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-slate-100 pb-12">
            {statistics.map((stat, idx) => (
              <div key={idx} className="text-center border-l first:border-l-0 border-slate-200">
                <p className="text-4xl font-extrabold text-primary mb-2">{stat.value}</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">
              Trusted by Premier Higher Education Institutions
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {universityLogos.map((uni, idx) => (
                <div key={idx} className="flex items-center text-slate-500 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                  <uni.icon className="w-5 h-5 mr-2" />
                  <span className="font-semibold text-lg">{uni.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - Structured Layout */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center md:text-left md:flex justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">A Unified Application Process</h2>
              <p className="text-lg text-slate-600">
                We streamline the transition from high school to university by removing redundancy and standardizing application requirements.
              </p>
            </div>
            <Link href="/faq" className="hidden md:flex items-center text-primary font-semibold hover:text-primary-light transition-colors">
              Read our FAQ <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <Card key={idx} className="bg-white border-none shadow-sm shadow-slate-200/50 rounded-xl overflow-hidden">
                <div className="h-2 bg-primary w-full"></div>
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary font-bold text-xl mb-6">
                    {step.number}
                  </div>
                  <div className="mb-4 text-primary">
                    <step.icon className="w-8 h-8 opacity-80" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/faq" className="inline-flex items-center text-primary font-semibold">
              Read our FAQ <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Audiences - High Contrast Dark Blue Section similar to older corporate styles but modernized */}
      <section className="bg-slate-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Built for the Entire Education Ecosystem</h2>
            <p className="text-lg text-slate-300">
              Unidash provides specialized portals tailored specifically to the unique operational workflows of applicants, schools, and admission offices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Student Card */}
            <div className="bg-white text-slate-900 rounded-lg overflow-hidden group">
              <div className="h-48 bg-slate-200 flex items-center justify-center border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-300 transition-colors">
                <Users className="w-16 h-16 text-slate-400" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Applicants</h3>
                <p className="text-slate-600 mb-6 min-h-[80px]">
                  Take control of your future with a single interface to research institutions, manage deadlines, and submit applications.
                </p>
                <Button variant="outline" className="w-full text-primary border-primary/20 hover:bg-primary/5 font-semibold" asChild>
                  <Link href="/about/students">Applicant Portal Details</Link>
                </Button>
              </div>
            </div>

            {/* Counselors Card */}
            <div className="bg-white text-slate-900 rounded-lg overflow-hidden group">
              <div className="h-48 bg-slate-200 flex items-center justify-center border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-300 transition-colors">
                <GraduationCap className="w-16 h-16 text-slate-400" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">High Schools</h3>
                <p className="text-slate-600 mb-6 min-h-[80px]">
                  Equip counselors with powerful caseload management tools and secure document transmission to universities.
                </p>
                <Button variant="outline" className="w-full text-slate-700 border-slate-300 hover:bg-slate-50 font-semibold" asChild>
                  <Link href="/about/schools">Counselor Platform Info</Link>
                </Button>
              </div>
            </div>

            {/* Universities Card */}
            <div className="bg-white text-slate-900 rounded-lg overflow-hidden group">
              <div className="h-48 bg-slate-200 flex items-center justify-center border-b border-slate-100 relative overflow-hidden group-hover:bg-slate-300 transition-colors">
                <Globe2 className="w-16 h-16 text-slate-400" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Universities</h3>
                <p className="text-slate-600 mb-6 min-h-[80px]">
                  Broaden your applicant pool and ingest clean, standardized data directly into your existing admission CRM.
                </p>
                <Button variant="outline" className="w-full text-slate-700 border-slate-300 hover:bg-slate-50 font-semibold" asChild>
                  <Link href="/about/universities">Member Institution Info</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information / Resource Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Stay Informed with the Admissions Blog</h2>
              <p className="text-slate-600 text-lg">
                Access free guides, application tips, and the latest updates on participating institutions across the country.
              </p>
            </div>
            <Button size="lg" className="shrink-0 bg-white text-primary border border-slate-300 hover:bg-slate-100 shadow-sm font-semibold rounded-md h-12 px-8" asChild>
              <Link href="/resources">Read Resources</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}

