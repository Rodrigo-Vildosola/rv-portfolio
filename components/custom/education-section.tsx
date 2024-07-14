// components/custom/education-section.tsx
import Image, { StaticImageData } from "next/image";
import { Divider } from "@/components/custom/divider";
import { useTranslations } from "next-intl";
import uandesImage from "@/assets/images/education/uandes.png";
import cvdImage from "@/assets/images/education/cvd.png";

interface Education {
  institution: string;
  subheader?: string;
  description: string;
  image?: string;
  duration: string;
}

const imageMap: { [key: string]: StaticImageData } = {
  uandes: uandesImage,
  cvd: cvdImage,
  // Add more image mappings as needed
};

export default function EducationSection() {
  const t = useTranslations("HomePage.Education");

  const education: Education[] = t.raw("items");

  return (
    <section className="p-8 w-full">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index}>
            <div className="flex items-start space-x-4">
              {edu.image && (
                <Image src={imageMap[edu.image]} alt={`${edu.institution} logo`} width={50} height={50} className="rounded-full" />
              )}
              <div>
                <h2 className="text-2xl font-bold">{edu.institution}</h2>
                {edu.subheader && <h3 className="text-xl text-gray-700 dark:text-gray-400">{edu.subheader}</h3>}
                <p className="text-gray-500">{edu.duration}</p>
                <p className="mt-2">{edu.description}</p>
              </div>
            </div>
            {index < education.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </section>
  );
}
