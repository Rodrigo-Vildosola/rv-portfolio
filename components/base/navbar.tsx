// components/base/navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { Link } from "@/navigation";
import { SunIcon, MoonIcon, CheckIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLocale, useTranslations } from 'next-intl';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';

import Image from 'next/image';
import UK from "@/assets/images/flags/uk.png";
import Spain from "@/assets/images/flags/spain.png";

const Navbar = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("Navbar");
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
        document.documentElement.classList.add(storedTheme);
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const getLanguageLabel = (locale: string) => {
    return locale === 'en' ? t('English') : t('Spanish');
  };

  const getLanguageFlag = (locale: string) => {
    return locale === 'en' ? UK : Spain;
  };

  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex justify-between items-center p-4 rounded-xl w-[calc(100%-2rem)] max-w-7xl mx-auto mt-4 shadow-lg z-50">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold">Rodrigo Vildosola</h1>
        <div className="flex items-center space-x-4 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="focus:outline-none">
                {menuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <div className="flex flex-col md:flex-row gap-2 md:gap-x-2">
                <Button variant={pathname === `/${locale}` ? "default" : "outline"} asChild>
                  <Link href="/">{t('Home')}</Link>
                </Button>
                <Button variant={pathname === `/${locale}/resume` ? "default" : "outline"} asChild>
                  <Link href="/resume">{t('Resume')}</Link>
                </Button>
              </div>
              <DropdownMenuItem onClick={toggleTheme} className="flex items-center space-x-2">
                {theme === "light" ? (
                  <MoonIcon className="w-6 h-6" />
                ) : (
                  <SunIcon className="w-6 h-6" />
                )}
                <span>{theme === "light" ? t('Dark Mode') : t('Light Mode')}</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLocale('en')} disabled={locale === 'en'} className={locale === 'en' ? 'text-gray-400' : ''}>
                <Image src={UK} alt="UK" width={20} height={20} quality={10} loading="lazy" className="mr-2" />
                {t('English')}
                {locale === 'en' && <CheckIcon className="ml-auto w-5 h-5" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLocale('es')} disabled={locale === 'es'} className={locale === 'es' ? 'text-gray-400' : ''}>
                <Image src={Spain} alt="Spain" width={20} height={20} quality={10} loading="lazy" className="mr-2" />
                {t('Spanish')}
                {locale === 'es' && <CheckIcon className="ml-auto w-5 h-5" />}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className={`md:flex items-center space-x-10 ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="flex flex-col md:flex-row gap-2 md:gap-x-2">
          <Button variant={pathname === `/${locale}` ? "default" : "outline"} asChild>
            <Link href="/">{t('Home')}</Link>
          </Button>
          <Button variant={pathname === `/${locale}/resume` ? "default" : "outline"} asChild>
            <Link href="/resume">{t('Resume')}</Link>
          </Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Image src={getLanguageFlag(locale)} alt={getLanguageLabel(locale)} width={20} height={20} quality={10} loading="lazy" className="mr-2" />
              {getLanguageLabel(locale)}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem 
              onClick={() => switchLocale('en')} 
              disabled={locale === 'en'}
              className={locale === 'en' ? 'text-gray-400' : ''}
            >
              <Image src={UK} alt="UK" width={20} height={20} quality={10} loading="lazy" className="mr-2" />
              {t('English')}
              {locale === 'en' && <CheckIcon className="ml-auto w-5 h-5" />}
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => switchLocale('es')} 
              disabled={locale === 'es'}
              className={locale === 'es' ? 'text-gray-400' : ''}
            >
              <Image src={Spain} alt="Spain" width={20} height={20} quality={10} loading="lazy" className="mr-2" />
              {t('Spanish')}
              {locale === 'es' && <CheckIcon className="ml-auto w-5 h-5" />}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <button onClick={toggleTheme} className="focus:outline-none">
          {theme === "light" ? (
            <MoonIcon className="w-6 h-6" />
          ) : (
            <SunIcon className="w-6 h-6" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
