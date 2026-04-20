export default function PalmettoMark({
  className = "",
  title = "Palmetto Paralegal logo",
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {title ? <title>{title}</title> : null}
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2">
        <circle cx="32" cy="32" r="28" opacity="0.35" />
      </g>
      <g fill="currentColor">
        <path d="M31 18c.6 3 .6 6 0 10c-.6-4-.6-7 0-10Z" />
        <path d="M33 18c-.6 3-.6 6 0 10c.6-4 .6-7 0-10Z" />
        <path d="M24 21c3 2 5 5 7 10c-4-2-7-5-7-10Z" opacity="0.9" />
        <path d="M40 21c-3 2-5 5-7 10c4-2 7-5 7-10Z" opacity="0.9" />
        <path d="M18 27c4 1 8 4 11 9c-5-1-9-4-11-9Z" opacity="0.8" />
        <path d="M46 27c-4 1-8 4-11 9c5-1 9-4 11-9Z" opacity="0.8" />
        <path d="M30.4 33h3.2l1.2 9h-5.6Z" />
      </g>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2">
        <path d="M22 46h20" />
        <path d="M24 50h16" opacity="0.55" />
      </g>
    </svg>
  );
}
