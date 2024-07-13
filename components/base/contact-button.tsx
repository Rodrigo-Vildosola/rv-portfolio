// components/base/ContactButton.tsx
"use client";

import { PlusIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import ContactForm from '@/components/forms/contact-form';

const ContactButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button 
          className="fixed bottom-8 right-8 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition-all duration-200"
        >
          <PlusIcon className="w-12 h-12" />
        </button>
      </DialogTrigger>
      <DialogContent>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
};

export default ContactButton;
