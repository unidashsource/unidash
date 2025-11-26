"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Mail } from "lucide-react";
import { useState } from "react";

export default function GuidesPage() {
  const [email, setEmail] = useState("");

  const guides = [
    {
      title: "The Indian University Application Timeline: A Comprehensive Checklist",
      description: "A month-by-month guide covering all important deadlines, from entrance exam registrations to final admissions. Includes state-wise variations and backup planning strategies.",
      pages: "24 pages",
      downloadCount: "12,847",
      category: "Planning",
      featured: true,
      cover: "bg-blue-100"
    },
    {
      title: "Guidelines for Writing an Effective Statement of Purpose (SOP)",
      description: "Expert tips on crafting compelling SOPs for Indian universities. Includes sample SOPs, common mistakes to avoid, and university-specific requirements.",
      pages: "18 pages", 
      downloadCount: "9,234",
      category: "Applications",
      featured: true,
      cover: "bg-green-100"
    },
    {
      title: "Complete Guide to Engineering Entrance Exams in India",
      description: "Comprehensive coverage of JEE Main, JEE Advanced, BITSAT, VITEEE, and other major engineering entrance exams. Includes preparation strategies and college comparisons.",
      pages: "32 pages",
      downloadCount: "15,672",
      category: "Exams",
      featured: false,
      cover: "bg-purple-100"
    },
    {
      title: "Medical College Admissions: NEET and Beyond",
      description: "Everything you need to know about medical college admissions in India, including NEET preparation, counseling process, and alternative pathways.",
      pages: "28 pages",
      downloadCount: "11,456",
      category: "Medical",
      featured: false,
      cover: "bg-red-100"
    },
    {
      title: "Liberal Arts Education in India: A Complete Guide",
      description: "Exploring the growing landscape of liberal arts education in India. University comparisons, career prospects, and application strategies.",
      pages: "20 pages",
      downloadCount: "6,789",
      category: "Liberal Arts",
      featured: false,
      cover: "bg-yellow-100"
    },
    {
      title: "Financial Planning for Higher Education",
      description: "A comprehensive guide to education loans, scholarships, and financial planning for university education in India. Includes bank comparisons and application tips.",
      pages: "26 pages",
      downloadCount: "8,543",
      category: "Finance",
      featured: false,
      cover: "bg-indigo-100"
    }
  ];

  const handleDownload = (guideTitle: string) => {
    // In a real app, this would handle the email capture and download
    console.log(`Downloading: ${guideTitle} for email: ${email}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-6">
          <h1>Free University Application Guides</h1>
          <p className="text-xl text-muted-foreground text-balance">
            Comprehensive resources to help you navigate every aspect of the Indian university application process
          </p>
          <Badge variant="secondary" className="text-sm">
            All guides are completely free to download
          </Badge>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-3xl font-semibold mb-12">Featured Guides</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {guides.filter(guide => guide.featured).map((guide, index) => (
              <Card key={index} className="group hover:shadow-large transition-smooth border-border">
                <CardContent className="p-8">
                  <div className="flex gap-6">
                    <div className={`w-24 h-32 rounded-lg flex items-center justify-center flex-shrink-0 ${guide.cover}`}>
                      <FileText className="w-12 h-12 text-muted-foreground" />
                    </div>
                    <div className="space-y-4 flex-1">
                      <div className="space-y-2">
                        <Badge variant="outline" className="text-xs">{guide.category}</Badge>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                          {guide.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{guide.description}</p>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          <span>{guide.pages}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          <span>{guide.downloadCount} downloads</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Input 
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="flex-1"
                        />
                        <Button 
                          onClick={() => handleDownload(guide.title)}
                          className="whitespace-nowrap"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Guides */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-3xl font-semibold mb-12">All Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.filter(guide => !guide.featured).map((guide, index) => (
              <Card key={index} className="group hover:shadow-medium transition-smooth border-border">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-full h-32 rounded-lg flex items-center justify-center ${guide.cover}`}>
                    <FileText className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <div className="space-y-3">
                    <Badge variant="outline" className="text-xs">{guide.category}</Badge>
                    <h4 className="font-semibold group-hover:text-primary transition-smooth line-clamp-2">
                      {guide.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-3">{guide.description}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{guide.pages}</span>
                      <span>•</span>
                      <span>{guide.downloadCount} downloads</span>
                    </div>
                    <div className="space-y-2">
                      <Input 
                        placeholder="Enter email for download"
                        className="text-sm"
                      />
                      <Button 
                        size="sm" 
                        className="w-full"
                        onClick={() => handleDownload(guide.title)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-6">
          <Mail className="w-12 h-12 mx-auto text-primary-foreground/80" />
          <h2 className="text-white">Get Notified of New Guides</h2>
          <p className="text-xl text-primary-foreground/90 text-balance">
            Be the first to know when we release new guides and resources. Join our mailing list for exclusive content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Your email address" 
              className="bg-white text-foreground"
            />
            <Button variant="secondary">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/70">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}