// components/ui/project-card.tsx
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

type ProjectCardProps = {
  title: string;
  description: string;
  link?: string;
  image?: StaticImageData;
  details?: string;
};

const ProjectCard = ({ title, description, link, image, details }: ProjectCardProps) => {
  const t = useTranslations("ProjectsPage");
  return (
    <Card className="border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      {image && (
        <div className="relative w-full h-56">
          <Image src={image} alt={title} width={200} height={200} className="rounded-t-lg" />
        </div>
      )}
      <CardHeader className="bg-gray-100 dark:bg-gray-700 p-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </CardContent>
      {details && (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="details">
            <AccordionTrigger
              openLabel={t('openLabel')}
              closeLabel={t('closeLabel')}
            />
            <AccordionContent>
              <p className="text-gray-700 dark:text-gray-300">{details}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
      {link && (
        <CardFooter className="bg-gray-100 dark:bg-gray-700 p-4 text-right">
          <Button asChild variant="outline" className="text-blue-500">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {t('viewProject')}
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
};

export default ProjectCard;
