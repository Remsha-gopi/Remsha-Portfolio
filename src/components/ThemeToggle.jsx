import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative p-2.5 rounded-xl border border-[#D9E8F5] dark:border-[#1F1F2E] bg-white/90 dark:bg-[#111118]/90 text-[#172033] dark:text-[#F5F5F7] hover:border-[#4F8CFF]/50 dark:hover:border-violet-500/50 hover:bg-[#EFF7FF] dark:hover:bg-[#171722] shadow-sm dark:shadow-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] dark:focus:ring-violet-500 group"
    >
      {isDark ? (
        <Moon className="w-4 h-4 text-violet-400 group-hover:-rotate-12 transition-transform duration-200" />
      ) : (
        <Sun className="w-4 h-4 text-amber-500 group-hover:rotate-45 transition-transform duration-200" />
      )}
    </button>
  );
}
