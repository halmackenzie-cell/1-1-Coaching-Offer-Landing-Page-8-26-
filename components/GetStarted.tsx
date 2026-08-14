import { BOOKING_URL, STRIPE_PAYMENT_LINK } from "@/lib/links";

export default function GetStarted() {
  return (
    <section className="bg-gray-50 px-4 py-16 text-center sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight text-black sm:text-4xl">
          Ready to Get Started?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm font-semibold text-black">
          Due to the personalized nature of my approach, I only take on 2 new
          1:1 clients per month — weekly Loom feedback and direct access
          don&apos;t work if I&apos;m spread across 50 people.
        </p>

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

        <p className="mx-auto mt-8 max-w-2xl text-base text-gray-600">
          $2,500 enrollment fee — covers your onboarding call, custom
          nutrition plan, custom training program, and your first month of
          coaching. Then $325/month after that. No minimum commitment,
          though 6 months is strongly encouraged — that&apos;s where the
          real transformations happen.
        </p>

        <p className="mt-6 text-sm text-gray-600">
          Questions? Email hal.mackenzie@gmail.com or text/call
          914-522-2604.
        </p>
      </div>
    </section>
  );
}
