export default function CurrentWork() {
  return (
    <section id="work" className="bg-[#f7f8fc] px-8 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-display text-4xl font-bold text-ink md:text-5xl">
          Current Work
        </h2>
        <div className="mt-12 rounded-2xl bg-accent-gradient p-10 text-white shadow-xl shadow-accent-violet/20 md:p-12">
          <h3 className="font-display text-2xl font-semibold">What I&apos;m Working On</h3>
          <p className="mt-4">
            <strong>Undergraduate Research Assistant @ OPUS Lab</strong> — UC Santa Barbara
          </p>
          <p className="mt-6 leading-relaxed text-white/90">
            Currently focused on enhancing my Neural Network Chess Engine, implementing
            advanced training techniques and exploring novel evaluation architectures to push
            the rating beyond 2000+ ELO.
          </p>
        </div>
      </div>
    </section>
  );
}
