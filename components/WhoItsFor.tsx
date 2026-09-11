export default function WhoItsFor() {
  const audiences = [
    {
      number: "01",
      title: "No website yet",
      description:
        "You need a professional place online without a huge upfront bill.",
    },
    {
      number: "02",
      title: "Outdated website",
      description:
        "Your business has grown, but your website hasn't kept up.",
    },
    {
      number: "03",
      title: "New business",
      description:
        "You're getting started and need to look professional from day one.",
    },
    {
      number: "04",
      title: "Better value",
      description:
        "You want a great website without paying thousands upfront.",
    },
  ];

  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[var(--teal-50)] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--teal-700)]">
              Built for businesses
            </div>

            <h2 className="mt-4 max-w-lg text-4xl font-black leading-[0.95] tracking-[-0.06em] text-[var(--ink)] sm:text-5xl">
              If your business needs a site, you're in the right place.
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-[var(--muted)]">
              Whether you're starting from zero or ready for something better,
              Site-Wiz keeps getting online simple.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {audiences.map((audience) => (
              <div
                key={audience.number}
                className="group rounded-3xl border border-[var(--line)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(9,43,42,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[var(--teal-500)]">
                    {audience.number}
                  </span>

                  <span className="text-lg text-[var(--teal-500)] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-black tracking-tight text-[var(--ink)]">
                  {audience.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}