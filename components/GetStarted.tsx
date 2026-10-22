
"use client";

import { useMemo, useState } from "react";

type Answer = {
  need: string;
  business: string;
  goal: string;
  style: string;
  assets: string;
};

const questions = [
  {
    key: "need" as const,
    eyebrow: "First things first",
    title: "What brings you to Site-Wiz?",
    description:
      "Choose the option that best describes where your business is today.",
    options: [
      {
        title: "I need a new website",
        description: "Starting from scratch.",
      },
      {
        title: "My website needs an update",
        description: "Time for a better online presence.",
      },
      {
        title: "I'm starting a business",
        description: "Let's get your business online.",
      },
    ],
  },
  {
    key: "business" as const,
    eyebrow: "Tell us about it",
    title: "What kind of business do you run?",
    description:
      "This helps us understand what your website needs to do.",
    options: [
      {
        title: "Local service business",
        description: "Home services, trades, local professionals.",
      },
      {
        title: "Professional service",
        description: "Consultants, agencies, offices and more.",
      },
      {
        title: "Retail or product business",
        description: "Products, shops and physical businesses.",
      },
      {
        title: "Something else",
        description: "We'll figure it out together.",
      },
    ],
  },
  {
    key: "goal" as const,
    eyebrow: "The important part",
    title: "What should your website help you do?",
    description: "Pick what matters most to your business.",
    options: [
      {
        title: "Get more calls",
        description: "Make it easy for customers to contact you.",
      },
      {
        title: "Generate leads",
        description: "Turn visitors into potential customers.",
      },
      {
        title: "Show my services",
        description: "Clearly explain what you offer.",
      },
      {
        title: "Build credibility",
        description: "Look established and professional online.",
      },
    ],
  },
  {
    key: "style" as const,
    eyebrow: "Make it yours",
    title: "What kind of feel should your website have?",
    description:
      "Choose the direction that feels closest to your business.",
    options: [
      {
        title: "Modern",
        description: "Clean, current and technology-forward.",
      },
      {
        title: "Bold",
        description: "Confident, energetic and attention-grabbing.",
      },
      {
        title: "Premium",
        description: "Refined, polished and sophisticated.",
      },
      {
        title: "Friendly",
        description: "Approachable, warm and welcoming.",
      },
    ],
  },
  {
    key: "assets" as const,
    eyebrow: "Almost there",
    title: "What do you already have?",
    description: "Don't worry if you have nothing yet.",
    options: [
      {
        title: "Logo and photos",
        description: "I've already got the basics.",
      },
      {
        title: "Some business information",
        description: "I have content but need the rest.",
      },
      {
        title: "An existing website",
        description: "We can use it as a starting point.",
      },
      {
        title: "Nothing yet",
        description: "That's completely fine.",
      },
    ],
  },
];

const initialAnswers: Answer = {
  need: "",
  business: "",
  goal: "",
  style: "",
  assets: "",
};

export default function GetStarted() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer>(initialAnswers);

  const [contact, setContact] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    preferredContact: "Email",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const totalSteps = questions.length + 1;
  const currentQuestion = questions[step];

  const progress = useMemo(
    () => Math.round(((step + 1) / totalSteps) * 100),
    [step, totalSteps]
  );

  const selectAnswer = (value: string) => {
    if (!currentQuestion || submitting) return;

    setAnswers((current) => ({
      ...current,
      [currentQuestion.key]: value,
    }));

    window.setTimeout(() => {
      setStep((currentStep) => currentStep + 1);
    }, 260);
  };

  const goBack = () => {
    if (submitting) return;
    setStep((current) => Math.max(0, current - 1));
  };

  const updateContact = (
    field: keyof typeof contact,
    value: string
  ) => {
    setContact((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (submitting) return;

    setSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contact.name,
          business: contact.business,
          email: contact.email,
          phone: contact.phone,
          preferredContact: contact.preferredContact,
          need: answers.need,
          businessType: answers.business,
          goal: answers.goal,
          style: answers.style,
          assets: answers.assets,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit lead");
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Lead submission error:", error);

      alert(
        "We couldn't send your request right now. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section
        id="get-started"
        className="relative isolate overflow-hidden bg-[#24272B] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#007BA7]/15 blur-[120px]"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto grid size-20 place-items-center rounded-full border border-[#FF2D95]/30 bg-[#FF2D95]/10 text-3xl font-black text-[#FF2D95] shadow-[0_0_60px_rgba(255,45,149,0.12)]">
            ✓
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#007BA7]">
            You're all set
          </p>

          <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.07em] sm:text-6xl">
            Let's build something{" "}
            <span className="text-[#FF2D95]">great.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
            We've got your information. The Site-Wiz team will contact you
            about your website. You can also reach us directly whenever you
            prefer.
          </p>

          <div className="mt-9 flex justify-center">
            <a
              href="mailto:support@site-wiz.com"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/15 px-7 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#007BA7]/60 hover:bg-[#007BA7]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF2D95]"
            >
              Contact Site-Wiz <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="get-started"
      className="relative isolate overflow-hidden bg-[#24272B] px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      {/* Ambient blue and rose lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[34rem] rounded-full bg-[#007BA7]/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 -z-10 size-[34rem] rounded-full bg-[#FF2D95]/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#007BA7]/30 bg-[#007BA7]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#007BA7]">
              <span className="size-1.5 animate-pulse rounded-full bg-[#FF2D95]" />
              Build your website
            </div>
          </div>

          <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl">
            Let's get{" "}
            <span className="text-[#FF2D95]">started.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-white/55 sm:text-lg">
            A few quick questions. No complicated brief required.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          {/* Progress indicator */}
          <div className="mb-4 flex items-center justify-between px-1 text-xs font-bold text-white/45">
            <span>
              Step {step + 1} of {totalSteps}
            </span>
            <span>{progress}%</span>
          </div>

          <div
            className="h-1 overflow-hidden rounded-full bg-white/10"
            role="progressbar"
            aria-label="Form progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#007BA7] to-[#FF2D95] transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Form card */}
          <div className="relative mt-4 overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111]/95 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-6 lg:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-px w-2/3 bg-gradient-to-l from-[#FF2D95] via-[#007BA7] to-transparent"
            />

            {currentQuestion ? (
              <div
                key={currentQuestion.key}
                className="animate-[reveal-up_0.45s_ease_both]"
              >
                <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#007BA7]">
                    {currentQuestion.eyebrow}
                  </p>

                  <h3 className="mt-3 text-3xl font-black leading-tight tracking-[-0.045em] sm:text-4xl">
                    {currentQuestion.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/50 sm:text-base">
                    {currentQuestion.description}
                  </p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={option.title}
                      type="button"
                      onClick={() => selectAnswer(option.title)}
                      className="group relative min-h-[118px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#007BA7]/50 hover:bg-white/[0.06] hover:shadow-[0_18px_50px_rgba(0,123,167,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF2D95]"
                    >
                      <span className="absolute right-5 top-5 text-xs font-bold text-white/25 transition-colors group-hover:text-[#FF2D95]">
                        0{index + 1}
                      </span>

                      <span className="block pr-10 text-base font-black text-white sm:text-lg">
                        {option.title}
                      </span>

                      <span className="mt-2 block max-w-sm text-sm leading-5 text-white/45">
                        {option.description}
                      </span>

                      <span className="absolute bottom-5 right-5 text-lg text-[#FF2D95] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                        →
                      </span>
                    </button>
                  ))}
                </div>

                {step > 0 && (
                  <button
                    type="button"
                    onClick={goBack}
                    className="mt-6 inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-white/45 transition-colors hover:text-[#FF2D95] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF2D95]"
                  >
                    ← Back
                  </button>
                )}
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="animate-[reveal-up_0.45s_ease_both]"
              >
                <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#007BA7]">
                    Final step
                  </p>

                  <h3 className="mt-3 text-3xl font-black leading-tight tracking-[-0.045em] sm:text-4xl">
                    Where should we reach you?
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/50 sm:text-base">
                    Send us your details and the Site-Wiz team will take it
                    from here.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold text-white/60">
                      Your name
                    </span>
                    <input
                      required
                      autoComplete="name"
                      value={contact.name}
                      onChange={(event) =>
                        updateContact("name", event.target.value)
                      }
                      placeholder="Your name"
                      className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/25 transition-colors focus:border-[#007BA7] focus:ring-2 focus:ring-[#007BA7]/15"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold text-white/60">
                      Business name
                    </span>
                    <input
                      required
                      autoComplete="organization"
                      value={contact.business}
                      onChange={(event) =>
                        updateContact("business", event.target.value)
                      }
                      placeholder="Business name"
                      className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/25 transition-colors focus:border-[#007BA7] focus:ring-2 focus:ring-[#007BA7]/15"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold text-white/60">
                      Email
                    </span>
                    <input
                      required
                      type="email"
                      autoComplete="email"
                      value={contact.email}
                      onChange={(event) =>
                        updateContact("email", event.target.value)
                      }
                      placeholder="you@business.com"
                      className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/25 transition-colors focus:border-[#007BA7] focus:ring-2 focus:ring-[#007BA7]/15"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold text-white/60">
                      Phone
                    </span>
                    <input
                      required
                      type="tel"
                      autoComplete="tel"
                      value={contact.phone}
                      onChange={(event) =>
                        updateContact("phone", event.target.value)
                      }
                      placeholder="(000) 000-0000"
                      className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/25 transition-colors focus:border-[#007BA7] focus:ring-2 focus:ring-[#007BA7]/15"
                    />
                  </label>
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-xs font-bold text-white/60">
                    Preferred contact method
                  </p>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {["Email", "Phone", "Either"].map((method, index) => {
                      const selected = contact.preferredContact === method;
                      const accent = index === 1 ? "#FF2D95" : "#007BA7";

                      return (
                        <button
                          key={method}
                          type="button"
                          aria-pressed={selected}
                          onClick={() =>
                            updateContact("preferredContact", method)
                          }
                          className={`min-h-14 rounded-2xl border px-4 text-sm font-bold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF2D95] ${
                            selected
                              ? "border-[#FF2D95]/70 bg-[#FF2D95]/10 text-white shadow-[0_0_25px_rgba(255,45,149,0.07)]"
                              : "border-white/10 bg-white/[0.025] text-white/60 hover:border-white/20 hover:bg-white/[0.05]"
                          }`}
                        >
                          <span
                            className="mr-2 inline-block size-1.5 rounded-full"
                            style={{
                              backgroundColor: selected ? accent : "rgba(255,255,255,0.2)",
                            }}
                          />
                          {method}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={submitting}
                    className="order-2 inline-flex min-h-14 items-center justify-center rounded-full px-5 text-sm font-bold text-white/45 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-40 sm:order-1 sm:justify-start"
                  >
                    ← Back
                  </button>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group order-1 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#FF2D95] px-7 text-sm font-black text-[#0A0A0A] shadow-[0_15px_40px_rgba(255,45,149,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,45,149,0.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-60 sm:order-2"
                  >
                    {submitting ? "Sending..." : "Start My Website"}

                    {!submitting && (
                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    )}
                  </button>
                </div>

                <p className="mt-4 text-center text-xs leading-5 text-white/35 sm:text-right">
                  Your details will be used to follow up on your website request.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
