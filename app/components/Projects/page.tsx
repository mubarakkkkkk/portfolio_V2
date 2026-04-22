import Image from "next/image";

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

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={`group relative flex flex-col ${project.offset ? "md:mt-24" : ""}`}>
      {/* Image */}
      <div className="relative aspect-16/10 overflow-hidden rounded-xl bg-surface-container-high mb-8 shadow-2xl">
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
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-[0.6rem] uppercase tracking-widest font-bold"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title & Description */}
      <h3 className="text-3xl font-headline font-bold text-on-surface mb-2">
        {project.title}
      </h3>
      <p className="text-on-primary-container font-body leading-relaxed mb-6">
        {project.description}
      </p>
      
    </div>
  );
}

export default function Projects() {
  return (
    <section className="py-32 bg-surface-dim" id="work">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
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
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}