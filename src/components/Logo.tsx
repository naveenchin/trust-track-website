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
      {/* Shield outline */}
      <path
        d="M20 2L32 8V18C32 24 26 28 20 30C14 28 8 24 8 18V8L20 2Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      
      {/* Chain links */}
      <circle cx="20" cy="12" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="14" cy="18" r="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="26" cy="18" r="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="20" cy="24" r="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
      
      {/* Chain connections */}
      <path
        d="M18 14L16 16M22 14L24 16M16 20L18 22M24 20L22 22"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.8"
      />
      
      {/* Security checkmark */}
      <path
        d="M16 18L18 20L24 14"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      
      {/* Corner security indicators */}
      <path
        d="M12 10L14 8M28 8L26 10M26 26L28 24M14 26L12 24"
        stroke="currentColor" 
        strokeWidth="1.5"
        opacity="0.3"
        strokeLinecap="round"
      />
    </svg>
  );
};