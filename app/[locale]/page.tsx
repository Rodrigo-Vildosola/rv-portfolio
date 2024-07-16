// app/page.tsx

import { Poppins } from "next/font/google";
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from "next-intl/server";


import ExperienceSection from "@/components/custom/experience-section";
import SkillsSection from "@/components/custom/skills-section";
import EducationSection from "@/components/custom/education-section";
import SocialSection from "@/components/custom/social-section";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/custom/hero-section";
import Me from "@/assets/images/avatar/me.png"
import Image from "next/image";
import skills from '@/assets/skills';
import { Divider } from "@/components/custom/divider";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});




export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('HomePage');

  return (
    <div className="space-y-8 mt-12 w-full max-w-7xl p-3 md:p-0">
      <HeroSection font={font} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow">
          <CardContent>
            <ExperienceSection />
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow">
          <CardContent>
            <EducationSection />
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-2">{t('aboutMe.title')}</h1>
          <Divider />
          <p className="text-lg text-gray-900 dark:text-gray-300 mb-6">
            {t('aboutMe.content1')}
          </p>
          <p className="text-lg text-gray-900 dark:text-gray-300">
            {t('aboutMe.content2')}
          </p>
        </div>
        <div className="md:w-1/2 p-8">
          <Image src={Me} alt="About me" quality={100} className="rounded-lg shadow-lg" priority/>
        </div>
      </Card>


      <Card className="bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow">
        <CardContent>
          <SkillsSection skills={skills} />
        </CardContent>
      </Card>


      <Card className="bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow">
        <CardContent>
          <SocialSection />
        </CardContent>
      </Card>
    </div>
  );
}
