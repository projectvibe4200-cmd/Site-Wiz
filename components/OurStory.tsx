export default function OurStory() {
  return (
    <section
      id="our-story"
      className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="pointer-events-none absolute right-[-10rem] top-[-10rem] size-[30rem] rounded-full bg-[var(--teal-100)]/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--teal-50)] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--teal-700)]">
              <span className="size-2 rounded-full bg-[var(--teal-500)]" />
              Our Story
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-[var(--ink)] sm:text-5xl lg:text-6xl">
              We started Site-Wiz because websites shouldn't be a luxury.
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-12">
            <div className="space-y-6 text-base leading-8 text-[var(--muted)] sm:text-lg">
              <p>
                Elijah and Kane kept seeing the same problem: businesses knew
                they needed a website, but getting one often meant spending
                far more money than it should.
              </p>

              <p>
                A business shouldn't have to choose between having a
                professional online presence and keeping thousands of dollars
                in the bank. It also shouldn't have to live with an outdated
                website simply because rebuilding it feels too expensive.
              </p>

              <p>
                That's why they started Site-Wiz — to build a different model.
                Instead of asking businesses for a huge upfront development
                bill, Site-Wiz makes professional websites available through
                a simple monthly subscription.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[var(--line)] bg-[var(--teal-50)] p-6">
                <p className="text-sm font-bold text-[var(--teal-700)]">
                  The problem
                </p>

                <p className="mt-2 text-lg font-black tracking-tight text-[var(--ink)]">
                  Businesses overpay for websites.
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--line)] bg-white p-6 shadow-[0_15px_50px_rgba(9,43,42,0.06)]">
                <p className="text-sm font-bold text-[var(--teal-700)]">
                  The answer
                </p>

                <p className="mt-2 text-lg font-black tracking-tight text-[var(--ink)]">
                  A better way to get online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}