
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Youtube, Globe, Book, ExternalLink } from "lucide-react";

const Resources = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Learning Resources</h1>
          <p className="text-gray-600 mt-2">
            Curated resources to help you grow in your career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Technical Documentation
              </CardTitle>
              <CardDescription>
                Official documentation and guides for popular technologies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-between">
                React Documentation
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                TypeScript Handbook
                <ExternalLink className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Youtube className="h-5 w-5 text-red-600" />
                Video Tutorials
              </CardTitle>
              <CardDescription>
                Curated video courses and tutorials
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-between">
                Web Development Bootcamp
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                System Design Fundamentals
                <ExternalLink className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-green-600" />
                Online Platforms
              </CardTitle>
              <CardDescription>
                Interactive learning platforms and coding challenges
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-between">
                LeetCode
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                Frontend Mentor
                <ExternalLink className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5 text-purple-600" />
                Books & Articles
              </CardTitle>
              <CardDescription>
                Recommended reading materials for deep learning
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-between">
                Clean Code
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between">
                Design Patterns
                <ExternalLink className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Resources;
