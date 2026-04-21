import Image from "next/image";

const stats = [
  { value: "3+", label: "Years Exp.", color: "text-tertiary" },
  { value: "20+", label: "Projects", color: "text-secondary" },
];

export default function About() {
  return (
    <section className="py-24 bg-surface-container-lowest" id="expertise">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7">
          <span className="text-tertiary font-label text-[0.6875rem] uppercase tracking-[0.2em] mb-4 block">
            Crafting the digital void
          </span>
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-on-surface mb-8">
            Engineering with Intent
          </h2>
          <div className="space-y-6 text-on-surface-variant font-body text-lg leading-relaxed max-w-2xl">
            <p>
              I believe that performance is a design feature. My approach to
              frontend development prioritizes speed, accessibility, and
              architectural longevity.
            </p>
            <p>
              By blending deep technical expertise in the React ecosystem with a
              keen eye for editorial-grade design, I create web applications
              that feel as premium as they perform.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className={`text-3xl font-headline font-extrabold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-on-primary-container mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Card */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute -inset-1 bg-secondary/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <div className="relative aspect-square rounded-xl overflow-hidden glass-card border border-outline-variant/10">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuARM1hgzuyO2_oDY4dmH7uDT_oNj2rnGqyqaoCKLm8EfEEnGph7NQs69YLCLEs3Wd-eNaB75FbKjCawOhEdLvqlf-ZEMzpS7QWd7UrZHO3GkkGsL80FvK3vwWsMBvrjwBWN0ZoOdOkq_hf8larZiL4eGRQr5L_sfbgcFEmzGjIgCQ2z84l0CVGFitXmuRkc-Scraav-Zk_QzRgPziQ8kL5aNwYAWD8749oefVR1V9_bma1OifNwvICb39p5eInRbuo6KhLfEYkRag0"
              alt="Abstract macro shot of tech hardware with purple and cyan neon light refractions"
              fill
              className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}