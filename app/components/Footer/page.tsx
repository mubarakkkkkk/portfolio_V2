import Link from "next/link";
const footerLinks = [
  { label: "Github", href: "https://github.com/mubarakkkkkk" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black w-full py-12">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6 font-label text-[0.6875rem] uppercase tracking-widest text-on-surface-variant">
        {/* Copyright */}
        <div className="order-2 md:order-1">
          © 2024 THE OBSIDIAN LIGHT. ENGINEERED WITH RESTRAINT.
        </div>

        {/* Links */}
        <div className="order-1 md:order-2 flex gap-8">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-on-primary-container hover:text-secondary transition-all underline-offset-4 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}