
export interface TopicItem {
  id: number;
  name: string;
  completed: boolean;
  article?: boolean;
  youtube?: boolean;
  practice?: boolean;
  notes?: boolean;
  difficulty: "Easy" | "Medium" | "Hard";
}

export interface Topic {
  id: number;
  title: string;
  items: TopicItem[];
}

export const getProgress = (topics: Topic[]) => {
  const completedItems = topics.reduce(
    (acc, topic) => acc + topic.items.filter(item => item.completed).length,
    0
  );
  const totalItems = topics.reduce((acc, topic) => acc + topic.items.length, 0);
  const progressPercentage = Math.round((completedItems / totalItems) * 100);

  return {
    completedItems,
    totalItems,
    progressPercentage
  };
};
