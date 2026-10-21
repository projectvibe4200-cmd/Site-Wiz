
const includedItems = [
  "Professional website design",
  "Website development",
  "Hosting",
  "Domain",
  "Maintenance",
  "Updates",
  "Contact form",
  "Support",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative isolate overflow-hidden bg-[#0A0A0A] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12"
    >
      {/* Ambient background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 size-[28rem] rounded-full bg-[#007BA7]/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 size-[28rem] rounded-full bg-[#FF2D95]/10 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#007BA7]">
            <span className="h-px w-7 bg-[#FF2D95]" />
            Simple pricing
            <span className="h-px w-7 bg-[#FF2D95]" />
          </p>

          <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Your website.
            <span className="mt-2 block text-[#FF2D95]">
              One simple price.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-7 text-white/60 sm:text-lg">
            No complicated packages. No giant upfront development bill. Just
            one monthly subscription for your website.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.4)] sm:rounded-[2.5rem] sm:p-10 lg:p-12">
            {/* Card accents */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-px w-2/3 bg-gradient-to-l from-[#FF2D95] via-[#007BA7] to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-[#007BA7]/15 blur-[100px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-40 -left-20 size-80 rounded-full bg-[#FF2D95]/10 blur-[100px]"
            />

            <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              {/* Price */}
              <div className="flex flex-col items-start">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#007BA7]/30 bg-[#007BA7]/10 px-3 py-1.5">
                  <span className="size-1.5 animate-pulse rounded-full bg-[#007BA7]" />
                  <p className="text-xs font-bold text-white/80">
                    Everything included
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-end gap-x-2">
                  <span className="text-7xl font-black tracking-[-0.08em] sm:text-8xl">
                    $100
                  </span>

                  <span className="mb-3 text-sm font-bold text-white/50">
                    / month
                  </span>
                </div>

                <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-[#007BA7] to-[#FF2D95]" />

                <p className="mt-5 max-w-sm leading-7 text-white/55">
                  A professional website without the traditional upfront
                  development cost.
                </p>

                <a
                  href="#get-started"
                  className="group mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#FF2D95] px-7 text-sm font-black text-[#0A0A0A] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(255,45,149,0.25)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Get My Website
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <p className="mt-4 text-xs text-white/40">
                  Straightforward pricing. No confusing tiers.
                </p>
              </div>

              {/* Included features */}
              <div>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3 className="text-sm font-bold text-white">
                    What's included
                  </h3>
                  <span className="text-xs font-semibold text-white/35">
                    8 essentials
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {includedItems.map((item, index) => {
                    const isRose = index === 1 || index === 3 || index === 5 || index === 7;
                    const accent = isRose ? "#FF2D95" : "#007BA7";

                    return (
                      <div
                        key={item}
                        className="group flex min-h-[62px] items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                      >
                        <span
                          className="grid size-7 shrink-0 place-items-center rounded-full text-sm font-black transition-transform duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: `${accent}20`,
                            color: accent,
                          }}
                          aria-hidden="true"
                        >
                          ✓
                        </span>

                        <span className="text-sm font-semibold leading-5 text-white/75 transition-colors group-hover:text-white">
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <p className="mt-5 text-center text-xs leading-6 text-white/40">
            SEO services are not included in the $100/month subscription.
          </p>
        </div>
      </div>
    </section>
  );
}
