
'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '../AnimatedSection';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-[921px] flex flex-col justify-center items-center px-8 overflow-hidden w-full">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 -left-1/3 w-[500px] h-[500px] bg-on-secondary-container/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/3 w-[400px] h-[400px] bg-tertiary/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-5xl text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Badge */}
        <motion.span
          variants={itemVariants}
          className="inline-block py-1 px-3 mb-6 rounded-full bg-surface-container-high text-on-surface-variant text-[0.6875rem] uppercase tracking-widest font-medium"
        >
          Available for new projects
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-headline text-5xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]"
        >
          Software Engineer Building{" "}
          <span className="text-gradient">Scalable &amp; Interactive</span> Web
          Experiences
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="font-body text-on-primary-container text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Specializing in React, ReactNative, VueJs, Node.js, Next.js, Express.Js and technical restraint. I transform
          complex problems into high-performance, pixel-perfect digital
          interfaces.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a
            href="#work"
            className="px-8 py-4 rounded-full bg-secondary text-on-secondary font-bold text-lg hover:shadow-[0_0_40px_-5px_rgba(255,190,11,0.4)] transition-all"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-outline-variant/30 glass-card text-on-surface font-bold text-lg hover:bg-surface-variant/40 transition-all"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}