'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  { label: "Github", href: "https://github.com/mubarakkkkkk" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mubarak-abiola-019b47306/" },
];

export default function Footer() {
  return (
    <footer className="bg-black w-full py-12 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6 font-label text-[0.6875rem] uppercase tracking-widest text-on-surface-variant">
        {/* Copyright */}
        <motion.div 
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          09018685567 | abiolamubarakolamide05@gmail.com
        </motion.div>

        {/* Links */}
        <motion.div 
          className="order-1 md:order-2 flex gap-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {footerLinks.map((link, idx) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link
                href={link.href}
                className="text-on-primary-container hover:text-secondary transition-all underline-offset-4 hover:underline"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}