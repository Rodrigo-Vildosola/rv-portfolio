"use client";
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const font = Poppins({
  subsets: ['latin'],
  weight: ["600"]
});

interface HeaderProps {
  label: string;
  projectName?: string; // Optional prop for the project name
}

export const Header = ({ label, projectName }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center text-center">
      {projectName && (
        <h1 className={cn(
          'text-3xl md:text-4xl font-bold',
          font.className
          )}
        >
          {projectName}
        </h1>
      )}
      <p className='text-muted-foreground text-sm md:text-base'>
        {label}
      </p>
    </div>
  )
}
