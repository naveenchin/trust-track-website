import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main hexagon */}
      <path
        d="M20 2L32 9V23L20 30L8 23V9L20 2Z"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      
      {/* Inner network nodes */}
      <circle cx="20" cy="12" r="2" fill="currentColor" />
      <circle cx="14" cy="16" r="1.5" fill="currentColor" />
      <circle cx="26" cy="16" r="1.5" fill="currentColor" />
      <circle cx="20" cy="20" r="2" fill="currentColor" />
      <circle cx="16" cy="24" r="1.5" fill="currentColor" />
      <circle cx="24" cy="24" r="1.5" fill="currentColor" />
      
      {/* Connection lines */}
      <path
        d="M20 14L14 16M20 14L26 16M20 18L14 16M20 18L26 16M20 18L16 24M20 18L24 24"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      
      {/* Outer connection points */}
      <circle cx="20" cy="6" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="29" cy="10" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="29" cy="22" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="20" cy="26" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="11" cy="22" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="11" cy="10" r="1" fill="currentColor" opacity="0.4" />
      
      {/* Outer connection lines */}
      <path
        d="M20 8L20 6M27 12L29 10M27 20L29 22M20 24L20 26M13 20L11 22M13 12L11 10"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.3"
      />
    </svg>
  );
};