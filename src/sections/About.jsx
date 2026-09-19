import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Compass, BookOpen } from 'lucide-react';

const pillars = [
  {
    step: "01 — BUILD",
    title: "BUILD",
    icon: Layers,
    items: ["AI Systems", "Web Applications", "Software Projects"]
  },
  {
    step: "02 — EXPLORE",
    title: "EXPLORE",
    icon: Compass,
    items: ["AI & ML", "Data & Analytics", "AI Agents"]
  },
  {
    step: "03 — LEARN",
    title: "LEARN",
    icon: BookOpen,
    items: ["Internships", "Hackathons", "Real Projects"]
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden transition-colors duration-250">
      {/* Subtle background ambient glow with violet and cyan */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#8B5CF6]/5 dark:bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#22D3EE]/5 dark:bg-[#22D3EE]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Authentic Concise Personal Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Section Header */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B5CF6] dark:text-violet-400 block mb-2 font-mono">
                01 — ABOUT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#18181B] dark:text-[#F5F5F7] tracking-tight">
                About Me
              </h2>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA] leading-relaxed">
              <p>
                I'm Remsha, an Information Technology student passionate about AI, data, and software development. I enjoy turning ideas and real-world problems into practical technology.
              </p>
              <p>
                I've explored AI/ML, AI agents, data analytics, web development, and software projects through internships, hackathons, and hands-on building. I'm always learning, experimenting, and looking for better ways to solve problems.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Three Minimal Visual Cards (BUILD, EXPLORE, LEARN) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="lg:col-span-5 space-y-4 pt-2"
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.step}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  className="group rounded-2xl border border-[#E4E4E7] dark:border-[#1F1F2E] bg-white dark:bg-[#111118] p-6 shadow-sm dark:shadow-none hover:border-[#22D3EE]/50 dark:hover:border-violet-500/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-xs font-mono font-semibold tracking-widest text-[#8B5CF6] dark:text-violet-400 uppercase">
                      {pillar.step}
                    </span>
                    <div className="p-2 rounded-xl bg-violet-500/10 dark:bg-violet-500/10 text-[#8B5CF6] dark:text-violet-400 group-hover:bg-[#22D3EE]/10 group-hover:text-[#0891B2] dark:group-hover:text-[#22D3EE] transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {pillar.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#18181B] dark:text-[#F5F5F7]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] dark:bg-violet-400 group-hover:bg-[#22D3EE] transition-colors duration-200 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
