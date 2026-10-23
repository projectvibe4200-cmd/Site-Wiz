
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
          className="group absolute bottom-[calc(100%+0.65rem)] right-0 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-[#FF2D95]/95 px-5 text-sm font-black text-[#0A0A0A] shadow-[0_10px_35px_rgba(255,45,149,0.24)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,45,149,0.38)] md:hidden"
        >
          Build My Website
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>

        {/* Liquid-glass navigation dock */}
        <div className="site-glass-nav relative isolate flex min-h-[60px] items-center gap-2 rounded-[2rem] px-2 py-2 sm:min-h-[64px]">
          {/* Glass highlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
          />

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.07] !text-white transition-all duration-300 hover:border-[#38BDF8]/40 hover:bg-[#007BA7]/25 md:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-4 rounded-full bg-white transition-transform duration-300 ${
                  menuOpen ? "translate-y-1 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 rounded-full bg-white transition-transform duration-300 ${
                  menuOpen ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </span>
          </button>

          {/* Mobile wordmark */}
          <div className="relative z-10 flex min-w-0 flex-1 items-center justify-between gap-3 px-2 sm:px-3 md:hidden">
            <a
              href="#top"
              aria-label="Site-Wiz home"
              className="shrink-0 text-base font-black tracking-[-0.06em] !text-white"
            >
              site<span className="text-[#FF2D95]">-wiz</span>
            </a>

            <span className="truncate text-[8px] font-black uppercase tracking-[0.12em] text-white/60 min-[380px]:text-[9px]">
              Websites • Built Different
            </span>
          </div>

          {/* Desktop logo */}
          <a
            href="#top"
            aria-label="Site-Wiz home"
            className="relative z-10 ml-2 hidden shrink-0 transition-transform duration-300 hover:scale-105 sm:flex"
          >
            <Logo dark compact />
          </a>

          {/* Desktop navigation */}
          <nav className="relative z-10 hidden flex-1 items-center justify-center gap-1 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-transparent px-4 py-2.5 text-sm font-bold !text-white/85 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.08] hover:!text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#get-started"
            className="group relative z-10 hidden min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-white/25 bg-gradient-to-br from-[#FF58AB] to-[#FF2D95] px-5 text-sm font-black text-[#0A0A0A] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,45,149,0.3)] md:inline-flex"
          >
            Build My Website
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Liquid-glass mobile menu */}
        <div
          className={`absolute bottom-[calc(100%+0.65rem)] left-0 right-0 origin-bottom transition-all duration-300 md:hidden ${
            menuOpen
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-3 scale-[0.98] opacity-0"
          }`}
          aria-hidden={!menuOpen}
        >
          <nav className="site-glass-menu relative isolate overflow-hidden rounded-[2rem] p-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />

            {[...navigation, { label: "Pricing", href: "#pricing" }].map(
              (item) => (
                <a
                  key={item.href}
                  href={item.href}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => setMenuOpen(false)}
                  className="relative flex min-h-12 items-center justify-between rounded-2xl border border-transparent px-5 py-3.5 text-sm font-bold !text-white transition-all duration-300 hover:border-white/10 hover:bg-white/[0.08] hover:!text-white"
                >
                  {item.label}
                  <span className="!text-[#FF2D95]">→</span>
                </a>
              ),
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
