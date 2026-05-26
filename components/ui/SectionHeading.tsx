import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
}: {
  kicker: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <div
      className={
        isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"
      }
    >
      <Reveal>
        <span className="kicker">
          <span className="h-px w-8 bg-line-strong" />
          {kicker}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 text-3xl font-semibold tracking-tightest text-fog sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-mute sm:text-lg">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
