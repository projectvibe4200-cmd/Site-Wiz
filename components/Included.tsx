const features = [
  {
    label: "01",
    title: "Professional design",
    text: "A custom-looking website designed around your business, your customers and what you want them to do.",
  },
  {
    label: "02",
    title: "Development",
    text: "A modern, responsive website built to work across phones, tablets and desktops.",
  },
  {
    label: "03",
    title: "Hosting",
    text: "Your website is hosted and kept online without you having to manage the technical side.",
  },
  {
    label: "04",
    title: "Domain",
    text: "Your website's domain is included as part of the monthly service.",
  },
  {
    label: "05",
    title: "Maintenance & updates",
    text: "Need something changed? Services, photos, text, contact details or other website updates can be handled for you.",
  },
  {
    label: "06",
    title: "Support",
    text: "Have a question or need help? You have a direct support channel with the Site-Wiz team.",
  },
];

export default function Included() {
  return (
    <section
      id="included"
      className="relative bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--teal-600)]">
            What's included
          </p>

          <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] text-[var(--ink)] sm:text-6xl lg:text-7xl">
            One monthly price.
            <span className="block text-[var(--teal-500)]">
              Everything you need.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
            Site-Wiz handles the website work so you can focus on running your
            business.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.label}
              className="group bg-white p-7 transition-all duration-500 hover:bg-[var(--teal-50)] sm:p-9"
            >
              <span className="text-xs font-black tracking-[0.15em] text-[var(--teal-600)]">
                {feature.label}
              </span>

              <h3 className="mt-8 text-xl font-black tracking-tight text-[var(--ink)]">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-[var(--muted)]">
                {feature.text}
              </p>

              <div className="mt-8 h-px w-8 bg-[var(--teal-400)] transition-all duration-500 group-hover:w-16" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}