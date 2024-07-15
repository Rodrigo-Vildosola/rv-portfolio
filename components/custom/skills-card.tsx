import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { SkillItem } from "@/assets/skills"; // Import the type for TypeScript


interface SkillCardProps {
  skill: SkillItem;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, description }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-1">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-900 rounded-md">
            {skill.image && (
              <Image 
                src={skill.image} 
                alt={`${skill.name} logo`}
                width={50} 
                height={50}
                className="object-contain p-1 rounded-md" 
                loading="lazy"
                onLoad={() => console.log(skill.name)}
              />
            )}
          </div>
          <div>
            <CardTitle>{skill.name}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex items-center">
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
