import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  House,
  UserRound,
  GraduationCap,
  Sparkles,
  BriefcaseBusiness,
  FolderGit2,
  BadgeCheck,
  Mail,
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#hero', id: 'hero', icon: House },
  { name: 'About', href: '#about', id: 'about', icon: UserRound },
  { name: 'Education', href: '#education', id: 'education', icon: GraduationCap },
  { name: 'Skills', href: '#skills', id: 'skills', icon: Sparkles },
  { name: 'Experience', href: '#experience', id: 'experience', icon: BriefcaseBusiness },
  { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
  { name: 'Certifications', href: '#certifications', id: 'certifications', icon: BadgeCheck },
  { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
];

export default function Navbar({ isDark, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracker using scroll offset
      const sectionElements = navLinks.map(link => ({
        id: link.id,
        el: document.getElementById(link.id)
      })).filter(item => item.el !== null);

      const scrollPos = window.scrollY + 140;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, el } = sectionElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-250 ${
        isScrolled
          ? 'bg-[#FAFAFA]/90 dark:bg-[#0A0A0F]/90 backdrop-blur-md border-b border-[#E4E4E7]/80 dark:border-[#1F1F2E]/80 shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.35)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-[#18181B] dark:text-[#F5F5F7] font-heading hover:text-violet-600 dark:hover:text-[#22D3EE] transition-colors group"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-600 dark:bg-violet-500 shadow-[0_0_8px_#8B5CF6]"></span>
            </span>
            <span className="group-hover:tracking-normal transition-all duration-200">REMSHA GOPI</span>
          </a>

          {/* Desktop Nav Links with Animated Active Indicator & Subtle Lucide Icons */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 relative">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`group relative flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-violet-600 dark:text-violet-400 font-semibold'
                      : 'text-[#52525B] dark:text-[#A1A1AA] hover:text-violet-600 dark:hover:text-[#22D3EE]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeSectionIndicator"
                      className="absolute inset-0 rounded-lg bg-violet-500/10 dark:bg-violet-500/10 border border-violet-500/20 dark:border-violet-500/20 -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      isActive
                        ? 'text-violet-600 dark:text-violet-400 opacity-100'
                        : 'opacity-75 group-hover:opacity-100 group-hover:-translate-y-0.5'
                    }`}
                    aria-hidden="true"
                  />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Theme Toggle & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 rounded-xl border border-[#E4E4E7] dark:border-[#1F1F2E] bg-white/90 dark:bg-[#111118]/80 text-[#52525B] dark:text-[#A1A1AA] hover:text-[#18181B] dark:hover:text-[#F5F5F7] focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors shadow-sm dark:shadow-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown with Framer Motion & Lucide Icons */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white/95 dark:bg-[#111118]/95 backdrop-blur-xl border-b border-[#E4E4E7] dark:border-[#1F1F2E]"
          >
            <div className="px-4 pt-3 pb-5 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-base font-medium transition-all duration-200 group ${
                      isActive
                        ? 'text-violet-600 dark:text-violet-400 bg-violet-500/10 dark:bg-violet-500/15 font-semibold'
                        : 'text-[#52525B] dark:text-[#A1A1AA] hover:text-[#18181B] dark:hover:text-[#F5F5F7] hover:bg-[#F4F4F5] dark:hover:bg-[#171722]'
                    }`}
                  >
                    <Icon
                      className={`w-[18px] h-[18px] shrink-0 transition-transform duration-200 ${
                        isActive
                          ? 'text-violet-600 dark:text-violet-400 opacity-100'
                          : 'opacity-80 group-hover:opacity-100 group-hover:scale-105'
                      }`}
                      aria-hidden="true"
                    />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
