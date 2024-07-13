// components/base/navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState("light");

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

  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-800 text-gray-800 dark:text-white  flex justify-between items-center p-4 rounded-xl w-[calc(100%-2rem)] max-w-7xl mx-auto mt-4 shadow-lg z-50">
      <div className="flex items-center space-x-10">
        <h1 className="text-2xl font-bold">Rodrigo Vildosola</h1>
        <div className="flex gap-x-2">
          <Button variant={pathname === "/" ? "default" : "outline"} asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant={pathname === "/projects" ? "default" : "outline"} asChild>
            <Link href="/projects">Projects</Link>
          </Button>
          <Button variant={pathname === "/contact" ? "default" : "outline"} asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button variant={pathname === "/resume" ? "default" : "outline"} asChild>
            <Link href="/resume">Resume</Link>
          </Button>
        </div>
      </div>
      <div>
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
