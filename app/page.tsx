// app/page.tsx

import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});

export default function HomePage() {
  return (
    <div className="space-y-6 text-center mt-12">
      <h1 className={cn("text-6xl font-bold text-gray-900 dark:text-white drop-shadow-md", font.className)}>
        Rodrigo Vildosola
      </h1>
      <p className="text-xl text-gray-900 dark:text-gray-300 drop-shadow-md">
        Full Stack Developer
      </p>
      <Button variant="secondary" size="lg">
        View My Work
      </Button>
    </div>
  );
}
