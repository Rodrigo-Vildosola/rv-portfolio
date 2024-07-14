// components/base/footer.tsx
"use client";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Rodrigo Vildosola. {t('rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
