"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#expertise", label: "Expertise" },
  { href: "#work", label: "Work" },  
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/Mubarak Abiola's Resume.pdf";
    link.download = "Mubarak's Resume";
    link.click();
  };

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl shadow-[0_0_60px_-15px_rgba(255,190,11,0.04)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 sm:px-8 h-16 sm:h-20 font-headline tracking-tight">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-black tracking-tighter text-on-surface">
          MUBARAK
        </div>

        {/* Desktop Nav Links */}
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

        {/* Desktop CTA Button */}
        <button 
          onClick={handleDownload}
          className="hidden md:flex gap-2 px-6 py-2.5 rounded-full border border-tertiary/20 text-secondary font-semibold hover:bg-secondary hover:text-on-secondary transition-all duration-300 active:scale-95"
        >
          Download Resume <Download size={20} />
        </button>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-on-surface hover:text-secondary transition-colors duration-300"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bottom-0 z-40 bg-black/95 backdrop-blur-2xl transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`flex flex-col items-center gap-6 pt-10 px-8 transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleMobileLinkClick}
              className={`text-lg font-medium transition-colors duration-300 ${
                activeSection === link.href
                  ? "text-secondary font-bold"
                  : "text-on-surface-variant hover:text-tertiary"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Download Button */}
          <button
            onClick={() => {
              handleDownload();
              handleMobileLinkClick();
            }}
            className="flex gap-2 mt-4 px-8 py-3 rounded-full border border-tertiary/20 text-secondary font-semibold hover:bg-secondary hover:text-on-secondary transition-all duration-300 active:scale-95"
          >
            Download Resume <Download size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}