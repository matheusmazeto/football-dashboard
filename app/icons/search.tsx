function SearchIcon({
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
        <circle cx="5.92" cy="5.92" r="5.42" />
        <path d="M13.5 13.5L9.75 9.75" />
      </g>
    </svg>
  );
}

export { SearchIcon };
