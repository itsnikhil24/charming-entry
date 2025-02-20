
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowUp, Youtube, FileText, Code, BookOpen } from "lucide-react";

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
  const [topics, setTopics] = useState<Topic[]>([
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
        {
          id: 2,
          name: "Data Types",
          completed: true,
          youtube: true,
          practice: true,
          notes: true,
          difficulty: "Easy"
        },
        {
          id: 3,
          name: "If Else statements",
          completed: true,
          article: true,
          youtube: true,
          practice: true,
          notes: true,
          difficulty: "Easy"
        },
        {
          id: 4,
          name: "Switch Statement",
          completed: true,
          article: true,
          youtube: true,
          practice: true,
          notes: true,
          difficulty: "Easy"
        },
        {
          id: 5,
          name: "What are arrays & strings?",
          completed: true,
          youtube: true,
          notes: true,
          difficulty: "Easy"
        }
      ]
    }
  ]);

  const totalItems = topics.reduce((acc, topic) => acc + topic.items.length, 0);
  const completedItems = topics.reduce(
    (acc, topic) => acc + topic.items.filter(item => item.completed).length,
    0
  );
  const progressPercentage = (completedItems / totalItems) * 100;

  const handleToggleComplete = (topicId: number, itemId: number) => {
    setTopics(prevTopics =>
      prevTopics.map(topic => {
        if (topic.id === topicId) {
          return {
            ...topic,
            items: topic.items.map(item =>
              item.id === itemId ? { ...item, completed: !item.completed } : item
            )
          };
        }
        return topic;
      })
    );
  };

  return (
    <div className="space-y-8">
      <div className="bg-gray-900 p-6 rounded-lg">
        <div className="flex justify-between items-center text-gray-300 mb-4">
          <div>
            Your Progress: {completedItems}/{totalItems}</div>
          <div>{Math.round(progressPercentage)}% complete</div>
        </div>
        <Progress value={progressPercentage} className="h-2 bg-gray-700" />
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
