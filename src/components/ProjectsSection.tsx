import React from 'react';
import { FadeIn } from './FadeIn';
import { ProjectCard } from './ProjectCard';
import { PROJECTS_DATA } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-6 md:px-10 pt-24 sm:pt-32 pb-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading: "Project" (singular) using .hero-heading gradient */}
        <FadeIn delay={0} y={40} className="mb-14 sm:mb-20 text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight select-none"
            style={{ fontSize: 'clamp(2.5rem, 8.5vw, 140px)' }}
          >
            Project
          </h2>
          <p className="mt-4 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#717E91]">
            Featured Engineering Systems &amp; Deployed Architectures
          </p>
        </FadeIn>

        {/* 5 Sticky-Stacking Project Cards */}
        <div className="relative w-full flex flex-col gap-8 sm:gap-12">
          {PROJECTS_DATA.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              totalCards={PROJECTS_DATA.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
