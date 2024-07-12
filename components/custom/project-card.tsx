// components/ui/project-card.tsx

import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

type ProjectCardProps = {
  title: string;
  description: string;
  link?: string;
};

const ProjectCard = ({ title, description, link }: ProjectCardProps) => (
  <Card className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
    <CardHeader className="bg-gray-100 p-4">
      <h2 className="text-xl font-bold">{title}</h2>
    </CardHeader>
    <CardContent className="p-4">
      <p>{description}</p>
    </CardContent>
    {link && (
      <CardFooter className="bg-gray-100 p-4 text-right">
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View Project
        </a>
      </CardFooter>
    )}
  </Card>
);

export default ProjectCard;
