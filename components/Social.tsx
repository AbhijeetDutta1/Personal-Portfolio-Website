import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  {
    name: "GitHub",
    href: "https://github.com/AbhijeetDutta1",
    icon: Github,
    external: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/abhijeet-duttaucsb",
    icon: Linkedin,
    external: true,
  },
  {
    name: "Email",
    href: "mailto:abhiduttaca@gmail.com",
    icon: Mail,
    external: false,
  },
];

export default function Social() {
  return (
    <section id="social" className="bg-white px-8 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-4xl font-bold text-ink md:text-5xl">
          Connect With Me
        </h2>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="flex min-w-[150px] flex-col items-center gap-3 rounded-2xl border border-ink/5 bg-white px-8 py-8 shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl"
              >
                <Icon size={40} className="text-accent-violet" />
                <span className="font-medium text-ink">{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
