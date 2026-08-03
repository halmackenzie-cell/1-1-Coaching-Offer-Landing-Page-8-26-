const bucket1 = [
  {
    title: "Personalized Lifestyle Assessment & Programming",
    description:
      "A full analysis of your current routine, with specific feedback and habit-building steps that fit inside the life you already have — not a life you'd need to rebuild from scratch.",
  },
  {
    title: "Custom Training Program",
    description:
      "Built around your experience, schedule, gym access, equipment availability, injury history, and preferences, with an emphasis on weightlifting. Delivered through my coaching app with video tutorials for every exercise, so you're never guessing at form.",
  },
  {
    title: "Custom Nutrition Program",
    description:
      "Calorie and macro targets set to your body composition goals and timeline — paired with suggested meals and recipes built around restaurants and foods you already eat, not a meal plan you have to overhaul your life for.",
  },
  {
    title: "Unlimited 1:1 Strategy Calls",
    description:
      "Full access to my calendar for live calls. The schedule is yours to set based on your preference. Some clients have weekly calls, while others don't schedule any — both get great results.",
  },
  {
    title: "24/7 Direct Messaging",
    description:
      "Send me a message in my coaching app the moment a question or obstacle comes up. I answer clients faster than I answer texts from my own family.",
  },
  {
    title: "Weekly Check-Ins with Loom Video Feedback",
    description:
      "Every week, you check in — wins, sticking points, what's coming up. I respond with a personal Loom video (or notes written in a Google doc, your call). Clients love these more than almost anything else in the program.",
    linkText: "Here's a sample one.",
    linkHref: "https://www.loom.com/share/85d081e592604b98885f5b6b8a309660",
  },
  {
    title: "Your Coach's Weekly Recap, Right Back at You",
    description:
      "Accountability runs both directions. Each week I share my own weekly check in with my clients to give you a closer look into my day to day routine and strategies.",
  },
];

const bucket2 = [
  {
    title: "Private Client-Only WhatsApp & Instagram Groups",
    description:
      "Via the WhatsApp group I share meals and snacks that I eat in real time as well as workout tips and any other strategies that come to mind during my real day to day. And through the Instagram Group, I'll help you navigate the sea of noise that is health influencer social media by sharing the accounts I follow and trust and the posts that resonate the most.",
  },
  {
    title: "Done-for-You Grocery Lists via Instacart",
    description:
      "No more decision fatigue at the store. Load my pre-built lists into your cart with a few taps and let groceries show up at your door.",
  },
  {
    title: "Nutrition Resource Vault + 100 High-Protein Recipes",
    description:
      "My personal shortlist of meal delivery services, specialty food brands, and frozen meat/fish delivery — plus a full recipe library so “what do I eat” is never a daily decision.",
  },
  {
    title: "Lifetime Access to the Winning & Wellness Community",
    description:
      "A private community of people who refuse to choose between climbing their career and building their body. It's yours to keep — even after our 1:1 work together ends. Non-1:1 members pay $19/month for this alone; as a coaching client, it's included for life.",
  },
];

function CheckIcon() {
  return (
    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lime-400">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4 text-black">
        <path
          d="M5 13l4 4L19 7"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function FeatureItem({
  title,
  description,
  linkText,
  linkHref,
}: {
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}) {
  return (
    <div className="flex gap-3">
      <CheckIcon />
      <div>
        <h4 className="font-bold text-black">{title}</h4>
        <p className="mt-1 text-base text-gray-600">
          {description}
          {linkText && linkHref && (
            <>
              {" "}
              <a
                href={linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-lime-700 underline underline-offset-2 hover:text-lime-800"
              >
                {linkText}
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default function IncludedFeatures() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-black sm:text-4xl">
          Features Included in 1:1 Coaching
        </h2>

        <div className="mt-12">
          <h3 className="text-center text-lg font-bold text-black sm:text-xl">
            Bucket 1 — Your Custom Plan & Ongoing Accountability
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
            {bucket1.map((item) => (
              <FeatureItem key={item.title} {...item} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center text-lg font-bold text-black sm:text-xl">
            Bucket 2 — Exclusive Perks
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
            {bucket2.map((item) => (
              <FeatureItem key={item.title} {...item} />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border-2 border-lime-400 bg-black p-6 text-center sm:p-10">
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="mx-auto h-10 w-10 text-lime-400">
            <path
              d="M24 6v14m0 0v14m0-14h14m-14 0H10"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="6" y="6" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="2" />
          </svg>
          <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
            Benefit from Hal&apos;s Partnership with the Hospital for Special
            Surgery (HSS)
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300">
            Through my partnership with HSS, receive access to their Sports
            Performance Facilities — including VO2 max testing, Resting
            Metabolic Rate, and Metabolic Efficiency testing. This is access
            and data that most coaches simply can&apos;t offer.
          </p>
        </div>
      </div>
    </section>
  );
}
