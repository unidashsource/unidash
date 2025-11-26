"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function OverviewPage() {
  const teamMembers = [
    {
      name: "Dr. Priya Sharma",
      title: "CEO & Co-Founder", 
      bio: "Former Director of Admissions at Delhi University with 15+ years in higher education administration."
    },
    {
      name: "Rahul Gupta",
      title: "CTO & Co-Founder",
      bio: "Ex-Senior Engineer at Flipkart, specialized in large-scale educational technology platforms."
    },
    {
      name: "Dr. Anjali Mehta", 
      title: "Head of University Relations",
      bio: "Former Vice-Chancellor at Ashoka University with extensive experience in academic partnerships."
    },
    {
      name: "Vikram Singh",
      title: "Head of Product",
      bio: "Former Product Manager at BYJU'S, expert in student-centric educational product development."
    }
  ];

  const navigationCards = [
    {
      title: "Information for Students & Parents",
      description: "Learn how Unidash simplifies the university application process",
      link: "/about/students"
    },
    {
      title: "Information for Schools", 
      description: "Discover our counselor portal and administrative tools",
      link: "/about/schools"
    },
    {
      title: "Information for Universities",
      description: "Explore partnership opportunities and platform benefits", 
      link: "/about/universities"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-6">
          <h1>About Unidash</h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-balance">
            Unidash was founded to solve a critical inefficiency in Indian higher education: 
            a fragmented, repetitive, and outdated university application system. Our mission 
            is to provide a single, robust technology platform that connects students, schools, 
            and universities to make the admissions process more efficient, transparent, 
            and accessible for everyone.
          </p>
          <p className="text-lg text-muted-foreground">
            We are a team of educators, engineers, and admissions professionals dedicated to 
            building the future of higher education infrastructure in India.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-4 mb-16">
            <h2>Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals from education and technology sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-smooth border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">{member.name}</h4>
                    <p className="text-primary font-medium">{member.title}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center space-y-4 mb-16">
            <h2>Learn More About Our Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how Unidash serves different parts of the admissions ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {navigationCards.map((card, index) => (
              <Card key={index} className="group hover:shadow-large transition-smooth border-border">
                <CardContent className="p-8 space-y-4">
                  <h4 className="text-xl font-semibold">{card.title}</h4>
                  <p className="text-muted-foreground">{card.description}</p>
                  <Link 
                    href={card.link}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-smooth"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}