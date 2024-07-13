// components/base/FloatingButton.tsx
"use client";

import { PlusIcon } from '@heroicons/react/24/outline';

const FloatingButton = () => {
  return (
    <button 
      className="fixed bottom-8 right-8 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition-all duration-200"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <PlusIcon className="w-6 h-6" />
    </button>
  );
};

export default FloatingButton;
