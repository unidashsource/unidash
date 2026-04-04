"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, FileText, BadgeCheck, MessageCircleQuestion } from "lucide-react";

export default function FAQPage() {
  const categories = [
    {
      title: "Platform Overview",
      icon: HelpCircle,
      desc: "General mechanics of Unidash",
      questions: [
        {
          q: "What exactly is Unidash?",
          a: "Unidash acts as the centralized middleware for Indian university admissions. We provide a single dashboard for students to build a comprehensive applicant profile, and allow them to dispatch that profile to our partnered universities without re-entering redundant data."
        },
        {
          q: "Is Unidash recognized by universities?",
          a: "Yes. Our partner universities explicitly authorize applications processed through our platform and use our specialized institutional endpoints to securely receive and evaluate applicant data."
        },
        {
          q: "How does the pricing model work?",
          a: "Unidash is transparent. Core profile creation is free for students. We pass through minor processing fees directly related to application dispatch, ensuring accessibility across all economic backgrounds."
        }
      ]
    },
    {
      title: "Data & Security",
      icon: BadgeCheck,
      desc: "Privacy operations and compliance",
      questions: [
        {
          q: "How secure is my academic data?",
          a: "All data transit is protected by strict AES-256 encryption. We utilize enterprise-grade infrastructure. Your academic records are only visible to you, your verified counselor, and explicitly authorized universities."
        },
        {
          q: "Will my data be sold to third-party institutions?",
          a: "Never. Unidash strictly prohibits the selling of applicant data. Universities can only access your profile if you, the applicant, manually initiate an application to them."
        }
      ]
    },
    {
      title: "Technical Requirements",
      icon: FileText,
      desc: "Documents, uploads, and workflows",
      questions: [
        {
          q: "Can I use Unidash alongside direct applications?",
          a: "Absolutely. Unidash does not impose exclusivity. You can apply via Unidash for our partner institutions and use direct portals for non-partner institutions simultaneously."
        },
        {
          q: "How are Letters of Recommendation handled?",
          a: "If a university requires LORs, logic within Unidash prompts you to invite your teachers. Your teachers submit the letter once to Unidash, and we append it securely to all relevant institutional applications automatically."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24 font-sans">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 py-20 relative">
        <div className="max-w-5xl mx-auto container-padding text-center space-y-8 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
            <MessageCircleQuestion className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-slate-700 tracking-wide uppercase">Help Center</span>
          </div>
          <h1 className="text-slate-900 font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-balance max-w-3xl mx-auto">
            Comprehensive details on data processing, platform mechanics, and institutional partnerships.
          </p>
        </div>
      </section>

      {/* Modern Layout for FAQs: Sticky Sidebar + Main Content */}
      <section className="max-w-7xl mx-auto container-padding mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Nav */}
          <div className="lg:col-span-4 relative hidden lg:block">
            <div className="sticky top-32 space-y-4">
              <h3 className="font-extrabold text-slate-900 text-lg mb-6 uppercase tracking-wider">Categories</h3>
              {categories.map((c, i) => (
                <a key={i} href={`#cat-${i}`} className="group block p-5 bg-white border border-slate-200 rounded-xl hover:border-primary/50 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-primary/5 transition-colors">
                      <c.icon className="w-5 h-5 text-slate-500 group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-base">{c.title}</div>
                      <div className="text-sm text-slate-500 mt-1">{c.desc}</div>
                    </div>
                  </div>
                </a>
              ))}
              
              <Card className="mt-8 bg-slate-900 text-white border-none shadow-xl">
                <CardContent className="p-8 space-y-5">
                  <h4 className="font-bold text-xl">Need Direct Support?</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">Enterprise partners can reach out for dedicated API integration help.</p>
                  <Button variant="secondary" className="w-full font-bold h-12 shadow-md">Open Support Ticket</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main FAQ Accordions */}
          <div className="lg:col-span-8 space-y-16">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} id={`cat-${categoryIndex}`} className="scroll-mt-32">
                <div className="flex items-center space-x-4 mb-8 border-b border-slate-200 pb-4">
                  <div className="w-12 h-12 bg-white border border-slate-200 shadow-sm rounded-full flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{category.title}</h2>
                </div>
                
                <Accordion type="multiple" className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${categoryIndex}-${index}`}
                      className="bg-white border border-slate-200 rounded-xl px-2 overflow-hidden shadow-sm data-[state=open]:border-primary/40 data-[state=open]:shadow-md transition-all"
                    >
                      <AccordionTrigger className="text-left font-bold text-slate-800 hover:no-underline hover:text-primary transition-colors py-6 px-4 text-base md:text-lg">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 leading-relaxed px-4 pb-6 pt-0 text-base">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
}