"use client";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { PlusIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from '@/components/ui/drawer';
import ContactForm from '@/components/forms/contact-form';
import { useTranslations } from "next-intl";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});

const ContactButton = () => {
  const t = useTranslations("Layout");

  return (
    <>
      <div className="block md:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <button 
              className={cn("fixed bottom-6 right-6 flex items-center p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-full shadow-lg hover:from-purple-500 hover:via-pink-600 hover:to-red-600 focus:outline-none transition-all duration-200", font.className)}
            >
              <span className="text-2xl mx-2">{t("contact")}</span>
              <PlusIcon className="font-bold w-8 h-8" />
            </button>
          </DrawerTrigger>
          <DrawerContent className="p-4">
            <DrawerHeader>
              <DrawerTitle className="sr-only">{t("contact")}</DrawerTitle>
              <DrawerDescription className="sr-only">
                {t("description")} {/* Add a description here for accessibility */}
              </DrawerDescription>
            </DrawerHeader>
            <ContactForm />
          </DrawerContent>
        </Drawer>
      </div>

      <div className="hidden md:block">
        <Dialog>
          <DialogTrigger asChild>
            <button 
              className={cn("fixed bottom-12 right-12 flex items-center p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-full shadow-lg hover:from-purple-500 hover:via-pink-600 hover:to-red-600 focus:outline-none transition-all duration-200", font.className)}
            >
              <span className="text-2xl mx-2">{t("contact")}</span>
              <PlusIcon className="font-bold w-8 h-8" />
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl" onOpenAutoFocus={(e) => e.preventDefault()}>
            <DialogTitle className="sr-only">{t("contact")}</DialogTitle>
            <DialogDescription className="sr-only">
              {t("description")} {/* Add a description here for accessibility */}
            </DialogDescription>
            <ContactForm />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default ContactButton;
