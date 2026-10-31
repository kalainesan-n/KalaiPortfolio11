import React from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA] overflow-x-clip selection:bg-purple-900 selection:text-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section ("A Little About Me") */}
      <AboutSection />

      {/* 4. Services / Expertise Section ("What I Work With") */}
      <ServicesSection />

      {/* 5. Projects Section ("Project" with 5 Sticky-Stacking Cards) */}
      <ProjectsSection />

      {/* 6. Education & Technical Activities ("Beyond The Code") */}
      <EducationSection />

      {/* 7. Resume Section ("My Resume") */}
      <ResumeSection />

      {/* 8. Contact Section ("Let's Build Something.") */}
      <ContactSection />

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
