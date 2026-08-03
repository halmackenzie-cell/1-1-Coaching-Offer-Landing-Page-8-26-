const steps = [
  {
    title: "Build the Foundation",
    description:
      "A 1-on-1 onboarding call with Hal locks in your custom nutrition targets, your custom training program, and your first 3 steps toward losing 5–10 lbs in the first 4–6 weeks.",
  },
  {
    title: "Build the Momentum",
    description:
      "Weekly check-ins with Loom video feedback from Hal, direct access to him all week, and a system built to travel with you through work trips and family weekends.",
  },
  {
    title: "Reach the Goal",
    description:
      "20–30 lbs gone and a body and mind built to last, through a process you can actually sustain. Continue coaching with no friction, or graduate with the knowledge to maintain it yourself.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-black sm:text-4xl">
          Timeline to Your Transformation
        </h2>

        <div className="relative mt-12">
          <div className="absolute top-6 left-[16.6667%] right-[16.6667%] hidden h-0.5 bg-lime-400 md:block" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex items-start gap-4 md:flex-col md:items-center md:text-center"
              >
                <div className="z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-lime-400 text-lg font-bold text-black">
                  {index + 1}
                </div>
                <div className="md:mt-5">
                  <h3 className="text-lg font-bold text-black">{step.title}</h3>
                  <p className="mt-2 text-base text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
