// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/base/navbar";
import Footer from "@/components/base/footer";
import FloatingButton from "@/components/base/floating-button"; // Import the new component

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rodrigo Vildosola",
  description: "My portfolio app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Toaster />
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center w-full relative">
          <div className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-md p-6 w-full max-w-7xl mx-auto mt-8">
            {children}
          </div>
        </main>
        <Footer />
        <FloatingButton /> {/* Use the new component here */}
      </body>
    </html>
  );
}
