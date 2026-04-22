'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '../AnimatedSection';

const skillCategories = [
  {
    title: "Core Skills",
    description:
      "ABuilding scalable, high performance web applications with a focus on clean architecture, intuitive user experiences, and maintainable, type-safe code ",
    skills: ["JavaScript","NodeJs","Express.Js","REST APIs + GraphQL","React ", "Next.js ", "TypeScript", "Redux Toolkit","Zustand", "TanStack Query", "ReactNative", "VueJs", "Websocket"],
    icon: "terminal",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    colSpan: "md:col-span-2 md:row-span-2",
    large: true,
  },
  {
    title: "Development Tools",
    description: null,
    skills: ["Git / Github", "Docker", "Vercel", "Storybook", "Railyway","Netlify","AWS"],
    icon: null,
    iconColor: null,
    iconBg: null,
    colSpan: "md:col-span-2",
    large: false,
  },
  {
    title: "Styling & Motion",
    description: null,
    skills: ["Tailwind CSS", "Framer Motion", "Radix UI", "CSS Modules", "Shadcn", "Scss"],
    icon: null,
    iconColor: null,
    iconBg: null,
    colSpan: "md:col-span-2",
    large: false,
  },
];

export default function Skills() {
  return (
    <section className="py-24 bg-surface-container-lowest overflow-hidden w-full" id="process">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 
          className="font-headline text-4xl font-bold tracking-tight text-on-surface mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Technical Domain
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5 }}
              className={`${category.colSpan} p-8 rounded-xl glass-card border border-outline-variant/10 flex flex-col justify-between cursor-pointer`}
            >
              <div>
                {/* Icon (large card only) */}
                {category.icon && (
                  <motion.div
                    className={`w-12 h-12 rounded-full ${category.iconBg} flex items-center justify-center mb-6`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <span className={`material-symbols-outlined ${category.iconColor}`}>
                      {category.icon}
                    </span>
                  </motion.div>
                )}

                <h4 className="text-2xl font-headline font-bold mb-4">
                  {category.title}
                </h4>

                {category.description && (
                  <p className="text-on-primary-container font-body mb-8">
                    {category.description}
                  </p>
                )}
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3,
                      delay: index * 0.1 + 0.3 + idx * 0.05,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}