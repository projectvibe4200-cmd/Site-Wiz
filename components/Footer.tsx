
export default function Footer() {
  const exploreLinks = [
    { label: "Why Site-Wiz", href: "#why" },
    { label: "What's Included", href: "#included" },
    { label: "See the Difference", href: "#showcase" },
    { label: "Our Story", href: "#our-story" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="relative isolate overflow-hidden bg-[#24272B] text-white">
      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 size-[28rem] rounded-full bg-[#007BA7]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 -z-10 size-[24rem] rounded-full bg-[#FF2D95]/[0.07] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-20 sm:px-8 sm:pt-24 lg:px-12 lg:pt-28">
        <div className="grid gap-12 sm:gap-14 lg:grid-cols-[1.4fr_0.6fr_0.6fr]">
          {/* Brand */}
          <div className="max-w-md">
            <a
              href="#top"
              className="group inline-flex items-center transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Site-Wiz home"
            >
              <span className="text-3xl font-black tracking-[-0.08em] text-white">
                site
                <span className="text-[#FF2D95]">-wiz</span>
                <span className="ml-2 inline-block size-2 rounded-full bg-[#007BA7] transition-colors duration-300 group-hover:bg-[#FF2D95]" />
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/50 sm:text-base">
              Professional websites for real businesses, without the
              traditional upfront development bill.
            </p>

            <a
              href="#get-started"
              className="group mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#FF2D95] px-6 text-sm font-black text-[#0A0A0A] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(255,45,149,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Build My Website
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-white/35">
              <span className="size-1.5 rounded-full bg-[#007BA7]" />
              Websites. Built different.
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-[#007BA7]">
              <span className="h-px w-5 bg-[#FF2D95]" />
              Explore
            </p>

            <nav aria-label="Footer navigation" className="mt-5 grid gap-3">
              {exploreLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex w-fit items-center gap-2 py-1 text-sm font-semibold text-white/55 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF2D95]"
                >
                  <span>{item.label}</span>
                  <span className="text-[#FF2D95] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-[#007BA7]">
              <span className="h-px w-5 bg-[#FF2D95]" />
              Contact
            </p>

            <div className="mt-5 grid gap-5">
              <div>
                <p className="text-xs font-semibold text-white/35">
                  Support
                </p>

                <a
                  href="mailto:support@site-wiz.com"
                  className="mt-1 inline-block break-all text-sm font-semibold text-white/75 transition-colors hover:text-[#FF2D95] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF2D95]"
                >
                  support@site-wiz.com
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold text-white/35">
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

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-6 sm:mt-16">
          <div className="flex flex-col gap-3 text-xs leading-5 text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Site-Wiz. All rights reserved.
            </p>

            <p>
              Professional websites for{" "}
              <span className="font-bold text-white/65">$100/month.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
