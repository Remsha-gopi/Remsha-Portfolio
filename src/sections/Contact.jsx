import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    if (!validate()) return;

    setStatus('sending');
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS environment variables are missing');
      }

      // Template parameters must be exactly: name, email, message
      const templateParams = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      };

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (result && (result.status === 200 || result.text === 'OK')) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('EmailJS response not successful');
      }
    } catch (error) {
      console.error('Email submission error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact me directly by email.');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden transition-colors duration-250">
      {/* Subtle ambient glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#4F8CFF]/5 dark:bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with 07 — CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] dark:text-violet-400 block mb-2 font-mono">
            07 — CONTACT
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#172033] dark:text-[#F5F5F7]">
            Let's Connect
          </h2>
          <p className="text-sm sm:text-base text-[#526174] dark:text-[#A1A1AA] mt-2 max-w-2xl">
            Have a project idea, internship opportunity, or collaboration in mind? I'd love to connect, learn, and work on meaningful real-world problems.
          </p>
        </motion.div>

        {/* Two-column layout on desktop with Framer Motion reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Information & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-2xl border border-[#D9E8F5] dark:border-[#1F1F2E] bg-white dark:bg-[#111118] p-6 sm:p-8 space-y-6 shadow-card-light dark:shadow-card-dark hover:border-[#4F8CFF]/30 dark:hover:border-violet-500/30 transition-colors">
              <h3 className="text-lg font-bold font-heading text-[#172033] dark:text-[#F5F5F7]">
                Direct Contact
              </h3>

              <div className="space-y-4 text-sm">
                {/* Email */}
                <a
                  href="mailto:remshagopi2006@gmail.com"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#EFF7FF] dark:bg-[#171722]/60 border border-[#D9E8F5] dark:border-[#1F1F2E] hover:border-[#4F8CFF]/40 dark:hover:border-violet-500/40 hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className="p-2 rounded-lg bg-[#4F8CFF]/10 dark:bg-violet-500/10 text-[#2563EB] dark:text-violet-400 group-hover:bg-[#4F8CFF] dark:group-hover:bg-violet-500 group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#526174] dark:text-[#A1A1AA] block font-mono">
                      Email
                    </span>
                    <span className="text-sm font-medium text-[#172033] dark:text-[#F5F5F7] group-hover:text-[#4F8CFF] dark:group-hover:text-violet-400 transition-colors break-all">
                      remshagopi2006@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+917339667809"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#EFF7FF] dark:bg-[#171722]/60 border border-[#D9E8F5] dark:border-[#1F1F2E] hover:border-[#4F8CFF]/40 dark:hover:border-violet-500/40 hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className="p-2 rounded-lg bg-[#4F8CFF]/10 dark:bg-violet-500/10 text-[#2563EB] dark:text-violet-400 group-hover:bg-[#4F8CFF] dark:group-hover:bg-violet-500 group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#526174] dark:text-[#A1A1AA] block font-mono">
                      Phone
                    </span>
                    <span className="text-sm font-medium text-[#172033] dark:text-[#F5F5F7] group-hover:text-[#4F8CFF] dark:group-hover:text-violet-400 transition-colors">
                      +91 73396 67809
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="http://linkedin.com/in/remsha-g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#EFF7FF] dark:bg-[#171722]/60 border border-[#D9E8F5] dark:border-[#1F1F2E] hover:border-[#4F8CFF]/40 dark:hover:border-violet-500/40 hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className="p-2 rounded-lg bg-[#4F8CFF]/10 dark:bg-violet-500/10 text-[#2563EB] dark:text-violet-400 group-hover:bg-[#4F8CFF] dark:group-hover:bg-violet-500 group-hover:text-white transition-colors shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#526174] dark:text-[#A1A1AA] block font-mono">
                      LinkedIn
                    </span>
                    <span className="text-sm font-medium text-[#172033] dark:text-[#F5F5F7] group-hover:text-[#4F8CFF] dark:group-hover:text-violet-400 transition-colors">
                      linkedin.com/in/remsha-g
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Remsha-gopi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#EFF7FF] dark:bg-[#171722]/60 border border-[#D9E8F5] dark:border-[#1F1F2E] hover:border-[#4F8CFF]/40 dark:hover:border-violet-500/40 hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className="p-2 rounded-lg bg-[#4F8CFF]/10 dark:bg-violet-500/10 text-[#2563EB] dark:text-violet-400 group-hover:bg-[#4F8CFF] dark:group-hover:bg-violet-500 group-hover:text-white transition-colors shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#526174] dark:text-[#A1A1AA] block font-mono">
                      GitHub
                    </span>
                    <span className="text-sm font-medium text-[#172033] dark:text-[#F5F5F7] group-hover:text-[#4F8CFF] dark:group-hover:text-violet-400 transition-colors">
                      github.com/Remsha-gopi
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-[#D9E8F5] dark:border-[#1F1F2E] bg-white dark:bg-[#111118] p-6 sm:p-8 shadow-card-light dark:shadow-card-dark hover:border-[#4F8CFF]/30 dark:hover:border-violet-500/30 transition-colors">
              <h3 className="text-lg font-bold font-heading text-[#172033] dark:text-[#F5F5F7] mb-6">
                Send a Message
              </h3>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">
                      Thanks for reaching out! Your message has been sent successfully.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="text-xs underline mt-2 text-emerald-600 dark:text-emerald-300 hover:opacity-80"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm">
                    {errorMessage || 'Something went wrong. Please try again or contact me directly by email.'}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#526174] dark:text-[#A1A1AA] mb-2 font-mono"
                  >
                    Name <span className="text-[#2563EB] dark:text-violet-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    disabled={status === 'sending'}
                    className={`w-full px-4 py-3 rounded-xl border bg-[#EFF7FF]/70 dark:bg-[#171722]/60 text-[#172033] dark:text-[#F5F5F7] placeholder-[#526174]/50 dark:placeholder-[#A1A1AA]/50 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] dark:focus:ring-violet-500 transition-colors text-sm ${
                      errors.name
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-[#D9E8F5] dark:border-[#1F1F2E]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 dark:text-rose-400 mt-1.5">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#526174] dark:text-[#A1A1AA] mb-2 font-mono"
                  >
                    Email <span className="text-[#2563EB] dark:text-violet-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    disabled={status === 'sending'}
                    className={`w-full px-4 py-3 rounded-xl border bg-[#EFF7FF]/70 dark:bg-[#171722]/60 text-[#172033] dark:text-[#F5F5F7] placeholder-[#526174]/50 dark:placeholder-[#A1A1AA]/50 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] dark:focus:ring-violet-500 transition-colors text-sm ${
                      errors.email
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-[#D9E8F5] dark:border-[#1F1F2E]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 dark:text-rose-400 mt-1.5">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#526174] dark:text-[#A1A1AA] mb-2 font-mono"
                  >
                    Message <span className="text-[#2563EB] dark:text-violet-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, opportunity, or idea..."
                    disabled={status === 'sending'}
                    className={`w-full px-4 py-3 rounded-xl border bg-[#EFF7FF]/70 dark:bg-[#171722]/60 text-[#172033] dark:text-[#F5F5F7] placeholder-[#526174]/50 dark:placeholder-[#A1A1AA]/50 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] dark:focus:ring-violet-500 transition-colors text-sm resize-y ${
                      errors.message
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-[#D9E8F5] dark:border-[#1F1F2E]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 dark:text-rose-400 mt-1.5">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 text-base font-semibold shadow-sm hover:shadow-[0_4px_16px_rgba(79,140,255,0.3)] dark:hover:shadow-violet-600/30 active:scale-[0.98]"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
