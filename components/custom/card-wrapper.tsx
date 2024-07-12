"use client";
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
}

export const CardWrapper = ({ 
  children, 
  headerLabel, 
  backButtonLabel, 
  backButtonHref, 
  showSocial = false 
}: CardWrapperProps) => {
  return (
    <Card className="max-w-lg w-full mx-auto my-8 p-4 shadow-md rounded-lg">
      <CardHeader>
        <Header label={headerLabel} />
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
