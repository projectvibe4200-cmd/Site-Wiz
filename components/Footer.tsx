export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--ink)] text-white">
      <div className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-[var(--teal-500)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-20 sm:px-8 sm:pt-24 lg:px-12 lg:pt-28">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr_0.6fr]">
          {/* Brand */}
          <div className="max-w-md">
            <a
              href="#top"
              className="inline-flex transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Site-Wiz home"
            >
              <span className="text-2xl font-black tracking-[-0.07em] text-white">
                site
                <span className="text-[var(--teal-400)]">
                  -wiz
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/50 sm:text-base">
              Professional websites for real businesses,
              without the traditional upfront development bill.
            </p>

            <a
              href="#get-started"
              className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[var(--teal-400)] px-6 text-sm font-black !text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(53,203,184,0.18)] sm:w-auto"
            >
              <span className="!text-white">
                Build My Website
              </span>

              <span className="text-lg !text-white">
                →
              </span>
            </a>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--teal-400)]">
              Explore
            </p>

            <nav className="mt-5 grid gap-3">
              <a
                href="#why"
                className="w-fit py-1 text-sm font-semibold text-white/60 transition-colors hover:text-white"
              >
                Why Site-Wiz
              </a>

              <a
                href="#included"
                className="w-fit py-1 text-sm font-semibold text-white/60 transition-colors hover:text-white"
              >
                What's Included
              </a>

              <a
                href="#showcase"
                className="w-fit py-1 text-sm font-semibold text-white/60 transition-colors hover:text-white"
              >
                See the Difference
              </a>

              <a
                href="#our-story"
                className="w-fit py-1 text-sm font-semibold text-white/60 transition-colors hover:text-white"
              >
                Our Story
              </a>

              <a
                href="#pricing"
                className="w-fit py-1 text-sm font-semibold text-white/60 transition-colors hover:text-white"
              >
                Pricing
              </a>

              <a
                href="#faq"
                className="w-fit py-1 text-sm font-semibold text-white/60 transition-colors hover:text-white"
              >
                FAQ
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--teal-400)]">
              Contact
            </p>

            <div className="mt-5 grid gap-5">
              <div>
                <p className="text-xs font-semibold text-white/30">
                  Support
                </p>

                <a
                  href="mailto:support@site-wiz.com"
                  className="mt-1 block break-all text-sm font-semibold text-white/70 transition-colors hover:text-white"
                >
                  support@site-wiz.com
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold text-white/30">
                  Phone
                </p>

                <a
                  href="tel:0000000000"
                  className="mt-1 block text-sm font-semibold text-white/70 transition-colors hover:text-white"
                >
                  000-000-0000
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold text-white/30">
                  Based in
                </p>

                <p className="mt-1 text-sm font-semibold leading-6 text-white/70">
                  1247 N Lakeview Ave
                  <br />
                  Anaheim, California
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-xs leading-5 text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Site-Wiz. All rights reserved.
            </p>

            <p>
              Professional websites for $100/month.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}