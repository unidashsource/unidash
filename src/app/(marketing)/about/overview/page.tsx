"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Quote, Zap, Map, Anchor } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-slate-200 py-24 relative overflow-hidden">
        {/* CSS Pattern to replace empty space */}
        <div className="absolute inset-0 bg-[linear-gradient(wrap_slate-200_1px,transparent_1px),linear-gradient(90deg,wrap_slate-200_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
        
        <div className="max-w-4xl mx-auto container-padding text-center space-y-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <motion.div variants={fadeIn} className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm mb-4">
              <Anchor className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-slate-700 tracking-wide uppercase">Corporate Overview</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-slate-900 font-extrabold tracking-tight text-5xl">
              Building the Infrastructure <br/> for Indian Higher Education
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-slate-600 leading-relaxed text-balance max-w-3xl mx-auto font-medium">
              We are a dedicated group of educators, engineers, and administrators solving the fragmentation of the university application process. 
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section (Heavy Visual Layout) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 pr-0 lg:pr-8"
            >
              <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                Our Mission is to <br /> <span className="text-primary text-4xl">Standardize without Compromise.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                The current ecosystem forces students to fill out the exact same demographic information, upload identical transcripts, and type the same academic history across dozens of divergent university portals.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Unidash standardizes the core application while giving universities the power to request supplemental, institution-specific requirements on top.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-slate-900">Radical Efficiency</h4>
                  <p className="text-sm text-slate-500 font-medium">Save hundreds of hours per student.</p>
                </div>
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center">
                    <Map className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="font-bold text-slate-900">National Reach</h4>
                  <p className="text-sm text-slate-500 font-medium">Connecting every state and board.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-3xl opacity-10"></div>
              <div className="bg-slate-900 rounded-3xl p-10 lg:p-12 relative shadow-2xl">
                <Quote className="w-12 h-12 text-slate-700 mb-6" />
                <p className="text-2xl text-white font-medium leading-relaxed mb-8">
                  "It shouldn't require a spreadsheet and a team of consultants just to figure out how to submit your transcripts to five different engineering colleges. Unidash is the necessary middleware."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center font-bold text-lg border border-slate-700">
                    PS
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Dr. Priya Sharma</div>
                    <div className="text-slate-400 font-medium">CEO & Co-Founder</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section (Bento Grid Style) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-slate-900 text-3xl font-extrabold tracking-tight">Our Executive Team</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Vets from the intersection of national administration and high-growth technology.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div variants={fadeIn} key={index}>
                <Card className="h-full bg-white border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8 pb-10 flex flex-col items-center text-center">
                    <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-tr from-slate-100 to-slate-200 border border-slate-300 flex items-center justify-center shadow-inner">
                      <span className="text-2xl font-black tracking-widest text-slate-500 uppercase">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                    <p className="text-primary font-bold text-sm uppercase tracking-wider mb-4">{member.title}</p>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Portals Navigation */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="bg-slate-900 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 space-y-12">
              <div className="max-w-2xl">
                <h2 className="text-4xl text-white font-extrabold tracking-tight mb-4">Explore the Ecosystem</h2>
                <p className="text-xl text-slate-400 font-medium leading-relaxed">
                  Unidash provides specialized portals tailored to the distinct needs of each stakeholder in the admissions process.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/about/students" className="group p-6 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 rounded-2xl transition-all duration-300 flex flex-col h-full">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Students & Parents</h4>
                  <p className="text-slate-400 font-medium mb-6 text-sm flex-grow">Create a unified applicant profile and securely track decisions.</p>
                  <span className="text-sm font-bold text-white flex items-center uppercase tracking-wide">Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></span>
                </Link>

                <Link href="/about/schools" className="group p-6 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 rounded-2xl transition-all duration-300 flex flex-col h-full">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">High Schools</h4>
                  <p className="text-slate-400 font-medium mb-6 text-sm flex-grow">Counselor tools to manage transcripts, track data, and provide LORs.</p>
                  <span className="text-sm font-bold text-white flex items-center uppercase tracking-wide">Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></span>
                </Link>

                <Link href="/about/universities" className="group p-6 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 rounded-2xl transition-all duration-300 flex flex-col h-full">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Universities</h4>
                  <p className="text-slate-400 font-medium mb-6 text-sm flex-grow">Advanced analytics and streamlined institutional applicant funnels.</p>
                  <span className="text-sm font-bold text-white flex items-center uppercase tracking-wide">Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}