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
    <section className="relative overflow-hidden bg-[var(--ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--teal-400)]">
            Simple pricing
          </p>

          <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Your website.
            <span className="block text-[var(--teal-400)]">
              One simple price.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-7 text-white/60 sm:text-lg">
            No complicated packages. No giant upfront development bill. Just
            one monthly subscription for your website.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.2)] sm:p-10 lg:p-12">
            <div className="absolute -right-32 -top-32 size-80 rounded-full bg-[var(--teal-500)]/15 blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <p className="text-sm font-bold text-white/60">
                  Everything included
                </p>

                <div className="mt-5 flex items-end gap-2">
                  <span className="text-7xl font-black tracking-[-0.08em] sm:text-8xl">
                    $100
                  </span>

                  <span className="mb-3 text-sm font-bold text-white/50">
                    / month
                  </span>
                </div>

                <p className="mt-5 max-w-sm leading-7 text-white/55">
                  A professional website without the traditional upfront
                  development cost.
                </p>

                <a
                  href="#get-started"
                  className="group mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[var(--teal-500)] px-7 text-sm font-black text-[var(--ink)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--teal-400)]"
                >
                  Get My Website
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {includedItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 transition-colors duration-300 hover:border-[var(--teal-400)]/30 hover:bg-white/[0.07]"
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[var(--teal-500)]/15 text-sm font-black text-[var(--teal-400)]">
                      ✓
                    </span>

                    <span className="text-sm font-semibold text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
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