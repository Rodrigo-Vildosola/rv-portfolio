// app/(public)/projects/page.tsx

import ProjectCard from "@/components/custom/project-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

import Placeholder1 from "@/assets/images/projects/placeholder1.jpg"
import Placeholder2 from "@/assets/images/projects/placeholder2.jpg"
import { unstable_setRequestLocale } from "next-intl/server";



const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    link: "https://example.com/project1",
    image: Placeholder1,
    details: "Additional details about project 1. This section can contain more detailed information about the project, technologies used, challenges faced, etc."
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    link: "https://example.com/project2",
    image: Placeholder2,
    details: "Additional details about project 2. This section can contain more detailed information about the project, technologies used, challenges faced, etc."
  },
  // Add more projects as needed
];

export default function ProjectsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  console.log(locale);
  unstable_setRequestLocale(locale);
  const t = useTranslations("ProjectsPage");
  return (
    <div className="space-y-4 mt-12 w-full max-w-7xl mx-auto">
      <Card className="mb-2 bg-white dark:bg-gray-900">
        <CardHeader>
          <CardTitle className="text-3xl font-bold mb-4">{t('title')}</CardTitle>
          <CardDescription>{t('description')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                title={project.title} 
                description={project.description} 
                link={project.link} 
                image={project.image} 
                details={project.details} 
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
