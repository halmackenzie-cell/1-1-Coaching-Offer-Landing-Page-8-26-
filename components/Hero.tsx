import { BOOKING_URL, STRIPE_PAYMENT_LINK, PRICING_DISCLOSURE } from "@/lib/links";
import TestimonialImage from "@/components/TestimonialImage";

export default function Hero() {
  return (
    <section className="px-4 py-16 text-center sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <span className="inline-block rounded-full bg-lime-400 px-6 py-2 text-lg font-bold uppercase tracking-widest text-black sm:text-2xl">
          Peak Physique Program
        </span>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-black sm:text-5xl">
          Get Lean and Strong — Without Giving Up Your Career, Your Social
          Life, or Your Beer
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-600 sm:text-lg">
          1:1 holistic health coaching for busy professionals over 30 who are
          15–30+ lbs from the body they&apos;ve always wanted. Real systems,
          real accountability, real results. Built by someone who transformed
          his own physique while working in Corporate America for over 15
          years, and now helps other high achievers do the same.
        </p>

        <div className="mx-auto mt-8 grid max-w-xl grid-cols-2 gap-6 sm:gap-10">
          <div>
            <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500">
              Old Hal
            </p>
            <div className="mt-2">
              <TestimonialImage
                src="/testimonials/hal-before-1.jpg"
                alt="Hal before his transformation"
                aspect="aspect-[3/4]"
                objectPosition="top"
              />
            </div>
          </div>
          <div>
            <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500">
              Current Hal
            </p>
            <div className="mt-2">
              <TestimonialImage
                src="/testimonials/hal-hero-after.jpg"
                alt="Hal after his transformation"
                aspect="aspect-[3/4]"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={STRIPE_PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full border-2 border-black px-8 py-4 text-base font-semibold text-black transition hover:bg-black hover:text-white sm:w-auto"
          >
            Enroll Now
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-black px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-gray-800 sm:w-auto"
          >
            Book a Free Call
          </a>
        </div>

        <p className="mx-auto mt-4 max-w-xl text-sm font-semibold text-black">
          Due to the personalized nature of my approach, I only take on 2 new
          1:1 clients per month — weekly Loom feedback and direct access
          don&apos;t work if I&apos;m spread across 50 people.
        </p>

        <p className="mt-4 text-sm text-gray-600">{PRICING_DISCLOSURE}</p>
      </div>
    </section>
  );
}
