export default function Logo() {
  return (
    <svg
      viewBox="0 0 73 60"
      width="42"
      height="35"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TouseTech logo"
      role="img"
    >
      {/* White T — right edge trimmed to the slat line */}
      <path d="M0,10 L15,0 L40,0 L25,10 L23,10 L23,50 L8,60 L0,50 Z" fill="#FFFFFF" />

      {/* Blue T — 3px diagonal slat gap separates from white */}
      <path d="M43,0 L73,0 L58,10 L51,10 L51,50 L36,60 L28,50 L28,10 Z" fill="#007BFF" />
    </svg>
  );
}
