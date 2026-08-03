export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <p className="text-sm text-gray-600">
          <a href="mailto:hal.mackenzie@gmail.com" className="underline-offset-2 hover:underline">
            hal.mackenzie@gmail.com
          </a>{" "}
          &middot;{" "}
          <a href="tel:9145222604" className="underline-offset-2 hover:underline">
            914-522-2604
          </a>
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com/hal_the_health_coach"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hal's Instagram"
            className="text-gray-600 hover:text-black"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/hal-mackenzie-29b04122/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hal's LinkedIn"
            className="text-gray-600 hover:text-black"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
              <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
              <path d="M8 10.5v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="8" cy="7.5" r="1" fill="currentColor" />
              <path
                d="M11.5 16.5v-3.5c0-1.4 1-2.5 2.25-2.5S16 11.6 16 13v3.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <p className="text-sm text-gray-500">
          &copy; {year} Health Coaching with Hal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
