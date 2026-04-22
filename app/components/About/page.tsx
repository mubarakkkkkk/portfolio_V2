'use client';

import Image from "next/image";
import AnimatedSection from "../AnimatedSection";
import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years Exp.", color: "text-tertiary" },
  { value: "20+", label: "Projects", color: "text-secondary" },
];

export default function About() {
  return (
    <section className="py-24 bg-surface-container-lowest overflow-hidden w-full" id="expertise">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Text Content */}
        <AnimatedSection direction="left" className="lg:col-span-7">
          <span className="text-tertiary font-label text-[0.6875rem] uppercase tracking-[0.2em] mb-4 block">
            Crafting the digital void
          </span>
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-surface mb-8">
            About me
          </h2>
          <div className="space-y-6 text-on-surface-variant font-body text-lg leading-relaxed max-w-2xl">
            <p>
             I’m a passionate software engineer focused on building clean, responsive, and user friendly web applications. I enjoy turning complex ideas into simple, intuitive interfaces that deliver real value to users.

With a strong foundation in modern technologies like React and Next.js, I specialize in creating scalable and high performance applications. I pay close attention to detail from smooth user interactions to maintainable code structure ensuring every project I work on meets a high standard.

Beyond just writing code, I’m constantly learning and improving my skills, exploring new tools, and staying up to date with industry best practices. I enjoy solving problems, collaborating with others, and bringing ideas to life through thoughtful design and development.

Currently, I’m working on building real-time applications and expanding my expertise across the full stack.
            </p>
          </div>

          {/* Stats */}
          <motion.div 
            className="mt-12 flex gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className={`text-3xl font-headline font-extrabold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-on-primary-container mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Image Card */}
        <AnimatedSection direction="right" className="lg:col-span-5 relative group">
          <div className="absolute -inset-1 bg-secondary/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <motion.div 
            className="relative aspect-square rounded-xl overflow-hidden glass-card border border-outline-variant/10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuARM1hgzuyO2_oDY4dmH7uDT_oNj2rnGqyqaoCKLm8EfEEnGph7NQs69YLCLEs3Wd-eNaB75FbKjCawOhEdLvqlf-ZEMzpS7QWd7UrZHO3GkkGsL80FvK3vwWsMBvrjwBWN0ZoOdOkq_hf8larZiL4eGRQr5L_sfbgcFEmzGjIgCQ2z84l0CVGFitXmuRkc-Scraav-Zk_QzRgPziQ8kL5aNwYAWD8749oefVR1V9_bma1OifNwvICb39p5eInRbuo6KhLfEYkRag0"
              alt="Abstract macro shot of tech hardware with purple and cyan neon light refractions"
              fill
              className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
            />
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}