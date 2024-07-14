"use client"

import { useState } from 'react';

interface ExpandableTextProps {
  text: string;
  collapsedMaxLine?: number;
  showMoreText?: string;
  showLessText?: string;
  className?: string;
  buttonClassName?: string;
}

export const ExpandableText: React.FC<ExpandableTextProps> = ({
  text,
  collapsedMaxLine = 3,
  showMoreText = 'Show More',
  showLessText = 'Show Less',
  className = '',
  buttonClassName = 'text-blue-500 hover:border-b border-blue-500 font-semibold'
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`relative ${className}`}
    >
      <p className={`transition-all duration-300 ${isExpanded ? 'line-clamp-none' : `line-clamp-${collapsedMaxLine}`}`} style={{ whiteSpace: 'pre-wrap' }}>
        {text}
      </p>
      <span className={`font-medium cursor-pointer ml-2  ${buttonClassName} `} onClick={toggleExpand}>
        {isExpanded ? showLessText : showMoreText}
      </span>


    </div>
  );
};

