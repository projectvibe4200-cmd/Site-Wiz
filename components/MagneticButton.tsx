"use client";

import { ReactNode, useRef } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "dark" | "teal" | "light";
  className?: string;
};

export default function MagneticButton({
  children,
  href,
  variant = "dark",
  className = "",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const button = buttonRef.current;

    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    button.style.transform =
      "translate(" +
      x * 0.12 +
      "px, " +
      y * 0.12 +
      "px)";

    const arrow = button.querySelector(
      "[data-magnetic-arrow]"
    ) as HTMLElement | null;

    if (arrow) {
      arrow.style.transform =
        "translate(" +
        x * 0.08 +
        "px, " +
        y * 0.08 +
        "px)";
    }
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;

    if (!button) return;

    button.style.transform = "";

    const arrow = button.querySelector(
      "[data-magnetic-arrow]"
    ) as HTMLElement | null;

    if (arrow) {
      arrow.style.transform = "";
    }
  };

  const variants = {
    dark: "bg-[var(--ink)] border-[var(--ink)]",
    teal: "bg-[var(--teal-500)] border-[var(--teal-500)]",
    light: "bg-white border-[var(--line)]",
  };

  const textColors = {
    dark: "text-white",
    teal: "text-[var(--ink)]",
    light: "text-[var(--ink)]",
  };

  const arrowColors = {
    dark: "bg-white/10 text-white",
    teal: "bg-[var(--ink)]/10 text-[var(--ink)]",
    light: "bg-[var(--ink)]/10 text-[var(--ink)]",
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={
        "group relative inline-flex min-h-14 items-center justify-center gap-3 overflow-hidden rounded-full border px-6 py-3 text-sm font-black shadow-[0_12px_35px_rgba(9,43,42,0.08)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(9,43,42,0.16)] " +
        variants[variant] +
        " " +
        className
      }
    >
      <span
        className={
          "relative z-10 block whitespace-nowrap " +
          textColors[variant]
        }
      >
        {children}
      </span>

      <span
        data-magnetic-arrow
        className={
          "relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 " +
          arrowColors[variant]
        }
        aria-hidden="true"
      >
        <span className="text-base leading-none">→</span>
      </span>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-full"
      />
    </a>
  );
}