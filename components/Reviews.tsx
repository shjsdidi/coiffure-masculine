import { Reveal } from "./ui/Reveal";
import { business, reviews } from "@/lib/content";

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label="5 étoiles sur 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-accent">
          ★
        </span>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="avis" className="shell scroll-mt-24 py-20 sm:py-28">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <span className="kicker">
            <span className="h-px w-8 bg-line-strong" />
            Avis
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tightest text-fog sm:text-4xl">
            Ce que disent les clients.
          </h2>
        </div>

        <Reveal>
          <a
            href={business.reviewsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-line bg-ink-800 px-5 py-4 transition-colors hover:border-line-strong"
          >
            <span className="text-3xl font-semibold tracking-tightest text-fog">
              {business.rating}
            </span>
            <span className="flex flex-col gap-0.5">
              <Stars className="text-sm" />
              <span className="text-xs text-mute">
                {business.reviewCount} avis Google →
              </span>
            </span>
          </a>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, i) => (
          <Reveal
            key={review.name}
            delay={(i % 3) * 0.06}
            className={i === 0 ? "lg:col-span-2" : ""}
          >
            <figure className="flex h-full flex-col justify-between rounded-2xl border border-line bg-ink-800 p-6 transition-colors duration-300 hover:border-line-strong sm:p-7">
              <div>
                <Stars className="text-xs" />
                <blockquote className="mt-4 text-base leading-relaxed text-fog/90">
                  « {review.quote} »
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-2.5 text-sm">
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
