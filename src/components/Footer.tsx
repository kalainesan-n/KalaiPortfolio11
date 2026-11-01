import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#080809] border-t border-[#181b24] px-6 sm:px-10 py-12 text-[#8E9BAE]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Name */}
        <div className="text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white select-none">
            Kalainesan Natarajan
          </h3>
        </div>

        {/* Social / Direct Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/kalainesan-n"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A5B4C7] hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/kalainesan-natarajan-748151389/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A5B4C7] hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:kalainesannatarajan@gmail.com"
            className="text-[#A5B4C7] hover:text-white transition-colors"
            aria-label="Email Kalainesan"
          >
            <Mail size={20} />
          </a>

          {/* Scroll to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="ml-2 p-2 rounded-full bg-[#161822] hover:bg-[#232838] text-white transition-colors cursor-pointer"
            aria-label="Scroll to top"
            title="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#141620] flex flex-col sm:flex-row items-center justify-between text-xs text-[#525E70] font-mono">
        <div>© {currentYear} Kalainesan Natarajan. All rights reserved.</div>
        <div className="mt-2 sm:mt-0">SRM IST · Kattankulathur, Chennai</div>
      </div>
    </footer>
  );
};
