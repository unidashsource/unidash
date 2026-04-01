"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, GraduationCap, Building, ChevronRight, CheckCircle2 } from "lucide-react";
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

export default function HomePage() {
  const universityLogos = [
    "University of Delhi",
    "VIT Vellore", 
    "Manipal Academy",
    "Ashoka University",
    "Shiv Nadar Institution"
  ];

  const steps = [
    {
      number: "01",
      title: "Create One Profile",
      description: "Input academic, personal, and extracurricular details a single time."
    },
    {
      number: "02", 
      title: "Discover Universities",
      description: "Use our comprehensive search and filter tools to find and shortlist institutions."
    },
    {
      number: "03",
      title: "Submit Multiple Applications", 
      description: "Apply to all shortlisted universities with your single profile."
    },
    {
      number: "04",
      title: "Track Your Progress",
      description: "Monitor the status of all applications from a central dashboard."
    }
  ];

  const audiences = [
    {
      title: "Students & Parents",
      description: "A streamlined, transparent, and organized application experience.",
      icon: Users,
      link: "/about/students",
      color: "bg-blue-50 text-primary border-blue-100"
    },
    {
      title: "High Schools", 
      description: "A powerful administrative tool for counselors to manage and track student applications.",
      icon: GraduationCap,
      link: "/about/schools",
      color: "bg-slate-50 text-slate-800 border-slate-200"
    },
    {
      title: "Universities",
      description: "A platform to attract a wider pool of qualified applicants and streamline admissions.",
      icon: Building,
      link: "/about/universities", 
      color: "bg-neutral-50 text-neutral-800 border-neutral-200"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Premium Corporate Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200 pt-24 pb-32">
        {/* Subtle dot pattern background for texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto container-padding">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn}>
              <Badge variant="outline" className="mb-6 px-4 py-1 text-sm border-primary/20 bg-primary/5 text-primary">
                Unidash Platform Launching 2026
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-balance text-slate-900 font-extrabold tracking-tight">
              The Standardized Application <br className="hidden sm:block" />
              for Indian Higher Education
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-slate-600 text-balance max-w-2xl mx-auto font-medium">
              A single, secure platform connecting students with premier institutions across the country. Simplify your journey from discovery to enrollment.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="text-base h-12 px-8 shadow-md">
                Create an Account
              </Button>
              <Button variant="outline" size="lg" className="text-base h-12 px-8 bg-white" asChild>
                <Link href="/about/students">
                  Explore Requirements <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partner Trust Bar */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto container-padding py-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 text-center mb-8">
            Trusted by Prospective Partner Institutions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-80">
            {universityLogos.map((university, index) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index} 
                className="text-slate-800 font-semibold text-lg tracking-tight"
              >
                {university}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured "How it Works" - Bento/Linear style */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="space-y-4 mb-20 text-center">
            <h2 className="text-slate-900">A Streamlined Admissions Process</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We eliminate redundancy by standardizing requirements and managing data securely in one place.
            </p>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map((step, index) => (
              <motion.div variants={fadeIn} key={index}>
                <Card className="h-full border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden bg-white">
                  <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 group-hover:bg-primary transition-colors duration-300"></div>
                  <CardContent className="p-8 pt-10">
                    <span className="text-5xl font-extrabold text-slate-100 absolute top-4 right-4 pointer-events-none transition-smooth group-hover:text-primary/5">
                      {step.number}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 mb-3 relative z-10">{step.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm relative z-10">{step.description}</p>
                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors">
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="section-padding bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="mb-16">
            <h2 className="text-slate-900 mb-4">Tailored Portals for Every Stakeholder</h2>
            <p className="text-xl text-slate-600 max-w-2xl">
              Unidash offers dedicated interfaces designed specifically for the unique needs of applicants, counselors, and admission teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
              >
                <Link href={audience.link} className="block h-full">
                  <Card className={`h-full border shadow-sm hover:shadow-lg transition-all duration-200 bg-white`}>
                    <CardContent className="p-8 space-y-6">
                      <div className={`w-14 h-14 rounded-lg flex items-center justify-center border ${audience.color}`}>
                        <audience.icon className="w-7 h-7" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-slate-900">{audience.title}</h4>
                        <p className="text-slate-600 leading-relaxed text-sm">{audience.description}</p>
                      </div>
                      <div className="pt-4 flex items-center text-primary font-semibold text-sm">
                        View Portal Info <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Final CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] rounded-full bg-white opacity-5 blur-3xl"></div>
        <div className="max-w-5xl mx-auto container-padding text-center space-y-8 relative z-10">
          <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
            Ready to Standardize Your Admissions?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            Take the first step towards a unified, secure, and professional application experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="secondary" size="lg" className="h-12 px-8 text-base">
              Join the Platform
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
