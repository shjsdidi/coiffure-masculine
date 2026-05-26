import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { services } from "@/lib/content";

const icons = [
  // Coupe — scissors
  "M6 9a3 3 0 100-6 3 3 0 000 6zm0 12a3 3 0 100-6 3 3 0 000 6zm2.1-7.5L21 5M8.1 10.5L21 19M11 12l3 1.8",
  // Dégradé — fade lines
  "M4 6h16M5 10h14M7 14h10M9 18h6",
  // Barbe — chin
  "M5 5v4a7 7 0 0014 0V5M9 14c1 1.2 4 1.2 5 0",
  // Contours — razor outline
  "M4 5h16v4H4zM6 9v4a6 6 0 0012 0V9",
  // Rasage — straight razor
  "M3 18c5-1 9-5 14-13M20 5c-2 4-5 7-9 9M17 10l3 3-3 3-3-3",
  // Coupe + barbe — combined
  "M12 3v6m-4 0a4 4 0 008 0M6 13a6 6 0 0012 0",
];

export function Services() {
  return (
    <section
      id="prestations"
      className="shell scroll-mt-20 border-t border-line py-24 sm:py-32"
    >
      <SectionHeading
        kicker="Prestations"
        title="Un savoir-faire précis, sans superflu."
        intro="Chaque geste est pensé pour la netteté et la tenue. Des prestations essentielles, exécutées avec exigence."
      />

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={(i % 3) * 0.08}>
            <a
              href="#contact"
              className="group relative block h-full bg-ink-800 p-8 transition-colors duration-700 ease-premium hover:bg-ink-700 sm:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-mute transition-colors duration-500 group-hover:border-line-strong group-hover:text-fog">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d={icons[i]} />
                  </svg>
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-faint">
                  {service.meta}
                </span>
              </div>

              <h3 className="mt-8 text-xl font-medium tracking-tight text-fog">
                {service.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-mute">
                {service.description}
              </p>

              <span className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-faint transition-all duration-500 group-hover:gap-3 group-hover:text-mute">
                Réserver
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="h-3 w-3"
                  aria-hidden="true"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
