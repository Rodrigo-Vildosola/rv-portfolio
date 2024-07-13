// app/page.tsx

import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import ExperienceSection from "@/components/custom/experience-section";
import SkillsSection from "@/components/custom/skills-section";
import EducationSection from "@/components/custom/education-section";
import { Divider } from "@/components/custom/divider";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});

export default function HomePage() {
  return (
    <div className="space-y-12 mt-12">
      <section className="text-center">
        <div className="flex justify-center mb-6">
          <Avatar className="h-32 w-32">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <h1 className={cn("text-6xl font-bold text-gray-900 dark:text-white drop-shadow-md mb-6", font.className)}>
          Rodrigo Vildosola
        </h1>
        <p className="text-xl text-gray-900 dark:text-gray-300 drop-shadow-md mb-4">
          Full Stack Developer with expertise in Python, JavaScript, and Machine Learning. Passionate about building robust web applications and exploring new technologies.
        </p>
        <p className="text-lg text-gray-900 dark:text-gray-300 drop-shadow-md mb-6">
          Skilled in React, Next.js, Django, and Ruby on Rails. Dedicated to continuous learning and professional growth.
        </p>
        <Button variant="secondary" size="lg">
          View My Work
        </Button>
      </section>

      <Divider />

      <SkillsSection />

      <Divider />

      <EducationSection />

      <Divider />

      <ExperienceSection />
    </div>
  );
}
