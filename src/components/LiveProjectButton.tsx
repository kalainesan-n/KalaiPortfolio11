import React from 'react';
import { ExternalLink } from 'lucide-react';

interface LiveProjectButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  showIcon?: boolean;
  className?: string;
  target?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  label = 'Live Project',
  href,
  onClick,
  showIcon = false,
  className = '',
  target = '_blank',
}) => {
  const commonClasses = `ghost-btn inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        onClick={onClick}
        className={commonClasses}
      >
        <span>{label}</span>
        {showIcon && <ExternalLink size={14} className="shrink-0" />}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={commonClasses}>
      <span>{label}</span>
      {showIcon && <ExternalLink size={14} className="shrink-0" />}
    </button>
  );
};
