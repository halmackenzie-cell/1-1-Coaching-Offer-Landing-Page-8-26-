const faqs = [
  {
    question: "What if I travel a lot or have an unpredictable schedule?",
    answer:
      "That's exactly what the Weekly Average Approach is built for. One bad day, one travel week, one chaotic month at work — none of it derails you, because we're tracking averages, not perfection. My most successful clients have transformed their physiques while navigating work trips, vacations, family responsibilities, and packed social calendars. They don't wait until “when things calm down” as let's be honest, that never happens. The plan we built fits into your life, not the other way around.",
  },
  {
    question:
      "I've tried diets and coaches before and it didn't stick. Why would this be different?",
    answer:
      "Because this isn't a 12-week transformation that unwinds the moment you stop paying attention. We build systems and habits into your day to day routine, and execute them together long enough to make it part of your identity. You have a real person (me) who will not let you fall off track, not an automated AI chatbot.",
  },
  {
    question: "Do I need a gym, or special equipment?",
    answer:
      "No. Your training program is built around whatever you actually have access to — a full gym, a home setup, a hotel gym on the road, whatever. I ask about your equipment and experience upfront specifically so the program fits your reality, not some ideal version of it. And if it needs to be adjusted along the way due to trips or changes in gym access, we do that in real time.",
  },
  {
    question:
      "What if I do everything right and still don't hit 20 lbs in 6 months?",
    answer:
      "Then I keep coaching you for free until you do. That's the guarantee: track your food, complete your workouts, hit your step targets, and complete every check-in for 6 months straight. If you've held up your end and the scale hasn't, I haven't earned my fee yet — so I keep working until it's done.",
  },
  {
    question: "Is there a contract? Can I cancel?",
    answer:
      "No minimum commitment. You can stop anytime. That said, 6-12 months is where the real transformations happen — none of the client wins you're reading about happened within a few months — so I'll always encourage you to give it the runway to work.",
  },
  {
    question: "How much time does this actually take each week?",
    answer:
      "Less than most people expect. Your weekly check-in takes ~10 minutes to fill out. I send back a 10-20 minute Loom video for you to watch at your convenience. Calls are entirely optional and on your schedule — some clients talk to me weekly, some barely need to. The actual time cost is showing up for your workouts and eating within your targets, which you're already spending time on today — just without a plan behind it.",
  },
  {
    question:
      "How is this different from a macro-tracking app or a generic online coach?",
    answer:
      "An app doesn't build you a custom training, nutrition and mental fitness program, provide feedback on your form, or record you a personal video every week. A generic coach isn't checking in on you daily, giving you unlimited access to their calendar, or partnering with a hospital system to get you real performance data like VO2 max and metabolic rate testing. This is what a monthly app subscription can't replicate: an actual person, personally invested in your specific result.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-black sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-black/10 bg-white p-4 sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 marker:hidden [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-bold text-black sm:text-lg">
                  {faq.question}
                </h3>
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lime-400 text-lg font-bold text-black transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-base text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
