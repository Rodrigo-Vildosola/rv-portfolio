import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import { Header } from "@/components/custom/header";
import { Social } from "@/components/custom/social";
import { BackButton } from "@/components/custom/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel?: string;
  backButtonHref?: string;
  showSocial?: boolean;
  headerTitle?: string; // Optional prop for the project name
}

export const CardWrapper = ({ 
  children, 
  headerLabel, 
  backButtonLabel, 
  backButtonHref, 
  showSocial = false, 
  headerTitle // Optional prop for the project name
}: CardWrapperProps) => {
  return (
    <Card className="max-w-2xl w-full mx-auto my-8 p-4 rounded-lg bg-white dark:bg-gray-900 outline-none border-none shadow-none">
      <CardHeader>
        <Header label={headerLabel} headerTitle={headerTitle} />
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      { backButtonLabel && backButtonHref && (
        <CardFooter>
          <BackButton
            label={backButtonLabel}
            href={backButtonHref}
          />
        </CardFooter>
      )}
    </Card>
  )
}
