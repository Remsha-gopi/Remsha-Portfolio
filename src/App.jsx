import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Hero from './sections/Hero';
import TechnologyStrip from './sections/TechnologyStrip';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

export default function App() {
  // Single source of truth for theme state (dark by default, saved in localStorage)
  const [isDark, setIsDark] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme !== null) {
        return savedTheme === 'dark';
      }
    } catch (e) {}
    return true; // default dark mode
  });

  // Selected project for modal
  const [selectedProject, setSelectedProject] = useState(null);

  // Sync theme with <html> class
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      try {
        localStorage.setItem('theme', 'dark');
      } catch (e) {}
    } else {
      root.classList.remove('dark');
      try {
        localStorage.setItem('theme', 'light');
      } catch (e) {}
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0F] text-[#18181B] dark:text-[#F5F5F7] transition-colors duration-250 relative selection:bg-cyan-500/20 selection:text-cyan-900 dark:selection:bg-violet-500/30 dark:selection:text-cyan-200">
      
      {/* 3. Thin Scroll Progress Indicator */}
      <ScrollProgress isDark={isDark} />

      {/* 1. Sticky Navbar with Active Indicator */}
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Main Single Page Content */}
      <main className="relative z-10">
        {/* 2. Hero */}
        <Hero isDark={isDark} />

        {/* 3. Technology Identity Strip */}
        <TechnologyStrip isDark={isDark} />

        {/* 4. About */}
        <About isDark={isDark} />

        {/* 5. Education */}
        <Education isDark={isDark} />

        {/* 6. Skills */}
        <Skills isDark={isDark} />

        {/* 7. Experience */}
        <Experience isDark={isDark} />

        {/* 8 & 9. Projects (Featured Projects & Other Projects) */}
        <Projects isDark={isDark} onSelectProject={(project) => setSelectedProject(project)} />

        {/* 10. Certifications */}
        <Certifications isDark={isDark} onPreviewCertificate={() => {}} />

        {/* 11. Contact */}
        <Contact isDark={isDark} />
      </main>

      {/* 12. Footer */}
      <Footer isDark={isDark} />

      {/* 11. Floating Back to Top Button */}
      <BackToTop isDark={isDark} />

      {/* 7. Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isDark={isDark}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
