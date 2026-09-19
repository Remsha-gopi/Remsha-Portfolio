import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#4F8CFF] via-[#63C5DA] to-[#4F8CFF] dark:from-violet-600 dark:via-blue-500 dark:to-violet-500 origin-left z-50 pointer-events-none shadow-[0_0_8px_rgba(79,140,255,0.4)] dark:shadow-[0_0_8px_rgba(139,92,246,0.6)] transition-colors duration-250"
      aria-hidden="true"
    />
  );
}
