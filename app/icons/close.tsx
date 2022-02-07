function CloseIcon({
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
        <path d="M13.5 0.5L0.5 13.5" />
        <path d="M0.5 0.5L13.5 13.5" />
      </g>
    </svg>
  );
}

export { CloseIcon };
