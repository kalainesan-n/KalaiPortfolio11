import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ContactButton } from './ContactButton';
import { Menu, X, FileText } from 'lucide-react';

interface HeroSectionProps {
  onOpenResumeModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[680px] w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* Subtle ambient tech background elements for balanced depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#253245]/15 via-[#18011f]/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-[15%] w-72 h-72 bg-[#7621B0]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-[#B600A8]/5 blur-[140px] rounded-full" />

        {/* Subtle geometric grid / precision lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #BBCCD7 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-20 w-full px-6 md:px-10 pt-6 md:pt-8"
      >
        <div className="hidden sm:flex items-center justify-between w-full">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Navbar */}
        <div className="flex sm:hidden items-center justify-between w-full">
          <span className="text-[#D7E2EA] font-black uppercase tracking-wider text-lg">
            K.N
          </span>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#D7E2EA] hover:opacity-70 transition-opacity"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile dropdown drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-[#121214] border-b border-[#252833] py-6 px-8 flex flex-col gap-4 shadow-2xl z-30">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-base hover:opacity-70 py-2 border-b border-[#1c1f2a]"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </motion.nav>

      {/* HERO CENTERPIECE: Massive Heading & Subtitle */}
      <div className="relative z-10 w-full flex flex-col justify-center items-center text-center my-auto px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full flex justify-center items-center"
        >
          <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.95] w-full text-center select-none py-2">
            <span className="block sm:inline sm:mr-3 text-[11vw] sm:text-[6.2vw] md:text-[6.8vw] lg:text-[7.2vw]">
              Hi, i&apos;m
            </span>
            <span className="block sm:inline text-[13vw] sm:text-[6.2vw] md:text-[6.8vw] lg:text-[7.2vw]">
              kalainesan.
            </span>
          </h1>
        </motion.div>

        {/* Hero Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-4 sm:mt-6 md:mt-8 max-w-4xl"
        >
          <p className="text-[#8E9BAE] font-medium tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase text-xs sm:text-sm md:text-base lg:text-lg">
            Building Systems. Exploring AI. Solving Real Problems.
          </p>
        </motion.div>
      </div>

      {/* BOTTOM BAR: Left Supporting Text & Right ContactButton */}
      <div className="relative z-10 flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 gap-6">
        {/* Left Supporting Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[200px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[440px]"
        >
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            I&apos;m a Computer Science undergraduate passionate about building
            intelligent applications, reliable backend systems, and practical
            software that solves real-world problems.
          </p>
        </motion.div>

        {/* Right Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="shrink-0"
        >
          <ContactButton label="Contact Me" href="#contact" />
        </motion.div>
      </div>
    </section>
  );
};
