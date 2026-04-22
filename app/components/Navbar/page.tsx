"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";

const navLinks = [
  { href: "#expertise", label: "Expertise" },
  { href: "#work", label: "Work" },  
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleDownload  = () => {
    const link = document.createElement('a');
    link.href = "/Mubarak Abiola's Resume.pdf";
    link.download = "Mubarak's Resume";
    link.click();
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl shadow-[0_0_60px_-15px_rgba(255,190,11,0.04)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20 font-headline tracking-tight">
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter text-on-surface">
          MUBARAK
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                activeSection === link.href
                  ? "text-secondary font-bold border-b-2 border-secondary pb-1 hover:text-tertiary transition-colors duration-300"
                  : "text-on-surface-variant font-medium hover:text-tertiary transition-colors duration-300"
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button 
        onClick={handleDownload}
        className="flex gap-2 px-6 py-2.5 rounded-full border border-tertiary/20 text-secondary font-semibold hover:bg-secondary hover:text-on-secondary transition-all duration-300 active:scale-95">
          Download Resume <Download />
        </button>
      </div>
    </nav>
  );
}