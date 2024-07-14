// app/page.tsx

import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';

import ExperienceSection from "@/components/custom/experience-section";
import SkillsSection from "@/components/custom/skills-section";
import EducationSection from "@/components/custom/education-section";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Me from "@/assets/images/avatar/me.png";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className="space-y-4 mt-12 w-full max-w-7xl mx-auto">
      <Card className="mb-2 bg-white dark:bg-gray-900">
        <CardHeader className="flex flex-col items-center text-center">
          <Avatar className="h-56 w-56 mb-4">
            <Image 
              src={Me} 
              alt="Me" 
              fill
              style={{ objectFit: 'cover', borderRadius: '50%' }} 
            />
            <AvatarFallback> Me </AvatarFallback>
          </Avatar>
          <CardTitle className={cn("text-6xl font-bold text-gray-900 dark:text-white drop-shadow-md", font.className)}>
            {t('title')}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-xl text-gray-900 dark:text-gray-300 drop-shadow-md mb-4">
            {t('description1')}
          </p>
          <p className="text-lg text-gray-900 dark:text-gray-300 drop-shadow-md">
            {t('description2')}
          </p>
          <Button variant="secondary" size="lg">
            {t('viewWork')}
          </Button>
        </CardContent>
      </Card>

      <Card className="mb-2 bg-white dark:bg-gray-900">
        <CardContent>
          <ExperienceSection />
        </CardContent>
      </Card>

      <Card className="mb-2 bg-white dark:bg-gray-900">
        <CardContent>
          <EducationSection />
        </CardContent>
      </Card>

      <Card className="mb-2 bg-white dark:bg-gray-900">
        <CardContent>
          <SkillsSection />
        </CardContent>
      </Card>
    </div>
  );
}
