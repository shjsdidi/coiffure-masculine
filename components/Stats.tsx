import { trust } from "@/lib/content";

export function Stats() {
  return (
    <section className="border-y border-line bg-ink-850">
      <div className="shell grid grid-cols-2 divide-x divide-line sm:grid-cols-4">
        {trust.map((item, i) => (
          <div
            key={item.label}
            className={`flex flex-col items-center justify-center gap-1 px-4 py-6 text-center sm:py-7 ${
              i >= 2 ? "border-t border-line sm:border-t-0" : ""
            }`}
          >
            <span className="text-lg font-semibold tracking-tight text-fog sm:text-xl">
              {item.value}
              {item.suffix && <span className="text-accent">{item.suffix}</span>}
            </span>
            <span className="text-xs text-mute sm:text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
