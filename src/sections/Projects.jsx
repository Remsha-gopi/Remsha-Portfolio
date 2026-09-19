import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { featuredProjects, otherProjects } from '../data/projects';
import { Sparkles, FolderGit2 } from 'lucide-react';

export default function Projects({ onSelectProject }) {
  return (
    <section id="projects" className="py-24 relative transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 05 — PROJECTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] dark:text-violet-400 block mb-2 font-mono">
            05 — PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#172033] dark:text-[#F5F5F7]">
            Projects
          </h2>
          <p className="text-sm sm:text-base text-[#526174] dark:text-[#A1A1AA] mt-2 max-w-2xl">
            Practical technology solutions built across artificial intelligence, deep learning, data analytics, systems security, and modern web applications.
          </p>
        </motion.div>

        {/* Section 8: Featured Projects */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#4F8CFF] dark:text-violet-400" />
            <h3 className="text-lg font-bold font-heading text-[#172033] dark:text-[#F5F5F7]">
              Featured Projects
            </h3>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <ProjectCard
                  project={project}
                  onSelect={onSelectProject}
                  isFeatured={true}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Section 9: Other Projects */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-6"
          >
            <FolderGit2 className="w-4 h-4 text-[#63C5DA] dark:text-blue-400" />
            <h3 className="text-lg font-bold font-heading text-[#172033] dark:text-[#F5F5F7]">
              Other Projects
            </h3>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } }
                }}
              >
                <ProjectCard
                  project={project}
                  onSelect={onSelectProject}
                  isFeatured={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
