
export default function Problem() {
  const problems = [
    {
      number: "01",
      title: "Big upfront costs",
      text: "A professional website shouldn't require a huge bill before your business even starts benefiting from it.",
      accent: "rose",
    },
    {
      number: "02",
      title: "Websites get neglected",
      text: "Businesses change. Services change. Hours change. Your website should be able to change with you.",
      accent: "blue",
    },
    {
      number: "03",
      title: "Building it is only half the job",
      text: "Hosting, maintenance, updates and support matter just as much as the original build.",
      accent: "rose",
    },
  ];

  return (
    <section
      id="why"
      className="relative isolate overflow-hidden bg-[#24272B] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12"
    >
      {/* Subtle blue ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-10 -z-10 size-[28rem] rounded-full bg-[#007BA7]/10 blur-[110px]"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Section introduction */}
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#FF2D95]">
              <span className="h-px w-8 bg-[#FF2D95]" />
              The old way
            </p>

            <h2 className="max-w-xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              Your website shouldn&apos;t be a financial headache.
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-white/60 sm:text-lg">
              Most businesses don&apos;t need a complicated web project. They need
              a professional online presence that works, looks good and stays
              current.
            </p>
          </div>

          {/* Problem cards */}
          <div className="grid gap-4">
            {problems.map((problem) => {
              const isRose = problem.accent === "rose";
              const accent = isRose ? "#FF2D95" : "#007BA7";

              return (
                <article
                  key={problem.number}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#141414] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#007BA7]/50 hover:bg-[#171717] hover:shadow-[0_20px_60px_rgba(0,123,167,0.08)] sm:p-8"
                >
                  {/* Accent line */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-6 left-0 w-[3px] rounded-full opacity-70 transition-all duration-300 group-hover:inset-y-4 group-hover:opacity-100"
                    style={{ backgroundColor: accent }}
                  />

                  <div className="flex items-start gap-5">
                    <span
                      className="pt-1 text-xs font-black tracking-[0.15em]"
                      style={{ color: accent }}
                    >
                      {problem.number}
                    </span>

                    <div>
                      <h3 className="text-xl font-black tracking-tight text-white sm:text-2xl">
                        {problem.title}
                      </h3>

                      <p className="mt-3 max-w-xl leading-7 text-white/55">
                        {problem.text}
                      </p>
                    </div>
                  </div>

                  {/* Hover detail */}
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-12 -right-12 size-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                    style={{ backgroundColor: accent }}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
