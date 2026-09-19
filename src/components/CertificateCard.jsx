import React from 'react';
import { Database, Award, Leaf, Code, ExternalLink } from 'lucide-react';

const iconMap = {
  Database,
  Award,
  Leaf,
  Code
};

export default function CertificateCard({ certificate, onPreview }) {
  const { title, category, iconName, image } = certificate;
  const Icon = iconMap[iconName] || Award;

  return (
    <div className="group relative rounded-2xl border border-[#D9E8F5] dark:border-[#1F1F2E] bg-white dark:bg-[#111118] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#4F8CFF]/50 dark:hover:border-violet-500/50 shadow-sm dark:shadow-none hover:shadow-card-light dark:hover:shadow-card-dark flex flex-col justify-between h-full">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-[#4F8CFF]/10 dark:bg-violet-500/10 text-[#2563EB] dark:text-violet-400 group-hover:bg-[#4F8CFF] dark:group-hover:bg-violet-500 group-hover:text-white group-hover:scale-105 transition-all duration-300 shrink-0 shadow-sm">
          <Icon className="w-5 h-5" />
        </div>

        <div className="flex-1 min-w-0">
          <span className="text-xs font-mono text-[#2563EB] dark:text-violet-400 block mb-1">
            {category}
          </span>
          <h3 className="text-base font-bold font-heading text-[#172033] dark:text-[#F5F5F7] group-hover:text-[#4F8CFF] dark:group-hover:text-violet-400 transition-colors">
            {title}
          </h3>
        </div>
      </div>

      {image && (
        <div className="mt-4 pt-3 border-t border-[#D9E8F5] dark:border-[#1F1F2E] flex justify-end">
          <button
            onClick={() => onPreview(image, title)}
            className="text-xs text-[#2563EB] dark:text-violet-400 hover:text-[#3A7BF5] dark:hover:text-violet-300 inline-flex items-center gap-1 font-medium"
          >
            <span>View Certificate</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );
}
