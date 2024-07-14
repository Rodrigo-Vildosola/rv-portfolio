// app/(public)/contact/page.tsx

import ContactForm from "@/components/forms/contact-form";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { useTranslations } from 'next-intl';
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  
  return (
    <div className="space-y-4 mt-12 w-full max-w-7xl mx-auto">
      <Card className="mb-2 bg-white dark:bg-gray-900">
        <CardHeader className="text-center">
          <CardTitle className={cn("text-6xl font-bold text-gray-900 dark:text-white drop-shadow-md mb-4", font.className)}>
            {t('title')}
          </CardTitle>
          <CardDescription className="text-xl text-gray-900 dark:text-gray-300 drop-shadow-md">
            {t('description')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-lg text-gray-900 dark:text-gray-300 drop-shadow-md mb-4">
            {t('moreInfo')}
          </p>
          <h2 className="text-3xl font-bold mb-6">{t('formTitle')}</h2>
          <ContactForm />
          <div className="space-y-4">
            <p className="text-lg text-gray-900 dark:text-gray-300">
              {t('emailLabel')}: <a href="mailto:your.email@example.com" className="text-blue-500">your.email@example.com</a>
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <Button asChild variant="outline" className="text-blue-500">
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
              </Button>
              <Button asChild variant="outline" className="text-blue-500">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </Button>
              <Button asChild variant="outline" className="text-blue-500">
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
