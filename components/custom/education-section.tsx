// components/custom/education-section.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";

const education = [
  {
    institution: "Universidad De los Andes",
    description: "Studying Software Engineering, 2020 - Present",
    image: "/path/to/andes-logo.png",
  },
  {
    institution: "Colegio del Verbo Divino",
    description: "Class of 2019",
    image: "/path/to/verbo-logo.png",
  },
  // Add more education items as needed
];

export default function EducationSection() {
  return (
    <section className="p-8 w-full">
      <h1 className="text-3xl font-bold mb-6">Education</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {education.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                {edu.image && (
                  <Image src={edu.image} alt={`${edu.institution} logo`} width={50} height={50} className="rounded-full" />
                )}
                <div>
                  <CardTitle>{edu.institution}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{edu.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
