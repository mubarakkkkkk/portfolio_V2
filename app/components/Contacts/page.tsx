"use client";

import { FormEvent, useState } from "react";

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
            <div className="relative">
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
            </div>

            <div className="relative">
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
            </div>
          </div>

          <div className="relative">
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
          </div>

          {/* Feedback messages */}
          {status === 'success' && (
            <p className="text-center text-green-400 text-sm uppercase tracking-widest">
              Message sent successfully!
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-red-400 text-sm uppercase tracking-widest">
              Something went wrong. Please try again.
            </p>
          )}

          <div className="flex justify-center">
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