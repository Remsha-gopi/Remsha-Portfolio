import React from 'react';
import { motion } from 'framer-motion';
import { Bot, LineChart, PieChart, Terminal, Globe, Brain } from 'lucide-react';

const identityAreas = [
  { label: 'AI & AGENTS', icon: Bot },
  { label: 'DATA SCIENCE', icon: LineChart },
  { label: 'DATA ANALYTICS', icon: PieChart },
  { label: 'SOFTWARE', icon: Terminal },
  { label: 'WEB DEVELOPMENT', icon: Globe },
  { label: 'MACHINE LEARNING', icon: Brain },
];

export default function TechnologyStrip() {
  return (
    <section className="py-8 border-y border-[#D9E8F5] dark:border-[#1F1F2E]/70 bg-white/60 dark:bg-[#111118]/40 backdrop-blur-md relative overflow-hidden transition-colors duration-250">
      {/* Very subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-8 bg-[#4F8CFF]/5 dark:bg-violet-600/5 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 }
            }
          }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          {identityAreas.map((area) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.label}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                }}
                className="group flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-xl border border-[#D9E8F5] dark:border-[#1F1F2E] bg-white dark:bg-[#111118] transition-all duration-300 hover:border-[#4F8CFF]/50 dark:hover:border-violet-500/50 hover:bg-[#EFF7FF] dark:hover:bg-[#171722] hover:-translate-y-1 hover:shadow-card-light dark:hover:shadow-card-dark text-center cursor-default shadow-sm dark:shadow-none"
              >
                <div className="p-2 rounded-lg bg-[#4F8CFF]/10 dark:bg-violet-500/10 text-[#2563EB] dark:text-violet-400 group-hover:bg-[#4F8CFF] dark:group-hover:bg-violet-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 mb-2">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold font-heading tracking-wider text-[#172033] dark:text-[#F5F5F7] group-hover:text-[#4F8CFF] dark:group-hover:text-violet-400 transition-colors">
                  {area.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
