import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function ExperienceTimeline({ experiences }) {
  return (
    <div className="relative ml-4 sm:ml-6 space-y-10">
      {/* Animated Glowing Timeline Line */}
      <div
        className="absolute top-2 bottom-4 left-0 w-[2px] bg-gradient-to-b from-[#4F8CFF] via-[#63C5DA] to-[#4F8CFF]/20 dark:from-violet-500 dark:via-blue-500 dark:to-violet-500/30 opacity-70"
        aria-hidden="true"
      />

      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="relative pl-6 sm:pl-8 group"
        >
          {/* Animated Timeline Node */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="absolute -left-[8px] top-2 w-4 h-4 rounded-full bg-white dark:bg-[#111118] border-2 border-[#4F8CFF] dark:border-violet-500 group-hover:bg-[#4F8CFF] dark:group-hover:bg-violet-500 group-hover:shadow-[0_0_14px_#4F8CFF] dark:group-hover:shadow-[0_0_14px_#8B5CF6] transition-all duration-300 z-10"
          />

          {/* Timeline Card */}
          <div className="p-6 sm:p-7 rounded-2xl border border-[#D9E8F5] dark:border-[#1F1F2E] bg-white dark:bg-[#111118] transition-all duration-300 hover:border-[#4F8CFF]/50 dark:hover:border-violet-500/50 hover:shadow-card-light dark:hover:shadow-card-dark hover:-translate-y-1 shadow-sm dark:shadow-none">
            {/* Header: Role, Company, Metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-bold font-heading text-[#172033] dark:text-[#F5F5F7] group-hover:text-[#4F8CFF] dark:group-hover:text-violet-400 transition-colors">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-[#2563EB] dark:text-violet-400 font-medium text-sm mt-0.5">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>{exp.company}</span>
                </div>
              </div>

              {/* Badges: Duration & Mode */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-[#EFF7FF] dark:bg-[#171722] text-[#526174] dark:text-[#A1A1AA] border border-[#D9E8F5] dark:border-[#1F1F2E]">
                  <Calendar className="w-3 h-3" />
                  {exp.duration} · {exp.period}
                </span>
                <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-[#4F8CFF]/10 dark:bg-violet-500/10 text-[#2563EB] dark:text-violet-400 border border-[#4F8CFF]/20 dark:border-violet-500/20">
                  <MapPin className="w-3 h-3" />
                  {exp.mode}
                </span>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2.5 text-sm text-[#526174] dark:text-[#A1A1AA] leading-relaxed">
              {exp.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#4F8CFF] dark:text-violet-500/70 shrink-0 mt-0.5 group-hover:text-[#2563EB] dark:group-hover:text-violet-400 transition-colors" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
