import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { educationList } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-[#EFF7FF]/50 dark:bg-[#0A0A0F]/50 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 02 — EDUCATION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] dark:text-violet-400 block mb-2 font-mono">
            02 — EDUCATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#172033] dark:text-[#F5F5F7]">
            Education
          </h2>
        </motion.div>

        {/* Clean Academic Cards Grid with Staggered Framer Motion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {educationList.map((edu) => (
            <motion.div
              key={edu.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className={`group relative rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-light dark:hover:shadow-card-dark ${
                edu.isCurrent
                  ? 'border-[#4F8CFF]/50 dark:border-violet-500/50 bg-white dark:bg-[#111118] shadow-card-light dark:shadow-card-dark hover:border-[#4F8CFF] dark:hover:border-violet-400'
                  : 'border-[#D9E8F5] dark:border-[#1F1F2E] bg-white dark:bg-[#111118] hover:border-[#4F8CFF]/40 dark:hover:border-violet-500/40 shadow-sm dark:shadow-none'
              }`}
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="p-2.5 rounded-xl bg-[#4F8CFF]/10 dark:bg-violet-500/10 text-[#2563EB] dark:text-violet-400 group-hover:bg-[#4F8CFF] dark:group-hover:bg-violet-500 group-hover:text-white transition-colors duration-300">
                    <GraduationCap className="w-5 h-5" />
                  </span>
                  {edu.isCurrent && (
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#4F8CFF]/10 dark:bg-violet-500/10 text-[#2563EB] dark:text-violet-400 border border-[#4F8CFF]/20 dark:border-violet-500/20">
                      Pursuing
                    </span>
                  )}
                </div>

                {/* Degree / Grade */}
                <h3 className="text-lg sm:text-xl font-bold font-heading text-[#172033] dark:text-[#F5F5F7] mb-2 group-hover:text-[#4F8CFF] dark:group-hover:text-violet-400 transition-colors">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <p className="text-sm text-[#526174] dark:text-[#A1A1AA] mb-4 leading-relaxed">
                  {edu.institution}
                </p>
              </div>

              {/* Bottom Metadata: Duration & Score */}
              <div className="pt-4 border-t border-[#D9E8F5] dark:border-[#1F1F2E] flex items-center justify-between text-xs sm:text-sm">
                <span className="text-[#526174] dark:text-[#A1A1AA] font-mono">
                  {edu.duration}
                </span>

                <span className="font-semibold text-[#2563EB] dark:text-violet-400 font-mono bg-[#4F8CFF]/10 dark:bg-violet-500/10 px-2.5 py-1 rounded-md border border-[#4F8CFF]/20 dark:border-violet-500/20 group-hover:border-[#4F8CFF]/40 dark:group-hover:border-violet-500/40 transition-colors">
                  {edu.score}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
