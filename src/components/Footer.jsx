import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const footerNavLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

// Tech icons for BUILT WITH strip
const ReactIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#00D8FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const ViteIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
    <path d="M21.5 4.5L12.7 20.8C12.4 21.4 11.6 21.4 11.3 20.8L2.5 4.5C2.1 3.7 2.8 2.8 3.6 3.1L12 6.5L20.4 3.1C21.2 2.8 21.9 3.7 21.5 4.5Z" fill="url(#viteGradientFooter)" />
    <path d="M14.5 3L8.5 13H12L10 20L17 9H13L14.5 3Z" fill="#FFD025" />
    <defs>
      <linearGradient id="viteGradientFooter" x1="2" y1="3" x2="22" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#41D1FF" />
        <stop offset="1" stopColor="#BD34FE" />
      </linearGradient>
    </defs>
  </svg>
);

const JSIcon = () => (
  <span className="w-3.5 h-3.5 rounded-xs bg-[#F7DF1E] text-black font-extrabold text-[8px] flex items-center justify-center leading-none select-none">
    JS
  </span>
);

const TailwindIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
  </svg>
);

const FramerMotionIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#0055FF] dark:text-[#60A5FA]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
  </svg>
);

const EmailJSIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#8B5CF6] dark:text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const VercelIcon = () => (
  <svg className="w-3 h-3 text-[#18181B] dark:text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L24 22H0L12 1Z" />
  </svg>
);

const builtWithTech = [
  { name: 'React', icon: ReactIcon },
  { name: 'Vite', icon: ViteIcon },
  { name: 'JavaScript', icon: JSIcon },
  { name: 'Tailwind CSS', icon: TailwindIcon },
  { name: 'Framer Motion', icon: FramerMotionIcon },
  { name: 'EmailJS', icon: EmailJSIcon },
  { name: 'Vercel', icon: VercelIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E4E4E7] dark:border-[#1F1F2E] bg-[#FAFAFA]/90 dark:bg-[#07070B] pt-8 sm:pt-9 pb-6 sm:pb-7 transition-colors duration-250 relative overflow-hidden">
      
      {/* Subtle Right-Side AI/Data Decorative Node Graphic with Violet & Cyan */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-48 pointer-events-none overflow-hidden opacity-25 dark:opacity-20 hidden lg:block" aria-hidden="true">
        <svg viewBox="0 0 200 150" fill="none" className="w-full h-full stroke-[#8B5CF6] dark:stroke-violet-400">
          {/* Subtle connecting lines */}
          <line x1="160" y1="20" x2="110" y2="60" strokeWidth="0.75" strokeDasharray="3 3" />
          <line x1="110" y1="60" x2="170" y2="100" stroke="#22D3EE" strokeWidth="0.75" />
          <line x1="110" y1="60" x2="60" y2="80" strokeWidth="0.75" strokeDasharray="2 2" />
          <line x1="170" y1="100" x2="140" y2="135" strokeWidth="0.75" />
          <line x1="60" y1="80" x2="140" y2="135" stroke="#22D3EE" strokeWidth="0.75" strokeDasharray="3 3" />
          
          {/* Subtle nodes */}
          <circle cx="160" cy="20" r="2.5" fill="currentColor" />
          <circle cx="110" cy="60" r="3.5" stroke="#22D3EE" strokeWidth="1" fill="none" />
          <circle cx="110" cy="60" r="1.5" fill="#22D3EE" />
          <circle cx="170" cy="100" r="3" fill="currentColor" />
          <circle cx="60" cy="80" r="2.5" strokeWidth="1" fill="none" />
          <circle cx="140" cy="135" r="2.5" fill="#22D3EE" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-7">
        
        {/* ROW 1: Identity & Socials (Left) + Section Navigation (Right) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10"
        >
          {/* Left Block: Identity, Subtitle, Circular Buttons & Location */}
          <div className="flex flex-col items-start text-left space-y-1.5">
            <a
              href="#hero"
              className="text-lg sm:text-xl font-bold font-heading tracking-tight hover:opacity-95 transition-opacity inline-block group"
            >
              <span className="text-[#18181B] dark:text-[#F8FAFC]">REMSHA </span>
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#0891B2] dark:from-[#8B5CF6] dark:to-[#22D3EE] bg-clip-text text-transparent">
                GOPI
              </span>
            </a>
            
            <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] font-normal leading-relaxed">
              Information Technology Student · AI · Data · Software Development
            </p>

            {/* Compact Circular Social & Location Row */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <motion.a
                whileHover={{ y: -1.5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="http://linkedin.com/in/remsha-g"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-[#E4E4E7] dark:border-[#222230] bg-white/80 dark:bg-[#111118]/90 text-[#52525B] dark:text-[#A1A1AA] hover:text-[#0891B2] dark:hover:text-[#22D3EE] hover:border-[#22D3EE]/60 dark:hover:border-[#22D3EE]/60 hover:shadow-[0_0_12px_rgba(34,211,238,0.25)] dark:hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] dark:focus:ring-violet-500"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </motion.a>

              <motion.a
                whileHover={{ y: -1.5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Remsha-gopi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                title="GitHub Profile"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-[#E4E4E7] dark:border-[#222230] bg-white/80 dark:bg-[#111118]/90 text-[#52525B] dark:text-[#A1A1AA] hover:text-[#0891B2] dark:hover:text-[#22D3EE] hover:border-[#22D3EE]/60 dark:hover:border-[#22D3EE]/60 hover:shadow-[0_0_12px_rgba(34,211,238,0.25)] dark:hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] dark:focus:ring-violet-500"
              >
                <Github className="w-3.5 h-3.5" />
              </motion.a>

              <motion.a
                whileHover={{ y: -1.5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:remshagopi2006@gmail.com"
                aria-label="Email Remsha Gopi"
                title="Email Remsha Gopi"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-[#E4E4E7] dark:border-[#222230] bg-white/80 dark:bg-[#111118]/90 text-[#52525B] dark:text-[#A1A1AA] hover:text-[#0891B2] dark:hover:text-[#22D3EE] hover:border-[#22D3EE]/60 dark:hover:border-[#22D3EE]/60 hover:shadow-[0_0_12px_rgba(34,211,238,0.25)] dark:hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] dark:focus:ring-violet-500"
              >
                <Mail className="w-3.5 h-3.5" />
              </motion.a>

              {/* Location Pill / Pin Circle with Electric Cyan accent */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center border border-[#E4E4E7] dark:border-[#222230] bg-white/80 dark:bg-[#111118]/90 text-[#52525B] dark:text-[#A1A1AA] shrink-0"
                title="Location: Chennai, Tamil Nadu, India"
              >
                <MapPin className="w-3.5 h-3.5 text-[#0891B2] dark:text-[#22D3EE]" />
              </div>

              <span className="w-px h-3.5 bg-[#E4E4E7] dark:bg-[#222230] mx-0.5" aria-hidden="true" />

              <span className="text-xs text-[#52525B] dark:text-[#A1A1AA] font-normal select-none">
                Chennai, Tamil Nadu, India
              </span>
            </div>
          </div>

          {/* Right Block: Compact Section Navigation Links */}
          <nav aria-label="Footer Navigation" className="w-full lg:w-auto">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-6 lg:gap-x-7 text-xs sm:text-[13px] font-medium">
              {footerNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative py-1 text-[#52525B] dark:text-[#A1A1AA] hover:text-[#18181B] dark:hover:text-[#F5F5F7] transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 rounded group"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] rounded-full group-hover:w-full transition-all duration-200" />
                </a>
              ))}
            </div>
          </nav>
        </motion.div>

        {/* ROW 2: BUILT WITH Strip (Compact Chips matching reference) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-2.5 sm:gap-3"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#52525B] dark:text-[#A1A1AA] select-none font-semibold mr-1">
            BUILT WITH
          </span>

          <div className="flex flex-wrap items-center gap-2">
            {builtWithTech.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/80 dark:bg-[#111118]/85 text-[#52525B] dark:text-[#D4D4D8] border border-[#E4E4E7] dark:border-[#1F1F2E] shadow-2xs hover:border-[#22D3EE]/50 dark:hover:border-[#22D3EE]/40 hover:bg-white dark:hover:bg-[#171722] transition-all duration-150 cursor-default select-none"
              >
                <tech.icon />
                <span>{tech.name}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* ROW 3: Thin Divider + Bottom Copyright / Signature Row */}
        <div className="border-t border-[#E4E4E7] dark:border-[#1F1F2E] pt-4 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-[#52525B] dark:text-[#71717A]">
          <p>© 2026 Remsha Gopi. All rights reserved.</p>
          <p className="font-mono text-[11px] sm:text-xs text-[#52525B]/80 dark:text-[#71717A]/80">
            Built with curiosity & code.
          </p>
        </div>

      </div>
    </footer>
  );
}
