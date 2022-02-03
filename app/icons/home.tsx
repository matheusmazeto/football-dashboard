function HomeIcon({
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
        <path d="M0.5 7L7 0.5 13.5 7" />
        <path d="M2.5 8.5L2.5 13.5 11.5 13.5 11.5 8.5" />
      </g>
    </svg>
  );
}

export { HomeIcon };
