import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MapPin, Plus } from "lucide-react";

export default function CollegeSearchPage() {
  // Mock Data (Replace with DB fetch later)
  const colleges = [
    { id: 1, name: "Ashoka University", location: "Sonipat, Haryana", type: "Liberal Arts", logo: "A" },
    { id: 2, name: "VIT Vellore", location: "Vellore, TN", type: "Engineering", logo: "V" },
    { id: 3, name: "Manipal Academy", location: "Manipal, KA", type: "Multi-disciplinary", logo: "M" },
    { id: 4, name: "Shiv Nadar University", location: "Greater Noida, UP", type: "Research", logo: "S" },
    { id: 5, name: "Krea University", location: "Sri City, AP", type: "Liberal Arts", logo: "K" },
    { id: 6, name: "Plaksha University", location: "Mohali, PB", type: "Tech", logo: "P" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Find Universities</h1>
          <p className="text-muted-foreground">Search and add colleges to your application list.</p>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by name, location, or course..."
              className="pl-8 bg-background"
            />
          </div>
          <Button variant="outline">Filters</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((uni) => (
          <Card key={uni.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
                {uni.logo}
              </div>
              <div className="flex-1 overflow-hidden">
                <CardTitle className="text-base truncate">{uni.name}</CardTitle>
                <CardDescription className="flex items-center gap-1 text-xs mt-1">
                  <MapPin className="h-3 w-3" /> {uni.location}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mt-2">
                <Badge variant="secondary" className="text-xs font-normal">{uni.type}</Badge>
                <Badge variant="outline" className="text-xs font-normal">NAAC A++</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="sm">
                <Plus className="mr-2 h-4 w-4" /> Add to My List
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
