
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import MentorCard from "@/components/MentorCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Mentorship = () => {
  const navigate = useNavigate();
  const [featuredMentors] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Software Engineer",
      company: "Google",
      expertise: ["React", "Node.js", "System Design"],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Tech Lead",
      company: "Microsoft",
      expertise: ["Python", "Machine Learning", "Cloud Architecture"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "Amazon",
      expertise: ["Product Strategy", "Agile", "UX Design"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2570&auto=format&fit=crop"
    }
  ]);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Find a Mentor</h1>
            <p className="text-gray-600 mt-2">
              Connect with experienced professionals who can guide your career journey.
            </p>
          </div>
          <Button onClick={() => navigate("/mentors")}>
            View All Mentors <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6">Recommended Mentors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMentors.map((mentor) => (
              <MentorCard
                key={mentor.id}
                {...mentor}
                onViewProfile={() => navigate(`/mentors/${mentor.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Mentorship;
