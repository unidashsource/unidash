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
import { MessageCircle, Users, GraduationCap } from "lucide-react";

export default function FAQPage() {
  const categories = [
    {
      title: "General",
      icon: MessageCircle,
      questions: [
        {
          q: "What is Unidash?",
          a: "Unidash is a centralized application platform for Indian higher education that allows students to apply to multiple universities using a single application profile. We streamline the admissions process for students, schools, and universities."
        },
        {
          q: "When will the platform launch?",
          a: "Unidash is currently in development and we're targeting a launch in early 2025. Students can join our waitlist to receive early access and be notified when the platform goes live."
        },
        {
          q: "What are the platform fees?",
          a: "We're committed to keeping costs minimal for students. Detailed pricing will be announced closer to launch, but our goal is to make the platform accessible to students from all economic backgrounds."
        },
        {
          q: "Which universities will be available on the platform?",
          a: "We're actively partnering with leading universities across India. Our initial launch will include over 100 universities with plans to expand rapidly. Check our University Search preview for some of our prospective partners."
        }
      ]
    },
    {
      title: "Students & Parents",
      icon: Users,
      questions: [
        {
          q: "How is my data protected on Unidash?",
          a: "We use industry-standard encryption and security protocols to protect all student data. Our platform is built with privacy by design, and we comply with all relevant data protection regulations. Your academic and personal information is securely stored and only shared with universities you choose to apply to."
        },
        {
          q: "Will all universities accept Unidash applications?",
          a: "Universities that partner with Unidash will accept applications through our platform. We're working to onboard as many institutions as possible. Students will always be able to see which universities accept Unidash applications before applying."
        },
        {
          q: "Can I still apply directly to universities if I use Unidash?",
          a: "Absolutely! Unidash is designed to complement, not replace, existing application methods. You can use our platform for some applications and apply directly to others as needed."
        },
        {
          q: "What documents do I need to upload?",
          a: "Typically, you'll need academic transcripts, identity proof, category certificates (if applicable), and other standard documents. Our platform will guide you through the specific requirements for each university."
        }
      ]
    },
    {
      title: "Schools & Universities",
      icon: GraduationCap,
      questions: [
        {
          q: "How does the school portal work?",
          a: "The Unidash Counselor Portal allows school counselors to manage their student caseloads, upload official documents in bulk, and track application progress. Schools can also generate reports and analytics to inform their counseling strategies."
        },
        {
          q: "Is there a cost for schools to use the counselor portal?",
          a: "The basic counselor portal is complimentary for all schools. We also offer a Pioneer Program with enhanced features and lifetime access for early adopting schools."
        },
        {
          q: "What is the process to become a university partner?",
          a: "Universities interested in partnering with Unidash can reach out through our contact form or email partnerships@unidash.co.in. We'll schedule a demo and discuss partnership terms, including integration requirements and benefits."
        },
        {
          q: "How does Unidash benefit universities?",
          a: "Universities gain access to a larger, verified pool of applicants, receive standardized applications that reduce processing time, and get access to rich analytics about their applicant demographics and trends."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-6">
          <h1>Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground text-balance">
            Find answers to common questions about Unidash and how we're transforming university admissions in India
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding space-y-12">
          {categories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-medium border-border">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${categoryIndex}-${index}`}
                      className="border border-border rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary transition-smooth">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-8">
          <h2>Still Have Questions?</h2>
          <p className="text-xl text-muted-foreground">
            Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-medium transition-smooth border-border">
              <CardContent className="p-6 text-center space-y-4">
                <MessageCircle className="w-8 h-8 mx-auto text-primary" />
                <h4 className="font-semibold">Contact Support</h4>
                <p className="text-sm text-muted-foreground">
                  Get in touch with our team for personalized assistance
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth border-border">
              <CardContent className="p-6 text-center space-y-4">
                <Users className="w-8 h-8 mx-auto text-primary" />
                <h4 className="font-semibold">Join Our Community</h4>
                <p className="text-sm text-muted-foreground">
                  Connect with other students and parents in our forums
                </p>
                <Button variant="outline" size="sm" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-smooth border-border">
              <CardContent className="p-6 text-center space-y-4">
                <GraduationCap className="w-8 h-8 mx-auto text-primary" />
                <h4 className="font-semibold">Resource Center</h4>
                <p className="text-sm text-muted-foreground">
                  Browse our guides and blog for detailed information
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources/blog">Explore Resources</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-6">
          <h2 className="text-white">Stay Updated</h2>
          <p className="text-xl text-primary-foreground/90">
            Subscribe to our newsletter for platform updates, new partnerships, and admission insights.
          </p>
          <Button variant="secondary" size="lg">
            Subscribe to Updates
          </Button>
        </div>
      </section>
    </div>
  );
}