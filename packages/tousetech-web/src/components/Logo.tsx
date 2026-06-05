export default function Logo() {
  return (
    <svg
      viewBox="0 0 68 60"
      width="56"
      height="50"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TouseTech logo"
      role="img"
    >
      {/* White T — reference paths scaled 0.5x, 3px left margin */}
      <path
        d="M3,10 L18,0 L48,0 L33,10 L26,10 L26,50 L11,60 L3,50 Z"
        fill="#FFFFFF"
      />
      {/* Blue T — overlaps right side of white, renders on top */}
      <path
        d="M38,0 L68,0 L53,10 L46,10 L46,50 L31,60 L23,50 L23,10 Z"
        fill="#007BFF"
      />
    </svg>
  );
}
