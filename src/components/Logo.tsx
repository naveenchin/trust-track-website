import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 40 }) => {
  return (
    <img
      src="/logo_1024.png"
      alt="TrustTrack Logo"
      width={size}
      height={size}
      className={className}
    />
  );
};