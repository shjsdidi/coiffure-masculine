import { business, hours, nav, whatsappLink } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="safe-bottom border-t border-line bg-ink-900">
      <div className="shell py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Marque + réservation */}
          <div className="lg:col-span-4">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-fog">
              Coiffure <span className="text-mute">Masculine</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mute">
              Coiffeur homme au Thor. Coupe, dégradé et barbe, avec ou sans
              rendez-vous.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6"
            >
              Prendre rendez-vous
            </a>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
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

          {/* Coordonnées */}
          <div className="lg:col-span-2">
            <span className="text-xs uppercase tracking-[0.18em] text-faint">
              Contact
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
                  {business.addressLines[0]}
                  <br />
                  {business.addressLines[1]}
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

          {/* Horaires */}
          <div className="lg:col-span-3">
            <span className="text-xs uppercase tracking-[0.18em] text-faint">
              Horaires
            </span>
            <ul className="mt-5 space-y-2.5 text-sm">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span className="text-mute">{h.day}</span>
                  <span className="text-fog">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-7 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {business.name} · Le Thor (84)
          </span>
          <span>Coiffeur homme · Coupe · Barbe · Dégradé</span>
        </div>
      </div>
    </footer>
  );
}
