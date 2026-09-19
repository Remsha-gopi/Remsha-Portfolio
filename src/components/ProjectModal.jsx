import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Cpu, AlertCircle, Sparkles } from 'lucide-react';
import Button from './Button';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    // Prevent background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Keyboard ESC listener
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const {
    title,
    overview,
    problem,
    solution,
    features,
    technologies,
    github,
    liveDemo,
    badge
  } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop with blur and fade animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Window with spring scale entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#111118] border border-[#D9E8F5] dark:border-[#1F1F2E] rounded-2xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(79,140,255,0.15)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.5)] z-10 custom-scrollbar transition-colors duration-250"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#D9E8F5] dark:border-[#1F1F2E]">
            <div>
              {badge && (
                <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-md bg-[#4F8CFF]/10 dark:bg-violet-500/10 text-[#2563EB] dark:text-violet-400 border border-[#4F8CFF]/20 dark:border-violet-500/20 mb-2 font-mono">
                  {badge}
                </span>
              )}
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold font-heading text-[#172033] dark:text-[#F5F5F7]">
                {title}
              </h2>
            </div>

            <button
              onClick={onClose}
              type="button"
              className="p-2.5 rounded-xl text-[#526174] hover:text-[#172033] dark:text-[#A1A1AA] dark:hover:text-[#F5F5F7] bg-[#EFF7FF] dark:bg-[#171722] border border-[#D9E8F5] dark:border-[#1F1F2E] hover:border-[#4F8CFF]/50 dark:hover:border-violet-500/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] dark:focus:ring-violet-500"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="space-y-6 pt-6 text-sm sm:text-base">
            {/* Overview */}
            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-[#2563EB] dark:text-violet-400 mb-2 flex items-center gap-1.5 font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                Overview
              </h3>
              <p className="text-[#526174] dark:text-[#A1A1AA] leading-relaxed">
                {overview || project.shortDescription}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 sm:p-5 rounded-xl bg-[#EFF7FF] dark:bg-[#171722]/60 border border-[#D9E8F5] dark:border-[#1F1F2E] hover:border-[#4F8CFF]/30 dark:hover:border-violet-500/30 transition-colors">
                <h4 className="font-semibold text-sm text-[#172033] dark:text-[#F5F5F7] mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  The Problem
                </h4>
                <p className="text-xs sm:text-sm text-[#526174] dark:text-[#A1A1AA] leading-relaxed">
                  {problem}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#EFF7FF] dark:bg-[#171722]/60 border border-[#D9E8F5] dark:border-[#1F1F2E] hover:border-[#4F8CFF]/30 dark:hover:border-violet-500/30 transition-colors">
                <h4 className="font-semibold text-sm text-[#172033] dark:text-[#F5F5F7] mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#4F8CFF] dark:text-violet-400" />
                  The Solution
                </h4>
                <p className="text-xs sm:text-sm text-[#526174] dark:text-[#A1A1AA] leading-relaxed">
                  {solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            {features && features.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold tracking-wider uppercase text-[#2563EB] dark:text-violet-400 mb-3 font-mono">
                  Key Features & Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#526174] dark:text-[#A1A1AA]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-[#2563EB] dark:text-violet-400 mb-3 font-mono">
                Technologies & Architecture
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#EFF7FF] dark:bg-[#171722] text-[#172033] dark:text-[#F5F5F7] font-mono border border-[#D9E8F5] dark:border-[#1F1F2E] hover:border-[#4F8CFF]/40 dark:hover:border-violet-500/40 hover:bg-[#4F8CFF]/10 dark:hover:bg-violet-500/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer with ONLY verified links */}
          <div className="pt-6 mt-6 border-t border-[#D9E8F5] dark:border-[#1F1F2E] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {github && (
                <Button
                  variant="primary"
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={Github}
                  className="shadow-sm"
                >
                  View on GitHub
                </Button>
              )}

              {liveDemo && (
                <Button
                  variant="outline"
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={ExternalLink}
                >
                  Live Demo
                </Button>
              )}
            </div>

            <Button
              variant="secondary"
              onClick={onClose}
              className="text-xs py-2 px-4 ml-auto"
            >
              Close
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
