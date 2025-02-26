
import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import TopicProgress from "@/components/TopicProgress";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const CareerRoadmap = () => {
  const [showProgress, setShowProgress] = useState(false);
  const [completionStats, setCompletionStats] = useState({
    completed: 0,
    total: 5, // Total items from our current topic list
    percentage: 0
  });
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      loadCompletionStats();
    }
  }, [user]);

  const loadCompletionStats = async () => {
    try {
      const { data: progressData, error } = await supabase
        .from('user_progress')
        .select('completed')
        .eq('user_id', user?.id);

      if (error) throw error;

      const completed = progressData?.filter(p => p.completed)?.length || 0;
      const total = 5; // Total items from our current topic list

      setCompletionStats({
        completed,
        total,
        percentage: Math.round((completed / total) * 100)
      });
    } catch (error) {
      console.error("Error loading completion stats:", error);
    }
  };

  return (
    <DashboardLayout>
      {!showProgress ? (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Career Roadmap</h1>
              <p className="text-gray-600 mt-2">
                Track your learning progress and follow your personalized career path.
              </p>
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
                  <span>
                    {completionStats.completed}/{completionStats.total} ({completionStats.percentage}%)
                  </span>
                </div>
                <Progress value={completionStats.percentage} className="h-2" />
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
