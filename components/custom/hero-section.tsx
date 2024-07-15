import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Me from "@/assets/images/avatar/me.png";
import styles from '@/styles/hero-section.module.css'; // Import the CSS module

interface HeroSectionProps {
  font: {
    className: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ font }) => {
  const t = useTranslations('HomePage');

  const getRandomSpeed = () => {
    const min = 20;
    const max = 25;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <Card className="mb-2 bg-white dark:bg-gray-900">
      <div className="flex flex-col h-full">
        {/* Top Section */}
        <div className="flex h-48 md:h-64 rounded-md px-10 md:px-20 py-5 md:py-10 justify-center items-center relative ">
          <div className={cn("h-full w-full text-gray-100 dark:text-gray-100 bg-gradient-to-r from-blue-700 to-gray-900 dark:from-blue-700 dark:to-gray-900 rounded-md flex flex-col overflow-hidden justify-center items-center", font.className)}>
            <div className={cn(styles['move-left-to-right'], "text-xl whitespace-nowrap ")} style={{ animationDuration: `${getRandomSpeed()}s` }}>
              <span className="mx-6 md:mx-10">Unit Testing</span>
              <span className="mx-6 md:mx-10">RESTful API Development</span>
              <span className="mx-6 md:mx-10">AWS</span>
              <span className="mx-6 md:mx-10">Docker</span>
              <span className="mx-6 md:mx-10">Git</span>
              <span className="mx-6 md:mx-10">Unit Testing</span>
              <span className="mx-6 md:mx-10">RESTful API Development</span>
              <span className="mx-6 md:mx-10">AWS</span>
              <span className="mx-6 md:mx-10">Docker</span>
              <span className="mx-6 md:mx-10">Git</span>
            </div>
            <div className={cn(styles['move-right-to-left'], "text-xl whitespace-nowrap ")} style={{ animationDuration: `${getRandomSpeed()}s` }}>
              <span className="mx-6 md:mx-10">PostgreSQL</span>
              <span className="mx-6 md:mx-10">MongoDB</span>
              <span className="mx-6 md:mx-10">MySQL</span>
              <span className="mx-6 md:mx-10">NumPy</span>
              <span className="mx-6 md:mx-10">Pandas</span>
              <span className="mx-6 md:mx-10">TensorFlow</span>
              <span className="mx-6 md:mx-10">Keras</span>
              <span className="mx-6 md:mx-10">PostgreSQL</span>
              <span className="mx-6 md:mx-10">MongoDB</span>
              <span className="mx-6 md:mx-10">MySQL</span>
              <span className="mx-6 md:mx-10">NumPy</span>
              <span className="mx-6 md:mx-10">Pandas</span>
              <span className="mx-6 md:mx-10">TensorFlow</span>
              <span className="mx-6 md:mx-10">Keras</span>
            </div>
            <div className={cn(styles['move-left-to-right'], "text-xl whitespace-nowrap ")} style={{ animationDuration: `${getRandomSpeed()}s` }}>
              <span className="mx-6 md:mx-10">React</span>
              <span className="mx-6 md:mx-10">Next.js</span>
              <span className="mx-6 md:mx-10">Django</span>
              <span className="mx-6 md:mx-10">Flask</span>
              <span className="mx-6 md:mx-10">Ruby on Rails</span>
              <span className="mx-6 md:mx-10">Node.js</span>
              <span className="mx-6 md:mx-10">React</span>
              <span className="mx-6 md:mx-10">Next.js</span>
              <span className="mx-6 md:mx-10">Django</span>
              <span className="mx-6 md:mx-10">Flask</span>
              <span className="mx-6 md:mx-10">Ruby on Rails</span>
              <span className="mx-6 md:mx-10">Node.js</span>
            </div>
            <div className={cn(styles['move-right-to-left'], "text-xl whitespace-nowrap ")} style={{ animationDuration: `${getRandomSpeed()}s` }}>
              <span className="mx-6 md:mx-10">Python</span>
              <span className="mx-6 md:mx-10">JavaScript</span>
              <span className="mx-6 md:mx-10">C</span>
              <span className="mx-6 md:mx-10">C++</span>
              <span className="mx-6 md:mx-10">C#</span>
              <span className="mx-6 md:mx-10">SQL</span>
              <span className="mx-6 md:mx-10">Python</span>
              <span className="mx-6 md:mx-10">JavaScript</span>
              <span className="mx-6 md:mx-10">C</span>
              <span className="mx-6 md:mx-10">C++</span>
              <span className="mx-6 md:mx-10">C#</span>
              <span className="mx-6 md:mx-10">SQL</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row h-full">
          {/* Bottom Left Section */}
          <div className="w-full md:w-full flex flex-col p-4">
            <div className="flex md:ml-20">
              <p className={cn("inline-block text-md md:text-xl font-semibold text-white dark:text-gray-900 bg-gray-900 dark:bg-white p-1 rounded", font.className)}>
                {t("subtitle")}
              </p>
            </div>
            <CardTitle className={cn("md:ml-20 text-4xl md:text-7xl font-bold text-gray-900 dark:text-white drop-shadow-md", font.className)}>
              {t('title')}
            </CardTitle>
          </div>

          {/* Bottom Right Section */}
          <div className="w-full md:w-full flex flex-row items-center justify-center p-4">
            <Image 
              src={Me} 
              alt="Me" 
              width={200}
              style={{ objectFit: 'cover', borderRadius: '10%' }} 
            />
            <div className="ml-2 md:ml-4 flex flex-col justify-center">
              <p className={cn(`text-md md:text-2xl text-gray-900 dark:text-gray-300 text-right md:text-left`, font.className)}>
                {t('description1')}
              </p>
              <Image 
                src={Me} 
                alt="Me" 
                width={200}
                style={{ borderRadius: '10%' }} 
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HeroSection;
