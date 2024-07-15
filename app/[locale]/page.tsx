// app/page.tsx

import { Poppins } from "next/font/google";
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from "next-intl/server";


import ExperienceSection from "@/components/custom/experience-section";
import SkillsSection from "@/components/custom/skills-section";
import EducationSection from "@/components/custom/education-section";
import SocialSection from "@/components/custom/social-section";

import { Card, CardContent } from "@/components/ui/card";


const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});

import skills from '@/assets/skills';
import HeroSection from "@/components/custom/hero-section";



export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) { // Accept skills as a prop
  unstable_setRequestLocale(locale);
  const t = useTranslations('HomePage');
  return (
    <div className="space-y-4 mt-12 w-full max-w-7xl p-3 md:p-0">
      <HeroSection font={font} />

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
