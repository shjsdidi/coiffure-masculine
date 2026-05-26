import Image from "next/image";
import { Reveal } from "./ui/Reveal";
import { gallery } from "@/lib/content";

export function Gallery() {
  return (
    <section
      id="galerie"
      className="shell scroll-mt-20 border-t border-line py-24 sm:py-32"
    >
      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-12 md:auto-rows-[220px]">
        {gallery.map((item, i) => (
          <Reveal
            key={item.src}
            delay={i * 0.06}
            className={`${item.span} group relative h-72 overflow-hidden rounded-2xl border border-line md:h-auto`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="editorial object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-40" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
