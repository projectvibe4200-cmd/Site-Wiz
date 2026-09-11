type LogoProps = {
  dark?: boolean;
  compact?: boolean;
};

export default function Logo({
  dark = false,
  compact = false,
}: LogoProps) {
  const iconColor = dark ? "#092B2A" : "#35CBB8";
  const wrapperGap = compact ? "gap-2" : "gap-2.5";
  const iconSize = compact ? "size-8" : "size-9";
  const svgSize = compact ? "size-5" : "size-6";
  const iconBackground = dark ? "bg-white" : "bg-[var(--ink)]";
  const wordmarkColor = dark ? "text-white" : "text-[var(--ink)]";
  const accentColor = dark
    ? "text-[var(--teal-400)]"
    : "text-[var(--teal-600)]";

  return (
    <span className={"inline-flex items-center " + wrapperGap}>
      <span
        className={
          "relative grid " +
          iconSize +
          " shrink-0 place-items-center overflow-hidden rounded-[0.9rem] " +
          iconBackground
        }
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={svgSize}
          aria-hidden="true"
        >
          <rect
            x="6"
            y="7"
            width="28"
            height="22"
            rx="5"
            stroke={iconColor}
            strokeWidth="2.5"
          />

          <path
            d="M11 14H29"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
          />

          <circle cx="12" cy="11" r="1.2" fill={iconColor} />
          <circle cx="16" cy="11" r="1.2" fill={iconColor} />

          <path
            d="M13 21H24"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M13 25H20"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M27 19L30.5 22.5L27 26"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {!compact && (
        <span
          className={
            "text-[1.15rem] font-black tracking-[-0.065em] " +
            wordmarkColor
          }
        >
          site
          <span className={accentColor}>-wiz</span>
        </span>
      )}
    </span>
  );
}