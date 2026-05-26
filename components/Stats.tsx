import { Reveal } from "./ui/Reveal";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="shell relative border-t border-line py-20 sm:py-28">
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="group relative h-full bg-ink-800 p-8 transition-colors duration-700 ease-premium hover:bg-ink-700 sm:p-10">
              <div className="flex items-baseline gap-0.5">
                <span className="text-4xl font-semibold tracking-tightest text-fog sm:text-5xl">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-xl font-medium text-mute">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-mute">
                {stat.label}
              </p>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-white/30 transition-all duration-700 ease-premium group-hover:w-full" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
