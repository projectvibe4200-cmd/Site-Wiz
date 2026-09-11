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
      className="relative bg-[var(--background)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--teal-600)]">
            FAQ
          </p>

          <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] text-[var(--ink)] sm:text-6xl">
            Questions?
            <span className="block text-[var(--teal-500)]">
              We've got answers.
            </span>
          </h2>

          <p className="mt-7 max-w-md leading-7 text-[var(--muted)]">
            Still have a question that isn't answered here? You can contact
            the Site-Wiz team directly.
          </p>

          <a
            href="mailto:support@site-wiz.com"
            className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[var(--ink)] underline decoration-[var(--teal-400)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--teal-600)]"
          >
            support@site-wiz.com
            <span>↗</span>
          </a>
        </div>

        <div className="rounded-[2rem] border border-[var(--line)] bg-white p-3 shadow-[0_20px_70px_rgba(9,43,42,0.05)]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[var(--line)] last:border-b-0"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 rounded-2xl px-4 py-5 text-left transition-colors duration-300 hover:bg-[var(--teal-50)] sm:px-6"
                >
                  <span className="text-sm font-black text-[var(--ink)] sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-full bg-[var(--teal-50)] text-lg font-normal text-[var(--teal-700)] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-6 pr-14 text-sm leading-7 text-[var(--muted)] sm:px-6 sm:pr-20">
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