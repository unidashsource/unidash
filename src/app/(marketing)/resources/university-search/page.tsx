"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MapPin, 
  Users, 
  GraduationCap, 
  ExternalLink,
  Filter,
  Star
} from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function UniversitySearchPage() {
  const [selectedUniversity, setSelectedUniversity] = useState<any>(null);

  const universities = [
    {
      name: "SRM Institute of Science and Technology",
      shortName: "SRM",
      location: "Chennai, Tamil Nadu",
      type: "Private",
      established: "1985",
      students: "45,000+",
      nirf: "41",
      programs: ["Engineering", "Medical", "Management", "Liberal Arts"],
      description: "A leading private university known for engineering and technology programs with strong industry connections.",
      website: "https://www.srmist.edu.in"
    },
    {
      name: "Vellore Institute of Technology",
      shortName: "VIT",
      location: "Vellore, Tamil Nadu", 
      type: "Private",
      established: "1984",
      students: "50,000+",
      nirf: "15",
      programs: ["Engineering", "Computer Science", "Biotechnology", "Design"],
      description: "Premier private technological university offering diverse engineering and technology programs.",
      website: "https://vit.ac.in"
    },
    {
      name: "Manipal Academy of Higher Education",
      shortName: "MAHE",
      location: "Manipal, Karnataka",
      type: "Private",
      established: "1953",
      students: "35,000+",
      nirf: "9",
      programs: ["Medical", "Engineering", "Management", "Architecture"],
      description: "Comprehensive university with excellence in medical education and research.",
      website: "https://manipal.edu"
    },
    {
      name: "Ashoka University",
      shortName: "AU",
      location: "Sonipat, Haryana",
      type: "Private",
      established: "2014",
      students: "3,500+",
      nirf: "8",
      programs: ["Liberal Arts", "Economics", "Political Science", "Computer Science"],
      description: "India's leading liberal arts university with world-class faculty and research.",
      website: "https://www.ashoka.edu.in"
    },
    {
      name: "Shiv Nadar Institution of Eminence",
      shortName: "SNU",
      location: "Greater Noida, Uttar Pradesh",
      type: "Private",
      established: "2011",
      students: "8,000+",
      nirf: "25",
      programs: ["Engineering", "Natural Sciences", "Humanities", "Management"],
      description: "Research-focused university recognized as an Institution of Eminence.",
      website: "https://snu.edu.in"
    },
    {
      name: "BITS Pilani",
      shortName: "BITS",
      location: "Pilani, Rajasthan",
      type: "Private",
      established: "1964",
      students: "18,000+",
      nirf: "24",
      programs: ["Engineering", "Sciences", "Management", "Pharmacy"],
      description: "Prestigious institute known for engineering education and innovation.",
      website: "https://www.bits-pilani.ac.in"
    },
    {
      name: "Jamia Millia Islamia",
      shortName: "JMI",
      location: "New Delhi",
      type: "Central University",
      established: "1920",
      students: "22,000+",
      nirf: "38",
      programs: ["Engineering", "Architecture", "Mass Communication", "Social Sciences"],
      description: "Central university with diverse academic programs and strong cultural heritage.",
      website: "https://www.jmi.ac.in"
    },
    {
      name: "Bennett University",
      shortName: "BU",
      location: "Greater Noida, Uttar Pradesh",
      type: "Private", 
      established: "2016",
      students: "4,000+",
      nirf: "68",
      programs: ["Engineering", "Law", "Management", "Media Studies"],
      description: "Modern university with industry-integrated curriculum and global partnerships.",
      website: "https://www.bennett.edu.in"
    }
  ];

  const handleUniversityClick = (university: any) => {
    setSelectedUniversity(university);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-6">
          <h1>University Directory Preview</h1>
          <Badge variant="secondary" className="text-sm">
            Preview Mode - Full features available at launch
          </Badge>
          <p className="text-xl text-muted-foreground text-balance">
            This is a preview of our university search feature, showcasing a selection of prospective partner institutions. 
            Full search and filtering capabilities will be available at launch.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto container-padding py-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search universities, programs, or locations..." 
                className="pl-10"
                disabled
              />
            </div>
            <Button variant="outline" disabled>
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Search and filtering features will be enabled in the full platform
          </p>
        </div>
      </section>

      {/* University Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">
              Prospective Partner Universities ({universities.length})
            </h2>
            <div className="text-sm text-muted-foreground">
              Showing preview selection
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((university, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-smooth cursor-pointer border-border"
                onClick={() => handleUniversityClick(university)}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-primary">
                        {university.shortName}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium">NIRF {university.nirf}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold group-hover:text-primary transition-smooth line-clamp-2">
                      {university.name}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span>{university.location}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{university.students}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {university.type}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <GraduationCap className="w-4 h-4 mr-1" />
                      <span>Key Programs:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {university.programs.slice(0, 3).map((program, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {program}
                        </Badge>
                      ))}
                      {university.programs.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{university.programs.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* University Detail Modal */}
      <Dialog open={!!selectedUniversity} onOpenChange={() => setSelectedUniversity(null)}>
        <DialogContent className="max-w-2xl bg-card text-card-foreground">
          {selectedUniversity && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedUniversity.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Location:</span>
                    <p className="text-muted-foreground">{selectedUniversity.location}</p>
                  </div>
                  <div>
                    <span className="font-medium">Established:</span>
                    <p className="text-muted-foreground">{selectedUniversity.established}</p>
                  </div>
                  <div>
                    <span className="font-medium">Students:</span>
                    <p className="text-muted-foreground">{selectedUniversity.students}</p>
                  </div>
                  <div>
                    <span className="font-medium">NIRF Ranking:</span>
                    <p className="text-muted-foreground">#{selectedUniversity.nirf}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">About</h4>
                  <p className="text-muted-foreground">{selectedUniversity.description}</p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Programs Offered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedUniversity.programs.map((program: string, idx: number) => (
                      <Badge key={idx} variant="secondary">
                        {program}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button asChild className="flex-1">
                    <a href={selectedUniversity.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Official Website
                    </a>
                  </Button>
                  <Button variant="outline" disabled>
                    Apply via Unidash (Coming Soon)
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto container-padding text-center space-y-6">
          <h2 className="text-white">Want to See Your University Listed Here?</h2>
          <p className="text-xl text-primary-foreground/90">
            Partner with Unidash to reach thousands of qualified students across India.
          </p>
          <Button variant="secondary" size="lg">
            Become a University Partner
          </Button>
        </div>
      </section>
    </div>
  );
}