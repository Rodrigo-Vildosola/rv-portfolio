// components/user/navbar.tsx
"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
      <div className="flex gap-x-2 ">
        <Button 
          variant={pathname === "/" ? "default" : "outline"}
          asChild
        >
          <Link href="/">
            My Portfolio
          </Link>
        </Button>
        <Button 
          variant={pathname === "/about" ? "default" : "outline"}
          asChild
        >
          <Link href="/about">
            About
          </Link>
        </Button>
        <Button 
          variant={pathname === "/projects" ? "default" : "outline"}
          asChild
        >
          <Link href="/projects">
            Projects
          </Link>
        </Button>
        <Button 
          variant={pathname === "/contact" ? "default" : "outline"}
          asChild
        >
          <Link href="/contact">
            Contact
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
