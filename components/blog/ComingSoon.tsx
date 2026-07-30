export default function ComingSoon() {
  return (
    <div>
      <p className="max-w-lg text-lg text-ink/60">
        I&apos;m planning to write about machine learning research, systems engineering, and
        projects I&apos;m building. Posts are on the way.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex h-40 flex-col justify-between rounded-2xl border border-dashed border-ink/15 p-5 text-ink/30"
          >
            <div className="h-3 w-2/3 rounded bg-ink/10" />
            <div className="space-y-2">
              <div className="h-2 w-full rounded bg-ink/10" />
              <div className="h-2 w-4/5 rounded bg-ink/10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
