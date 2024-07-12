// app/(public)/projects/page.tsx
import Navbar from "@/components/user/navbar";
import ProjectCard from "@/components/custom/project-card"; // Create this component similarly to your button

export default function Projects() {
  return (
    <main>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <ProjectCard title="Project 1" description="Description of project 1" />
          <ProjectCard title="Project 2" description="Description of project 2" />
          {/* Add more ProjectCard components as needed */}
        </div>
      </div>
    </main>
  );
}
