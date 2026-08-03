import TestimonialImage from "@/components/TestimonialImage";
import VideoTestimonial from "@/components/VideoTestimonial";

const videoTestimonials = [
  {
    name: "Mike S.",
    youtubeId: "8jpxIBeGYOE",
    aspect: "aspect-[9/16]",
    title: "Real Estate Private Equity, Madison International Realty",
    description:
      "“Hal's greatest strength is that he created a program that works for the everyday person. He's not a body builder or professional athlete. He's a regular dude with a finance job that transformed his health and body without taking away his ‘life’. I lost 15 pounds (10% of weight) in 3 months with Hal. I gained strength, energy, and most importantly habits. His coaching has made a life long impact to me.”",
  },
  {
    name: "Pete L.",
    youtubeId: "Gns05loOkns",
    description:
      "Pete has lost 40 pounds and 5 inches off his waist since he signed up for coaching. He lost 25 pounds while working together and has since dropped another 15 lbs on his own while continuing to execute the same program we put in place. Pete is now at a weight he hasn't seen since high school and isn't stopping anytime soon. The healthy habits we rebuilt together are becoming a part of his identity.",
  },
  {
    name: "Scott C.",
    youtubeId: "7hRiJ33eZPI",
    description:
      "Scott lost over 25 lbs in 5 months and significantly increased his energy levels while tackling vacations, work trips, and a busy social life with his wife and two kids.",
  },
];

export default function SocialProof() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Guarantee */}
        <div className="mx-auto max-w-3xl rounded-2xl border-2 border-lime-600 bg-black/5 p-6 text-center sm:p-10">
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="mx-auto h-10 w-10 text-lime-700">
            <path
              d="M24 4l16 6v12c0 10-6.8 17.4-16 22-9.2-4.6-16-12-16-22V10l16-6z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M17 24l5 5 9-11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className="mt-3 text-sm font-bold uppercase tracking-widest text-black sm:text-base">
            Coach Hal&apos;s Guarantee
          </h2>
          <p className="mt-3 text-lg font-bold text-black sm:text-2xl">
            If you track your food, complete all scheduled workouts, hit
            your step targets, and complete every check-in for 6 months
            straight — and haven&apos;t lost at least 20 lbs — Hal keeps
            coaching you at no charge until you do.
          </p>
        </div>

        <h2 className="mt-20 text-center text-2xl font-extrabold tracking-tight text-black sm:text-4xl">
          Social Proof and Testimonials
        </h2>

        {/* Hal's transformation */}
        <div className="mx-auto mt-12 max-w-5xl">
          <h3 className="text-center text-xl font-bold text-black sm:text-2xl">
            I am Client #1
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-gray-600">
            After a decade of bad habits in my 20&apos;s compounding, I peaked
            at 242 lbs in my early 30s. Over the next few years I lost ~70
            pounds, and then packed on 16 pounds of lean mass. All while
            rising to an executive level position in corporate finance,
            starting a family, and refusing to sacrifice my social life and
            the foods I enjoy.
          </p>
          <div className="mt-8">
            <p className="text-center text-base font-semibold uppercase tracking-wide text-gray-500">
              Before
            </p>
            <div className="mt-4 grid grid-cols-3 gap-4 sm:gap-6">
              <TestimonialImage
                src="/testimonials/hal-before-restaurant.jpg"
                alt="Hal before his transformation, photo 1"
                aspect="aspect-[3/4]"
              />
              <TestimonialImage
                src="/testimonials/hal-before-2.jpg"
                alt="Hal before his transformation, photo 2"
                aspect="aspect-[3/4]"
              />
              <TestimonialImage
                src="/testimonials/hal-before-3.jpg"
                alt="Hal before his transformation, photo 3"
                aspect="aspect-[3/4]"
              />
            </div>
          </div>

          <div className="mt-10">
            <p className="text-center text-base font-semibold uppercase tracking-wide text-gray-500">
              After
            </p>
            <div className="mt-4 grid grid-cols-3 gap-4 sm:gap-6">
              <TestimonialImage
                src="/testimonials/hal-after-1.jpg"
                alt="Hal after his transformation, photo 1"
                aspect="aspect-[3/4]"
                zoom={2}
              />
              <TestimonialImage
                src="/testimonials/hal-after-2.jpg"
                alt="Hal after his transformation, photo 2"
                aspect="aspect-[3/4]"
              />
              <TestimonialImage
                src="/testimonials/hal-after-3.jpg"
                alt="Hal after his transformation, photo 3"
                aspect="aspect-[3/4]"
              />
            </div>
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-xl font-bold text-black sm:text-2xl">
              <span className="text-lime-700">242 lbs</span> →{" "}
              <span className="text-lime-700">~70 lbs</span> lost, then{" "}
              <span className="text-lime-700">+16 lbs</span> of lean muscle
              over 11 months.
            </h3>
            <p className="mt-3 text-base text-gray-600">
              &quot;I test everything on myself first, then teach it.&quot;
            </p>
          </div>
        </div>

        {/* Client results */}
        <div className="mt-20">
          <h3 className="text-center text-xl font-bold text-black sm:text-2xl">
            Client Wins
          </h3>
        </div>
        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <div className="rounded-2xl border border-black/10 p-6">
            <TestimonialImage
              src="/testimonials/ben-b-before-after.png"
              alt="Ben B. before and after transformation"
            />
            <h3 className="mt-5 text-lg font-bold text-black">
              Ben B. (&quot;Benny the Beast&quot;)
            </h3>
            <p className="mt-3 text-base italic text-gray-600">
              &quot;Working with Hal changed my life, and I&apos;ll be
              forever grateful to him for that. By following his program I
              lost 28lbs while gaining a tremendous amount of energy and
              confidence. Hal&apos;s coaching equipped me with a true
              understanding of how and what to eat and in a way that fits
              real life. It&apos;s so powerful that 10 months later, I
              haven&apos;t gained a single pound. Let that sink in. Hal&apos;s
              results are permanent. His approach is sustainable,
              empowering, and built for people that have tried everything
              else and are ready for a healthy and better life. I cannot
              recommend Hal enough!&quot;
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 p-6">
            <div className="grid grid-cols-1 gap-4">
              <TestimonialImage
                src="/testimonials/chris-d-front.png"
                alt="Chris D. front-facing before and after"
              />
              <TestimonialImage
                src="/testimonials/chris-d-side.png"
                alt="Chris D. side-facing before and after"
              />
            </div>
            <h3 className="mt-5 text-lg font-bold text-black">
              Chris D. (&quot;The Hurricane&quot;)
            </h3>
            <p className="mt-3 text-base italic text-gray-600">
              Full body recomposition — losing fat and building muscle at
              the same time — in about 5 months.
            </p>
            <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
              <iframe
                src="https://www.youtube.com/embed/1Yoa0Goc9lg"
                title="Chris D. testimonial video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 p-6">
            <div className="grid grid-cols-1 gap-4">
              <TestimonialImage
                src="/testimonials/yuriy-front.png"
                alt="Yuriy A. front-facing before and after"
              />
              <TestimonialImage
                src="/testimonials/yuriy-side.png"
                alt="Yuriy A. side-facing before and after"
              />
            </div>
            <h3 className="mt-5 text-lg font-bold text-black">Yuriy A.</h3>
            <p className="mt-2 text-sm font-semibold text-lime-700">
              210 lbs → 175.7 lbs (down 34.3 lbs)
            </p>
            <p className="mt-3 text-base italic text-gray-600">
              &quot;Just feel so good when that 4th exercise is done for the
              week... mentally nice to know that if you really prioritize
              something and stay disciplined with habits to make that
              priority happen you can do it. Useful in some of the other
              non-fitness work I am doing... so decisions compound.&quot;
            </p>
          </div>
        </div>

        {/* More client wins - video only */}
        <div className="mt-20">
          <h3 className="text-center text-xl font-bold text-black sm:text-2xl">
            More Client Wins
          </h3>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {videoTestimonials.map((v) => (
              <VideoTestimonial
                key={v.name}
                name={v.name}
                youtubeId={v.youtubeId}
                aspect={v.aspect}
                title={v.title}
                description={v.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
