// app/layout.tsx
import {NextIntlClientProvider} from 'next-intl';
// import {getMessages} from 'next-intl/server';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { unstable_setRequestLocale } from "next-intl/server";


import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/base/navbar";
import Footer from "@/components/base/footer";
import ContactButton from "@/components/base/contact-button"; // Import the new component
import { getLocaleMessages } from '@/lib/locales'; // A utility function to get locale messages


import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rodrigo Vildosola",
  description: "My portfolio app",
};

export async function generateStaticParams() {
  const locales = ['en', 'es']; // Add all your supported locales here
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = getLocaleMessages(locale);
  unstable_setRequestLocale(locale);


  return (
    <html lang={locale}>

      <body className={`${inter.className} flex flex-col`}>
        <NextIntlClientProvider messages={messages}>

          <Toaster />
          <main className="flex-grow flex flex-col items-center justify-center w-full relative mt-8">
            <Navbar />
            {children}
            <SpeedInsights />
          </main>
          <Footer />
          <ContactButton /> {/* Use the new component here */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
