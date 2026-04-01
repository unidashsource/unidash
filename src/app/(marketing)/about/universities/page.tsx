"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Zap, BarChart3, Settings, Crown, TrendingUp, Filter, ShieldCheck, CheckSquare } from "lucide-react";
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

export default function UniversitiesPage() {
  const benefits = [
    {
      icon: Users,
      title: "Expand Applicant Reach",
      description: "Connect with a large, verified, and diverse pool of students from across India, removing geographic barriers to discovery."
    },
    {
      icon: Zap,
      title: "Streamline Application Processing",
      description: "Receive standardized, complete applications and documents, dramatically reducing manual data entry and follow-up communication."
    },
    {
      icon: BarChart3,
      title: "Advanced Yield Analytics",
      description: "Utilize our secure dashboard to access rich analytics on your applicant pool, helping you make informed, data-driven admissions decisions."
    },
    {
      icon: Settings,
      title: "Customizable Requirements",
      description: "Add supplementary questions or specific document requests (portfolios, essays) to your institution's unified application."
    }
  ];

  const partnerBenefits = [
    "Priority technical onboarding and dedicated account management",
    "Featured placement at platform launch and in student discovery", 
    "Opportunity to participate in steering platform data standards",
    "Early access to predictive analytics and reporting beta tools",
    "Strategic co-marketing and thought leadership opportunities",
    "Reduced platform processing fees for the first two years"
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
        <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
          <ShieldCheck className="w-96 h-96 text-primary" />
        </div>
        
        <div className="max-w-4xl mx-auto container-padding text-center space-y-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <motion.h1 variants={fadeIn} className="text-slate-900 font-extrabold tracking-tight text-4xl sm:text-5xl">
              A Strategic Partner for <br className="hidden sm:block" /> University Admissions Teams
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-slate-600 leading-relaxed text-balance max-w-3xl mx-auto font-medium">
              Unidash provides universities with a modern, efficient, and highly secure channel to expand reach and streamline the enrollment funnel from initial discovery to final decision.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-slate-900">Institutional Platform Benefits</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A complete suite of tools designed to optimize enrollment operations.
            </p>
          </div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div variants={fadeIn} key={index}>
                <Card className="hover:shadow-md transition-all duration-300 border-slate-200 bg-white h-full group">
                  <CardContent className="p-8 space-y-5">
                    <div className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center group-hover:border-primary/50 group-hover:bg-blue-50/50 transition-colors">
                      <benefit.icon className="w-6 h-6 text-slate-700 group-hover:text-primary transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">{benefit.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Analytics Preview */}
      <section className="section-padding bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-slate-900">Admissions Intelligence Dashboard</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Secure, compliant infrastructure to process applications and analyze applicant data.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="flex justify-between items-center mb-8 border-b border-slate-200 pb-4">
                <div className="flex gap-2 items-center">
                  <TrendingUp className="w-5 h-5 text-slate-500" />
                  <span className="font-bold text-slate-800 tracking-tight">University Admissions Suite &middot; Fall 2026</span>
                </div>
                <div className="flex gap-3">
                  <Badge variant="outline" className="bg-white text-slate-500 border-slate-200"><Filter className="w-3 h-3 mr-1"/> Verified Data</Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="text-left p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Total Submissions</p>
                  <div className="text-3xl font-extrabold text-slate-900">3,247</div>
                </div>
                <div className="text-left p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Completed Files</p>
                  <div className="text-3xl font-extrabold text-blue-600">2,856</div>
                </div>
                <div className="text-left p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">States Represented</p>
                  <div className="text-3xl font-extrabold text-slate-900">28</div>
                </div>
                <div className="text-left p-6 bg-white rounded-xl border border-slate-200 shadow-sm border-l-4 border-l-green-500">
                  <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">File Completion Rate</p>
                  <div className="text-3xl font-extrabold text-green-600">88%</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide border-b border-slate-100 pb-2">Geographic Distribution</h4>
                  <div className="space-y-4">
                    {[
                      { state: "Maharashtra", count: "487", percent: "w-[85%]", color: "bg-blue-500" },
                      { state: "Karnataka", count: "342", percent: "w-[60%]", color: "bg-blue-400" },
                      { state: "Delhi NCR", count: "298", percent: "w-[45%]", color: "bg-blue-300" }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold text-slate-700 text-sm">{item.state}</span>
                          <span className="text-slate-500 text-xs font-medium">{item.count} applicants</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div className={`${item.color} h-2 rounded-full ${item.percent}`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide border-b border-slate-100 pb-2">Funnel Status</h4>
                  <div className="space-y-3">
                    {[
                      { status: "Under Institutional Review", count: "1,456", dot: "bg-orange-400" },
                      { status: "Offers Extended", count: "342", dot: "bg-green-500" },
                      { status: "Pending Final Transcripts", count: "189", dot: "bg-slate-400" }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${item.dot}`}></div>
                          <span className="font-semibold text-slate-700 text-sm">{item.status}</span>
                        </div>
                        <span className="font-bold text-slate-900">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founding Partner Program */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 mb-2 border border-white/20 bg-black/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Crown className="w-4 h-4 text-white" />
                <span className="text-sm font-bold tracking-wide uppercase">Institutional Partnership</span>
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight">Become a Founding University Partner</h2>
              <p className="text-lg text-white/80 font-medium leading-relaxed">
                We are selectively onboarding flagship universities. Founding partners secure priority integration, prime placement during our national rollout, and a seat on our advisory board to shape data standardization.
              </p>
              <div className="pt-2">
                <Button variant="secondary" size="lg" className="h-12 px-8 text-base shadow-lg text-primary hover:bg-white bg-slate-50">
                  Connect With Our Enterprise Team
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-2xl bg-white/5 backdrop-blur-lg border-white/10 text-white">
                <CardContent className="p-8 md:p-10 space-y-6">
                  <h4 className="text-xl font-bold border-b border-white/20 pb-4">Founding Agreement Benefits:</h4>
                  <div className="space-y-5">
                    {partnerBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/20">
                          <CheckSquare className="w-3.5 h-3.5 text-white" />
                        </div>
                        <p className="text-white/90 font-medium text-sm leading-relaxed">{benefit}</p>
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