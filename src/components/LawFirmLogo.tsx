import React from 'react';

interface LawFirmLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LawFirmLogo: React.FC<LawFirmLogoProps> = ({ 
  className = '',
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg`}>
        <svg 
          className="w-2/3 h-2/3 text-white" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          {/* Justice Scale Icon */}
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
          <path d="M7 12L9 14L7 16L5 14L7 12Z" />
          <path d="M17 12L19 14L17 16L15 14L17 12Z" />
          <path d="M12 18V22" />
          <path d="M9 22H15" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`font-bold text-slate-800 leading-tight ${
          size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-xl' : 'text-lg'
        }`}>
          Rosenthal Law Group
        </span>
        <span className={`text-blue-600 font-semibold tracking-wide uppercase ${
          size === 'lg' ? 'text-sm' : 'text-xs'
        }`}>
          Divorce for Men
        </span>
      </div>
    </div>
  );
};

export default LawFirmLogo;