const skillCategories = [
  {
    title: "Frontend Core",
    description:
      "Architecting robust client-side applications with modern frameworks and type-safety.",
    skills: ["React 18", "Next.js 14", "TypeScript", "Redux Toolkit", "TanStack Query"],
    icon: "terminal",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    colSpan: "md:col-span-2 md:row-span-2",
    large: true,
  },
  {
    title: "Development Tools",
    description: null,
    skills: ["Git / Github", "Docker", "Vercel", "Storybook"],
    icon: null,
    iconColor: null,
    iconBg: null,
    colSpan: "md:col-span-2",
    large: false,
  },
  {
    title: "Styling & Motion",
    description: null,
    skills: ["Tailwind CSS", "Framer Motion", "Radix UI", "CSS Modules"],
    icon: null,
    iconColor: null,
    iconBg: null,
    colSpan: "md:col-span-2",
    large: false,
  },
];

export default function Skills() {
  return (
    <section className="py-24 bg-surface-container-lowest" id="process">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface mb-16 text-center">
          Technical Domain
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`${category.colSpan} p-8 rounded-xl glass-card border border-outline-variant/10 flex flex-col justify-between`}
            >
              <div>
                {/* Icon (large card only) */}
                {category.icon && (
                  <div
                    className={`w-12 h-12 rounded-full ${category.iconBg} flex items-center justify-center mb-6`}
                  >
                    <span className={`material-symbols-outlined ${category.iconColor}`}>
                      {category.icon}
                    </span>
                  </div>
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
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}