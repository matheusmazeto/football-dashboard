function MenuIcon({
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
        <path d="M13.5 2L0.5 2" />
        <path d="M13.5 7L0.5 7" />
        <path d="M13.5 12L0.5 12" />
      </g>
    </svg>
  );
}

export { MenuIcon };
