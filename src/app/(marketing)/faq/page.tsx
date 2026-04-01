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
import { HelpCircle, FileText, BadgeCheck } from "lucide-react";

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
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
        <div className="max-w-4xl mx-auto container-padding text-center space-y-6 relative z-10">
          <h1 className="text-slate-900 font-extrabold tracking-tight text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto text-balance">
            Comprehensive details on data processing, platform mechanics, and institutional partnerships.
          </p>
        </div>
      </section>

      {/* Modern Layout for FAQs: Sticky Sidebar + Main Content */}
      <section className="max-w-7xl mx-auto container-padding mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Nav */}
          <div className="lg:col-span-4 relative hidden lg:block">
            <div className="sticky top-32 space-y-4">
              <h3 className="font-extrabold text-slate-900 text-lg mb-6 uppercase tracking-wider">Categories</h3>
              {categories.map((c, i) => (
                <a key={i} href={`#cat-${i}`} className="group block p-4 bg-white border border-slate-200 rounded-xl hover:border-primary hover:shadow-md transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <c.icon className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                    <div>
                      <div className="font-bold text-slate-800">{c.title}</div>
                      <div className="text-xs text-slate-500 font-medium mt-0.5">{c.desc}</div>
                    </div>
                  </div>
                </a>
              ))}
              
              <Card className="mt-8 bg-slate-900 text-white border-none shadow-xl">
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-bold text-lg">Need Direct Support?</h4>
                  <p className="text-slate-400 text-sm font-medium">Enterprise partners can reach out for dedicated API integration help.</p>
                  <Button variant="secondary" className="w-full font-bold">Open Support Ticket</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main FAQ Accordions */}
          <div className="lg:col-span-8 space-y-16">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} id={`cat-${categoryIndex}`} className="scroll-mt-32">
                <div className="flex items-center space-x-3 mb-6 border-b border-slate-200 pb-4">
                  <div className="w-10 h-10 bg-white border border-slate-200 shadow-sm rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900">{category.title}</h2>
                </div>
                
                <Accordion type="multiple" className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${categoryIndex}-${index}`}
                      className="bg-white border border-slate-200 rounded-xl px-2 overflow-hidden shadow-sm data-[state=open]:border-primary/30 transition-colors"
                    >
                      <AccordionTrigger className="text-left font-bold text-slate-800 hover:no-underline hover:text-primary transition-colors py-5 px-4 text-base">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 leading-relaxed font-medium px-4 pb-5 pt-0 text-base">
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