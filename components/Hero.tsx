
"use client";

import MagneticButton from "@/components/MagneticButton";

const features = [
  "Development included",
  "Hosting included",
  "Support included",
];

export default function Hero() {
  return (
   
<section
  id="top"
  className="relative isolate overflow-hidden bg-[#0A0A0A] px-5 pb-16 pt-20 text-white sm:px-8 sm:pb-20 sm:pt-24 lg:min-h-screen lg:px-12 lg:pb-20 lg:pt-24"
>

      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 -z-10 size-[36rem] rounded-full bg-[#007BA7]/15 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-[35%] -z-10 size-[30rem] rounded-full bg-[#FF2D95]/[0.07] blur-[120px]"
      />

      {/* Subtle technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,123,167,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(0,123,167,0.22) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      {/* Top signal line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px overflow-hidden bg-white/10"
      >
        <div className="h-full w-40 animate-[signal-slide_7s_linear_infinite] bg-gradient-to-r from-transparent via-[#FF2D95] to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* Left: headline and offer */}
        <div className="relative z-10 max-w-3xl">
          <div className="reveal-up inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-white/80 sm:text-sm">
            <span className="relative flex size-3 items-center justify-center">
              <span className="absolute size-3 animate-ping rounded-full bg-[#FF2D95]/30" />
              <span className="relative size-2 rounded-full bg-[#FF2D95]" />
            </span>

            <span>Professional websites</span>

            <span className="h-4 w-px bg-white/20" />

            <span className="text-[#007BA7]">$100/month</span>
          </div>

          <h1 className="reveal-up mt-8 text-[clamp(3.2rem,7.5vw,6.8rem)] font-black leading-[0.88] tracking-[-0.075em] text-white [animation-delay:100ms]">
            Your website
            <br />
            shouldn&apos;t cost
            <br />
            <span className="text-[#007BA7]">thousands.</span>
          </h1>

          <p className="reveal-up mt-7 max-w-2xl text-base leading-7 text-white/60 [animation-delay:200ms] sm:mt-8 sm:text-lg sm:leading-8">
            Site-Wiz gives local businesses a professionally designed,
            developed and maintained website for{" "}
            <span className="font-bold text-white">$100/month.</span>
          </p>

          {/* Calls to action */}
          <div className="reveal-up mt-8 flex flex-col gap-3 [animation-delay:300ms] sm:flex-row sm:flex-wrap sm:items-center">
            <MagneticButton
              href="#get-started"
              variant="teal"
              className="!border-[#FF2D95] !bg-[#FF2D95] !text-[#0A0A0A] hover:!bg-[#ff59aa]"
            >
              Build My Website — $100/mo
            </MagneticButton>

            <MagneticButton
              href="#included"
              variant="light"
              className="!border-white/15 !bg-white/[0.04] !text-white hover:!border-[#007BA7] hover:!bg-[#007BA7]/10"
            >
              See What&apos;s Included
            </MagneticButton>
          </div>

          {/* Included features */}
          <div className="reveal-up mt-7 flex flex-wrap gap-x-5 gap-y-3 [animation-delay:400ms]">
            {features.map((feature) => (
              <div
                key={feature}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white/50 sm:text-sm"
              >
                <span className="text-[#FF2D95]" aria-hidden="true">
                  ✓
                </span>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Right: pricing orbit graphic */}
        <div className="relative mx-auto flex aspect-square w-full max-w-[490px] items-center justify-center lg:max-w-none">
          {/* Blue ambient glow */}
          <div
            aria-hidden="true"
            className="absolute size-[70%] rounded-full bg-[#007BA7]/15 blur-[90px]"
          />

          {/* Outer orbit */}
          <div
            aria-hidden="true"
            className="absolute inset-[5%] rounded-full border border-[#007BA7]/35"
          />

          {/* Middle orbit */}
          <div
            aria-hidden="true"
            className="absolute inset-[16%] rounded-full border border-dashed border-[#007BA7]/30 animate-[spin_45s_linear_infinite]"
          />

          {/* Inner orbit */}
          <div
            aria-hidden="true"
            className="absolute inset-[27%] rounded-full border border-[#FF2D95]/20"
          />

          {/* Floating orbit markers */}
          <span className="absolute left-[19%] top-[27%] size-3 rounded-full bg-[#007BA7] shadow-[0_0_24px_rgba(0,123,167,0.6)]" />

          <span className="absolute right-[17%] top-[37%] size-2.5 rounded-full bg-[#FF2D95] shadow-[0_0_24px_rgba(255,45,149,0.65)]" />

          <span className="absolute bottom-[21%] left-[29%] size-2 rounded-full bg-[#007BA7] shadow-[0_0_20px_rgba(0,123,167,0.6)]" />

          <span className="absolute right-[29%] top-[14%] size-2 rounded-full bg-[#FF2D95]" />

          {/* Central pricing card */}
          <div className="relative z-10 flex aspect-square w-[53%] flex-col items-center justify-center rounded-full border border-white/10 bg-[#101010]/95 text-center shadow-[0_0_100px_rgba(0,123,167,0.12)] backdrop-blur-xl">
            <span className="text-[9px] font-black uppercase tracking-[0.24em] text-white/45 sm:text-xs">
              Everything included
            </span>

            <div className="mt-3 text-[clamp(3.2rem,7vw,5.8rem)] font-black leading-none tracking-[-0.08em] text-white">
              $100
            </div>

            <span className="mt-3 rounded-full border border-[#FF2D95]/30 bg-[#FF2D95]/10 px-4 py-1.5 text-xs font-bold text-[#FF2D95]">
              / month
            </span>
          </div>

          {/* Floating feature badge: design */}
          <div className="float-slow absolute left-[0%] top-[31%] z-20 rounded-2xl border border-[#007BA7]/30 bg-[#141414] px-4 py-3 shadow-[0_15px_45px_rgba(0,0,0,0.35)] sm:left-[2%]">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#007BA7]" />
              <span className="text-xs font-bold text-white">Design</span>
            </div>
          </div>

          {/* Floating feature badge: development */}
          <div className="float-reverse absolute right-[-1%] top-[25%] z-20 rounded-2xl border border-[#FF2D95]/25 bg-[#141414] px-4 py-3 shadow-[0_15px_45px_rgba(0,0,0,0.35)] sm:right-[0%]">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#FF2D95]" />
              <span className="text-xs font-bold text-white">
                Development
              </span>
            </div>
          </div>

          {/* Floating feature badge: hosting */}
          <div className="float-reverse absolute bottom-[19%] left-[5%] z-20 rounded-2xl border border-[#007BA7]/30 bg-[#141414] px-4 py-3 shadow-[0_15px_45px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#007BA7]" />
              <span className="text-xs font-bold text-white">Hosting</span>
            </div>
          </div>

          {/* Floating feature badge: support */}
          <div className="float-slow absolute bottom-[25%] right-[0%] z-20 rounded-2xl border border-[#FF2D95]/25 bg-[#141414] px-4 py-3 shadow-[0_15px_45px_rgba(0,0,0,0.35)] sm:right-[1%]">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#FF2D95]" />
              <span className="text-xs font-bold text-white">Support</span>
            </div>
          </div>

          {/* Website-ready status */}
          <div className="float-slow absolute left-[8%] top-[8%] z-20 rounded-full border border-white/10 bg-[#141414] px-4 py-3 shadow-[0_15px_45px_rgba(0,0,0,0.3)] sm:left-[11%]">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#FF2D95]" />
              <span className="text-xs font-bold text-white">
                Website ready
              </span>
            </div>
          </div>

          {/* Monthly status */}
          <div className="float-reverse absolute bottom-[8%] right-[10%] z-20 rounded-2xl border border-[#007BA7]/25 bg-[#141414] px-4 py-3 shadow-[0_15px_45px_rgba(0,0,0,0.3)] sm:right-[13%]">
            <span className="block text-[9px] font-black uppercase tracking-[0.18em] text-white/45">
              Simple pricing
            </span>
            <span className="mt-1 block text-sm font-black text-white">
              $100
              <span className="ml-1 text-xs font-medium text-white/50">
                / month
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
