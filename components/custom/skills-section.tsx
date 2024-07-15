// components/custom/skills-section.tsx

import { useTranslations } from "next-intl";
import { SkillCategory } from "@/assets/skills";
import SkillsCaroussel from "@/components/custom/skills-caroussel"; // Ensure this path is correct

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
            <SkillsCaroussel
              categoryItems={category.items}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
