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
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const contactMethods = [
    {
      title: "General Inquiries",
      email: "contact@unidash.co.in",
      description: "For general questions about the platform and services",
      icon: Mail
    },
    {
      title: "University Partnerships", 
      email: "partnerships@unidash.co.in",
      description: "For universities interested in joining our platform",
      icon: Mail
    },
    {
      title: "Press Inquiries",
      email: "press@unidash.co.in", 
      description: "For media relations and press coverage",
      icon: Mail
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-6">
          <h1>Contact Us</h1>
          <p className="text-xl text-muted-foreground text-balance">
            Have questions about Unidash? We&apos;d love to hear from you. 
            Get in touch and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Choose the best way to reach us based on your inquiry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-medium transition-smooth border-border">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">{method.title}</h4>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                  <a 
                    href={`mailto:${method.email}`}
                    className="inline-block text-primary hover:text-primary/80 font-medium transition-smooth"
                  >
                    {method.email}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-medium border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="school-counselor">School Counselor</SelectItem>
                        <SelectItem value="university-rep">University Representative</SelectItem>
                        <SelectItem value="educator">Educator</SelectItem>
                        <SelectItem value="media">Media/Press</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      className="min-h-32"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-medium border-border">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-semibold">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Corporate Address</h4>
                        <p className="text-muted-foreground">
                          Unidash Technologies Pvt. Ltd.<br />
                          Sri City, Andhra Pradesh, 517646<br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Response Time</h4>
                        <p className="text-muted-foreground">
                          We typically respond within 24-48 hours during business days.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Phone Support</h4>
                        <p className="text-muted-foreground">
                          Phone support will be available after platform launch. 
                          For now, please use email or the contact form.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-border">
                <CardContent className="p-8 space-y-4">
                  <h4 className="text-xl font-semibold">Quick Links</h4>
                  <div className="space-y-3">
                    <Link href="/about/students" className="block text-primary hover:text-primary/80 transition-smooth">
                      Information for Students & Parents →
                    </Link>
                    <Link href="/about/schools" className="block text-primary hover:text-primary/80 transition-smooth">
                      Information for High Schools →
                    </Link>
                    <Link href="/about/universities" className="block text-primary hover:text-primary/80 transition-smooth">
                      University Partnership Information →
                    </Link>
                    <Link href="/faq" className="block text-primary hover:text-primary/80 transition-smooth">
                      Frequently Asked Questions →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-6">
          <h2 className="text-white">Ready to Transform University Admissions?</h2>
          <p className="text-xl text-primary-foreground/90">
            Join thousands of students, schools, and universities preparing for the future of admissions.
          </p>
          <Button variant="secondary" size="lg">
            Join the Waitlist
          </Button>
        </div>
      </section>
    </div>
  );
}