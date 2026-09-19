import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          type="button"
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full border border-[#D9E8F5] dark:border-[#1F1F2E] bg-white/95 dark:bg-[#111118]/90 text-[#172033] dark:text-[#F5F5F7] hover:border-[#4F8CFF]/50 dark:hover:border-violet-500/50 shadow-[0_4px_16px_rgba(79,140,255,0.15)] dark:shadow-lg dark:hover:shadow-violet-500/20 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] dark:focus:ring-violet-500 group"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200 text-[#4F8CFF] dark:text-violet-400" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
