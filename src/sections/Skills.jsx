import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SkillPill from '../components/SkillPill';
import { skillCategories } from '../data/skills';

// Stagger animation container for pills
const pillsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.025,
      delayChildren: 0.04
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.12,
      ease: "easeInOut"
    }
  }
};

export default function Skills({ isDark }) {
  // Default to first category: Agentic AI
  const [activeCategoryId, setActiveCategoryId] = useState(skillCategories[0].id);

  const activeCategory = skillCategories.find(c => c.id === activeCategoryId) || skillCategories[0];

  return (
    <section id="skills" className="py-24 sm:py-28 relative overflow-hidden transition-colors duration-250">
      
      {/* 8. Subtle Technical Background Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Faint technical grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(217,232,245,0.45)_1px,transparent_1px),linear-gradient(to_bottom,rgba(217,232,245,0.45)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f2e18_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e18_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_65%,transparent_100%)]" />

        {/* Soft centered ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[360px] bg-[#4F8CFF]/6 dark:bg-violet-600/10 rounded-full blur-[110px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1 & 9. Section Header with Subtle Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] dark:text-violet-400 block mb-2.5 font-mono">
            03 — SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#172033] dark:text-[#F5F5F7] tracking-tight mb-3.5">
            SKILLS
          </h2>
          <p className="text-base sm:text-lg text-[#526174] dark:text-[#A1A1AA] leading-relaxed">
            Technologies, concepts, and tools I've worked with while building real projects.
          </p>
        </motion.div>

        {/* 2 & 11 & 12. Category Tabs (Horizontally scrollable on mobile, centered on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-8 sm:mb-10"
        >
          <div
            role="tablist"
            aria-label="Skill Categories"
            className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar scroll-smooth gap-2 sm:gap-2.5 pb-2 px-1 -mx-1"
          >
            {skillCategories.map((category, index) => {
              const isSelected = activeCategoryId === category.id;
              const Icon = category.icon;

              const handleKeyDown = (e) => {
                if (e.key === 'ArrowRight') {
                  e.preventDefault();
                  const nextIndex = (index + 1) % skillCategories.length;
                  setActiveCategoryId(skillCategories[nextIndex].id);
                  document.getElementById(`tab-${skillCategories[nextIndex].id}`)?.focus();
                } else if (e.key === 'ArrowLeft') {
                  e.preventDefault();
                  const prevIndex = (index - 1 + skillCategories.length) % skillCategories.length;
                  setActiveCategoryId(skillCategories[prevIndex].id);
                  document.getElementById(`tab-${skillCategories[prevIndex].id}`)?.focus();
                }
              };

              return (
                <button
                  key={category.id}
                  role="tab"
                  id={`tab-${category.id}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${category.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setActiveCategoryId(category.id)}
                  onKeyDown={handleKeyDown}
                  className={`group relative flex items-center gap-2 px-3.5 py-2 sm:px-4.5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] dark:focus:ring-violet-500 shrink-0 ${
                    isSelected
                      ? 'text-[#2563EB] dark:text-violet-300 font-semibold shadow-sm'
                      : 'text-[#526174] dark:text-[#A1A1AA] hover:text-[#172033] dark:hover:text-[#F5F5F7] bg-white/70 dark:bg-[#111118]/50 border border-[#D9E8F5] dark:border-[#1F1F2E] hover:border-[#4F8CFF]/30 dark:hover:border-violet-500/30 hover:bg-[#EFF7FF]/70 dark:hover:bg-[#171722]'
                  }`}
                >
                  {/* Sliding Active Pill Background via Framer Motion */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeSkillCategoryTab"
                      className="absolute inset-0 rounded-xl bg-[#4F8CFF]/12 dark:bg-violet-500/20 border border-[#4F8CFF]/35 dark:border-violet-500/40 shadow-[0_2px_12px_rgba(79,140,255,0.18)] dark:shadow-[0_0_18px_rgba(139,92,246,0.22)] -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <Icon className={`w-4 h-4 shrink-0 transition-colors duration-200 ${
                    isSelected ? 'text-[#2563EB] dark:text-violet-300' : 'opacity-70 group-hover:opacity-100'
                  }`} />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 4 & 5. Technical Skill Chips Container with Smooth AnimatePresence Switching */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div
            id={`panel-${activeCategory.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory.id}`}
            className="min-h-[190px] sm:min-h-[220px] flex items-center justify-center p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-[#D9E8F5]/80 dark:border-[#1F1F2E]/80 bg-white/40 dark:bg-[#111118]/40 backdrop-blur-sm shadow-sm dark:shadow-none"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                variants={pillsContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-3xl mx-auto"
              >
                {activeCategory.skills.map((skill) => (
                  <SkillPill key={skill} skill={skill} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* 10. Bottom Understated Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:mt-10 text-center"
        >
          <p className="text-xs sm:text-sm font-mono tracking-wider uppercase text-[#526174] dark:text-[#A1A1AA]">
            Building across AI · Data · Software · Web
          </p>
        </motion.div>

      </div>
    </section>
  );
}
