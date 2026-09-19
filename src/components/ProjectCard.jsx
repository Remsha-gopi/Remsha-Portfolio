import React from 'react';
import { ExternalLink, Github, ArrowRight, Layers } from 'lucide-react';
import Button from './Button';

export default function ProjectCard({ project, onSelect, isFeatured = false }) {
  const { title, shortDescription, technologies, github, liveDemo, badge } = project;

  return (
    <div
      className={`group relative rounded-2xl border border-[#D9E8F5] dark:border-[#1F1F2E] bg-white dark:bg-[#111118] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#4F8CFF]/50 dark:hover:border-violet-500/50 shadow-card-light dark:shadow-none dark:hover:shadow-[0_8px_30px_rgba(139,92,246,0.12)] flex flex-col justify-between h-full`}
    >
      <div>
        {/* Top Header / Badge */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-[#4F8CFF]/10 dark:bg-violet-500/10 text-[#2563EB] dark:text-violet-400 group-hover:bg-[#4F8CFF] dark:group-hover:bg-violet-500 group-hover:text-white transition-colors duration-300">
              <Layers className="w-4 h-4" />
            </span>
            {badge && (
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#4F8CFF]/10 dark:bg-violet-500/10 text-[#2563EB] dark:text-violet-400 border border-[#4F8CFF]/20 dark:border-violet-500/20 group-hover:border-[#4F8CFF]/40 dark:group-hover:border-violet-500/40 transition-colors">
                {badge}
              </span>
            )}
          </div>

          {/* Quick links on top right if available */}
          <div className="flex items-center gap-1.5">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-[#526174] hover:text-[#172033] dark:text-[#A1A1AA] dark:hover:text-[#F5F5F7] hover:bg-[#EFF7FF] dark:hover:bg-violet-500/10 transition-colors"
                aria-label={`GitHub repository for ${title}`}
                title="View GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-[#526174] hover:text-[#172033] dark:text-[#A1A1AA] dark:hover:text-[#F5F5F7] hover:bg-[#EFF7FF] dark:hover:bg-violet-500/10 transition-colors"
                aria-label={`Live demo for ${title}`}
                title="View Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold font-heading text-[#172033] dark:text-[#F5F5F7] mb-2.5 group-hover:text-[#4F8CFF] dark:group-hover:text-violet-400 transition-colors duration-200">
          {title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-[#526174] dark:text-[#A1A1AA] leading-relaxed mb-6">
          {shortDescription}
        </p>
      </div>

      {/* Footer Area: Tech tags + Action buttons */}
      <div className="pt-4 border-t border-[#D9E8F5]/80 dark:border-[#1F1F2E]/60">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {technologies.slice(0, isFeatured ? 6 : 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md bg-[#EFF7FF] dark:bg-[#171722] text-[#526174] dark:text-[#A1A1AA] group-hover:text-[#172033] dark:group-hover:text-[#F5F5F7] font-mono border border-[#D9E8F5] dark:border-[#1F1F2E] transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
          {technologies.length > (isFeatured ? 6 : 4) && (
            <span className="text-xs px-2 py-1 text-[#526174] dark:text-[#A1A1AA]">
              +{technologies.length - (isFeatured ? 6 : 4)} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            onClick={() => onSelect(project)}
            className="w-full text-xs py-2.5 justify-between group-hover:border-[#4F8CFF]/50 dark:group-hover:border-violet-500/50 transition-colors"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200 text-[#4F8CFF] dark:text-violet-400" />
          </Button>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2.5 rounded-xl border border-[#D9E8F5] dark:border-[#1F1F2E] bg-white dark:bg-[#111118] text-[#526174] dark:text-[#A1A1AA] hover:text-[#4F8CFF] dark:hover:text-[#F5F5F7] hover:border-[#4F8CFF]/50 dark:hover:border-violet-500/50 transition-colors shadow-sm dark:shadow-none"
              aria-label={`GitHub repo for ${title}`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
