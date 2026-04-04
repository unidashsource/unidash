"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Quote, Zap, Map, Anchor, Building2, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OverviewPage() {
  const teamMembers = [
    {
      name: "Dr. Priya Sharma",
      title: "Chief Executive Officer", 
      bio: "Former Director of Admissions at Delhi University. Spearheaded the Centralized Allocation system, managing over 300,000 applications annually."
    },
    {
      name: "Rahul Gupta",
      title: "Chief Technology Officer",
      bio: "Ex-Engineering Lead at Flipkart. Architected logistics pipelines processing 5M+ daily requests. Brings extreme scale infrastructure to education."
    },
    {
      name: "Dr. Anjali Mehta", 
      title: "Head of Academic Partnerships",
      bio: "Former Vice-Chancellor at Ashoka University. Deeply networked across the autonomous and deemed university ecosystem in India."
    },
    {
      name: "Vikram Singh",
      title: "VP of Product",
      bio: "Product veteran from BYJU's and Unacademy. Obsessed with reducing cognitive load and simplifying complex student interfaces."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-slate-200 py-20 relative">
        <div className="max-w-5xl mx-auto container-padding text-center space-y-8 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-slate-700 tracking-wide uppercase">Organizational Overview</span>
          </div>
          <h1 className="text-slate-900 font-extrabold tracking-tight text-4xl md:text-6xl leading-[1.1]">
            Building the Infrastructure <br className="hidden md:block" /> for Indian Higher Education
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-balance max-w-3xl mx-auto">
            We are a dedicated group of educators, engineers, and administrators solving the fragmentation of the university application process. 
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8 pr-0 lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Our Mission is to <br /> <span className="text-primary">Standardize without Compromise.</span>
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-slate-600 leading-relaxed">
                  The current ecosystem forces students to fill out the exact same demographic information, upload identical transcripts, and type the same academic history across dozens of divergent university portals.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Unidash standardizes the core application while giving universities the power to request supplemental, institution-specific requirements on top.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg">Radical Efficiency</h4>
                  <p className="text-slate-600">Save hundreds of hours per student and administrator.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <Map className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg">National Reach</h4>
                  <p className="text-slate-600">Connecting every state board to prospective universities.</p>
                </div>
              </div>
            </div>

            <div className="relative border border-slate-200 bg-white shadow-lg rounded-2xl p-8 md:p-12">
              <Quote className="w-10 h-10 text-slate-300 mb-6" />
              <p className="text-xl md:text-2xl text-slate-900 font-medium leading-relaxed mb-8">
                "It shouldn't require a spreadsheet and a team of consultants just to figure out how to submit your transcripts to five different engineering colleges. Unidash is the necessary middleware."
              </p>
              <div className="flex items-center space-x-4 border-t border-slate-100 pt-6">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-primary flex items-center justify-center font-bold text-lg">
                  PS
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg">Dr. Priya Sharma</div>
                  <div className="text-slate-500 font-medium uppercase text-sm tracking-wide">CEO & Co-Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-slate-900 text-3xl md:text-4xl font-bold tracking-tight">Our Leadership Team</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Veterans from the intersection of national administration and high-growth technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="h-full bg-white border-none shadow-sm rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-2 bg-primary"></div>
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                    <span className="text-xl font-bold text-slate-400">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                  <p className="text-primary font-semibold text-sm mb-4">{member.title}</p>
                  <p className="text-slate-600 leading-relaxed text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Portals Navigation */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto container-padding">
            
          <div className="space-y-12 max-w-5xl mx-auto">
            <div className="max-w-2xl text-center mx-auto md:text-left md:mx-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore the Ecosystem</h2>
              <p className="text-lg text-slate-300">
                Unidash provides specialized portals tailored to the distinct needs of each stakeholder in the admissions process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/about/students" className="group p-8 bg-white text-slate-900 rounded-xl hover:shadow-lg transition-all flex flex-col h-full border border-transparent hover:border-primary/20">
                <h4 className="text-xl font-bold mb-3">Students & Parents</h4>
                <p className="text-slate-600 mb-8 flex-grow">Create a unified applicant profile and securely track application decisions.</p>
                <span className="font-bold text-primary flex items-center uppercase tracking-wide text-sm">Portal Info <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></span>
              </Link>

              <Link href="/about/schools" className="group p-8 bg-white text-slate-900 rounded-xl hover:shadow-lg transition-all flex flex-col h-full border border-transparent hover:border-primary/20">
                <h4 className="text-xl font-bold mb-3">High Schools</h4>
                <p className="text-slate-600 mb-8 flex-grow">Counselor tools to manage transcripts, track data, and provide recommendations.</p>
                <span className="font-bold text-primary flex items-center uppercase tracking-wide text-sm">Portal Info <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></span>
              </Link>

              <Link href="/about/universities" className="group p-8 bg-white text-slate-900 rounded-xl hover:shadow-lg transition-all flex flex-col h-full border border-transparent hover:border-primary/20">
                <h4 className="text-xl font-bold mb-3">Universities</h4>
                <p className="text-slate-600 mb-8 flex-grow">Advanced analytics and streamlined institutional applicant funnels.</p>
                <span className="font-bold text-primary flex items-center uppercase tracking-wide text-sm">Portal Info <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}