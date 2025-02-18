
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MentorCardProps {
  name: string;
  role: string;
  company: string;
  expertise: string[];
  image: string;
  onViewProfile: () => void;
}

const MentorCard = ({ name, role, company, expertise, image, onViewProfile }: MentorCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-sm text-gray-600 mb-4">{company}</p>
        <div className="flex flex-wrap gap-2">
          {expertise.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button onClick={onViewProfile} className="w-full">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MentorCard;
