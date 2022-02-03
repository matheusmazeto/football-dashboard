function SunIcon({
  size = 20,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      className={className}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="scale(1.42857)"
      >
        <circle cx="7" cy="7" r="2.5" />
        <path d="M13.5 7L11.16 8.72 11.6 11.6 8.72 11.16 7 13.5 5.28 11.16 2.4 11.6 2.84 8.72 0.5 7 2.84 5.28 2.4 2.4 5.28 2.84 7 0.5 8.72 2.84 11.6 2.4 11.16 5.28 13.5 7z" />
      </g>
    </svg>
  );
}

export { SunIcon };
