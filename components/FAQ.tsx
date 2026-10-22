
"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Site-Wiz websites are $100/month. The subscription includes development, design, hosting, domain, maintenance, updates, contact form and support.",
  },
  {
    question: "How long does it take to build my website?",
    answer:
      "The target delivery time is 1–2 weeks after we have the information and materials needed to build your website.",
  },
  {
    question: "What if I need changes after my website is live?",
    answer:
      "Updates and changes are included in the subscription. You can request changes to things like text, photos, services and other website content.",
  },
  {
    question: "Do I need to know anything about websites?",
    answer:
      "No. Site-Wiz handles the technical side of the website. You provide the information about your business, and the Site-Wiz team handles the website work.",
  },
  {
    question: "Is SEO included?",
    answer:
      "No. SEO services are not included in the $100/month subscription.",
  },
  {
    question: "What happens when I want to get started?",
    answer:
      "Start the Get Started experience below and tell us about your business and what you want from your website. The Site-Wiz team will then contact you to discuss the project.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden bg-[#24272B] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12"
    >
      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 size-[28rem] rounded-full bg-[#007BA7]/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 size-[28rem] rounded-full bg-[#FF2D95]/10 blur-[120px]"
      />

      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
        {/* Introduction */}
        <div>
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#007BA7]">
            <span className="h-px w-7 bg-[#FF2D95]" />
            FAQ
          </p>

          <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl">
            Questions?
            <span className="mt-2 block text-[#FF2D95]">
              We've got answers.
            </span>
          </h2>

          <p className="mt-7 max-w-md leading-7 text-white/60">
            Still have a question that isn't answered here? You can contact
            the Site-Wiz team directly.
          </p>

          <a
            href="mailto:support@site-wiz.com"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-black text-white underline decoration-[#007BA7] decoration-2 underline-offset-4 transition-colors hover:text-[#FF2D95] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF2D95]"
          >
            support@site-wiz.com
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        </div>

        {/* Accordion */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.3)] sm:p-3">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-px w-2/3 bg-gradient-to-l from-[#FF2D95] via-[#007BA7] to-transparent"
          />

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const accent = index % 2 === 0 ? "#007BA7" : "#FF2D95";

            return (
              <div
                key={faq.question}
                className="relative border-b border-white/[0.08] last:border-b-0"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 rounded-2xl px-4 py-5 text-left transition-colors duration-300 hover:bg-white/[0.035] focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#FF2D95] sm:px-6 sm:py-6"
                >
                  <span
                    className={`text-sm font-black transition-colors duration-300 sm:text-base ${
                      isOpen ? "text-white" : "text-white/80"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className="grid size-9 shrink-0 place-items-center rounded-full border text-lg transition-all duration-300"
                    style={{
                      borderColor: isOpen ? `${accent}80` : "rgba(255,255,255,0.1)",
                      backgroundColor: isOpen ? `${accent}20` : "rgba(255,255,255,0.04)",
                      color: isOpen ? accent : "rgba(255,255,255,0.65)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-label={faq.question}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-6 pr-12 text-sm leading-7 text-white/55 sm:px-6 sm:pr-16">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
