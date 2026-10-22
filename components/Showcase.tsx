
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const sites = [
  { image: "/showcase/home-services.png", alt: "Home services website design" },
  { image: "/showcase/restaurant.png", alt: "Restaurant website design" },
  { image: "/showcase/professional.png", alt: "Professional services website design" },
  { image: "/showcase/ecommerce.png", alt: "E-commerce website design" },
  { image: "/showcase/fitness.png", alt: "Fitness website design" },
];

export default function Showcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState<"next" | "previous">("next");

  const total = sites.length;
  const current = sites[active];

  const goNext = () => {
    setDirection("next");
    setActive((index) => (index + 1) % total);
  };

  const goPrevious = () => {
    setDirection("previous");
    setActive((index) => (index - 1 + total) % total);
  };

  useEffect(() => {
    if (paused) return;

    const interval = window.setInterval(() => {
      setDirection("next");
      setActive((index) => (index + 1) % total);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [paused, total]);

  return (
    <section
      id="showcase"
      className="relative isolate overflow-hidden bg-[#24272B] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      {/* Blue and rose ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 -z-10 size-[36rem] rounded-full bg-[#007BA7]/15 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 size-[30rem] rounded-full bg-[#FF2D95]/[0.06] blur-[120px]"
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,123,167,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(0,123,167,0.10) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "linear-gradient(to bottom, black, transparent 80%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left: section introduction */}
          <div className="max-w-xl">
            <div className="reveal-up inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-[#FF2D95]">
              <span className="relative flex size-3 items-center justify-center">
                <span className="absolute size-3 animate-ping rounded-full bg-[#FF2D95]/30" />
                <span className="relative size-2 rounded-full bg-[#FF2D95]" />
              </span>
              <span>See the difference</span>
            </div>

            <h2 className="reveal-up mt-6 text-4xl font-black leading-[0.92] tracking-[-0.065em] text-white [animation-delay:100ms] sm:text-5xl lg:text-6xl">
              Your website should sell the business before you do.
            </h2>

            <p className="reveal-up mt-6 max-w-lg text-base leading-7 text-white/60 [animation-delay:200ms] sm:text-lg">
              Site-Wiz isn&apos;t just about putting your business online.
              It&apos;s about creating an experience that makes visitors
              understand who you are, what you offer and how to take the next
              step.
            </p>

            {/* Carousel controls */}
            <div className="reveal-up mt-8 flex items-center gap-3 [animation-delay:300ms]">
              <button
                type="button"
                onClick={goPrevious}
                aria-label="Previous website example"
                className="group grid size-12 place-items-center rounded-full border border-white/10 bg-[#141414] text-white transition-all duration-300 hover:-translate-x-1 hover:border-[#007BA7] hover:bg-[#007BA7]/10"
              >
                <span className="text-lg transition-transform duration-300 group-hover:-translate-x-0.5">
                  ←
                </span>
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next website example"
                className="group grid size-12 place-items-center rounded-full border border-white/10 bg-[#141414] text-white transition-all duration-300 hover:translate-x-1 hover:border-[#FF2D95] hover:bg-[#FF2D95]/10"
              >
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </button>

              <div className="ml-2 flex items-center gap-1.5">
                {sites.map((site, index) => (
                  <button
                    key={site.image}
                    type="button"
                    onClick={() => {
                      setDirection(index > active ? "next" : "previous");
                      setActive(index);
                    }}
                    aria-label={`Show website example ${index + 1}`}
                    aria-current={index === active ? "true" : undefined}
                    className="group flex size-5 items-center justify-center"
                  >
                    <span
                      className={
                        "rounded-full transition-all duration-300 " +
                        (index === active
                          ? "size-2.5 bg-[#FF2D95]"
                          : "size-1.5 bg-white/25 group-hover:bg-[#007BA7]")
                      }
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: website carousel */}
          <div
            className="relative min-w-0"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setPaused(false);
              }
            }}
          >
            {/* Blue halo */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 size-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#007BA7]/20 blur-[100px]"
            />

            {/* Orbit rings */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2.5rem] border border-[#007BA7]/25 sm:-inset-6 sm:rounded-[3rem]"
            />

            <div
              aria-hidden="true"
              className="absolute -inset-7 rounded-[3rem] border border-[#FF2D95]/10 sm:-inset-10 sm:rounded-[4rem]"
            />

            {/* Browser frame */}
            <div className="relative z-20 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#141414] p-2 shadow-[0_35px_100px_rgba(0,0,0,0.55)] sm:rounded-[1.75rem] sm:p-3">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 rounded-t-[1.1rem] border-b border-black/5 bg-white px-3 py-3 sm:rounded-t-[1.25rem] sm:px-4">
                <span className="size-2.5 rounded-full bg-[#ff6b6b]" />
                <span className="size-2.5 rounded-full bg-[#ffd166]" />
                <span className="size-2.5 rounded-full bg-[#35cbb8]" />

                <div className="ml-2 flex h-7 min-w-0 flex-1 items-center justify-center rounded-full bg-[#F1F5F9]">
                  <span className="truncate text-[8px] font-bold text-[#475569] sm:text-[9px]">
                    yourbusiness.com
                  </span>
                </div>
              </div>

              {/* Actual website screenshot */}
              <div
                className="relative aspect-[16/10] overflow-hidden rounded-b-[1.1rem] bg-[#101010] sm:rounded-b-[1.25rem]"
                aria-live="polite"
                aria-atomic="true"
              >
                <div
                  key={current.image}
                  className={
                    "absolute inset-0 " +
                    (direction === "next"
                      ? "animate-[showcase-in-right_700ms_cubic-bezier(0.16,1,0.3,1)_both]"
                      : "animate-[showcase-in-left_700ms_cubic-bezier(0.16,1,0.3,1)_both]")
                  }
                >
                  <Image
                    src={current.image}
                    alt={current.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-top"
                    priority={active === 0}
                  />
                </div>
              </div>
            </div>

            {/* Floating status badge */}
            <div className="float-reverse absolute -bottom-4 right-[5%] z-30 rounded-2xl border border-[#FF2D95]/25 bg-[#141414] px-4 py-3 text-white shadow-[0_18px_50px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-2">
                <span className="size-2 animate-pulse rounded-full bg-[#FF2D95]" />
                <span className="text-[10px] font-black text-white">
                  Built to convert
                </span>
              </div>
            </div>

            {/* Side arrows */}
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous website example"
              className="absolute left-0 top-1/2 z-40 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-[#24272B] text-white shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-110 hover:border-[#007BA7] hover:bg-[#007BA7] sm:size-12"
            >
              <span className="text-lg text-white">←</span>
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next website example"
              className="absolute right-0 top-1/2 z-40 grid size-11 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full border border-white/10 bg-[#24272B] text-white shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-110 hover:border-[#FF2D95] hover:bg-[#FF2D95] sm:size-12"
            >
              <span className="text-lg text-white">→</span>
            </button>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <p className="max-w-xl text-sm leading-6 text-white/55">
            Different businesses need different experiences. We build the
            website around what your business actually needs.
          </p>

          <a
            href="#get-started"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#FF2D95] px-6 py-3.5 text-sm font-black text-[#0A0A0A] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(255,45,149,0.2)]"
          >
            <span>See what we can build</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
