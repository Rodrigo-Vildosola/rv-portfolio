// app/(public)/resume/page.tsx
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function ResumePage() {
  const t = useTranslations('ResumePage');

  return (
    <div className="space-y-4 mt-12 w-full max-w-7xl mx-auto">
      <Card className="mb-2 bg-white dark:bg-gray-900">
        <CardHeader>
          <CardTitle className="text-3xl font-bold mb-4">{t('title')}</CardTitle>
          <CardDescription>{t('description')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <embed 
              src="/cv.pdf" 
              type="application/pdf" 
              width="100%" 
              height="800px" 
              className="rounded-lg"
            />
          </div>
          <Button asChild className="w-full">
            <a href="/cv.pdf" download>
              {t('download')}
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
