import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { business, reviews } from "@/lib/content";

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 étoiles sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-3.5 w-3.5 text-fog/80"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.47 5.16 5.68.62-4.2 3.86 1.13 5.59L10 13.9l-5.08 2.83 1.13-5.59-4.2-3.86 5.68-.62z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section
      id="avis"
      className="shell scroll-mt-20 border-t border-line py-24 sm:py-32"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          kicker="Avis clients"
          title="La confiance, avis après avis."
        />
        <Reveal delay={0.1}>
          <div className="flex items-center gap-5 rounded-2xl border border-line bg-ink-800 px-6 py-5">
            <span className="text-4xl font-semibold tracking-tightest text-fog">
              {business.rating}
            </span>
            <div className="flex flex-col gap-1">
              <Stars />
              <span className="text-xs text-mute">
                {business.reviewCount} avis Google
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, i) => (
          <Reveal
            key={review.name}
            delay={(i % 3) * 0.08}
            className={i === 0 ? "lg:col-span-2" : ""}
          >
            <figure className="card flex h-full flex-col justify-between p-8 sm:p-10">
              <div>
                <Stars />
                <blockquote className="mt-6 text-lg leading-relaxed text-fog/90">
                  “{review.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center gap-3 text-sm">
                <span className="font-medium text-fog">{review.name}</span>
                <span className="h-1 w-1 rounded-full bg-faint" />
                <span className="text-mute">{review.city}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
