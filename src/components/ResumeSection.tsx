import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section
      id="resume"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32 border-t border-[#1a1c24] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Section Heading: "MY RESUME" */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight select-none"
            style={{ fontSize: 'clamp(2.5rem, 8.5vw, 130px)' }}
          >
            My Resume
          </h2>
        </FadeIn>

        {/* Supporting text */}
        <FadeIn delay={0.15} y={20} className="mt-6 sm:mt-8">
          <p className="text-base sm:text-xl text-[#C2D1DE] font-light max-w-2xl mx-auto leading-relaxed">
            Want to know more about my experience, technical background, and
            projects? Take a look at my resume.
          </p>
        </FadeIn>

        {/* Two Functional Action Buttons */}
        <FadeIn
          delay={0.3}
          y={20}
          className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {/* DOWNLOAD RESUME */}
          <a
            href="/resume.pdf"
            download="Kalainesan_Natarajan_Resume.pdf"
            onClick={handleDownload}
            className="contact-btn inline-flex items-center gap-2.5 rounded-full text-white font-medium uppercase tracking-widest px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm md:text-base cursor-pointer select-none"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </a>

          {/* VIEW RESUME */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-btn inline-flex items-center gap-2.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm md:text-base hover:bg-[#D7E2EA]/15 transition-all cursor-pointer select-none"
          >
            <ExternalLink size={18} />
            <span>View Resume</span>
          </a>
        </FadeIn>

        {downloadSuccess && (
          <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full animate-fade-in">
            <CheckCircle2 size={14} />
            <span>Kalainesan_Natarajan_Resume.pdf download initiated!</span>
          </div>
        )}

        {/* Interactive Resume Snapshot Card */}
        <FadeIn
          delay={0.4}
          y={30}
          className="mt-14 sm:mt-18 text-left rounded-[32px] sm:rounded-[40px] bg-[#121318] border border-[#232736] p-6 sm:p-10 shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#232736]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#717E91]">
                Document Preview
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Kalainesan Natarajan — Resume Overview
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8E9BAE]">
              <FileText size={16} className="text-purple-400" />
              <span>Format: PDF / Standard A4</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#717E91]">
                Specialization
              </div>
              <div className="text-sm font-semibold text-white mt-1">
                Backend Systems, AI Agents, ML Pipelines
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#717E91]">
                Current Degree
              </div>
              <div className="text-sm font-semibold text-white mt-1">
                B.Tech CSE @ SRM University (2029)
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#717E91]">
                Primary Stack
              </div>
              <div className="text-sm font-semibold text-white mt-1">
                Node.js, PostgreSQL, Python, React, Next.js
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
