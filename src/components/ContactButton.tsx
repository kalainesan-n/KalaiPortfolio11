import React from 'react';

interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = 'Contact Me',
  onClick,
  href = '#contact',
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (onClick) {
      onClick();
      return;
    }
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const buttonClasses = `contact-btn inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base cursor-pointer select-none ${className}`;

  if (href) {
    return (
      <a href={href} onClick={handleClick} className={buttonClasses}>
        {label}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={buttonClasses}>
      {label}
    </button>
  );
};
