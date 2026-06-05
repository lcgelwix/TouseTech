export default function Logo() {
  return (
    <svg
      viewBox="0 0 52 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TouseTech logo"
      role="img"
    >
      <defs>
        <linearGradient id="tt-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>

      {/* White T — italic parallelogram crossbar + slim stem */}
      <path d="M5,4 L25,4 L21,14 L1,14 Z" fill="white" />
      <rect x="10" y="13" width="6" height="22" fill="white" />

      {/* Blue T — identical shape, 4px diagonal gap from white */}
      <path d="M29,4 L49,4 L45,14 L25,14 Z" fill="url(#tt-blue)" />
      <rect x="34" y="13" width="6" height="22" fill="url(#tt-blue)" />
    </svg>
  );
}
