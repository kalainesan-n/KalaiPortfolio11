import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Mail, Phone, Github, Linkedin, Copy, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => {
      setCopiedItem(null);
    }, 2500);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32 border-t border-[#1a1c24] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Section Heading: "LET'S BUILD SOMETHING." */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight select-none"
            style={{ fontSize: 'clamp(2.5rem, 8.5vw, 130px)' }}
          >
            Let&apos;s Build Something.
          </h2>
        </FadeIn>

        {/* Supporting text */}
        <FadeIn delay={0.15} y={20} className="mt-6 sm:mt-8">
          <p className="text-base sm:text-xl text-[#C2D1DE] font-light max-w-2xl mx-auto leading-relaxed">
            I&apos;m always interested in connecting with people building interesting
            things, exploring opportunities, and collaborating on meaningful
            technical projects.
          </p>
        </FadeIn>

        {/* Primary Contact CTA Buttons: EMAIL ME, GITHUB, LINKEDIN */}
        <FadeIn
          delay={0.3}
          y={20}
          className="mt-10 sm:mt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {/* EMAIL ME */}
          <a
            href="mailto:kalainesannatarajan@gmail.com"
            className="contact-btn inline-flex items-center gap-2.5 rounded-full text-white font-medium uppercase tracking-widest px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm md:text-base cursor-pointer select-none"
          >
            <Mail size={18} />
            <span>Email Me</span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/kalainesan-n"
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-btn inline-flex items-center gap-2.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm md:text-base hover:bg-[#D7E2EA]/15 transition-all cursor-pointer select-none"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/kalainesan-natarajan-748151389/"
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-btn inline-flex items-center gap-2.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm md:text-base hover:bg-[#D7E2EA]/15 transition-all cursor-pointer select-none"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </FadeIn>

        {/* Direct Contact Cards with Copy Affordance */}
        <FadeIn
          delay={0.4}
          y={30}
          className="mt-14 sm:mt-18 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left"
        >
          {/* Email Card */}
          <div className="p-5 rounded-[24px] bg-[#121318] border border-[#232736] flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                <Mail size={18} />
              </span>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#717E91] block">
                  Direct Email
                </span>
                <span className="text-sm font-semibold text-white">
                  kalainesannatarajan@gmail.com
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() =>
                copyToClipboard('kalainesannatarajan@gmail.com', 'email')
              }
              className="p-2 rounded-lg bg-[#1e2333] hover:bg-[#2c3349] text-[#A5B4C7] hover:text-white transition-colors cursor-pointer"
              title="Copy Email"
            >
              {copiedItem === 'email' ? (
                <CheckCircle2 size={16} className="text-emerald-400" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>

          {/* Phone Card */}
          <div className="p-5 rounded-[24px] bg-[#121318] border border-[#232736] flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Phone size={18} />
              </span>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#717E91] block">
                  Mobile / WhatsApp
                </span>
                <span className="text-sm font-semibold text-white">
                  +91 7530075404
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => copyToClipboard('+917530075404', 'phone')}
              className="p-2 rounded-lg bg-[#1e2333] hover:bg-[#2c3349] text-[#A5B4C7] hover:text-white transition-colors cursor-pointer"
              title="Copy Phone Number"
            >
              {copiedItem === 'phone' ? (
                <CheckCircle2 size={16} className="text-emerald-400" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
