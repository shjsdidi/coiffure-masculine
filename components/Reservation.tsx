import { Reveal } from "./ui/Reveal";
import { business, whatsappLink } from "@/lib/content";

export function Reservation() {
  return (
    <section id="reserver" className="shell scroll-mt-24 py-20 sm:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-ink-800 px-6 py-14 text-center sm:px-10 sm:py-20">
          <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-48 rounded-full bg-accent/10 blur-[100px]" />

          <span className="kicker justify-center">Réservation</span>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tightest text-fog sm:text-4xl lg:text-5xl">
            Prêt pour la prochaine coupe ?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-mute">
            Réservez en 30 secondes sur WhatsApp, ou appelez directement le
            salon. Réponse rapide.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              Réserver sur WhatsApp
            </a>
            <a
              href={business.phoneHref}
              className="btn-ghost w-full sm:w-auto"
            >
              Appeler le {business.phone}
            </a>
          </div>

          <p className="mt-7 text-xs uppercase tracking-[0.16em] text-faint">
            {business.hoursSummary} · 9h – 19h · {business.addressShort}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
