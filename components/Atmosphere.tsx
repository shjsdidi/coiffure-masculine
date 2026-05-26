import Image from "next/image";
import { Reveal } from "./ui/Reveal";
import { atmosphereImage } from "@/lib/content";

export function Atmosphere() {
  return (
    <section className="grain relative overflow-hidden border-t border-line">
      <div className="absolute inset-0 -z-10">
        <Image
          src={atmosphereImage}
          alt="Détails de l'atelier de coiffure : fauteuils, miroirs et outils"
          fill
          sizes="100vw"
          className="editorial object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink-900/82" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-ink-900/80" />
      </div>

      <div className="shell flex min-h-[70vh] items-center py-28 sm:py-40">
        <div className="max-w-2xl">
          <Reveal>
            <span className="kicker">
              <span className="h-px w-8 bg-line-strong" />
              L&apos;atmosphère
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-7 text-3xl font-medium leading-[1.18] tracking-tight text-fog sm:text-4xl lg:text-5xl">
              Un espace pensé pour les hommes qui apprécient la simplicité et la
              précision.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 text-sm text-mute">
              {["Outils premium", "Fauteuils", "Miroirs", "Matières & détails"].map(
                (tag) => (
                  <span key={tag} className="inline-flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-mute" />
                    {tag}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
