"use client";

import { useState } from "react";
import Logo from "@/components/Logo";

const navigation = [
  { label: "Why Site-Wiz", href: "#why" },
  { label: "What's Included", href: "#included" },
  { label: "Our Story", href: "#our-story" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 bottom-4 z-50 px-4 sm:bottom-5 sm:px-6 lg:bottom-6">
      <div className="relative mx-auto max-w-5xl">

        {/* Mobile CTA */}
        <a
          href="#get-started"
          className="group absolute bottom-[calc(100%+0.65rem)] right-0 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--teal-500)] px-5 text-sm font-black text-white shadow-[0_15px_40px_rgba(9,43,42,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--teal-600)] hover:shadow-[0_20px_45px_rgba(53,203,184,0.25)] md:hidden"
        >
          <span className="text-white">Build My Website</span>
          <span className="text-white transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        {/* Main floating dock */}
        <div className="flex min-h-[60px] items-center gap-2 rounded-[2rem] border border-white/15 bg-[var(--ink)] px-2 py-2 shadow-[0_20px_70px_rgba(9,43,42,0.28)] backdrop-blur-2xl sm:min-h-[64px]">

          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-white/15 sm:size-12 md:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={
                  "block h-0.5 w-4 rounded-full bg-white transition-transform duration-300 " +
                  (menuOpen ? "translate-y-1 rotate-45" : "")
                }
              />
              <span
                className={
                  "block h-0.5 w-4 rounded-full bg-white transition-transform duration-300 " +
                  (menuOpen ? "-translate-y-1 -rotate-45" : "")
                }
              />
            </span>
          </button>

          {/* Mobile brand + tagline */}
          <div className="flex min-w-0 flex-1 items-center justify-between gap-3 px-2 sm:px-3 md:hidden">
            <a
              href="#top"
              aria-label="Site-Wiz home"
              className="shrink-0"
            >
              <span className="text-base font-black tracking-[-0.06em] text-white">
                site
                <span className="text-[var(--teal-400)]">-wiz</span>
              </span>
            </a>

            <span className="truncate text-[8px] font-black uppercase tracking-[0.12em] text-white/45 min-[380px]:text-[9px]">
              Websites • Built Different
            </span>
          </div>

          {/* Desktop logo */}
          <a
            href="#top"
            aria-label="Site-Wiz home"
            className="ml-2 hidden shrink-0 transition-transform duration-300 hover:scale-105 sm:flex"
          >
            <Logo dark compact />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2.5 text-sm font-bold !text-white transition-all duration-300 hover:bg-white/10 hover:!text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#get-started"
            className="group hidden min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--teal-500)] px-5 text-sm font-black !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--teal-600)] hover:shadow-[0_10px_30px_rgba(53,203,184,0.25)] md:inline-flex"
          >
            <span className="!text-white">Build My Website</span>
            <span className="!text-white transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Mobile menu */}
        <div
          className={
            "absolute bottom-[calc(100%+0.65rem)] left-0 right-0 origin-bottom transition-all duration-300 md:hidden " +
            (menuOpen
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-3 scale-[0.98] opacity-0")
          }
        >
          <nav className="rounded-[2rem] border border-white/15 bg-[var(--ink)] p-2 shadow-[0_20px_70px_rgba(9,43,42,0.32)] backdrop-blur-2xl">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-12 items-center justify-between rounded-2xl px-5 py-3.5 text-sm font-bold !text-white transition-all duration-300 hover:bg-white/10"
              >
                <span className="!text-white">{item.label}</span>
                <span className="!text-white/40">→</span>
              </a>
            ))}

            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="mt-1 flex min-h-12 items-center justify-between rounded-2xl bg-white/10 px-5 py-3.5 text-sm font-bold !text-white transition-all duration-300 hover:bg-white/15"
            >
              <span className="!text-white">Pricing</span>
              <span className="!text-[var(--teal-400)]">→</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}