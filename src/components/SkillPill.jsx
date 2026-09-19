import React from 'react';
import { motion } from 'framer-motion';

export const pillVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.12 }
  }
};

export default function SkillPill({ skill }) {
  return (
    <motion.div
      variants={pillVariants}
      whileHover={{ y: -2, transition: { duration: 0.15 } }}
      className="group relative flex items-center gap-2.5 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium tracking-wide bg-white/90 dark:bg-[#111118]/85 text-[#172033] dark:text-[#F5F5F7] border border-[#D9E8F5] dark:border-[#1F1F2E] shadow-sm dark:shadow-none hover:border-[#4F8CFF]/60 dark:hover:border-violet-500/50 hover:bg-[#EFF7FF] dark:hover:bg-[#171722] hover:shadow-[0_4px_16px_rgba(79,140,255,0.12)] dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.16)] transition-all duration-200 cursor-default select-none backdrop-blur-sm"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF]/60 dark:bg-violet-400/60 group-hover:bg-[#2563EB] dark:group-hover:bg-violet-400 group-hover:scale-125 transition-all duration-200 shrink-0" />
      <span className="whitespace-nowrap font-medium">{skill}</span>
    </motion.div>
  );
}
