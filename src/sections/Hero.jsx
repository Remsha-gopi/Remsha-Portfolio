import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, GraduationCap, Linkedin, Github, Mail } from 'lucide-react';
import Button from '../components/Button';

export default function Hero({ isDark }) {
  // Primary Violet with Electric Cyan secondary accent
  const strokeColor1 = "#8B5CF6";
  const strokeColor2 = isDark ? "#22D3EE" : "#0891B2";

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden transition-colors duration-250"
    >
      {/* Subtle Animated Background: Abstract AI / Data Visualization */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Subtle grid pattern - adaptive to theme */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(228,228,231,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.6)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f2e22_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e22_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_45%,#000_70%,transparent_100%)]" />

        {/* Floating Radial Ambient Glows with slow breathing motion */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: isDark ? [0.12, 0.22, 0.12] : [0.08, 0.14, 0.08],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[420px] h-[420px] bg-violet-600/15 dark:bg-violet-600/15 rounded-full blur-[90px] pointer-events-none transition-colors duration-500"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: isDark ? [0.1, 0.18, 0.1] : [0.06, 0.12, 0.06],
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 right-1/4 translate-x-1/2 w-[420px] h-[420px] bg-[#22D3EE]/12 dark:bg-[#22D3EE]/15 rounded-full blur-[90px] pointer-events-none transition-colors duration-500"
        />

        {/* Animated Connected Nodes / Neural Graph SVG */}
        <motion.svg
          animate={{
            y: [0, -12, 0],
            rotate: [0, 0.8, 0]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] opacity-25 dark:opacity-25"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Connecting Lines */}
          <line x1="150" y1="120" x2="320" y2="240" stroke={strokeColor1} strokeWidth="1" strokeDasharray="3 3" />
          <line x1="320" y1="240" x2="480" y2="180" stroke={strokeColor2} strokeWidth="1" strokeDasharray="3 3" />
          <line x1="320" y1="240" x2="380" y2="420" stroke={strokeColor1} strokeWidth="1" strokeDasharray="3 3" />
          <line x1="480" y1="180" x2="650" y2="300" stroke={strokeColor2} strokeWidth="1" strokeDasharray="3 3" />
          <line x1="380" y1="420" x2="550" y2="460" stroke={strokeColor1} strokeWidth="1" strokeDasharray="3 3" />
          <line x1="550" y1="460" x2="650" y2="300" stroke={strokeColor2} strokeWidth="1" strokeDasharray="3 3" />
          <line x1="220" y1="360" x2="380" y2="420" stroke={strokeColor1} strokeWidth="1" strokeDasharray="3 3" />
          <line x1="150" y1="120" x2="220" y2="360" stroke={strokeColor1} strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />

          {/* Animated Pulsing Graph Nodes */}
          <motion.circle
            cx="150" cy="120" r="3.5" fill={strokeColor1}
            animate={{ r: [3, 4.5, 3], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="320" cy="240" r="4.5" fill={strokeColor2}
            animate={{ r: [4, 6, 4], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.circle
            cx="480" cy="180" r="3.5" fill={strokeColor1}
            animate={{ r: [3.5, 5, 3.5], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.circle
            cx="650" cy="300" r="4.5" fill={strokeColor2}
            animate={{ r: [4, 5.5, 4], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.circle
            cx="380" cy="420" r="3.5" fill={strokeColor1}
            animate={{ r: [3, 4.5, 3], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          <motion.circle
            cx="550" cy="460" r="3.5" fill={strokeColor2}
            animate={{ r: [3, 4.5, 3], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
          />
          <motion.circle
            cx="220" cy="360" r="3" fill={strokeColor1}
            animate={{ r: [2.5, 4, 2.5], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Information, Positioning & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            {/* Status / Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium bg-white/90 dark:bg-[#111118]/80 text-[#18181B] dark:text-[#CBD5E1] border border-[#E4E4E7] dark:border-[#1F1F2E] shadow-sm hover:border-[#22D3EE]/40 dark:hover:border-violet-500/30 hover:bg-white dark:hover:bg-[#151520] transition-all duration-200 cursor-default select-none backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/50 animate-ping" style={{ animationDuration: '3s' }} />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.65)]" />
              </span>
              <span className="tracking-normal">Available for Opportunities & Internships</span>
            </motion.div>

            {/* 1. Primary Name & 2. Supporting Headline */}
            <div className="space-y-3 sm:space-y-4">
              {/* 1. REMSHA GOPI - Dominant Visual Element with Violet to Cyan Gradient */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[42px] min-[400px]:text-[46px] sm:text-[58px] md:text-[66px] lg:text-[76px] xl:text-[82px] font-extrabold font-heading tracking-tight leading-[1.03] drop-shadow-[0_2px_16px_rgba(139,92,246,0.1)] dark:drop-shadow-[0_2px_20px_rgba(34,211,238,0.15)]"
              >
                <span className="text-[#18181B] dark:text-[#F8FAFC] inline-block">REMSHA</span>{' '}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#0891B2] dark:from-[#8B5CF6] dark:to-[#22D3EE] bg-clip-text text-transparent inline-block">
                  GOPI
                </span>
              </motion.h1>

              {/* 2. Supporting Headline - Subordinate & Refined */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-xl min-[400px]:text-[22px] sm:text-2xl md:text-[26px] lg:text-[30px] xl:text-[32px] font-medium sm:font-semibold font-heading tracking-tight text-[#52525B] dark:text-[#CBD5E1] leading-snug"
              >
                I Build. I Experiment. I Solve.
              </motion.h2>
            </div>

            {/* 3. Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl font-medium text-[#8B5CF6] dark:text-violet-400 tracking-tight"
            >
              Information Technology Student exploring AI, data, and software development.
            </motion.p>

            {/* 4. Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-[#52525B] dark:text-[#A1A1AA] max-w-2xl leading-relaxed"
            >
              I turn ideas and real-world problems into working technology — from AI-powered systems and machine learning solutions to data-driven applications and modern web experiences.
            </motion.p>

            {/* 5. Education line */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 text-xs sm:text-sm text-[#52525B] dark:text-[#A1A1AA] py-1.5 px-3.5 rounded-xl bg-white dark:bg-[#111118]/80 border border-[#E4E4E7] dark:border-[#1F1F2E] shadow-sm dark:shadow-none"
            >
              <GraduationCap className="w-4 h-4 text-[#8B5CF6] dark:text-violet-400 shrink-0" />
              <span>B.Tech Information Technology · DMI College of Engineering · Chennai · 2028</span>
            </motion.div>

            {/* 6. Buttons: Explore My Work + Download Resume */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1"
            >
              <Button
                variant="primary"
                href="#projects"
                icon={ArrowRight}
                className="px-6 py-3 text-base group shadow-sm"
              >
                Explore My Work
              </Button>

              <Button
                variant="secondary"
                href="/Remsha_Gopi_Resume.pdf"
                download="Remsha_Gopi_Resume.pdf"
                icon={Download}
                className="px-6 py-3 text-base group"
              >
                Download Resume
              </Button>
            </motion.div>

            {/* 7. LinkedIn + GitHub + Email */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3"
            >
              <a
                href="http://linkedin.com/in/remsha-g"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn Profile"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border border-[#E4E4E7] dark:border-[#1F1F2E] bg-white/90 dark:bg-[#111118]/90 text-[#52525B] dark:text-[#A1A1AA] hover:text-[#18181B] dark:hover:text-[#F5F5F7] hover:border-[#22D3EE]/50 dark:hover:border-[#22D3EE]/50 hover:bg-[#F4F4F5] dark:hover:bg-[#171722] hover:-translate-y-0.5 shadow-sm dark:shadow-none hover:shadow-[0_4px_16px_rgba(34,211,238,0.15)] dark:hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] dark:focus:ring-violet-500 group"
              >
                <Linkedin className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#8B5CF6] dark:text-violet-400 group-hover:text-[#0891B2] dark:group-hover:text-[#22D3EE] group-hover:scale-110 transition-all duration-200" />
                <span className="font-medium">LinkedIn</span>
              </a>

              <a
                href="https://github.com/Remsha-gopi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                title="GitHub Profile"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border border-[#E4E4E7] dark:border-[#1F1F2E] bg-white/90 dark:bg-[#111118]/90 text-[#52525B] dark:text-[#A1A1AA] hover:text-[#18181B] dark:hover:text-[#F5F5F7] hover:border-[#22D3EE]/50 dark:hover:border-[#22D3EE]/50 hover:bg-[#F4F4F5] dark:hover:bg-[#171722] hover:-translate-y-0.5 shadow-sm dark:shadow-none hover:shadow-[0_4px_16px_rgba(34,211,238,0.15)] dark:hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] dark:focus:ring-violet-500 group"
              >
                <Github className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#8B5CF6] dark:text-violet-400 group-hover:text-[#0891B2] dark:group-hover:text-[#22D3EE] group-hover:scale-110 transition-all duration-200" />
                <span className="font-medium">GitHub</span>
              </a>

              <a
                href="mailto:remshagopi2006@gmail.com"
                aria-label="Send email"
                title="Send Email"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border border-[#E4E4E7] dark:border-[#1F1F2E] bg-white/90 dark:bg-[#111118]/90 text-[#52525B] dark:text-[#A1A1AA] hover:text-[#18181B] dark:hover:text-[#F5F5F7] hover:border-[#22D3EE]/50 dark:hover:border-[#22D3EE]/50 hover:bg-[#F4F4F5] dark:hover:bg-[#171722] hover:-translate-y-0.5 shadow-sm dark:shadow-none hover:shadow-[0_4px_16px_rgba(34,211,238,0.15)] dark:hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] dark:focus:ring-violet-500 group"
              >
                <Mail className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#8B5CF6] dark:text-violet-400 group-hover:text-[#0891B2] dark:group-hover:text-[#22D3EE] group-hover:scale-110 transition-all duration-200" />
                <span className="font-medium">Email</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Professional Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Soft violet / cyan ambient glow */}
              <div
                className="absolute -inset-1.5 bg-gradient-to-tr from-violet-600/30 via-[#22D3EE]/25 to-violet-500/20 dark:from-violet-600 dark:via-[#22D3EE]/30 dark:to-cyan-500 rounded-2xl opacity-50 dark:opacity-40 blur-xl group-hover:opacity-75 dark:group-hover:opacity-60 transition duration-500"
                aria-hidden="true"
              />

              {/* Clean rounded rectangular frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E4E4E7] dark:border-[#1F1F2E] bg-white dark:bg-[#111118] p-2 shadow-xl dark:shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                <img
                  src="/profile.png"
                  alt="Remsha Gopi"
                  className="w-72 h-88 sm:w-80 sm:h-96 md:w-84 md:h-[420px] object-cover object-top rounded-xl"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
