"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { business, heroImage, whatsappLink } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

function Dot() {
  return <span className="h-1 w-1 shrink-0 rounded-full bg-faint" />;
}

export function Hero() {
  return (
    <section
      id="accueil"
      className="grain relative flex min-h-[92svh] items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="Salon de coiffure homme Coiffure Masculine au Thor"
          fill
          priority
          sizes="100vw"
          className="editorial object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/75 via-ink-900/60 to-ink-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/45 to-transparent" />
      </div>

      <div className="shell relative w-full pt-28 pb-16 sm:pt-32">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="kicker text-cream"
        >
          <span className="h-px w-8 bg-accent/60" />
          Coiffeur homme · {business.city} (84)
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
          className="mt-6 max-w-3xl text-[2.6rem] font-semibold leading-[1.05] tracking-tightest text-fog sm:text-6xl lg:text-7xl"
        >
          Coupe, dégradé &amp; barbe au Thor.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.16 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-mute sm:text-lg"
        >
          Salon de coiffure homme au cœur du Thor. Coupe nette, dégradé précis
          et barbe taillée — avec ou sans rendez-vous.
        </motion.p>

        {/* Repères clés : note, horaires, adresse */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.24 }}
          className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-cream"
        >
          <span className="inline-flex items-center gap-1.5">
            <span className="text-accent">★</span>
            <strong className="font-semibold text-fog">{business.rating}</strong>
            <span className="text-mute">· {business.reviewCount} avis Google</span>
          </span>
          <Dot />
          <span className="text-mute">{business.hoursSummary} · 9h–19h</span>
          <Dot />
          <span className="text-mute">{business.addressShort}</span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.32 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Réserver maintenant
          </a>
          <a href={business.phoneHref} className="btn-ghost">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                d="M4 5c0 8.5 6.5 15 15 15a1.6 1.6 0 001.6-1.4l.3-2a1.5 1.5 0 00-1-1.6l-2.4-.8a1.5 1.5 0 00-1.6.5l-.7.9a11.5 11.5 0 01-5-5l.9-.7a1.5 1.5 0 00.5-1.6L10.5 5a1.5 1.5 0 00-1.6-1l-2 .3A1.6 1.6 0 004 5z"
                strokeLinejoin="round"
              />
            </svg>
            Appeler le {business.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
