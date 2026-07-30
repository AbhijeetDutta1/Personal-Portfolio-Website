"use client";

import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import ContactModal from "./ContactModal";

export default function WelcomeCard() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <div className="w-full max-w-sm rounded-3xl border border-white/20 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-xl justify-self-center">
        <h1 className="font-display text-2xl font-bold text-white">Abhijeet Dutta</h1>
        <p className="mt-1 text-sm font-medium text-white/80">
          Computer Science &amp; Data Science @ UCSB
        </p>
        <p className="mt-4 text-sm leading-relaxed text-white/80">
          Building intelligent systems at the intersection of ML, data science, and
          computational research.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="https://github.com/AbhijeetDutta1"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/abhijeet-duttaucsb"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
          >
            <Linkedin size={18} />
          </a>
          <button
            onClick={() => setContactOpen(true)}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
          >
            <Mail size={18} />
          </button>
        </div>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
