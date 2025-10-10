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
      {/* Circular tracking path - represents circularity and continuous monitoring */}
      <circle
        cx="20"
        cy="20"
        r="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.4"
      />
      
      {/* Central trust anchor - hexagonal shape for stability */}
      <path
        d="M20 8L28 12V20L20 24L12 20V12L20 8Z"
        fill="currentColor"
        opacity="0.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      
      {/* Inner verification symbol - checkmark for trust */}
      <path
        d="M16 18L19 21L24 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Tracking nodes - data points around the circle */}
      <circle cx="20" cy="4" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="32" cy="12" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="32" cy="28" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="20" cy="36" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="8" cy="28" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="8" cy="12" r="2" fill="currentColor" opacity="0.6" />
      
      {/* Connection lines - showing data flow */}
      <path
        d="M20 6L30 14M30 14L30 26M30 26L20 34M20 34L10 26M10 26L10 14M10 14L20 6"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
        fill="none"
      />
    </svg>
  );
};