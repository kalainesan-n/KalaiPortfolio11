import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block whitespace-pre">
      <span className="opacity-0 select-none pointer-events-none">{children}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {children}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charCounter = 0;

  return (
    <p ref={containerRef} className={`relative flex flex-wrap justify-center ${className}`}>
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mx-[0.16em]">
            {wordChars.map((char, charIdx) => {
              const start = charCounter / totalChars;
              charCounter++;
              const end = charCounter / totalChars;
              return (
                <Character key={charIdx} progress={scrollYProgress} range={[start, end]}>
                  {char}
                </Character>
              );
            })}
          </span>
        );
      })}
    </p>
  );
};
