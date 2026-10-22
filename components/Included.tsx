
const features = [
  {
    label: "01",
    title: "Professional design",
    text: "A custom-looking website designed around your business, your customers and what you want them to do.",
    accent: "rose",
  },
  {
    label: "02",
    title: "Development",
    text: "A modern, responsive website built to work across phones, tablets and desktops.",
    accent: "blue",
  },
  {
    label: "03",
    title: "Hosting",
    text: "Your website is hosted and kept online without you having to manage the technical side.",
    accent: "rose",
  },
  {
    label: "04",
    title: "Domain",
    text: "Your website's domain is included as part of the monthly service.",
    accent: "blue",
  },
  {
    label: "05",
    title: "Maintenance & updates",
    text: "Need something changed? Services, photos, text, contact details or other website updates can be handled for you.",
    accent: "rose",
  },
  {
    label: "06",
    title: "Support",
    text: "Have a question or need help? You have a direct support channel with the Site-Wiz team.",
    accent: "blue",
  },
];

export default function Included() {
  return (
    <section
      id="included"
      className="relative isolate overflow-hidden bg-[#24272B] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12"
    >
      {/* Ambient blue and rose lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-0 -z-10 size-[32rem] rounded-full bg-[#007BA7]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-0 -z-10 size-[28rem] rounded-full bg-[#FF2D95]/[0.06] blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#FF2D95]">
            <span className="h-px w-8 bg-[#FF2D95]" />
            What's included
          </p>

          <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            One monthly price.
            <span className="mt-2 block text-[#007BA7]">
              Everything you need.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Site-Wiz handles the website work so you can focus on running your
            business.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const isRose = feature.accent === "rose";
            const accent = isRose ? "#FF2D95" : "#007BA7";

            return (
              <article
                key={feature.label}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-[#141414] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#007BA7]/45 hover:bg-[#171717] hover:shadow-[0_20px_60px_rgba(0,123,167,0.07)] sm:p-9"
              >
                {/* Number and accent */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-black tracking-[0.15em]"
                    style={{ color: accent }}
                  >
                    {feature.label}
                  </span>

                  <span
                    aria-hidden="true"
                    className="grid size-8 place-items-center rounded-full border text-sm transition-transform duration-300 group-hover:rotate-45"
                    style={{
                      borderColor: `${accent}55`,
                      color: accent,
                    }}
                  >
                    ↗
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-black tracking-tight text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-white/55">
                  {feature.text}
                </p>

                {/* Animated accent line */}
                <div
                  className="mt-8 h-[2px] w-8 rounded-full transition-all duration-500 group-hover:w-16"
                  style={{ backgroundColor: accent }}
                />

                {/* Subtle hover glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-16 -right-16 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15"
                  style={{ backgroundColor: accent }}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
