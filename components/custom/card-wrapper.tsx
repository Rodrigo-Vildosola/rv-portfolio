import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import { Header } from "@/components/custom/header";
import { Social } from "@/components/custom/social";
import { BackButton } from "@/components/custom/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
  projectName?: string; // Optional prop for the project name
}

export const CardWrapper = ({ 
  children, 
  headerLabel, 
  backButtonLabel, 
  backButtonHref, 
  showSocial = false, 
  projectName // Optional prop for the project name
}: CardWrapperProps) => {
  return (
    <Card className="max-w-2xl w-full mx-auto my-8 p-4 shadow-md rounded-lg">
      <CardHeader>
        <Header label={headerLabel} projectName={projectName} />
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton
          label={backButtonLabel}
          href={backButtonHref}
        />
      </CardFooter>
    </Card>
  )
}
