import BackHome from "./BackHome";

export default function SwissShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="animate-fade-in-up min-h-screen bg-white">
      <BackHome />
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-24 md:px-10">
        <h1 className="font-display text-5xl font-bold tracking-tight text-ink md:text-6xl">
          {title}
        </h1>
        <div className="mt-2 h-1 w-16 bg-accent-violet" />
        <div className="mt-14">{children}</div>
      </div>
    </div>
  );
}
