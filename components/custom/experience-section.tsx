// components/custom/experience-section.tsx
import Image, { StaticImageData } from "next/image";
import { Divider } from "@/components/custom/divider";
import { useTranslations } from "next-intl";
import hbsLogo from "@/assets/images/experience/hbs.png";

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  contact: string;
  image?: string;
}

const imageMap: { [key: string]: StaticImageData } = {
  hbsLogo: hbsLogo,
  // Add more image mappings as needed
};

export default function ExperienceSection() {
  const t = useTranslations("HomePage.Experience");

  const experiences: Experience[] = t.raw("items");

  return (
    <section className="p-8 w-full">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      <div className="space-y-8">
        {experiences.map((experience: Experience, index: number) => (
          <div key={index}>
            <div className="flex items-start space-x-4">
              {experience.image && (
                <Image src={imageMap[experience.image]} alt={`${experience.company} logo`} width={50} height={50} className="rounded-full" />
              )}
              <div>
                <h2 className="text-2xl font-semibold">{experience.company}</h2>
                <h3 className="text-xl">{experience.role}</h3>
                <p className="text-gray-500">{experience.duration}</p>
                <p className="mt-2">{experience.description}</p>
                <p className="text-gray-500 mt-1">
                  {t('contact')}: <a href={`mailto:${experience.contact}`} className="text-blue-500">{experience.contact}</a>
                </p>
              </div>
            </div>
            {index < experiences.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </section>
  );
}
