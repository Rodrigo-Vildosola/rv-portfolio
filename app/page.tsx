// app/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/user/navbar";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-radial from-sky-500 to-blue-800">
      <Navbar />
      <div className="space-y-6 text-center mt-12">
        <h1 className={cn(
          "text-6xl font-bold text-white drop-shadow-md",
          font.className,
        )}>
          Rodrigo Vildosola
        </h1>
        <p className="text-xl text-white drop-shadow-md">
          Full Stack Developer
        </p>
        <div>
          <Button variant="secondary" size="lg">
            View My Work
          </Button>
        </div>
      </div>
    </main>
  );
}
