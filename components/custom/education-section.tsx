// components/custom/education-section.tsx
import Image from "next/image";
import { Divider } from "@/components/custom/divider";

const education = [
  {
    institution: "Universidad De los Andes",
    subheader: "Software Engineering",
    description: "Studying Software Engineering with a focus on web development, data analysis, and machine learning.",
    image: "/education/uandes.png",
    duration: "2020 - 2025",
  },
  {
    institution: "Colegio del Verbo Divino",
    description: "Graduated with a focus on science and mathematics. Active in various extracurricular activities.",
    image: "/education/cvd.png",
    duration: "2005 - 2019",
  },
  // Add more education items as needed
];

export default function EducationSection() {
  return (
    <section className="p-8 w-full">
      <h1 className="text-3xl font-bold mb-6">Education</h1>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index}>
            <div className="flex items-start space-x-4">
              {edu.image && (
                <Image src={edu.image} alt={`${edu.institution} logo`} width={50} height={50} className="rounded-full" />
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
