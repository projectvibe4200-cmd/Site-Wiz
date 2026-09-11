export default function Problem() {
  const problems = [
    {
      number: "01",
      title: "Big upfront costs",
      text: "A professional website shouldn't require a huge bill before your business even starts benefiting from it.",
    },
    {
      number: "02",
      title: "Websites get neglected",
      text: "Businesses change. Services change. Hours change. Your website should be able to change with you.",
    },
    {
      number: "03",
      title: "Building it is only half the job",
      text: "Hosting, maintenance, updates and support matter just as much as the original build.",
    },
  ];

  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[var(--ink)] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--teal-400)]">
              The old way
            </p>

            <h2 className="max-w-xl text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Your website shouldn't be a financial headache.
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-white/60 sm:text-lg">
              Most businesses don't need a complicated web project. They need
              a professional online presence that works, looks good and stays
              current.
            </p>
          </div>

          <div className="grid gap-4">
            {problems.map((problem) => (
              <article
                key={problem.number}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--teal-400)]/40 hover:bg-white/[0.07] sm:p-8"
              >
                <div className="flex items-start gap-5">
                  <span className="text-xs font-black tracking-[0.15em] text-[var(--teal-400)]">
                    {problem.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-black tracking-tight sm:text-2xl">
                      {problem.title}
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-white/55">
                      {problem.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}