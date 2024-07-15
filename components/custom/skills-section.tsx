"use client"

import { useEffect, useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { SkillCategory, SkillItem } from "@/assets/skills"; // Import the type for TypeScript

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
            <Image 
              src={skill.image} 
              alt={`${skill.name} logo`}
              width={50} 
              height={50}
              className={`object-contain p-1 rounded-md `} 
              loading="lazy"
              onLoad={() => console.log(skill.name)}
            />
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

interface SkillsSectionProps {
  skills: SkillCategory[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const t = useTranslations("HomePage.Skills");
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
            setVisibleSections((prev) => [...prev, index]);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.skill-category');
    sections.forEach((section) => observer.current?.observe(section));
    return () => {
      sections.forEach((section) => observer.current?.unobserve(section));
    };
  }, [skills]);

  return (
    <section className="p-8 w-full">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      {skills.map((category, categoryIndex) => (
        <div 
          key={categoryIndex} 
          className="mb-8 skill-category" 
          data-index={categoryIndex}
        >
          <h2 className="text-2xl font-semibold mb-4">{t(category.category)}</h2>
          {visibleSections.includes(categoryIndex) && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.slice(0, 3).map((skill, skillIndex) => (
                <SkillCard key={skillIndex} skill={skill} />
              ))}
            </div>
          )}
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
};

export default SkillsSection;
