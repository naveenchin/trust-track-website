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
      {/* Outer circular tracking line - represents supply chain flow */}
      <circle
        cx="22"
        cy="22"
        r="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="8 4"
        opacity="0.4"
      />
      
      {/* Inner circular tracking line - represents data circularity */}
      <circle
        cx="22"
        cy="22"
        r="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 2"
        opacity="0.6"
      />
      
      {/* Central keystone/lock - represents trust and immutability */}
      <path
        d="M22 8L28 12V32L22 36L16 32V12L22 8Z"
        fill="currentColor"
        opacity="0.8"
      />
      
      {/* Lock mechanism inside keystone */}
      <rect
        x="19"
        y="18"
        width="6"
        height="8"
        rx="1"
        fill="white"
        opacity="0.9"
      />
      
      {/* Lock shackle */}
      <path
        d="M20 18V16C20 14.9 20.9 14 22 14C23.1 14 24 14.9 24 16V18"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        opacity="0.9"
      />
      
      {/* Tracking nodes at key positions - audit points */}
      <circle cx="22" cy="4" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="35" cy="15" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="35" cy="29" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="22" cy="40" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="9" cy="29" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="9" cy="15" r="2" fill="currentColor" opacity="0.7" />
      
      {/* Connection lines between tracking nodes - data relationships */}
      <path
        d="M22 6L33 17M33 17L33 27M33 27L22 38M22 38L11 27M11 27L11 17M11 17L22 6"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.2"
      />
    </svg>
  );
};