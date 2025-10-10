import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Interlocked T's forming a data block */}
      {/* First T - positioned left */}
      <path
        d="M8 8H22V12H17V32H13V12H8V8Z"
        fill="currentColor"
        opacity="0.9"
      />
      
      {/* Second T - positioned right, interlocking */}
      <path
        d="M18 8H32V12H27V32H23V12H18V8Z"
        fill="currentColor"
        opacity="0.9"
      />
      
      {/* Interlocking connection - the horizontal bars merge */}
      <rect
        x="13"
        y="8"
        width="14"
        height="4"
        fill="currentColor"
        opacity="1"
      />
      
      {/* Data block outline - subtle border around the merged form */}
      <rect
        x="7"
        y="7"
        width="26"
        height="26"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
        rx="2"
      />
      
      {/* Trust indicators - small dots at corners */}
      <circle cx="10" cy="10" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="30" cy="10" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="10" cy="30" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="30" cy="30" r="1.5" fill="currentColor" opacity="0.6" />
    </svg>
  );
};