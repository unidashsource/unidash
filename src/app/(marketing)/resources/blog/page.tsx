"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const categories = ["All", "Admissions", "Exams", "University Rankings", "Application Tips", "Parent Guides"];
  
  const articles = [
    {
      title: "A Comparative Analysis of the CUET and JEE Main Examinations",
      excerpt: "Understanding the key differences between India's two major entrance examinations and how they impact university admissions.",
      author: "Dr. Priya Sharma",
      date: "December 15, 2024",
      category: "Exams",
      readTime: "8 min read",
      featured: true
    },
    {
      title: "Key Factors in Evaluating University NIRF Rankings",
      excerpt: "A comprehensive guide to understanding what the NIRF rankings really mean and how to use them in your university selection process.",
      author: "Rahul Gupta",
      date: "December 10, 2024", 
      category: "University Rankings",
      readTime: "6 min read",
      featured: true
    },
    {
      title: "A Guide for Parents: Navigating the College Application Process",
      excerpt: "Essential tips for parents to support their children through the complex university application journey in India.",
      author: "Dr. Anjali Mehta",
      date: "December 8, 2024",
      category: "Parent Guides", 
      readTime: "10 min read",
      featured: false
    },
    {
      title: "Understanding State Quota vs All India Quota in Medical Admissions",
      excerpt: "Breaking down the reservation system in medical college admissions and how it affects your application strategy.",
      author: "Vikram Singh",
      date: "December 5, 2024",
      category: "Admissions",
      readTime: "7 min read",
      featured: false
    },
    {
      title: "Top 10 Engineering Colleges Outside of IITs and NITs",
      excerpt: "Exploring excellent engineering institutions that offer quality education and great placement opportunities.",
      author: "Dr. Priya Sharma", 
      date: "December 1, 2024",
      category: "University Rankings",
      readTime: "12 min read",
      featured: false
    },
    {
      title: "Writing an Effective Statement of Purpose: Do's and Don'ts",
      excerpt: "Practical tips and common mistakes to avoid when crafting your SOP for university applications.",
      author: "Rahul Gupta",
      date: "November 28, 2024",
      category: "Application Tips",
      readTime: "5 min read", 
      featured: false
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-6">
          <h1>University Admissions Blog</h1>
          <p className="text-xl text-muted-foreground text-balance">
            Expert insights, guides, and analysis to help you navigate the Indian higher education landscape
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search articles..." 
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto container-padding py-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-3xl font-semibold mb-12">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="group hover:shadow-large transition-smooth cursor-pointer border-border">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth text-balance">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-smooth" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-3xl font-semibold mb-12">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, index) => (
              <Card key={index} className="group hover:shadow-medium transition-smooth cursor-pointer border-border">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">{article.category}</Badge>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <h4 className="font-semibold group-hover:text-primary transition-smooth line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="text-xs text-muted-foreground">
                      {article.author} • {article.date}
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-smooth" />
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
          <h2 className="text-white">Stay Updated with University Admissions Insights</h2>
          <p className="text-xl text-primary-foreground/90 text-balance">
            Subscribe to our newsletter for the latest articles, university updates, and admission tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-white text-foreground"
            />
            <Button variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}