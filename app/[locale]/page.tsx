// app/page.tsx

import { Button } from "@/components/ui/button";
import { ExpandableText } from '@/components/ui/text';
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';

import ExperienceSection from "@/components/custom/experience-section";
import SkillsSection from "@/components/custom/skills-section";
import EducationSection from "@/components/custom/education-section";
import SocialSection from "@/components/custom/social-section";

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

import skills from '@/assets/skills';



export default function HomePage() { // Accept skills as a prop
  const t = useTranslations('HomePage');
  return (
    <div className="space-y-4 mt-12 w-full max-w-7xl p-3 md:p-0">
      <Card className="mb-2 bg-white dark:bg-gray-900">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="h-56 w-56 mb-4">
            <Image 
              src={Me} 
              alt="Me" 
              fill
              sizes="(max-width: 768px) 100vw, 
                  (max-width: 1200px) 50vw, 
                  33vw"
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
          <SkillsSection skills={skills} /> {/* Pass skills data here */}
        </CardContent>
      </Card>

      <Card className="mb-2 bg-white dark:bg-gray-900">
        <CardContent className="space-y-4">
          <section className="p-8 w-full">
            <h1 className="text-3xl font-bold mb-2">{t('aboutMe.title')}</h1>
            <p className="text-lg text-gray-900 dark:text-gray-300">
              {t('aboutMe.content1')}
            </p>
            <p className="text-lg text-gray-900 dark:text-gray-300">
              {t('aboutMe.content2')}
            </p>
          </section>
        </CardContent>
      </Card>

      <Card className="mb-2 bg-white dark:bg-gray-900">
        <CardContent>
          <SocialSection />
        </CardContent>
      </Card>
    </div>
  );
}
