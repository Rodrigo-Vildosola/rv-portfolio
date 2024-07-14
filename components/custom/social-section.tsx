// components/custom/social-section.tsx
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
}

export default function SocialSection() {
  const t = useTranslations("HomePage.Social");

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/Rodrigo-Vildosola",
      icon: <FaGithub className="h-12 w-12" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/rodrigo-vildosola-3b1686318",
      icon: <FaLinkedin className="h-12 w-12" />,
    },
  ];


  return (
    <section className="p-8 w-full">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 justify-center">
        {socialLinks.map((link: SocialLink, index: number) => (
          <Button key={index} size="lg" variant="outline" className="h-24 w-full" asChild>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-full w-full">
              {link.icon}
            </a>
          </Button>
        ))}
      </div>
    </section>
  );
}
