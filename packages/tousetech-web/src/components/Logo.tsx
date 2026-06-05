export default function Logo() {
  return (
    <svg
      viewBox="0 0 44 44"
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

      {/* White T — slim crossbar, single diagonal slat, narrow stem */}
      <path
        d="M3,6 L22,6 L20,13 L15,13 L15,39 L10,39 L10,13 L3,13 Z"
        fill="white"
      />

      {/* Blue T — mirrored slat, matching slim proportions */}
      <path
        d="M23,6 L41,6 L41,13 L34,13 L34,39 L29,39 L29,13 L21,13 Z"
        fill="url(#tt-blue)"
      />
    </svg>
  );
}
