
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Video, MessageCircle, Star } from "lucide-react";

const MentorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, this would be fetched from an API
  const mentor = {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Software Engineer",
    company: "Google",
    experience: "8+ years",
    rating: 4.9,
    reviews: 124,
    pricePerSession: 75,
    expertise: ["React", "Node.js", "System Design", "Career Guidance", "Interview Prep"],
    about: "I'm a senior software engineer at Google with over 8 years of experience in full-stack development. I'm passionate about helping others grow in their tech careers and have mentored numerous developers who have gone on to work at top tech companies.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop"
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-start gap-8">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="w-48 h-48 rounded-lg object-cover"
          />
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-3xl font-bold">{mentor.name}</h1>
              <p className="text-gray-600">{mentor.role} at {mentor.company}</p>
            </div>
            
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span className="font-medium">{mentor.rating}</span>
              <span className="text-gray-600">({mentor.reviews} reviews)</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {mentor.expertise.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>

            <Button size="lg" className="w-full sm:w-auto">
              Book a Session
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-gray-600">{mentor.about}</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <Calendar className="h-8 w-8 text-indigo-600" />
              <div>
                <h3 className="font-medium">Session Length</h3>
                <p className="text-gray-600">45 minutes</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <Clock className="h-8 w-8 text-indigo-600" />
              <div>
                <h3 className="font-medium">Experience</h3>
                <p className="text-gray-600">{mentor.experience}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <Video className="h-8 w-8 text-indigo-600" />
              <div>
                <h3 className="font-medium">Session Type</h3>
                <p className="text-gray-600">Video Call</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4">
          <Button size="lg" className="flex-1">
            <MessageCircle className="mr-2 h-5 w-5" />
            Message
          </Button>
          <Button size="lg" className="flex-1" variant="secondary">
            <Calendar className="mr-2 h-5 w-5" />
            View Calendar
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MentorProfile;
