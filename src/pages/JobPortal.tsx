
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Briefcase, MapPin, DollarSign } from "lucide-react";

const JobPortal = () => {
  const [featuredJobs] = useState([
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Google",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$130,000 - $180,000",
      tags: ["React", "TypeScript", "GraphQL"]
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Microsoft",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$140,000 - $190,000",
      tags: ["Product Strategy", "Agile", "Data Analysis"]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "Amazon",
      location: "Remote",
      type: "Full-time",
      salary: "$125,000 - $175,000",
      tags: ["AWS", "Kubernetes", "CI/CD"]
    }
  ]);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Job Portal</h1>
            <p className="text-gray-600 mt-2">
              Discover opportunities aligned with your career goals
            </p>
          </div>
          <Button>
            View All Jobs <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6">Featured Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-indigo-600" />
                    {job.title}
                  </CardTitle>
                  <p className="text-lg font-medium text-gray-900">{job.company}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign className="h-4 w-4" />
                      {job.salary}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default JobPortal;
