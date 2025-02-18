
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import MentorCard from "@/components/MentorCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const MentorList = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [mentors] = useState([
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
    },
    {
      id: 4,
      name: "David Kim",
      role: "Frontend Developer",
      company: "Facebook",
      expertise: ["React", "TypeScript", "UI/UX"],
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2574&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Data Scientist",
      company: "Netflix",
      expertise: ["Machine Learning", "Python", "Data Analytics"],
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2570&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Backend Engineer",
      company: "Twitter",
      expertise: ["Java", "Microservices", "AWS"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop"
    }
  ]);

  const filteredMentors = mentors.filter(mentor => 
    mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mentor.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mentor.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mentor.expertise.some(skill => 
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">All Mentors</h1>
          <p className="text-gray-600 mt-2">
            Find the perfect mentor to guide you through your career journey
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search by name, role, company, or expertise..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="cursor-pointer">All</Badge>
          <Badge variant="outline" className="cursor-pointer">Engineering</Badge>
          <Badge variant="outline" className="cursor-pointer">Design</Badge>
          <Badge variant="outline" className="cursor-pointer">Product</Badge>
          <Badge variant="outline" className="cursor-pointer">Data Science</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <MentorCard
              key={mentor.id}
              {...mentor}
              onViewProfile={() => navigate(`/mentors/${mentor.id}`)}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MentorList;
