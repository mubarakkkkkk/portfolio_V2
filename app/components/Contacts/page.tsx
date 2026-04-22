"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";

const socialLinks = [
  { label: "GITHUB", href: "https://github.com/mubarakkkkkk", hoverColor: "hover:text-tertiary" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/mubarak-abiola-019b47306/", hoverColor: "hover:text-secondary" }
];

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="py-32 bg-surface overflow-hidden w-full" id="contact">
      <div className="max-w-4xl mx-auto px-8">
        {/* Header */}
        <AnimatedSection direction="up" className="text-center mb-16">
          <h2 className="font-headline text-5xl font-bold tracking-tighter text-on-surface mb-6">
            Let&apos;s Build Something
          </h2>
          <p className="text-on-primary-container text-lg">
            Currently accepting freelance commissions and full-time opportunities.
          </p>
        </AnimatedSection>

        {/* Form */}
        <motion.form 
          className="space-y-12" 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder=" "
                className="peer w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 px-0 text-on-surface focus:ring-0 focus:border-tertiary transition-all placeholder-transparent outline-none"
              />
              <label htmlFor="name" className="absolute left-0 text-on-primary-container transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-tertiary uppercase tracking-widest font-bold text-xs -top-4">
  Your Name
</label>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder=" "
                className="peer w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 px-0 focus:ring-0 focus:border-tertiary transition-all placeholder-transparent outline-none"
              />
              <label htmlFor="email" className="absolute left-0 text-on-primary-container transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-tertiary uppercase tracking-widest font-bold text-xs -top-4">
                Email Address
              </label>
            </motion.div>
          </div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder=" "
              className="peer w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 px-0 text-on-surface focus:ring-0 focus:border-tertiary transition-all placeholder-transparent resize-none outline-none"
            />
            <label htmlFor="message" className="absolute left-0 text-on-primary-container transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-tertiary uppercase tracking-widest font-bold text-xs -top-4">
              Tell me about the project
            </label>
          </motion.div>

          {/* Feedback messages */}
          {status === 'success' && (
            <motion.p 
              className="text-center text-green-400 text-sm uppercase tracking-widest"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              Message sent successfully!
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p 
              className="text-center text-red-400 text-sm uppercase tracking-widest"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              Something went wrong. Please try again.
            </motion.p>
          )}

          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <button
              type="submit"
              disabled={status === 'loading'}
              className="group relative px-12 py-5 overflow-hidden rounded-full font-bold uppercase tracking-widest text-sm disabled:opacity-50"
            >
              <span className="absolute inset-0 bg-secondary transition-transform group-hover:scale-105" />
              <span className="relative text-on-secondary flex items-center gap-2">
                {status === 'loading' ? 'Sending...' : 'Send Transmission'}
                <span className="material-symbols-outlined text-sm">send</span>
              </span>
            </button>
          </motion.div>
        </motion.form>

        {/* Social Links */}
        <motion.div 
          className="mt-24 flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex gap-12">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                className={`text-on-primary-container ${link.hoverColor} transition-colors flex items-center gap-2 font-label text-[0.6875rem] uppercase tracking-widest`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}