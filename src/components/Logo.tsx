import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 44 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer hexagonal frame - represents structure and stability */}
      <path
        d="M22 4L34 11V33L22 40L10 33V11L22 4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.3"
      />
      
      {/* Inner tracking paths - represents data flow and circularity */}
      <path
        d="M22 8L30 12V32L22 36L14 32V12L22 8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 2"
        opacity="0.6"
      />
      
      {/* Central trust anchor - solid hexagon representing immutability */}
      <path
        d="M22 14L26 16.5V27.5L22 30L18 27.5V16.5L22 14Z"
        fill="currentColor"
        opacity="0.8"
      />
      
      {/* Inner verification symbol - checkmark or lock mechanism */}
      <path
        d="M19.5 22L21.5 24L24.5 20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Tracking nodes at key points - represents audit points */}
      <circle cx="22" cy="8" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="30" cy="12" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="30" cy="32" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="22" cy="36" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="14" cy="32" r="1.5" fill="currentColor" opacity="0.7" />
      <circle cx="14" cy="12" r="1.5" fill="currentColor" opacity="0.7" />
      
      {/* Subtle connection lines - data relationships */}
      <path
        d="M22 8L30 12M30 12L30 32M30 32L22 36M22 36L14 32M14 32L14 12M14 12L22 8"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.2"
      />
    </svg>
  );
};