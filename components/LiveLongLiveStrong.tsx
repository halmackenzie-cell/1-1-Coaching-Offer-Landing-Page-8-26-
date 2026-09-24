"use client";

import { useState, type FormEvent } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrpblqvy";

const pillars = [
  "Body Composition",
  "Cardiovascular Health",
  "Metabolic Health",
  "Strength & Physical Function",
  "Cardiorespiratory Fitness",
];

const coreMetrics = [
  "Waist-to-height ratio",
  "Visceral fat",
  "Strength (tested by benchmarks like grip strength, bench press, deadlift)",
  "VO2 max",
  "Blood pressure",
  "ApoB",
  "HbA1c",
  "Triglycerides",
];

const howItWorks = [
  "All 8 of these metrics are tested at the beginning of the program",
  "We evaluate where you stand currently for each one vs. where you want to be",
  "I build you a customized program to help you improve in all areas, providing ongoing coaching and accountability to help you get there",
  "We retest all 8 metrics at the end of the program to measure your progress",
  "You live longer, and you live stronger (jk, I can't guarantee that, but you get it)",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function LiveLongLiveStrong() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="inline-block rounded-full bg-lime-400 px-4 py-1 text-xs font-bold uppercase tracking-widest text-black sm:text-sm">
            Live Long, Live Strong Program
          </span>
          <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-black sm:text-4xl">
            Something Bigger Is Coming
          </h2>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-base text-gray-600 sm:text-lg">
          This is for anyone who wants more than a great physique: a longer,
          healthier life with the capacity to actually enjoy it. Live Long,
          Live Strong is a comprehensive health performance advisory built
          around the metrics genuinely tied to how long you live and how
          well you live, not vanity numbers.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-gray-600 sm:text-lg">
          I test where you actually stand across five pillars, build you a
          fully personalized plan to move the ones that matter, coordinate
          with your physician and other specialists along the way, then
          retest months later to prove it&apos;s working.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-center text-base font-bold uppercase tracking-wide text-black sm:text-left">
              The Five Pillars
            </h3>
            <ul className="mt-3 space-y-2 text-center text-base text-gray-600 sm:text-left">
              {pillars.map((pillar) => (
                <li key={pillar}>{pillar}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-base font-bold uppercase tracking-wide text-black sm:text-left">
              The Eight Core Metrics
            </h3>
            <ul className="mt-3 space-y-2 text-center text-base text-gray-600 sm:text-left">
              {coreMetrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-center text-base font-bold uppercase tracking-wide text-black">
            Here&apos;s How It Works
          </h3>
          <ol className="mx-auto mt-3 max-w-2xl list-decimal space-y-2 pl-5 text-base text-gray-600">
            {howItWorks.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-12 max-w-xl rounded-2xl border-2 border-lime-600 bg-black/5 p-6 text-center sm:p-10">
          <p className="text-base font-semibold text-black">
            This program is still being built, and I&apos;m looking for a
            small group of serious people to help shape it. Provide your
            information below or text me at 914 522 2604 if you&apos;re
            interested. The beta testers will receive a significantly
            discounted price, so right now is the cheapest the program
            will ever be.
          </p>

          {status === "success" ? (
            <p className="mt-6 text-base font-semibold text-lime-700">
              Got it, thanks! I&apos;ll be in touch soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-3 text-left">
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="_subject" value="Live Long, Live Strong interest" />

              <div>
                <label htmlFor="llls-name" className="sr-only">
                  Name
                </label>
                <input
                  id="llls-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Name"
                  className="w-full rounded-lg border border-black/20 bg-white px-4 py-3 text-base text-black placeholder:text-gray-400 focus:border-black focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="llls-email" className="sr-only">
                  Email
                </label>
                <input
                  id="llls-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full rounded-lg border border-black/20 bg-white px-4 py-3 text-base text-black placeholder:text-gray-400 focus:border-black focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="llls-phone" className="sr-only">
                  Phone number
                </label>
                <input
                  id="llls-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Phone number"
                  className="w-full rounded-lg border border-black/20 bg-white px-4 py-3 text-base text-black placeholder:text-gray-400 focus:border-black focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="llls-message" className="sr-only">
                  Anything you want me to know? (optional)
                </label>
                <textarea
                  id="llls-message"
                  name="message"
                  rows={3}
                  placeholder="Anything you want me to know? (optional)"
                  className="w-full rounded-lg border border-black/20 bg-white px-4 py-3 text-base text-black placeholder:text-gray-400 focus:border-black focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-full bg-black px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-gray-800 disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "I'm Interested"}
              </button>

              {status === "error" && (
                <p className="text-sm text-red-600">
                  Something went wrong. Mind emailing me directly instead?
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
