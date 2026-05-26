import { business, nav } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink-900">
      <div className="shell py-16 sm:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-fog">
              Coiffure <span className="text-mute">Masculine</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed text-mute">
              Salon de coiffure homme au Thor, dans le Vaucluse. Coupe, barbe et
              entretien masculin dans une atmosphère sobre et élégante.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <span className="text-xs uppercase tracking-[0.18em] text-faint">
                Navigation
              </span>
              <ul className="mt-5 space-y-3">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-mute transition-colors hover:text-fog"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.18em] text-faint">
                Salon
              </span>
              <ul className="mt-5 space-y-3 text-sm text-mute">
                <li>
                  <a
                    href={business.phoneHref}
                    className="transition-colors hover:text-fog"
                  >
                    {business.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={business.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-fog"
                  >
                    {business.address}
                  </a>
                </li>
                <li>
                  <a
                    href={business.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-fog"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {business.name}. Tous droits réservés.
          </span>
          <span>Le Thor · Vaucluse · France</span>
        </div>
      </div>
    </footer>
  );
}
