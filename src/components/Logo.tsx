import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 45 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Circular tracking line forming the base */}
      <circle 
        cx="20" 
        cy="20" 
        r="16" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeDasharray="4 2"
        opacity="0.6"
      />
      
      {/* Inner circular flow */}
      <circle 
        cx="20" 
        cy="20" 
        r="12" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        opacity="0.4"
      />
      
      {/* Central keystone/lock symbol */}
      <path
        d="M20 8L26 14L20 20L14 14L20 8Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      
      {/* Lock mechanism inside keystone */}
      <circle 
        cx="20" 
        cy="16" 
        r="2" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.2"
      />
      <path
        d="M20 18V20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Interlocking elements - connection points */}
      <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.8" />
      <circle cx="28" cy="12" r="1.5" fill="currentColor" opacity="0.8" />
      <circle cx="12" cy="28" r="1.5" fill="currentColor" opacity="0.8" />
      <circle cx="28" cy="28" r="1.5" fill="currentColor" opacity="0.8" />
      
      {/* Connecting lines showing the tracking/flow */}
      <path
        d="M13.5 13.5L18 18M26.5 13.5L22 18M13.5 26.5L18 22M26.5 26.5L22 22"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
        strokeLinecap="round"
      />
      
      {/* Outer security indicators */}
      <path
        d="M8 8L10 10M32 8L30 10M8 32L10 30M32 32L30 30"
        stroke="currentColor" 
        strokeWidth="1.5"
        opacity="0.3"
        strokeLinecap="round"
      />
    </svg>
  );
};