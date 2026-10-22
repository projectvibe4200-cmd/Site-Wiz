
"use client";

import MagneticButton from "@/components/MagneticButton";
import LetterGlitch from "@/components/LetterGlitch";

const features = [
  "Development included",
  "Hosting included",
  "Support included",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#24272B] px-5 pb-16 pt-20 text-white sm:px-8 sm:pb-20 sm:pt-24 lg:min-h-screen lg:px-12 lg:pb-20 lg:pt-24"
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

     {/* Transparent animated LetterGlitch background */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-25"
>
  
<LetterGlitch
  className="h-full w-full"
  backgroundColor="transparent"
  baseColor="#38BDF8"
  glitchColors={["#38BDF8", "#FF2D95", "#00E5FF", "#FF4DAD"]}
  baseOpacity={0.65}
  speed={0.8}
  interactive={true}
  cursorRadius={180}
  flow={0.7}
  edgeFade={0.15}
  centerFade={0.05}
  intro={true}
  dpr={1}
  style={{ width: "100%", height: "100%" }}
/>

</div>
      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* Headline and calls to action */}
        <div className="relative z-10 mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left motion-safe:animate-[hero-enter_800ms_ease-out_both]">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-wide text-white/75 backdrop-blur-md sm:text-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#FF2D95] opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-[#FF2D95]" />
            </span>
            Premium websites. Predictable pricing.
          </div>

          <h1 className="text-balance text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Your website shouldn&apos;t cost{" "}
            <span className="relative inline-block text-[#38BDF8]">
              thousands.
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[#38BDF8] to-[#FF2D95]"
              />
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8 lg:mx-0">
            Site-Wiz gives local businesses a professionally designed,
            developed and maintained website for just{" "}
            <span className="font-semibold text-white">$100/month.</span>{" "}
            No huge upfront bill. No technical headaches.
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
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
              className="!border-white/15 !bg-white/[0.04] !text-white hover:!bg-white/10"
            >
              See What&apos;s Included
            </MagneticButton>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-white/55 lg:justify-start">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="size-4 text-[#38BDF8]"
                >
                  <path
                    d="m5 10 3.2 3.2L15.5 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Animated pricing graphic */}
        <div className="relative mx-auto flex aspect-square w-full max-w-[490px] items-center justify-center lg:max-w-none">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute size-[70%] rounded-full bg-[#007BA7]/15 blur-[90px] motion-safe:animate-[glow-breathe_6s_ease-in-out_infinite]"
          />

          {/* Outer orbit */}
          <div
            aria-hidden="true"
            className="absolute inset-[5%] rounded-full border border-[#38BDF8]/35 motion-safe:animate-[orbit-pulse_7s_ease-in-out_infinite]"
          />

          {/* Rotating dashed orbit */}
          <div
            aria-hidden="true"
            className="absolute inset-[16%] rounded-full border border-dashed border-[#38BDF8]/40 motion-safe:animate-[spin_45s_linear_infinite]"
          />

          {/* Counter-rotating inner orbit */}
          <div
            aria-hidden="true"
            className="absolute inset-[27%] rounded-full border border-[#FF2D95]/30 motion-safe:animate-[spin_32s_linear_infinite_reverse]"
          />

          {/* Glowing orbit markers */}
          <div
            aria-hidden="true"
            className="absolute left-[13%] top-[24%] size-3 rounded-full bg-[#38BDF8] shadow-[0_0_22px_rgba(56,189,248,0.9)] motion-safe:animate-[marker-pulse_3s_ease-in-out_infinite]"
          />
          <div
            aria-hidden="true"
            className="absolute right-[14%] top-[30%] size-2.5 rounded-full bg-[#FF2D95] shadow-[0_0_22px_rgba(255,45,149,0.9)] motion-safe:animate-[marker-pulse_3.6s_ease-in-out_700ms_infinite]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-[18%] left-[31%] size-2 rounded-full bg-[#38BDF8] shadow-[0_0_18px_rgba(56,189,248,0.9)] motion-safe:animate-[marker-pulse_2.8s_ease-in-out_400ms_infinite]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-[26%] right-[18%] size-3 rounded-full bg-[#FF2D95] shadow-[0_0_22px_rgba(255,45,149,0.9)] motion-safe:animate-[marker-pulse_3.4s_ease-in-out_1100ms_infinite]"
          />

          {/* Central pricing circle */}
          <div className="relative z-10 flex aspect-square w-[53%] flex-col items-center justify-center rounded-full border border-white/15 bg-[#24272B]/90 text-center shadow-[0_0_100px_rgba(0,123,167,0.2)] backdrop-blur-xl motion-safe:animate-[price-breathe_7s_ease-in-out_infinite]">
            <span className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-white/55 sm:text-sm">
              Everything included
            </span>

            <div className="flex items-start justify-center">
              <span className="mt-2 text-xl font-medium text-[#38BDF8] sm:text-2xl">
                $
              </span>
              <span className="text-6xl font-semibold tracking-[-0.08em] text-white sm:text-7xl lg:text-8xl">
                100
              </span>
            </div>

            <span className="mt-1 text-sm text-white/55 sm:text-base">
              / month
            </span>

            <div className="mt-5 h-px w-1/2 bg-gradient-to-r from-transparent via-[#38BDF8]/70 to-transparent" />

            <span className="mt-4 text-xs font-medium text-white/75 sm:text-sm">
              No massive upfront cost
            </span>
          </div>

          {/* Floating feature cards */}
          <div className="absolute left-0 top-[17%] z-20 rounded-xl border border-white/10 bg-[#24272B]/90 px-3 py-2 shadow-xl backdrop-blur-xl motion-safe:animate-[card-float_5s_ease-in-out_infinite] sm:left-[2%] sm:px-4 sm:py-3">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-[#38BDF8]/15 text-[#38BDF8]">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-4">
                  <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold text-white sm:text-sm">Design</p>
                <p className="text-[10px] text-white/45 sm:text-xs">Made for you</p>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-[18%] z-20 rounded-xl border border-white/10 bg-[#24272B]/90 px-3 py-2 shadow-xl backdrop-blur-xl motion-safe:animate-[card-float_5.5s_ease-in-out_500ms_infinite] sm:right-[1%] sm:px-4 sm:py-3">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-[#FF2D95]/15 text-[#FF2D95]">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-4">
                  <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold text-white sm:text-sm">Development</p>
                <p className="text-[10px] text-white/45 sm:text-xs">Included</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[18%] left-[1%] z-20 rounded-xl border border-white/10 bg-[#24272B]/90 px-3 py-2 shadow-xl backdrop-blur-xl motion-safe:animate-[card-float_5.2s_ease-in-out_900ms_infinite] sm:left-[3%] sm:px-4 sm:py-3">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-[#38BDF8]/15 text-[#38BDF8]">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-4">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3 10h18M8 15h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold text-white sm:text-sm">Hosting</p>
                <p className="text-[10px] text-white/45 sm:text-xs">Taken care of</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[16%] right-[1%] z-20 rounded-xl border border-white/10 bg-[#24272B]/90 px-3 py-2 shadow-xl backdrop-blur-xl motion-safe:animate-[card-float_5.8s_ease-in-out_300ms_infinite] sm:right-[2%] sm:px-4 sm:py-3">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-[#FF2D95]/15 text-[#FF2D95]">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-4">
                  <path d="M12 3.5 19 7v5c0 4.4-3 7.3-7 8.5-4-1.2-7-4.1-7-8.5V7l7-3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold text-white sm:text-sm">Support</p>
                <p className="text-[10px] text-white/45 sm:text-xs">Here when needed</p>
              </div>
            </div>
          </div>

          {/* Bottom status badge */}
          <div className="absolute bottom-[3%] left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[#24272B]/90 px-4 py-2 shadow-xl backdrop-blur-xl motion-safe:animate-[card-float_6s_ease-in-out_700ms_infinite]">
            <div className="flex items-center gap-2 text-xs text-white/70 sm:text-sm">
              <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)] motion-safe:animate-pulse" />
              Website ready. Hassle gone.
            </div>
          </div>
        </div>
      </div>

      {/* Local animation keyframes */}
      <style jsx>{`
        @keyframes hero-enter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes card-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes marker-pulse {
          0%, 100% {
            opacity: 0.65;
            scale: 1;
          }
          50% {
            opacity: 1;
            scale: 1.25;
          }
        }

        @keyframes glow-breathe {
          0%, 100% {
            opacity: 0.7;
            scale: 0.96;
          }
          50% {
            opacity: 1;
            scale: 1.04;
          }
        }

        @keyframes orbit-pulse {
          0%, 100% {
            opacity: 0.65;
            scale: 1;
          }
          50% {
            opacity: 1;
            scale: 1.025;
          }
        }

        @keyframes price-breathe {
          0%, 100% {
            box-shadow: 0 0 75px rgba(0, 123, 167, 0.16);
          }
          50% {
            box-shadow: 0 0 105px rgba(0, 123, 167, 0.3);
          }
        }
      `}</style>
    </section>
  );
}
