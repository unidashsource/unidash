import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UploadCloud, FileText, CheckCircle2, Clock } from "lucide-react";

export default function DocumentsPage() {
  const documents = [
    { name: "Class 10 Marksheet", type: "Academic", status: "Uploaded", date: "2 days ago" },
    { name: "Class 12 Transcript", type: "Academic", status: "Pending", date: "-" },
    { name: "Passport / Aadhar", type: "Identity", status: "Uploaded", date: "1 week ago" },
    { name: "Statement of Purpose", type: "Essay", status: "Draft", date: "Yesterday" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Document Vault</h1>
          <p className="text-muted-foreground">Upload once, use everywhere.</p>
        </div>
        <Button>
          <UploadCloud className="mr-2 h-4 w-4" /> Upload New
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Upload Area */}
        <Card className="md:col-span-3 border-dashed border-2 bg-muted/10 hover:bg-muted/20 transition-colors cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center py-10 space-y-4 text-center">
            <div className="h-12 w-12 rounded-full bg-background shadow-sm flex items-center justify-center">
              <UploadCloud className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Drag & drop files here</h3>
              <p className="text-sm text-muted-foreground mt-1">PDF, JPG or PNG up to 5MB</p>
            </div>
            <Button variant="outline" size="sm">Select Files</Button>
          </CardContent>
        </Card>

        {/* File List */}
        <div className="md:col-span-3 grid gap-4 md:grid-cols-2">
          {documents.map((doc, i) => (
            <Card key={i} className="flex flex-row items-center p-4 gap-4">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-sm">{doc.name}</h4>
                <p className="text-xs text-muted-foreground">{doc.type} • {doc.date}</p>
              </div>
              <Badge 
                variant={doc.status === "Uploaded" ? "default" : "outline"}
                className={doc.status === "Pending" ? "text-yellow-600 border-yellow-200 bg-yellow-50" : ""}
              >
                {doc.status}
              </Badge>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
