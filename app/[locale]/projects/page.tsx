// app/(public)/projects/page.tsx

import ProjectCard from "@/components/custom/project-card";

export default function ProjectsPage() {
  return (
    <div className="p-8 w-full">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <ProjectCard title="Project 1" description="Description of project 1" />
        <ProjectCard title="Project 2" description="Description of project 2" />
        {/* Add more ProjectCard components as needed */}
      </div>
    </div>
  );
}
