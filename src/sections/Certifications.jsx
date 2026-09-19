import React from 'react';
import { motion } from 'framer-motion';
import CertificateCard from '../components/CertificateCard';
import { certificationsList } from '../data/certifications';

export default function Certifications({ onPreviewCertificate }) {
  return (
    <section id="certifications" className="py-24 relative bg-[#EFF7FF]/50 dark:bg-[#0A0A0F]/50 transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 06 — CERTIFICATIONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] dark:text-violet-400 block mb-2 font-mono">
            06 — CERTIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#172033] dark:text-[#F5F5F7]">
            Certifications
          </h2>
          <p className="text-sm sm:text-base text-[#526174] dark:text-[#A1A1AA] mt-2 max-w-2xl">
            Completed technical certifications in databases, sustainability in AI, and web development.
          </p>
        </motion.div>

        {/* Certificate Cards Grid with Staggered Framer Motion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certificationsList.map((cert) => (
            <motion.div
              key={cert.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45 } }
              }}
            >
              <CertificateCard
                certificate={cert}
                onPreview={onPreviewCertificate}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
