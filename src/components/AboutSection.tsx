import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { Box, Layers, Globe, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImgError = (key: string) => {
    setImgErrors((prev) => ({ ...prev, [key]: true }));
  };

  const aboutParagraphPast =
    'My journey with technology began during my years studying in Dubai, where I developed an interest in computers and problem-solving. Over time, that curiosity grew into an interest in programming, software development, and understanding how applications work behind the scenes.';

  const aboutParagraphPresent =
    "I'm currently pursuing a B.Tech in Computer Science and Engineering at SRM Institute of Science and Technology. I'm actively building projects across backend engineering, full-stack development, AI agents, and machine learning. From designing a PostgreSQL-powered synchronization engine to developing multi-agent AI systems and real-time web applications, I enjoy working on problems that require more than just writing code. I like understanding the architecture, handling edge cases, and building things that actually work.";

  const aboutParagraphFuture =
    "I'm working towards becoming a strong software engineer with a particular interest in backend systems and applied AI. I want to keep exploring challenging engineering problems, contribute to meaningful products, collaborate with ambitious teams, and turn ideas into real-world applications.";

  const fullAboutText = `${aboutParagraphPast} ${aboutParagraphPresent} ${aboutParagraphFuture}`;

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-24 sm:py-32 bg-[#0C0C0C] overflow-hidden"
    >
      {/* 4 Decorative 3D Images in Corners with smooth FadeIn and fallback resilience */}

      {/* Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-0">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          {!imgErrors['moon'] ? (
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
              alt="Decorative 3D Celestial Object"
              referrerPolicy="no-referrer"
              onError={() => handleImgError('moon')}
              className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] filter brightness-90 hover:brightness-110 transition-all duration-300"
            />
          ) : (
            <div className="w-[120px] sm:w-[160px] md:w-[210px] h-[120px] sm:h-[160px] md:h-[210px] rounded-full bg-gradient-to-tr from-[#1b2230] to-[#3a4760] border border-[#4b5b7c]/40 flex items-center justify-center text-[#BBCCD7] shadow-2xl">
              <Globe size={48} className="opacity-70" />
            </div>
          )}
        </FadeIn>
      </div>

      {/* Top-right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-0">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          {!imgErrors['lego'] ? (
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
              alt="Decorative 3D Architecture Node"
              referrerPolicy="no-referrer"
              onError={() => handleImgError('lego')}
              className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] filter brightness-90 hover:brightness-110 transition-all duration-300"
            />
          ) : (
            <div className="w-[120px] sm:w-[160px] md:w-[210px] h-[120px] sm:h-[160px] md:h-[210px] rounded-3xl bg-gradient-to-tr from-[#251833] to-[#4c2d6e] border border-[#6f3d99]/40 flex items-center justify-center text-[#BBCCD7] shadow-2xl">
              <Box size={48} className="opacity-70" />
            </div>
          )}
        </FadeIn>
      </div>

      {/* Bottom-left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-0">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          {!imgErrors['p59'] ? (
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
              alt="Decorative 3D Object"
              referrerPolicy="no-referrer"
              onError={() => handleImgError('p59')}
              className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] filter brightness-90 hover:brightness-110 transition-all duration-300"
            />
          ) : (
            <div className="w-[100px] sm:w-[140px] md:w-[180px] h-[100px] sm:h-[140px] md:h-[180px] rounded-3xl bg-gradient-to-tr from-[#142621] to-[#254d42] border border-[#356e5f]/40 flex items-center justify-center text-[#BBCCD7] shadow-2xl">
              <Layers size={42} className="opacity-70" />
            </div>
          )}
        </FadeIn>
      </div>

      {/* Bottom-right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-0">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          {!imgErrors['group134'] ? (
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
              alt="Decorative 3D Geometric Group"
              referrerPolicy="no-referrer"
              onError={() => handleImgError('group134')}
              className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] filter brightness-90 hover:brightness-110 transition-all duration-300"
            />
          ) : (
            <div className="w-[130px] sm:w-[170px] md:w-[220px] h-[130px] sm:h-[170px] md:h-[220px] rounded-3xl bg-gradient-to-tr from-[#2b1e15] to-[#593922] border border-[#7f512e]/40 flex items-center justify-center text-[#BBCCD7] shadow-2xl">
              <Sparkles size={46} className="opacity-70" />
            </div>
          )}
        </FadeIn>
      </div>

      {/* Central Content Container */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
        {/* Heading: "A LITTLE ABOUT ME" using .hero-heading gradient text */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: 'clamp(2.5rem, 8.5vw, 130px)' }}
          >
            A Little About Me
          </h2>
        </FadeIn>

        {/* Narrative Section: Past -> Present -> Future */}
        <div className="mt-10 sm:mt-14 md:mt-16 w-full max-w-[760px]">
          {/* Character-by-character animated text reveal */}
          <AnimatedText
            text={fullAboutText}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed"
          />

          {/* Ending Anthem */}
          <FadeIn delay={0.2} y={20} className="mt-8 sm:mt-10">
            <p className="text-white font-black tracking-[0.25em] text-sm sm:text-base md:text-lg uppercase">
              Still Learning. Always Building.
            </p>
          </FadeIn>
        </div>

        {/* Gap between text block and button */}
        <FadeIn delay={0.3} y={30} className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton label="Contact Me" href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
};
