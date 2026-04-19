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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsRJLdXEEHMS52w9IHSGybGLRNUHGHJNdiHr7oeORizIx5O8B3OoBD8BKXWi_gQHNpNU1R8A_RfmgVPuEcn4CqiEoatQxi6_sxjTT606ST9WwrPG2w0SjiWh0jA2lnoxc5Faqs2A8NSAJXPnGYLQ6QpR0w1_3ODrdeyR-W91L2flrSbbnJfi4IibAWFTflZXKgkH2iRBZ0TtA4KI7DISCCz9IIxxe_vFjA8AZI3l49J4FKtfY0pAatvsemjdCBpQODW7s8Jn4GhhY",
    imageAlt: "Clean minimal UI of a real-time chat application dashboard",    
    hoverRotate: "group-hover:rotate-1",
  },
  {
    title: "Vertex",
    description:
      "Interactive 3D data visualization suite for crypto assets. Real-time rendering of market sentiment via Three.js shaders.",
    tags: ["React", "Three.js", "D3.js"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBf5K6Pm0UwJ-GwjgWgb2lfKdQjDMjbq6etzT8Rf2LC3wbkbxO-rOUCV-VA3JymFN70Uv679YP7qpYu603q5-6gUsiZiA8NiKvlhMHbY4qrrfVN7K3--zNWad78qt-h-FvH6uf69UchIecKkVwOe_8yxDzCtRM_FV981JTgoV6Y9okEjlFnyZOwOGOYoc7RO3Yf94iCdARMsMi84I__0eoDGipv62650qxIVaeSMxe0tbJALR-PZNmw8RpC8RtGDFH27R3_RLMjv1A",
    imageAlt: "Futuristic data visualization dashboard with 3D graphs",   
    offset: true,
    hoverRotate: "group-hover:-rotate-1",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={`group relative flex flex-col ${project.offset ? "md:mt-24" : ""}`}>
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface-container-high mb-8 shadow-2xl">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className={`object-cover transition-transform duration-700 group-hover:scale-110 ${project.hoverRotate}`}
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary-container/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
          <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <button className="px-6 py-2 rounded-full bg-on-surface text-surface-container-lowest font-bold text-sm uppercase tracking-widest">
              Case Study
            </button>
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
              Selected Artifacts
            </h2>
            <p className="text-on-surface-variant text-lg">
              A curated collection of interfaces designed and deployed with
              surgical precision.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-tertiary scale-150">
              arrow_right_alt
            </span>
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