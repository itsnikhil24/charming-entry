
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import TopicProgress from "@/components/TopicProgress";
import { ArrowRight } from "lucide-react";

const CareerRoadmap = () => {
  const [showProgress, setShowProgress] = useState(false);

  return (
    <DashboardLayout>
      {!showProgress ? (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Career Roadmap</h1>
              <p className="text-gray-600 mt-2">Track your learning progress and follow your personalized career path.</p>
            </div>
            <Button onClick={() => setShowProgress(true)}>
              Update Progress <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-lg font-semibold mb-4">Current Progress</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Overall Completion</span>
                  <span>5/5 (100%)</span>
                </div>
                <Progress value={16} className="h-2" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <TopicProgress />
      )}
    </DashboardLayout>
  );
};

export default CareerRoadmap;
