export default function Wallpaper() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2b2c6b" />
            <stop offset="45%" stopColor="#5b4b9e" />
            <stop offset="75%" stopColor="#b5709c" />
            <stop offset="100%" stopColor="#f3b988" />
          </linearGradient>
          <linearGradient id="hillFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a4a9e" />
            <stop offset="100%" stopColor="#38356f" />
          </linearGradient>
          <linearGradient id="hillMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3c3a7a" />
            <stop offset="100%" stopColor="#282656" />
          </linearGradient>
          <linearGradient id="hillNear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#26244a" />
            <stop offset="100%" stopColor="#17162f" />
          </linearGradient>
        </defs>

        <rect width="1440" height="900" fill="url(#sky)" />

        <circle cx="1120" cy="230" r="90" fill="#fdf1d8" opacity="0.9" />
        <circle cx="1120" cy="230" r="140" fill="#fdf1d8" opacity="0.15" />

        <path
          d="M0,520 C220,460 380,560 620,500 C860,440 980,540 1200,480 C1320,450 1400,470 1440,500 L1440,900 L0,900 Z"
          fill="url(#hillFar)"
        />
        <path
          d="M0,640 C260,570 460,660 700,600 C940,540 1100,640 1320,580 C1380,565 1420,570 1440,580 L1440,900 L0,900 Z"
          fill="url(#hillMid)"
        />
        <path
          d="M0,760 C300,700 520,780 760,720 C1000,660 1180,760 1440,700 L1440,900 L0,900 Z"
          fill="url(#hillNear)"
        />
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.15)_100%)]" />
    </div>
  );
}
