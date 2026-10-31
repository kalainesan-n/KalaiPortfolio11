import React from 'react';
import { FadeIn } from './FadeIn';
import { EXPERTISE_DATA } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="expertise"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-0 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading: "WHAT I WORK WITH" in #0C0C0C */}
        <FadeIn delay={0} y={30}>
          <h2
            className="font-black uppercase text-center text-[#0C0C0C] tracking-tight leading-none mb-16 sm:mb-20 md:mb-28 select-none"
            style={{ fontSize: 'clamp(2.5rem, 8.5vw, 140px)' }}
          >
            What I Work With
          </h2>
        </FadeIn>

        {/* 5 Categories in a vertical list */}
        <div className="flex flex-col">
          {EXPERTISE_DATA.map((item, idx) => (
            <FadeIn
              key={item.number}
              delay={idx * 0.1}
              y={24}
              className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12 ${
                idx !== 0 ? 'border-t border-[#0C0C0C]/15' : ''
              }`}
            >
              {/* Number on the left */}
              <div
                className="font-black text-[#0C0C0C] leading-none select-none shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {item.number}
              </div>

              {/* Name + description / tech stack stacked vertically on the right */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] leading-tight"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {item.name}
                  </h3>
                  <span className="text-xs sm:text-sm font-mono text-[#0C0C0C]/60 tracking-wider">
                    — {item.skills}
                  </span>
                </div>

                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60 mt-2 sm:mt-3"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
