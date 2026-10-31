import React from 'react';
import { FadeIn } from './FadeIn';
import { EDUCATION_DATA, TECHNICAL_ACTIVITIES } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, Award, GitPullRequest } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32 border-t border-[#1a1c24]">
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading: "BEYOND THE CODE" */}
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight select-none"
            style={{ fontSize: 'clamp(2.5rem, 8.5vw, 130px)' }}
          >
            Beyond The Code
          </h2>
          <p className="mt-4 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#717E91]">
            Academic Foundation &amp; Technical Recruitment Experiences
          </p>
        </FadeIn>

        {/* Education & Recruitment Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Column: Education */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#252a38]">
              <span className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                <GraduationCap size={22} />
              </span>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {EDUCATION_DATA.map((edu, idx) => (
                <FadeIn
                  key={edu.institution}
                  delay={idx * 0.15}
                  y={20}
                  className="p-6 rounded-[28px] sm:rounded-[36px] bg-[#121318] border border-[#232736] hover:border-[#384159] transition-colors"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-lg sm:text-xl font-bold text-white">
                      {edu.institution}
                    </h4>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#1e2333] text-[#A5B4C7]">
                      {edu.timeline}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-cyan-300 mt-2">
                    {edu.degree}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-[#717E91] font-mono mt-2">
                    <MapPin size={13} />
                    <span>{edu.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#8E9BAE] font-light leading-relaxed mt-3 pt-3 border-t border-[#1d2230]">
                    {edu.details}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right Column: Relevant Technical Work & Recruitment Experiences */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#252a38]">
              <span className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                <GitPullRequest size={22} />
              </span>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
                Technical Experiences
              </h3>
            </div>

            <div className="space-y-4">
              {TECHNICAL_ACTIVITIES.map((act, idx) => (
                <FadeIn
                  key={act.organization}
                  delay={idx * 0.1}
                  y={20}
                  className="p-5 sm:p-6 rounded-[28px] bg-[#121318] border border-[#232736] hover:border-[#384159] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base sm:text-lg font-bold text-white">
                      {act.organization}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono uppercase px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {act.tag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-emerald-400 mt-1">
                    {act.project}
                  </p>

                  <p className="text-xs sm:text-sm text-[#8E9BAE] font-light leading-relaxed mt-2">
                    {act.description}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
