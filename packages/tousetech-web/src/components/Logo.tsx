export default function Logo() {
  return (
    <svg
      viewBox="0 0 92 70"
      width="53"
      height="40"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TouseTech logo"
      role="img"
    >
      {/* White T — thick crossbar, slant matches reference, pointed stem bottom */}
      <path
        d="M0,14 L21,0 L54,0 L33,14 L25,14 L25,64 L9,70 L0,64 Z"
        fill="#FFFFFF"
      />

      {/* Blue T — 6px diagonal slat gap from white, identical proportions */}
      <path
        d="M60,0 L92,0 L71,14 L63,14 L63,64 L47,70 L39,64 L39,14 Z"
        fill="#007BFF"
      />
    </svg>
  );
}
