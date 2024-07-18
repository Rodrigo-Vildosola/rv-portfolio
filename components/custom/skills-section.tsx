// components/custom/skills-section.tsx
import React, { lazy, Suspense } from "react";
import { useTranslations } from "next-intl";
import { SkillCategory } from "@/assets/skills";
import LoadingSpinner from "@/components/custom/loader"; // Create a simple spinner component

const SkillsCaroussel = lazy(() => import("@/components/custom/skills-caroussel"));

interface SkillsSectionProps {
  skills: SkillCategory[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const t = useTranslations("HomePage.Skills");

  return (
    <section className="p-8 w-full">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      {skills.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t(category.category)}</h2>
          <div className="relative">
            <Suspense fallback={<LoadingSpinner />}>
              <SkillsCaroussel categoryItems={category.items} />
            </Suspense>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
