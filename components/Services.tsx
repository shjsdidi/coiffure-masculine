import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { services, whatsappLink } from "@/lib/content";

export function Services() {
  return (
    <section
      id="prestations"
      className="shell scroll-mt-24 py-20 sm:py-28"
    >
      <SectionHeading
        kicker="Prestations & tarifs"
        title="Coupe, barbe, dégradé."
        intro="Des prestations simples et des tarifs clairs. Avec ou sans rendez-vous."
      />

      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={(i % 2) * 0.06}>
            <a
              href={whatsappLink({ message: `Prestation : ${service.title}` })}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-start justify-between gap-6 bg-ink-800 p-6 transition-colors duration-300 hover:bg-ink-700 sm:p-8"
            >
              <div>
                <h3 className="text-lg font-medium tracking-tight text-fog">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-mute">
                  {service.description}
                </p>
                <span className="mt-3 inline-block text-xs uppercase tracking-[0.14em] text-faint">
                  {service.duration}
                </span>
              </div>
              <div className="shrink-0 text-right">
                <span className="text-xl font-semibold tracking-tight text-fog">
                  {service.price}
                </span>
                <span className="mt-2 flex items-center justify-end gap-1 text-xs text-faint transition-colors duration-300 group-hover:text-cream">
                  Réserver
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-3 w-3"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </Reveal>
        ))}

        {/* Cellule de note pour équilibrer la grille impaire */}
        <div className="hidden items-center bg-ink-850 p-6 text-sm text-mute sm:flex sm:p-8">
          Tarifs indicatifs — paiement sur place. Réservation conseillée le
          samedi.
        </div>
      </div>
    </section>
  );
}
