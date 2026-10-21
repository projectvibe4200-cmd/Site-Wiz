
"use client";

import { ReactNode, useRef } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "dark" | "teal" | "light" | "rose" | "blue";
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
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;

    const arrow = button.querySelector<HTMLElement>("[data-magnetic-arrow]");

    if (arrow) {
      arrow.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
    }
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;
    if (!button) return;

    button.style.transform = "";

    const arrow = button.querySelector<HTMLElement>("[data-magnetic-arrow]");

    if (arrow) {
      arrow.style.transform = "";
    }
  };

  const variants = {
    dark: {
      button: "border-white/15 bg-[#0A0A0A]",
      text: "text-white",
      arrow: "bg-white/10 text-white",
      shadow: "hover:shadow-[0_20px_45px_rgba(0,0,0,0.3)]",
    },
    teal: {
      // Legacy name retained for compatibility; now uses cerulean blue.
      button: "border-[#007BA7] bg-[#007BA7]",
      text: "text-white",
      arrow: "bg-white/15 text-white",
      shadow: "hover:shadow-[0_20px_45px_rgba(0,123,167,0.25)]",
    },
    blue: {
      button: "border-[#007BA7] bg-[#007BA7]",
      text: "text-white",
      arrow: "bg-white/15 text-white",
      shadow: "hover:shadow-[0_20px_45px_rgba(0,123,167,0.25)]",
    },
    rose: {
      button: "border-[#FF2D95] bg-[#FF2D95]",
      text: "text-white",
      arrow: "bg-white/15 text-white",
      shadow: "hover:shadow-[0_20px_45px_rgba(255,45,149,0.25)]",
    },
    light: {
      button: "border-white/20 bg-white/[0.06]",
      text: "text-white",
      arrow: "bg-white/10 text-white",
      shadow: "hover:shadow-[0_20px_45px_rgba(0,123,167,0.12)]",
    },
  };

  const style = variants[variant];

  return (
    <a
      ref={buttonRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={[
        "group relative inline-flex min-h-14 items-center justify-center gap-3 overflow-hidden rounded-full border px-6 py-3 text-sm font-black",
        "transition-[transform,box-shadow] duration-300 hover:-translate-y-1",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF2D95]",
        style.button,
        style.shadow,
        className,
      ].join(" ")}
    >
      <span className={`relative z-10 block whitespace-nowrap ${style.text}`}>
        {children}
      </span>

      <span
        data-magnetic-arrow
        className={`relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${style.arrow}`}
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
