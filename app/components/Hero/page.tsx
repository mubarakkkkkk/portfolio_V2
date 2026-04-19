

export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex flex-col justify-center items-center px-8 overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-on-secondary-container/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-tertiary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl text-center">
        {/* Badge */}
        <span className="inline-block py-1 px-3 mb-6 rounded-full bg-surface-container-high text-on-surface-variant text-[0.6875rem] uppercase tracking-widest font-medium">
          Available for new projects
        </span>

        {/* Headline */}
        <h1 className="font-headline text-5xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
          Frontend Developer Building{" "}
          <span className="text-gradient">Scalable &amp; Interactive</span> Web
          Experiences
        </h1>

        {/* Subheading */}
        <p className="font-body text-on-primary-container text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Specializing in React, Next.js, and technical restraint. I transform
          complex problems into high-performance, pixel-perfect digital
          interfaces.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#work"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-secondary to-tertiary text-on-secondary font-bold text-lg hover:shadow-[0_0_40px_-5px_rgba(224,182,255,0.4)] transition-all"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-outline-variant/30 glass-card text-on-surface font-bold text-lg hover:bg-surface-variant/40 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}