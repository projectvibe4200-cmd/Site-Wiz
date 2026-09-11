"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ShowcaseSite = {
  name: string;
  category: string;
  image: string;
  alt: string;
};

const sites: ShowcaseSite[] = [
  {
    name: "ClearView",
    category: "Home Services",
    image: "/showcase/home-services.png",
    alt: "Home services website design",
  },
  {
    name: "Taste",
    category: "Restaurant",
    image: "/showcase/restaurant.png",
    alt: "Restaurant website design",
  },
  {
    name: "Summit",
    category: "Professional Services",
    image: "/showcase/professional.png",
    alt: "Professional services website design",
  },
  {
    name: "Evergreen",
    category: "E-commerce",
    image: "/showcase/ecommerce.png",
    alt: "E-commerce website design",
  },
  {
    name: "FitZone",
    category: "Fitness & Lifestyle",
    image: "/showcase/fitness.png",
    alt: "Fitness website design",
  },
];

export default function Showcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState<"next" | "previous">("next");

  const total = sites.length;
  const current = sites[active];

  const goNext = () => {
    setDirection("next");
    setActive((currentIndex) => (currentIndex + 1) % total);
  };

  const goPrevious = () => {
    setDirection("previous");
    setActive(
      (currentIndex) => (currentIndex - 1 + total) % total
    );
  };

  useEffect(() => {
    if (paused) {
      return;
    }

    const interval = window.setInterval(() => {
      setDirection("next");

      setActive((currentIndex) => (currentIndex + 1) % total);
    }, 4500);

    return () => {
      window.clearInterval(interval);
    };
  }, [paused, total]);

  return (
    <section
      id="showcase"
      className="relative overflow-hidden bg-[var(--teal-50)] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 size-[36rem] rounded-full bg-[var(--teal-200)]/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 size-[30rem] rounded-full bg-white/70 blur-3xl"
      />

      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(9,43,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(9,43,42,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 80%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* =====================================================
              LEFT SIDE
          ===================================================== */}

          <div className="max-w-xl">
            <div className="reveal-up inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-[var(--teal-700)]">
              <span className="relative flex size-3 items-center justify-center">
                <span className="absolute size-3 animate-ping rounded-full bg-[var(--teal-400)]/30" />
                <span className="relative size-2 rounded-full bg-[var(--teal-500)]" />
              </span>

              <span>See the difference</span>
            </div>

            <h2 className="reveal-up mt-6 text-4xl font-black leading-[0.92] tracking-[-0.065em] text-[var(--ink)] [animation-delay:100ms] sm:text-5xl lg:text-6xl">
              Your website should sell the business before you do.
            </h2>

            <p className="reveal-up mt-6 max-w-lg text-base leading-7 text-[var(--muted)] [animation-delay:200ms] sm:text-lg">
              Site-Wiz isn't just about putting your business online.
              It's about creating an experience that makes visitors
              understand who you are, what you offer and how to take
              the next step.
            </p>

            {/* Current website info */}
            <div className="reveal-up mt-10 [animation-delay:300ms]">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--teal-700)]">
                    Currently viewing
                  </p>

                  <h3 className="mt-2 text-2xl font-black tracking-tight text-[var(--ink)]">
                    {current.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-[var(--muted)]">
                    {current.category}
                  </p>
                </div>

                <div className="shrink-0 text-right">
                  <span className="text-2xl font-black tracking-tight text-[var(--ink)]">
                    {String(active + 1).padStart(2, "0")}
                  </span>

                  <span className="mx-1 text-sm font-bold text-[var(--muted)]">
                    /
                  </span>

                  <span className="text-sm font-bold text-[var(--muted)]">
                    {String(total).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-5 h-1 overflow-hidden rounded-full bg-[var(--teal-200)]">
                <div
                  className="h-full rounded-full bg-[var(--teal-500)] transition-all duration-700 ease-out"
                  style={{
                    width: ((active + 1) / total) * 100 + "%",
                  }}
                />
              </div>
            </div>

            {/* Controls */}
            <div className="reveal-up mt-7 flex items-center gap-3 [animation-delay:400ms]">
              <button
                type="button"
                onClick={goPrevious}
                aria-label="Previous website"
                className="group grid size-12 place-items-center rounded-full border border-[var(--line)] bg-white text-[var(--ink)] shadow-[0_10px_30px_rgba(9,43,42,0.06)] transition-all duration-300 hover:-translate-x-1 hover:border-[var(--teal-300)] hover:shadow-[0_15px_40px_rgba(9,43,42,0.12)]"
              >
                <span className="text-lg transition-transform duration-300 group-hover:-translate-x-0.5">
                  ←
                </span>
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next website"
                className="group grid size-12 place-items-center rounded-full border border-[var(--line)] bg-white text-[var(--ink)] shadow-[0_10px_30px_rgba(9,43,42,0.06)] transition-all duration-300 hover:translate-x-1 hover:border-[var(--teal-300)] hover:shadow-[0_15px_40px_rgba(9,43,42,0.12)]"
              >
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </button>

              <span className="ml-2 text-xs font-bold text-[var(--muted)]">
                {paused ? "Paused" : "Auto preview"}
              </span>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE — WEBSITE CAROUSEL
          ===================================================== */}

          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Glow behind website */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 size-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--teal-200)]/50 blur-3xl"
            />

            {/* Decorative orbit */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[3rem] border border-[var(--teal-200)]/50"
            />

            <div
              aria-hidden="true"
              className="absolute -inset-12 rounded-[4rem] border border-[var(--teal-200)]/30"
            />

            {/* Website frame */}
            <div className="relative z-20 overflow-hidden rounded-[1.75rem] border border-white/80 bg-white p-2 shadow-[0_35px_100px_rgba(9,43,42,0.18)] sm:p-3">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 rounded-t-[1.25rem] bg-white px-3 py-3 sm:px-4">
                <span className="size-2.5 rounded-full bg-[#ff6b6b]" />
                <span className="size-2.5 rounded-full bg-[#ffd166]" />
                <span className="size-2.5 rounded-full bg-[#35cbb8]" />

                <div className="ml-2 flex h-7 flex-1 items-center justify-center rounded-full bg-[var(--teal-50)]">
                  <span className="text-[8px] font-bold text-[var(--muted)] sm:text-[9px]">
                    {current.name.toLowerCase()}.com
                  </span>
                </div>
              </div>

              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-b-[1.25rem] bg-white">
                <div
                  key={current.image}
                  className={
                    "absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] " +
                    (direction === "next"
                      ? "animate-[showcase-in-right_700ms_cubic-bezier(0.16,1,0.3,1)_both]"
                      : "animate-[showcase-in-left_700ms_cubic-bezier(0.16,1,0.3,1)_both]")
                  }
                >
                  <Image
                    src={current.image}
                    alt={current.alt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 60vw"
                    className="object-cover object-top"
                    priority={active === 0}
                  />
                </div>

                {/* Soft glass overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[var(--teal-500)]/5 via-transparent to-white/10"
                />
              </div>
            </div>

            {/* Floating category badge */}
            <div className="float-slow absolute -left-3 top-[10%] z-30 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-[0_15px_45px_rgba(9,43,42,0.12)] backdrop-blur sm:-left-6">
              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[var(--teal-700)]">
                Website type
              </p>

              <p className="mt-1 text-xs font-black text-[var(--ink)]">
                {current.category}
              </p>
            </div>

            {/* Floating indicator */}
            <div className="float-reverse absolute -bottom-4 right-[5%] z-30 rounded-2xl border border-white bg-[var(--ink)] px-4 py-3 text-white shadow-[0_18px_50px_rgba(9,43,42,0.2)]">
              <div className="flex items-center gap-2">
                <span className="size-2 animate-pulse rounded-full bg-[var(--teal-400)]" />

                <span className="text-[10px] font-black !text-white">
                  Built to convert
                </span>
              </div>
            </div>

            {/* Side navigation buttons */}
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous website"
              className="absolute left-0 top-1/2 z-40 -translate-x-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white bg-[var(--ink)] text-white shadow-[0_15px_40px_rgba(9,43,42,0.2)] transition-all duration-300 hover:scale-110 hover:bg-[var(--teal-500)] sm:size-12"
            >
              <span className="text-lg !text-white">
                ←
              </span>
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next website"
              className="absolute right-0 top-1/2 z-40 grid size-11 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full border border-white bg-[var(--ink)] text-white shadow-[0_15px_40px_rgba(9,43,42,0.2)] transition-all duration-300 hover:scale-110 hover:bg-[var(--teal-500)] sm:size-12"
            >
              <span className="text-lg !text-white">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 flex flex-col gap-6 border-t border-[var(--line)] pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
            Different businesses need different experiences. We build
            the website around what your business actually needs.
          </p>

          <a
            href="#get-started"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[var(--ink)] px-6 py-3.5 text-sm font-black !text-white shadow-[0_12px_35px_rgba(9,43,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(9,43,42,0.2)]"
          >
            <span className="!text-white">
              See what we can build
            </span>

            <span className="!text-white transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}