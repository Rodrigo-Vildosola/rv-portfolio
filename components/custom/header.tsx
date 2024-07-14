import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const font = Poppins({
  subsets: ['latin'],
  weight: ["600"]
});

interface HeaderProps {
  label: string;
  headerTitle?: string; // Optional prop for the project name
}

export const Header = ({ label, headerTitle }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center text-center">
      {headerTitle && (
        <h1 className={cn(
          'text-3xl md:text-4xl font-bold',
          font.className
          )}
        >
          {headerTitle}
        </h1>
      )}
      <p className='text-muted-foreground text-sm md:text-base'>
        {label}
      </p>
    </div>
  )
}
