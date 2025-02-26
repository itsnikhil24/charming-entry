
import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowUp, Youtube, FileText, Code, BookOpen } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

interface Topic {
  id: number;
  title: string;
  items: {
    id: number;
    name: string;
    completed: boolean;
    article?: boolean;
    youtube?: boolean;
    practice?: boolean;
    notes?: boolean;
    difficulty: "Easy" | "Medium" | "Hard";
  }[];
}

const TopicProgress = () => {
  const { user } = useAuth();
  const [topics, setTopics] = useState<Topic[]>([
    {
      id: 1,
      title: "Step 1: Learn the basics",
      items: [
        {
          id: 1,
          name: "User Input / Output",
          completed: false,
          article: true,
          youtube: true,
          practice: true,
          notes: true,
          difficulty: "Easy"
        },
        {
          id: 2,
          name: "Data Types",
          completed: false,
          youtube: true,
          practice: true,
          notes: true,
          difficulty: "Easy"
        },
        {
          id: 3,
          name: "If Else statements",
          completed: false,
          article: true,
          youtube: true,
          practice: true,
          notes: true,
          difficulty: "Easy"
        },
        {
          id: 4,
          name: "Switch Statement",
          completed: false,
          article: true,
          youtube: true,
          practice: true,
          notes: true,
          difficulty: "Easy"
        },
        {
          id: 5,
          name: "What are arrays & strings?",
          completed: false,
          youtube: true,
          notes: true,
          difficulty: "Easy"
        }
      ]
    }
  ]);

  const [totalCompleted, setTotalCompleted] = useState(0);
  const totalItems = topics.reduce((acc, topic) => acc + topic.items.length, 0);
  const completionPercentage = Math.round((totalCompleted / totalItems) * 100);

  useEffect(() => {
    if (user) {
      loadUserProgress();
    }
  }, [user]);

  const loadUserProgress = async () => {
    try {
      const { data: progressData, error } = await supabase
        .from('user_progress')
        .select('topic_id, item_id, completed')
        .eq('user_id', user?.id);

      if (error) throw error;

      // Update topics with saved progress
      const updatedTopics = topics.map(topic => ({
        ...topic,
        items: topic.items.map(item => ({
          ...item,
          completed: progressData?.some(
            progress => progress.topic_id === topic.id && 
                       progress.item_id === item.id && 
                       progress.completed
          ) || false
        }))
      }));

      setTopics(updatedTopics);
      
      // Update total completed count
      const completed = progressData?.filter(p => p.completed)?.length || 0;
      setTotalCompleted(completed);
    } catch (error: any) {
      toast.error("Failed to load progress");
      console.error("Error loading progress:", error.message);
    }
  };

  const handleToggleComplete = async (topicId: number, itemId: number) => {
    if (!user) {
      toast.error("Please login to track progress");
      return;
    }

    try {
      const updatedTopics = topics.map(topic => {
        if (topic.id === topicId) {
          return {
            ...topic,
            items: topic.items.map(item => {
              if (item.id === itemId) {
                return { ...item, completed: !item.completed };
              }
              return item;
            })
          };
        }
        return topic;
      });

      const isCompleted = !topics
        .find(t => t.id === topicId)
        ?.items.find(i => i.id === itemId)?.completed;

      // Update database
      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: user.id,
          topic_id: topicId,
          item_id: itemId,
          completed: isCompleted,
          completed_at: isCompleted ? new Date().toISOString() : null
        });

      if (error) throw error;

      setTopics(updatedTopics);
      setTotalCompleted(prev => isCompleted ? prev + 1 : prev - 1);
      toast.success(isCompleted ? "Progress saved!" : "Progress updated!");
    } catch (error: any) {
      toast.error("Failed to update progress");
      console.error("Error updating progress:", error.message);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-gray-900 p-6 rounded-lg">
        <div className="flex justify-between items-center text-gray-300 mb-4">
          <div>
            Your Progress: {totalCompleted}/{totalItems}
          </div>
          <div>{completionPercentage}% complete</div>
        </div>
        <Progress value={completionPercentage} className="h-2 bg-gray-700" />
      </div>

      {topics.map(topic => (
        <Card key={topic.id} className="border-t-4 border-t-orange-500">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl flex items-center gap-2">
              {topic.title}
            </CardTitle>
            <div className="text-sm text-gray-500">
              {topic.items.filter(item => item.completed).length}/{topic.items.length}
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase bg-gray-50">
                  <tr>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Problem</th>
                    <th className="px-4 py-3">Article</th>
                    <th className="px-4 py-3">Youtube</th>
                    <th className="px-4 py-3">Practice</th>
                    <th className="px-4 py-3">Note</th>
                    <th className="px-4 py-3">Difficulty</th>
                    <th className="px-4 py-3">Revision</th>
                  </tr>
                </thead>
                <tbody>
                  {topic.items.map(item => (
                    <tr key={item.id} className="border-b">
                      <td className="px-4 py-3">
                        <Checkbox
                          checked={item.completed}
                          onCheckedChange={() => handleToggleComplete(topic.id, item.id)}
                        />
                      </td>
                      <td className="px-4 py-3">{item.name}</td>
                      <td className="px-4 py-3">
                        {item.article && <FileText className="h-4 w-4" />}
                      </td>
                      <td className="px-4 py-3">
                        {item.youtube && <Youtube className="h-4 w-4 text-red-500" />}
                      </td>
                      <td className="px-4 py-3">
                        {item.practice && <Code className="h-4 w-4 text-green-500" />}
                      </td>
                      <td className="px-4 py-3">
                        {item.notes && <BookOpen className="h-4 w-4" />}
                      </td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                          {item.difficulty}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <Button variant="ghost" size="icon">
                          <ArrowUp className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TopicProgress;
