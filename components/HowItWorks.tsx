const steps = [
  {
    number: "01",
    title: "Tell us about your business",
    text: "Start the quick Get Started experience and tell us what you need.",
  },
  {
    number: "02",
    title: "We build your website",
    text: "Our team turns your information into a professional website designed around your business.",
  },
  {
    number: "03",
    title: "Go live",
    text: "Your website goes live within 1–2 weeks, with hosting, maintenance and support included.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-[var(--background)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--teal-600)]">
              How it works
            </p>

            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] text-[var(--ink)] sm:text-6xl">
              From idea to live website.
              <span className="block text-[var(--teal-500)]">
                Without the headache.
              </span>
            </h2>
          </div>

          <p className="max-w-sm leading-7 text-[var(--muted)]">
            Simple process. One monthly price. A website your business can
            actually use.
          </p>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(9,43,42,0.08)] sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-[var(--teal-600)]">
                  {step.number}
                </span>

                <span className="grid size-10 place-items-center rounded-full bg-[var(--teal-50)] text-[var(--teal-700)] transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </div>

              <h3 className="mt-20 max-w-xs text-2xl font-black leading-tight tracking-[-0.04em] text-[var(--ink)]">
                {step.title}
              </h3>

              <p className="mt-4 max-w-sm leading-7 text-[var(--muted)]">
                {step.text}
              </p>

              <div className="absolute -bottom-16 -right-16 size-36 rounded-full bg-[var(--teal-50)] transition-transform duration-700 group-hover:scale-125" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}