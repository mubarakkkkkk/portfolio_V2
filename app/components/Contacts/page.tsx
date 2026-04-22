"use client";

import { FormEvent } from "react";

const socialLinks = [
  { label: "GITHUB", href: "https://github.com/mubarakkkkkk", hoverColor: "hover:text-tertiary" },
  { label: "LINKEDIN", href: "#", hoverColor: "hover:text-secondary" }
];

export default function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Add your form submission logic here
  }

  return (
    <section className="py-32 bg-surface" id="contact">
      <div className="max-w-4xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-5xl font-bold tracking-tighter text-on-surface mb-6">
            Let&apos;s Build Something
          </h2>
          <p className="text-on-primary-container text-lg">
            Currently accepting freelance commissions and full-time opportunities.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-12" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Name Field */}
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                placeholder=" "
                className="peer w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 px-0 text-on-surface focus:ring-0 focus:border-tertiary transition-all placeholder-transparent outline-none"
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-4 text-on-primary-container transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-tertiary uppercase tracking-widest font-bold text-xs"
              >
                Your Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                placeholder=" "
                className="peer w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 px-0 text-on-surface focus:ring-0 focus:border-tertiary transition-all placeholder-transparent outline-none"
              />
              <label
                htmlFor="email"
                className="absolute left-0  text-on-primary-container transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-tertiary uppercase tracking-widest font-bold text-xs -top-4"
              >
                Email Address
              </label>
            </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder=" "
              className="peer w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 px-0 text-on-surface focus:ring-0 focus:border-tertiary transition-all placeholder-transparent resize-none outline-none"
            />
            <label
              htmlFor="message"
              className="absolute left-0  text-on-primary-container transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-tertiary uppercase tracking-widest font-bold text-xs -top-4"
            >
              Tell me about the project
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="group relative px-12 py-5 overflow-hidden rounded-full font-bold uppercase tracking-widest text-sm"
            >
              <span className="absolute inset-0 bg-secondary transition-transform group-hover:scale-105" />
              <span className="relative text-on-secondary flex items-center gap-2">
                Send Transmission
                <span className="material-symbols-outlined text-sm">send</span>
              </span>
            </button>
          </div>
        </form>

        {/* Social Links */}
        <div className="mt-24 flex flex-col items-center gap-8">
          <div className="flex gap-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-on-primary-container ${link.hoverColor} transition-colors flex items-center gap-2 font-label text-[0.6875rem] uppercase tracking-widest`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}