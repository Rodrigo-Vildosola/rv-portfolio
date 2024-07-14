// components/custom/skills-section.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";
import skills from "@/assets/skills";
import { useTranslations } from "next-intl";

export default function SkillsSection() {
  const t = useTranslations("HomePage.Skills");

  return (
    <section className="p-8 w-full">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                {skill.image && (
                  <Image src={skill.image} alt={`${skill.name} logo`} width={50} height={50} className="rounded-full" />
                )}
                <div>
                  <CardTitle>{skill.name}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{t(skill.descriptionKey)}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
