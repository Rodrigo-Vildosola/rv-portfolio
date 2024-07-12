// app/(public)/contact/page.tsx

import Navbar from "@/components/user/navbar";
import ContactForm from "@/components/forms/contact-form";

export default function ContactsPage() {
  return (
    <main>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <ContactForm />
      </div>
    </main>
  );
}
