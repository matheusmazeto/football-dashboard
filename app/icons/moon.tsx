function MoonIcon({
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
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 10.48A6.55 6.55 0 016.46.5a6.55 6.55 0 001 13A6.46 6.46 0 0013 10.39a6.79 6.79 0 01-1 .09z"
        transform="scale(1.42857)"
      />
    </svg>
  );
}

export { MoonIcon };
