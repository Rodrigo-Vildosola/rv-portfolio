// components/custom/category-carousel.tsx
"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useTranslations } from "next-intl";
import Autoplay from "embla-carousel-autoplay";
import SkillCard from "@/components/custom/skills-card"; // Ensure this path is correct
import { SkillItem } from "@/assets/skills"; // Import the type for TypeScript



const getRandomDelay = (min = 2000, max = 5000) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

interface SkillsCarousselProps {
  categoryItems: SkillItem[];
}

const SkillsCaroussel: React.FC<SkillsCarousselProps> = ({ categoryItems }) => {
  const t = useTranslations("HomePage.Skills");



  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: getRandomDelay(),
        }),
      ]}
    >
      <CarouselContent className="flex">
        {categoryItems.map((skill, skillIndex) => (
          <CarouselItem key={skillIndex} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <SkillCard skill={skill} description={t(skill.descriptionKey)} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default SkillsCaroussel;
