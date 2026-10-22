
export default function WhoItsFor() {
  const audiences = [
    {
      number: "01",
      title: "No website yet",
      description:
        "You need a professional place online without a huge upfront bill.",
      accent: "blue",
    },
    {
      number: "02",
      title: "Outdated website",
      description:
        "Your business has grown, but your website hasn't kept up.",
      accent: "rose",
    },
    {
      number: "03",
      title: "New business",
      description:
        "You're getting started and need to look professional from day one.",
      accent: "rose",
    },
    {
      number: "04",
      title: "Better value",
      description:
        "You want a great website without paying thousands upfront.",
      accent: "blue",
    },
  ];

  return (
    <section
      id="who-its-for"
      className="relative isolate overflow-hidden bg-[#24272B] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Ambient blue glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 -z-10 size-[30rem] rounded-full bg-[#007BA7]/10 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          {/* Introduction */}
          <div>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#007BA7]">
              <span className="h-px w-7 bg-[#FF2D95]" />
              Built for businesses
            </div>

            <h2 className="mt-4 max-w-lg text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-5xl">
              If your business needs a site, you're in the right place.
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-white/60">
              Whether you're starting from zero or ready for something better,
              Site-Wiz keeps getting online simple.
            </p>

            <a
              href="#get-started"
              className="group mt-7 inline-flex items-center gap-3 text-sm font-bold text-[#FF2D95] transition-colors hover:text-white"
            >
              Let's build your website
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Audience cards */}
          <div className="grid gap-3 sm:grid-cols-2">
            {audiences.map((audience) => {
              const isRose = audience.accent === "rose";
              const accent = isRose ? "#FF2D95" : "#007BA7";

              return (
                <a
                  key={audience.number}
                  href="#get-started"
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#141414] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#007BA7]/50 hover:bg-[#171717] hover:shadow-[0_18px_50px_rgba(0,123,167,0.08)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF2D95]"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-black tracking-[0.15em]"
                      style={{ color: accent }}
                    >
                      {audience.number}
                    </span>

                    <span
                      className="grid size-8 place-items-center rounded-full border transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-[-45deg]"
                      style={{
                        borderColor: `${accent}55`,
                        color: accent,
                      }}
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-black tracking-tight text-white">
                    {audience.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {audience.description}
                  </p>

                  <div
                    className="mt-6 h-[2px] w-8 rounded-full transition-all duration-300 group-hover:w-14"
                    style={{ backgroundColor: accent }}
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-12 -right-12 size-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                    style={{ backgroundColor: accent }}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
