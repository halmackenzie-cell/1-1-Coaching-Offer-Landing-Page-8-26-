const pillars = [
  {
    title: "The Flexible Dieting Framework",
    description:
      "No food is off-limits. 80–90% of what you eat is whole, protein- and fiber-rich food; the other 10–20% is yours to spend however you want — pizza, beer, whatever. Just three numbers matter: calories, protein, fiber.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-10 w-10">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
        <path
          d="M24 8v16l10 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "The Stronger & Leaner Training Protocol",
    description:
      "Resistance training is the engine, not cardio. Built on consistency, technique, intensity, progressive overload, and rest — so you get visibly stronger and leaner at the same time, not just lighter on the scale.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-10 w-10">
        <rect x="4" y="20" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="38" y="20" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="12" y="16" width="5" height="16" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="31" y="16" width="5" height="16" rx="1" stroke="currentColor" strokeWidth="2" />
        <path d="M17 24h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "The Weekly Average Approach",
    description:
      "Individual days don't matter, weekly averages do. One bad day doesn't derail you; one great day doesn't save you. Stack good weeks and the results compound.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-10 w-10">
        <path
          d="M6 36l8-10 7 6 9-14 12 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M6 40h36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "The Mental Fitness Operating System",
    description:
      "To reach peak performance, you need to train your mind, just like you train your body. Your brain is a muscle that you need to build. During the first few months we'll lay the foundation to rebuild your body, then focus on the mind.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-10 w-10">
        <path
          d="M18 8a8 8 0 0 0-8 8c0 2 .6 3.3 1.6 4.6C10.6 21.9 10 23.4 10 25a8 8 0 0 0 8 8h2V8h-2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M30 8a8 8 0 0 1 8 8c0 2-.6 3.3-1.6 4.6 1 1.3 1.6 2.8 1.6 4.4a8 8 0 0 1-8 8h-2V8h2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M20 16h8M19 24h10M20 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-black sm:text-4xl">
          The Pillars of Coach Hal&apos;s Unique Method
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lime-100 text-black">
                {pillar.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-black">{pillar.title}</h3>
              <p className="mt-3 text-base text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
