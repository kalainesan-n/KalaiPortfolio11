import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, FileText, Video, Play } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { ProjectVisuals } from './ProjectVisuals';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-20 sm:top-24 md:top-28 w-full flex items-center justify-center pb-12 sm:pb-16"
      style={{
        top: `calc(${index * 24}px + clamp(4.5rem, 8vw, 7rem))`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[32px] sm:rounded-[44px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl shadow-black/80 flex flex-col justify-between"
      >
        {/* Top Row: Number, category label, project name, and action buttons */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#262c3a]">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 80px)' }}
            >
              {project.number}
            </span>
            <div>
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#8E9BAE] block">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold uppercase text-white tracking-tight mt-0.5">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Action Buttons: VIEW SOURCE, LIVE DEMO, API DOCS, DEMO VIDEO */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-btn inline-flex items-center gap-1.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-4 sm:px-6 py-2 text-xs sm:text-sm hover:bg-[#D7E2EA]/15 transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink size={13} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-btn inline-flex items-center gap-1.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-4 sm:px-6 py-2 text-xs sm:text-sm hover:bg-[#D7E2EA]/15 transition-all"
              >
                <Github size={14} />
                <span>View Source</span>
              </a>
            )}

            {project.apiDocsUrl && (
              <a
                href={project.apiDocsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-btn inline-flex items-center gap-1.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-4 sm:px-6 py-2 text-xs sm:text-sm hover:bg-[#D7E2EA]/15 transition-all"
              >
                <FileText size={14} />
                <span>API Docs</span>
              </a>
            )}

            {project.demoVideoUrl && (
              <a
                href={project.demoVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-btn inline-flex items-center gap-1.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-4 sm:px-6 py-2 text-xs sm:text-sm hover:bg-[#D7E2EA]/15 transition-all"
              >
                <Video size={14} />
                <span>Demo Video</span>
              </a>
            )}
          </div>
        </div>

        {/* Middle Project Narrative & Highlights */}
        <div className="py-4">
          <p className="text-xs sm:text-sm md:text-base text-[#C2D1DE] font-light leading-relaxed max-w-4xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono text-[#8E9BAE] bg-[#161822] border border-[#272b3a] px-2.5 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Row: Two-Column Image & Architecture Grid */}
        <div className="pt-2">
          <ProjectVisuals project={project} />
        </div>
      </motion.div>
    </div>
  );
};
