"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Upload, BarChart3, Star, Server, CheckSquare } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

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
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 [clip-path:polygon(10%_0%,100%_0,100%_100%,0%_100%)] opacity-50 hidden lg:block"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
        <div className="max-w-4xl mx-auto container-padding text-center space-y-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <motion.h1 variants={fadeIn} className="text-slate-900 font-extrabold tracking-tight text-4xl sm:text-5xl">
              An Administrative Platform <br/> for High School Counselors
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-slate-600 leading-relaxed text-balance max-w-3xl mx-auto font-medium">
              The Unidash Counselor Portal is a powerful, integrated tool designed to streamline administrative workflows and provide actionable, data-driven insights.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Functionalities */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-slate-900">Core Functionalities</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Built for performance and reliability at national scale.
            </p>
          </div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {functionalities.map((functionality, index) => (
              <motion.div variants={fadeIn} key={index}>
                <Card className="hover:shadow-md transition-all duration-300 border-slate-200 bg-white h-full">
                  <CardContent className="p-8 pt-10 text-center space-y-5">
                    <div className="w-16 h-16 mx-auto bg-slate-100 border border-slate-200 rounded-2xl flex items-center justify-center">
                      <functionality.icon className="w-8 h-8 text-slate-800" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">{functionality.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{functionality.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Counselor Dashboard Visual representation */}
      <section className="section-padding bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-slate-900">Counselor Dashboard Visualization</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                A unified interface representing the tools available in the portal.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-300 to-slate-200"></div>
              
              <div className="flex justify-between items-center mb-8 border-b border-slate-200 pb-4">
                <div className="flex gap-2 items-center">
                  <Server className="w-5 h-5 text-slate-400" />
                  <span className="font-bold text-slate-700">Administrator Console</span>
                </div>
                <Badge variant="outline" className="bg-white text-slate-500 border-slate-200">Verified School Network</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-left p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                  <p className="text-sm font-bold text-slate-500 mb-1 uppercase tracking-wider">Active Students</p>
                  <div className="text-4xl font-extrabold text-slate-900">247</div>
                </div>
                <div className="text-left p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                  <p className="text-sm font-bold text-slate-500 mb-1 uppercase tracking-wider">Applications Processed</p>
                  <div className="text-4xl font-extrabold text-blue-600">1,456</div>
                </div>
                <div className="text-left p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                  <p className="text-sm font-bold text-slate-500 mb-1 uppercase tracking-wider">Placement Target</p>
                  <div className="text-4xl font-extrabold text-green-600">89%</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900">Recent Automated Submissions</h4>
                <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden">
                  {[
                    { student: "Priya Sharma", uni: "VIT Vellore", status: "Transcripts Uploaded" },
                    { student: "Rahul Kumar", uni: "SRM University", status: "Evaluation Pending" },
                    { student: "Ananya Gupta", uni: "Manipal Academy", status: "Fully Processed" }
                  ].map((row, index) => (
                    <div key={index} className="flex justify-between items-center p-4 hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <CheckSquare className="w-5 h-5 text-green-500" />
                        <div>
                          <span className="font-bold text-slate-900 block text-sm">{row.student}</span>
                          <span className="text-xs text-slate-500 font-medium">{row.uni}</span>
                        </div>
                      </div>
                      <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200 border-none">{row.status}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pioneer Program */}
      <section className="py-24 bg-[#F1F5F9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 mb-4 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-sm">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-slate-700">Enterprise Partnership</span>
              </div>
              <h2 className="text-slate-900">The Pioneer School Program</h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                We are carefully selecting forward-thinking institutions to join our Pioneer Program. Participants receive early access, direct input into the platform's compliance and feature roadmap, and a complimentary perpetual license for the Counselor Portal.
              </p>
              <div className="pt-4">
                <Button size="lg" className="h-12 px-8 text-base shadow-md">
                  Request an Institutional Demo
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-lg border-slate-200 bg-white">
                <CardContent className="p-8 md:p-10 space-y-6">
                  <h4 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">Pioneer Benefits Include:</h4>
                  <div className="space-y-5">
                    {pioneerBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-100">
                          <CheckSquare className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <p className="text-slate-700 font-medium text-sm leading-relaxed">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}