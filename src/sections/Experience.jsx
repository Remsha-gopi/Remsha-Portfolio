import React from 'react';
import { motion } from 'framer-motion';
import ExperienceTimeline from '../components/ExperienceTimeline';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-[#EFF7FF]/50 dark:bg-[#0A0A0F]/50 transition-colors duration-250">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 04 — EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center md:text-left"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] dark:text-violet-400 block mb-2 font-mono">
            04 — EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#172033] dark:text-[#F5F5F7]">
            Experience
          </h2>
          <p className="text-sm sm:text-base text-[#526174] dark:text-[#A1A1AA] mt-2 max-w-2xl">
            Practical workplace experience across artificial intelligence, web application validation, operational workflows, and cybersecurity.
          </p>
        </motion.div>

        {/* Timeline Component */}
        <ExperienceTimeline experiences={experiences} />

      </div>
    </section>
  );
}
