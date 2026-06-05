export default function Logo() {
  return (
    <svg
      viewBox="0 0 55 56"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TouseTech logo"
      role="img"
    >
      <defs>
        <linearGradient id="tt-white-fade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="tt-blue-fade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* White T — italic parallelogram crossbar, fades right toward split */}
      <path d="M5,6 L25,6 L22,15 L2,15 Z" fill="url(#tt-white-fade)" />
      <rect x="11" y="14" width="5" height="36" fill="url(#tt-white-fade)" />

      {/* Blue T — same shape, fades left toward split, 5px diagonal gap */}
      <path d="M30,6 L50,6 L47,15 L27,15 Z" fill="url(#tt-blue-fade)" />
      <rect x="36" y="14" width="5" height="36" fill="url(#tt-blue-fade)" />
    </svg>
  );
}
