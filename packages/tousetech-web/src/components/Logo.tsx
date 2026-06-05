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

      {/* White T — diagonal right edge creates the split */}
      <path d="M4,8 L23,8 L20,18 L4,18 Z" fill="white" />
      <rect x="10" y="17" width="10" height="22" rx="1.5" fill="white" />

      {/* Blue T — diagonal left edge mirrors the split */}
      <path d="M24,8 L40,8 L40,18 L21,18 Z" fill="url(#tt-blue)" />
      <rect x="24" y="17" width="10" height="22" rx="1.5" fill="url(#tt-blue)" />
    </svg>
  );
}
