// components/custom/skills-section.tsx
"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";
import skills, { SkillItem } from "@/assets/skills";
import { useTranslations } from "next-intl";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton"
import { useState } from 'react';

interface SkillCardProps {
  skill: SkillItem;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const t = useTranslations("HomePage.Skills");

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          {skill.image && (
            <>
              {/* {!imageLoaded && (
                <Skeleton className="h-12 w-12 rounded-full" />
              )} */}
              <Image 
                src={skill.image} 
                alt={`${skill.name} logo`}
                width={50} 
                height={50}
                className={`object-contain p-1 rounded-md `} 
                loading="lazy"
                onLoad={() => {
                  console.log(skill.name, "loaded")
                }}
              />
            </>
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
  );
};

export default function SkillsSection() {
  const t = useTranslations("HomePage.Skills");

  return (
    <section className="p-8 w-full">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      {skills.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t(category.category)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.items.slice(0, 3).map((skill, skillIndex) => (
              <SkillCard key={skillIndex} skill={skill} />
            ))}
          </div>
          {category.items.length > 3 && (
            <Accordion type="single" collapsible className="mt-4">
              <AccordionItem value={`category-${categoryIndex}`}>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.slice(3).map((skill, skillIndex) => (
                      <SkillCard key={skillIndex} skill={skill} />
                    ))}
                  </div>
                </AccordionContent>
                <AccordionTrigger
                  openLabel={t("openLabel")}
                  closeLabel={t("closeLabel")}
                >
                  {t('see')} {category.items.length - 3} 
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
          )}
        </div>
      ))}
    </section>
  );
}
