
export default function OurStory() {
  return (
    <section
      id="our-story"
      className="relative isolate overflow-hidden bg-[#0A0A0A] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      {/* Ambient brand lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[30rem] rounded-full bg-[#007BA7]/15 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 -z-10 size-[24rem] rounded-full bg-[#FF2D95]/[0.06] blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Story heading */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#007BA7]/30 bg-[#007BA7]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#007BA7]">
              <span className="size-2 rounded-full bg-[#FF2D95]" />
              Our Story
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
              We started Site-Wiz because websites shouldn&apos;t be a luxury.
            </h2>

            <div className="mt-7 h-1 w-16 rounded-full bg-[#FF2D95]" />
          </div>

          {/* Story content */}
          <div className="max-w-2xl lg:pt-12">
            <div className="space-y-6 text-base leading-8 text-white/60 sm:text-lg">
              <p>
                Elijah and Kane kept seeing the same problem: businesses knew
                they needed a website, but getting one often meant spending
                far more money than it should.
              </p>

              <p>
                A business shouldn&apos;t have to choose between having a
                professional online presence and keeping thousands of dollars
                in the bank. It also shouldn&apos;t have to live with an outdated
                website simply because rebuilding it feels too expensive.
              </p>

              <p>
                That&apos;s why they started Site-Wiz — to build a different model.
                Instead of asking businesses for a huge upfront development
                bill, Site-Wiz makes professional websites available through
                a simple monthly subscription.
              </p>
            </div>

            {/* Mission cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#141414] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#007BA7]/50">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 size-28 rounded-full bg-[#007BA7]/10 blur-2xl transition-opacity group-hover:opacity-100"
                />

                <div className="relative">
                  <p className="text-sm font-bold text-[#007BA7]">
                    The problem
                  </p>

                  <p className="mt-3 text-lg font-black tracking-tight text-white">
                    Businesses overpay for websites.
                  </p>

                  <div className="mt-5 h-px w-8 bg-[#007BA7] transition-all duration-300 group-hover:w-14" />
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#141414] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF2D95]/50">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 size-28 rounded-full bg-[#FF2D95]/[0.08] blur-2xl"
                />

                <div className="relative">
                  <p className="text-sm font-bold text-[#FF2D95]">
                    The answer
                  </p>

                  <p className="mt-3 text-lg font-black tracking-tight text-white">
                    A better way to get online.
                  </p>

                  <div className="mt-5 h-px w-8 bg-[#FF2D95] transition-all duration-300 group-hover:w-14" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
