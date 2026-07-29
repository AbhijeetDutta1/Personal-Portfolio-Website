"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="bg-[#f7f8fc] px-8 py-24">
      <div className="mx-auto max-w-xl">
        <h2 className="text-center font-display text-4xl font-bold text-ink md:text-5xl">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block font-medium text-ink">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border-2 border-ink/10 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-accent-violet"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block font-medium text-ink">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border-2 border-ink/10 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-accent-violet"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block font-medium text-ink">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-y rounded-lg border-2 border-ink/10 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-accent-violet"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-accent-gradient px-8 py-4 font-bold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" && <Loader2 size={18} className="animate-spin" />}
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <div className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-green-700">
              <CheckCircle2 size={20} />
              Thank you for your message! I&apos;ll get back to you soon.
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-red-700">
              <XCircle size={20} />
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
