"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, GraduationCap, Building } from "lucide-react";

export default function HomePage() {
  const universityLogos = [
    "University A",
    "VIT Vellore", 
    "Manipal Academy",
    "Ashoka University",
    "Shiv Nadar University"
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
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "High Schools", 
      description: "A powerful administrative tool for counselors to manage and track student applications.",
      icon: GraduationCap,
      link: "/about/schools",
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Universities",
      description: "A platform to attract a wider pool of qualified applicants and streamline admissions.",
      icon: Building,
      link: "/about/universities", 
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto container-padding section-padding">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Launching Soon
            </Badge>
            <h1 className="text-white text-balance">
              The Smarter Way to Apply to India's Top Universities
            </h1>
            <p className="text-xl md:text-2xl text-white/90 text-balance max-w-3xl mx-auto">
              Unidash is the centralized application platform for Indian higher education. 
              Use one application to apply to hundreds of universities, saving time and reducing errors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="secondary" size="lg" className="text-lg">
                Get Early Access
              </Button>
              <div className="flex gap-4 text-sm text-white/80">
                <Link href="/about/schools" className="hover:text-white transition-smooth">
                  For High School Students
                </Link>
                <Link href="/about/universities" className="hover:text-white transition-smooth">
                  For Universities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Bar */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto container-padding py-12">
          <div className="text-center space-y-6">
            <h3 className="text-lg font-medium text-muted-foreground">
              Our Prospective University Network Includes:
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {universityLogos.map((university, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-2 mx-auto">
                    <span className="text-xl font-bold text-muted-foreground">
                      {university.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground max-w-24 mx-auto">{university}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-balance">A More Efficient Application Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Streamline your university applications with our comprehensive platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-medium transition-smooth border-border">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto primary-gradient rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-semibold">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-muted-foreground" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-balance">A Solution for the Entire Admissions Ecosystem</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed to serve students, schools, and universities with tailored solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <Card key={index} className="group hover:shadow-large transition-smooth cursor-pointer border-border">
                <CardContent className="p-8 space-y-6">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${audience.color}`}>
                    <audience.icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold">{audience.title}</h4>
                    <p className="text-muted-foreground">{audience.description}</p>
                  </div>
                  <Link href={audience.link} className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-smooth">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto container-padding text-center space-y-8">
          <h2 className="text-white text-balance">
            The Future of Indian University Admissions is Launching Soon
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Join our waitlist to be notified at launch and receive exclusive early access benefits.
          </p>
          <Button variant="secondary" size="lg">
            Join the Waitlist
          </Button>
        </div>
      </section>
    </div>
  );
}
