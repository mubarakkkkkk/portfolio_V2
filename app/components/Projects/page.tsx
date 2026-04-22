'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;  
  offset?: boolean;
  hoverRotate?: string;
}

const projects: Project[] = [
  {
    title: "Zynaxe",
    description:
  "Frontend engineer at Zynaxe, building scalable web and mobile interfaces with Next.js and React Native. Focused on real-time communication features, performance optimization, and seamless user experiences using WebSockets, Redux Toolkit, and Tailwind CSS.",
    tags: ["ReactNative", "Websocket", "Tailwind", "NextJs", "ReduxToolkit"],
    image: `https://api.microlink.io/?url=https://www.zynaxe.com&screenshot=true&meta=false&embed=screenshot.url`,
    imageAlt: "Clean minimal UI of a real-time chat application dashboard",    
    hoverRotate: "group-hover:rotate-1",
  },
  {
  title: "Payrit",
  description:
    "Contributed to Payrit, a Nigerian fintech platform making cashless payments accessible to everyone. Built fast, intuitive interfaces supporting scan-to-pay, interbank transfers, cross-border payments, and subscription-based transfer plans — all optimized for speed and reliability.",
  tags: ["React", "React Native", "Tailwind", "TypeScript"],
  image: "https://api.microlink.io/?url=https%3A%2F%2Fpayrit.com&screenshot=true&meta=false&embed=screenshot.url&type=jpeg",
  imageAlt: "Payrit fintech payment app landing page",
  offset: true,
  hoverRotate: "group-hover:-rotate-1",
},
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <AnimatedSection 
      direction={isEven ? "left" : "right"}
      delay={index * 0.1}
    >
      <div className={`group relative flex flex-col ${project.offset ? "md:mt-24" : ""}`}>
        {/* Image */}
        <motion.div 
          className="relative aspect-16/10 overflow-hidden rounded-xl bg-surface-container-high mb-8 shadow-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover transition-transform duration-700 group-hover:scale-110 ${project.hoverRotate}`}
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary-container/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
            <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">            
            </div>
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div 
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {project.tags.map((tag, idx) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-[0.6rem] uppercase tracking-widest font-bold"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Title & Description */}
        <motion.h3 
          className="text-3xl font-headline font-bold text-on-surface mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {project.title}
        </motion.h3>
        <motion.p 
          className="text-on-primary-container font-body leading-relaxed mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {project.description}
        </motion.p>
      </div>
    </AnimatedSection>
  );
}

export default function Projects() {
  return (
    <section className="py-32 bg-surface-dim overflow-hidden w-full" id="work">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <AnimatedSection direction="up" className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="font-headline text-5xl font-bold tracking-tighter mb-4 text-on-surface">
              My projects
            </h2>
            <p className="text-on-surface-variant text-lg">
             A curated collection of interfaces I designed and deployed, blending clean design with smooth performance.
            </p>
          </div>
          <div className="flex gap-4">
          </div>
        </AnimatedSection>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}