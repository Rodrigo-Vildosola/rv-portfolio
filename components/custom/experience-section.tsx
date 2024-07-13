// components/custom/experience-section.tsx
import Image from "next/image";
import { Divider } from "@/components/custom/divider";
import hbsLogo from "@/assets/images/experience/hbs.png";

const experiences = [
  {
    company: "Higher Bit Solutions (HBS)",
    logo: hbsLogo,
    role: "Full-Stack Developer",
    duration: "July 2023 - May 2024",
    description: "Worked as a Full-Stack Developer on web applications, APIs, databases, and Machine Learning.",
    contact: "pgrand@hbsolutions.cl",
  },
  // Add more experiences as needed
];


export default function ExperienceSection() {
  return (
    <section className="p-8 w-full">
      <h1 className="text-3xl font-bold mb-6">Experience</h1>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div key={index}>
            <div className="flex items-start space-x-4">
              <Image src={experience.logo} alt={`${experience.company} logo`} width={50} height={50} className="rounded-full" />
              <div>
                <h2 className="text-2xl font-semibold">{experience.company}</h2>
                <h3 className="text-xl">{experience.role}</h3>
                <p className="text-gray-500">{experience.duration}</p>
                <p className="mt-2">{experience.description}</p>
                <p className="text-gray-500 mt-1">Contact: <a href={`mailto:${experience.contact}`} className="text-blue-500">{experience.contact}</a></p>
              </div>
            </div>
            {index < experiences.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </section>
  );
}