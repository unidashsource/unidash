"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, Phone, Clock, Send, Globe, Building2 } from "lucide-react";

export default function ContactPage() {
  const contactMethods = [
    { title: "General Inquiries", email: "contact@unidash.co.in", desc: "General platform questions" },
    { title: "University Partner", email: "partnerships@unidash.co.in", desc: "Institutional onboarding" },
    { title: "Press Desk", email: "press@unidash.co.in", desc: "Media & PR relations" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero with split map/texture background */}
      <section className="relative pt-24 pb-32 bg-slate-900 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
        <div className="absolute top-0 right-0 p-32 opacity-10 pointer-events-none">
          <Globe className="w-96 h-96 text-white" />
        </div>
        <div className="max-w-4xl mx-auto container-padding text-center space-y-6 relative z-10">
          <h1 className="text-white text-4xl sm:text-6xl font-extrabold tracking-tight">Contact Enterprise</h1>
          <p className="text-xl text-slate-300 text-balance max-w-2xl mx-auto font-medium">
            Let's discuss how Unidash can transform the admissions workflow for your institution.
          </p>
        </div>
      </section>

      {/* Embedded Form + Info overlapping the dark hero */}
      <section className="relative -mt-16 pb-24 z-20">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* The Contact Form */}
            <Card className="lg:col-span-8 shadow-2xl border-slate-200 bg-white rounded-2xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-blue-400 w-full"></div>
              <CardContent className="p-8 md:p-12">
                <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Send an Inquiry</h3>
                <p className="text-slate-500 font-medium mb-8">Fill out the form below. Direct university inquiries receive priority routing.</p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2.5">
                      <Label htmlFor="firstName" className="font-bold text-slate-700">First Name</Label>
                      <Input id="firstName" placeholder="John" className="h-12 bg-slate-50 border-slate-200 shadow-sm" />
                    </div>
                    <div className="space-y-2.5">
                      <Label htmlFor="lastName" className="font-bold text-slate-700">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="h-12 bg-slate-50 border-slate-200 shadow-sm" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2.5">
                      <Label htmlFor="email" className="font-bold text-slate-700">Official Work Email</Label>
                      <Input id="email" type="email" placeholder="john.doe@university.edu" className="h-12 bg-slate-50 border-slate-200 shadow-sm" />
                    </div>
                    <div className="space-y-2.5">
                      <Label htmlFor="role" className="font-bold text-slate-700">Institutional Role</Label>
                      <Select>
                        <SelectTrigger className="h-12 bg-slate-50 border-slate-200 shadow-sm">
                          <SelectValue placeholder="Select relevant role" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="university">University Admissions Dept.</SelectItem>
                          <SelectItem value="school">High School Counselor</SelectItem>
                          <SelectItem value="parent">Student/Parent</SelectItem>
                          <SelectItem value="media">Press/Media</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2.5">
                    <Label htmlFor="organization" className="font-bold text-slate-700">Organization Name</Label>
                    <Input id="organization" placeholder="e.g. Delhi Public School..." className="h-12 bg-slate-50 border-slate-200 shadow-sm" />
                  </div>

                  <div className="space-y-2.5">
                    <Label htmlFor="message" className="font-bold text-slate-700">Message Details</Label>
                    <Textarea 
                      id="message" 
                      placeholder="How can we assist you with our platform?"
                      className="min-h-[160px] bg-slate-50 border-slate-200 shadow-sm resize-y"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-base font-bold shadow-md hover:shadow-lg transition-all h-14">
                    Securely Submit Inquiry <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Sidebar Info */}
            <div className="lg:col-span-4 space-y-6">
              
              <Card className="shadow-lg border-slate-200 bg-white rounded-2xl">
                <CardContent className="p-8 space-y-8">
                  <h3 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">Corporate Office</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100">
                        <Building2 className="w-5 h-5 text-slate-800" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm mb-1">Unidash Technologies H.Q.</h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">
                          Innovation Bay, Central St.<br />
                          Sri City, AP 517646<br />India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm mb-1">Email Departments</h4>
                        <ul className="space-y-2 mt-2">
                          {contactMethods.map((m, i) => (
                            <li key={i} className="text-sm">
                              <span className="font-bold text-slate-600 block">{m.title}</span>
                              <a href={`mailto:${m.email}`} className="text-primary hover:underline font-medium">{m.email}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100">
                        <Clock className="w-5 h-5 text-slate-800" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm mb-1">SLA Guidelines</h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">
                          Enterprise inquiries are typically processed within 12 business hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}