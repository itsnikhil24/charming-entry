import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight } from "lucide-react";
import { getProgress } from "@/components/TopicProgress";

const INITIAL_TOPICS = [
  {
    id: 1,
    title: "Step 1: Learn the basics",
    items: [
      {
        id: 1,
        name: "User Input / Output",
        completed: true,
        article: true,
        youtube: true,
        practice: true,
        notes: true,
        difficulty: "Easy"
      },
      // ... other items
    ]
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  
  const { completedItems, totalItems, progressPercentage } = getProgress(INITIAL_TOPICS);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's your progress overview.</p>
          </div>
        </div>

        {/* Career Roadmap Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Your Career Roadmap</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Roadmap Progress</span>
                <span className="text-sm font-medium">{completedItems}/{totalItems} ({progressPercentage}%)</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
            <Button className="w-full sm:w-auto" onClick={() => navigate("/career-roadmap")}>
              Update Your Path <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mentorship Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Find a Mentor</h2>
          <p className="text-gray-600 mb-4">Connect with industry professionals who can guide your career journey.</p>
          <Button variant="outline" className="w-full sm:w-auto" onClick={() => navigate("/mentorship")}>
            Browse Mentors <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Job Portal Preview */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Explore Job Opportunities</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium">Senior Software Engineer</h3>
              <p className="text-sm text-gray-600">TechCorp Inc. • Remote</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium">Product Manager</h3>
              <p className="text-sm text-gray-600">InnovateCo • San Francisco, CA</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium">UX Designer</h3>
              <p className="text-sm text-gray-600">DesignHub • New York, NY</p>
            </div>
            <Button variant="outline" className="w-full sm:w-auto" onClick={() => navigate("/job-portal")}>
              View More Jobs <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
