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
      {/* Outer tracking circle - represents circularity and continuous monitoring */}
      <circle 
        cx="22" 
        cy="22" 
        r="20" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        opacity="0.4"
      />
      
      {/* Inner tracking ring with subtle gaps - represents data flow */}
      <circle 
        cx="22" 
        cy="22" 
        r="15" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeDasharray="8 3"
        opacity="0.6"
      />
      
      {/* Central keystone/lock - represents trust and immutability */}
      <path
        d="M22 10L30 16L26 22L22 26L18 22L14 16L22 10Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      
      {/* Inner lock mechanism */}
      <circle 
        cx="22" 
        cy="19" 
        r="2.5" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5"
      />
      <path
        d="M22 21.5V24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Tracking nodes at cardinal points - represents audit points */}
      <circle cx="22" cy="6" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="38" cy="22" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="22" cy="38" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="6" cy="22" r="2" fill="currentColor" opacity="0.7" />
      
      {/* Connection lines - subtle, representing data links */}
      <path
        d="M24 8L36 20M24 36L36 24M20 36L8 24M20 8L8 20"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
        strokeLinecap="round"
      />
    </svg>
  );
};