import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-screen overflow-hidden px-5 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12 lg:pb-32 lg:pt-28"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[38rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(53,203,184,0.25), rgba(53,203,184,0) 70%)",
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-64 -left-40 -z-10 size-[32rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(169,238,226,0.3), rgba(169,238,226,0) 70%)",
        }}
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-16 -z-10 h-[46rem] opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(9,43,42,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(9,43,42,0.045) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      {/* Animated top signal line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-16 h-px overflow-hidden bg-[var(--line)]/60"
      >
        <div className="h-full w-40 animate-[signal-slide_7s_linear_infinite] bg-gradient-to-r from-transparent via-[var(--teal-500)] to-transparent" />
      </div>

      {/* Main Hero */}
      <div className="mx-auto grid max-w-7xl items-center gap-14 pt-12 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-8">
        {/* LEFT */}
        <div>
          {/* Status */}
          <div className="reveal-up mb-7 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-[var(--ink)]">
            <span className="relative flex size-3 items-center justify-center">
              <span className="absolute size-3 animate-ping rounded-full bg-[var(--teal-400)]/30" />
              <span className="relative size-2 rounded-full bg-[var(--teal-500)]" />
            </span>

            <span>Professional websites</span>

            <span className="h-4 w-px bg-[var(--line)]" />

            <span className="text-[var(--teal-600)]">
              $100/month
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-5xl text-[clamp(3.8rem,8vw,8rem)] font-black leading-[0.86] tracking-[-0.09em] text-[var(--ink)]">
            <span className="reveal-up block">
              Your website
            </span>

            <span className="reveal-up block [animation-delay:100ms]">
              shouldn't cost
            </span>

            <span className="reveal-up block text-[var(--teal-500)] [animation-delay:200ms]">
              thousands.
            </span>
          </h1>

          {/* Description */}
          <p className="reveal-up mt-8 max-w-xl text-base leading-7 text-[var(--muted)] [animation-delay:350ms] sm:text-lg">
            Site-Wiz gives local businesses a professionally
            designed, developed and maintained website for{" "}
            <strong className="font-bold text-[var(--ink)]">
              $100/month.
            </strong>
          </p>

          {/* Buttons */}
          <div className="reveal-up mt-8 flex w-full flex-col gap-3 [animation-delay:450ms] sm:w-auto sm:flex-row">
            <MagneticButton
              href="#get-started"
              variant="dark"
              className="w-full sm:w-auto"
            >
              Build My Website — $100/mo
            </MagneticButton>

            <MagneticButton
              href="#included"
              variant="light"
              className="w-full sm:w-auto"
            >
              See What's Included
            </MagneticButton>
          </div>

          {/* Trust points */}
          <div className="reveal-up mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-[var(--muted)] [animation-delay:550ms]">
            <span>✓ Development included</span>
            <span>✓ Hosting included</span>
            <span>✓ Support included</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative mx-auto flex aspect-square w-full max-w-[600px] items-center justify-center">
          {/* Outer orbit */}
          <div
            aria-hidden="true"
            className="absolute inset-[8%] rounded-full border border-[var(--teal-200)]/60"
          />

          {/* Rotating orbit */}
          <div
            aria-hidden="true"
            className="absolute inset-[18%] rounded-full border border-dashed border-[var(--teal-300)]/60 animate-[spin_28s_linear_infinite]"
          />

          {/* Inner orbit */}
          <div
            aria-hidden="true"
            className="absolute inset-[30%] rounded-full border border-[var(--line)] animate-[spin_20s_linear_infinite_reverse]"
          />

          {/* Main circle */}
          <div className="absolute inset-[30%] rounded-full bg-white shadow-[0_30px_100px_rgba(9,43,42,0.12)]" />

          {/* Price */}
          <div className="relative z-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
              Everything included
            </p>

            <div className="mt-3 text-[clamp(4rem,10vw,7rem)] font-black leading-none tracking-[-0.1em] text-[var(--ink)]">
              $100
            </div>

            <p className="mt-2 text-sm font-bold text-[var(--teal-600)]">
              / month
            </p>
          </div>

          {/* =====================================================
              ORIGINAL FLOATING BADGES
          ===================================================== */}

          {/* Design */}
          <div className="float-slow absolute left-[3%] top-[24%] z-30 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-xs font-bold text-[var(--ink)] shadow-[0_10px_30px_rgba(9,43,42,0.1)]">
            Design
          </div>

          {/* Development */}
          <div className="float-reverse absolute right-[1%] top-[18%] z-30 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-xs font-bold text-[var(--ink)] shadow-[0_10px_30px_rgba(9,43,42,0.1)]">
            Development
          </div>

          {/* Hosting */}
          <div className="float-slow absolute bottom-[20%] left-[4%] z-30 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-xs font-bold text-[var(--ink)] shadow-[0_10px_30px_rgba(9,43,42,0.1)] [animation-delay:900ms]">
            Hosting
          </div>

          {/* Support */}
          <div className="float-reverse absolute bottom-[17%] right-[3%] z-30 rounded-full border border-[var(--teal-200)] bg-[var(--teal-50)] px-4 py-2 text-xs font-bold text-[var(--teal-700)] shadow-[0_10px_30px_rgba(9,43,42,0.1)] [animation-delay:1200ms]">
            Support
          </div>

          {/* Website Ready */}
          <div className="float-slow absolute left-[14%] top-[8%] z-30 hidden rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-[0_15px_45px_rgba(9,43,42,0.1)] backdrop-blur sm:block">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[var(--teal-500)]" />

              <span className="text-xs font-black text-[var(--ink)]">
                Website ready
              </span>
            </div>
          </div>

          {/* Monthly */}
          <div className="float-reverse absolute bottom-[7%] left-[16%] z-30 hidden rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-[0_15px_45px_rgba(9,43,42,0.1)] backdrop-blur sm:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--muted)]">
              Monthly
            </p>

            <p className="mt-1 text-sm font-black text-[var(--ink)]">
              $100 / month
            </p>
          </div>

          {/* Orbit point */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 size-3 -translate-x-1/2 rounded-full bg-[var(--teal-500)] shadow-[0_0_0_8px_rgba(17,181,161,0.12)]"
          />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--muted)] lg:flex">
        <span>Scroll to explore</span>

        <span className="flex h-8 w-5 items-start justify-center rounded-full border border-[var(--line)] p-1">
          <span className="h-1.5 w-1 animate-bounce rounded-full bg-[var(--teal-500)]" />
        </span>
      </div>
    </section>
  );
}