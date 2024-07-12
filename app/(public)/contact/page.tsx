// app/(public)/contact/page.tsx

import ContactForm from "@/components/forms/contact-form";

export default function ContactsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <ContactForm />
    </div>
  );
}
