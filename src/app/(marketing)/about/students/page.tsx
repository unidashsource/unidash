"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, BarChart3, CreditCard, Eye, CheckCircle2 } from "lucide-react";
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
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="max-w-4xl mx-auto container-padding text-center space-y-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <motion.h1 variants={fadeIn} className="text-slate-900 font-extrabold tracking-tight text-4xl sm:text-5xl">
              A Purpose-Built Platform <br/> for Students and Parents
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-slate-600 leading-relaxed text-balance max-w-3xl mx-auto font-medium">
              Eliminate repetitive tasks and gain a clear, organized view of your entire application process. Focus on making the right decision, not managing paperwork.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-slate-900">Standardized Application Tools</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to apply to multiple institutions efficiently and securely.
            </p>
          </div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div variants={fadeIn} key={index}>
                <Card className="hover:shadow-md transition-all duration-300 border-slate-200 bg-white h-full group">
                  <CardContent className="p-8 space-y-5">
                    <div className="w-12 h-12 bg-blue-50/50 border border-blue-100 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">{feature.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Parental Oversight */}
      <section className="section-padding bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-slate-900 mb-4">Complete Transparency <br/>for Parents</h2>
                <p className="text-lg text-slate-600">
                  A designated parent portal provides a high-level view of application progress, impending deadlines, and financial obligations. Built on banking-grade security architecture.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-green-50 p-2 rounded-lg border border-green-100">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Secure & Private</h4>
                    <p className="text-slate-600 text-sm">All applicant data is encrypted at rest and in transit.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-blue-50 p-2 rounded-lg border border-blue-100">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Real-time Status Updates</h4>
                    <p className="text-slate-600 text-sm">Automated email and portal notifications for critical milestones.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400"></div>
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Dashboard Overview</h3>
                    <Badge variant="outline" className="bg-white text-slate-500 border-slate-200">Parent View</Badge>
                  </div>
                  
                  <div className="space-y-4 pt-2">
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex gap-4 items-center">
                      <div className="w-1 h-10 bg-blue-500 rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Application Status</h4>
                        <p className="text-sm text-slate-500">5 total applications &middot; 2 pending institutional review</p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex gap-4 items-center">
                      <div className="w-1 h-10 bg-orange-500 rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Critical Deadlines</h4>
                        <p className="text-sm text-slate-500">University of Delhi Application due in 3 days</p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex gap-4 items-center">
                      <div className="w-1 h-10 bg-green-500 rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Document Verification</h4>
                        <p className="text-sm text-slate-500 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-green-500" /> All core documents verified
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-primary-light/20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="max-w-3xl mx-auto container-padding relative z-10 space-y-8">
          <h2 className="text-white text-3xl sm:text-4xl font-bold">Ready to Simplify Your Admissions Journey?</h2>
          <p className="text-lg text-white/80 font-medium">
            Join the waitlist to be among the first students to utilize India's standardized university application platform.
          </p>
          <Button variant="secondary" size="lg" className="h-12 px-8 text-base shadow-lg">
            Create Student Account
          </Button>
        </div>
      </section>
    </div>
  );
}