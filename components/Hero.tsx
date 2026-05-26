"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { business, heroImage } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const titleWords = ["Le", "détail", "change", "tout."];

export function Hero() {
  return (
    <section
      id="accueil"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background photograph */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="Intérieur d'un salon de coiffure masculin"
          fill
          priority
          sizes="100vw"
          className="editorial object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/55 to-ink-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/90 via-ink-900/30 to-transparent" />
        {/* soft top light */}
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[120px]" />
      </div>

      <div className="shell relative w-full pt-28 pb-20 sm:pt-32">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="kicker"
        >
          <span className="h-px w-8 bg-line-strong" />
          {business.tagline}
        </motion.span>

        <h1
          aria-label="Le détail change tout."
          className="mt-8 max-w-4xl text-[2.75rem] font-semibold leading-[1.02] tracking-tightest text-fog text-glow sm:text-6xl lg:text-[5.25rem]"
        >
          {titleWords.map((word, i) => (
            <span
              key={word}
              aria-hidden="true"
              className="inline-block overflow-hidden align-top"
            >
              <motion.span
                className="inline-block pr-[0.28em]"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.15 + i * 0.09 }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}
          className="mt-7 max-w-md text-base leading-relaxed text-mute sm:text-lg"
        >
          Coupe, barbe et entretien masculin dans une atmosphère sobre et
          élégante.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.68 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a href="#prestations" className="btn-ghost">
            Voir les prestations
          </a>
          <a href="#contact" className="btn-primary">
            Réserver
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <span className="flex h-11 w-6 items-start justify-center rounded-full border border-line-strong p-1.5">
          <motion.span
            className="h-2 w-px bg-mute"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
