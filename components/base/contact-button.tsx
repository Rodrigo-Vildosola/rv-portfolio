// components/base/ContactButton.tsx
"use client";


import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { PlusIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import ContactForm from '@/components/forms/contact-form';


const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});

const ContactButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button 
          className={cn("fixed bottom-12 right-12 flex items-center p-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-full shadow-lg hover:from-purple-500 hover:via-pink-600 hover:to-red-600 focus:outline-none transition-all duration-200", font.className)}
        >
          <span className=" text-2xl mx-2">Contact Me</span>
          <PlusIcon className=" font-bold w-8 h-8" />
        </button>
      </DialogTrigger>
      <DialogContent className='max-w-2xl'>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
};

export default ContactButton;
