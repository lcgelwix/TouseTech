export default function Logo() {
  return (
    <svg
      viewBox="0 0 52 56"
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

      {/* White T — upper position, behind */}
      <path d="M8,9 L34,9 L28,19 L2,19 Z" fill="white" />
      <rect x="14" y="18" width="6" height="34" fill="white" />

      {/* Blue T — lower-right, in front, overlaps white slightly */}
      <path d="M20,17 L48,17 L42,29 L14,29 Z" fill="url(#tt-blue)" />
      <rect x="28" y="28" width="6" height="24" fill="url(#tt-blue)" />
    </svg>
  );
}
