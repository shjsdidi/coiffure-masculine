"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { business, nav, whatsappLink } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-700 ease-premium ${
          scrolled
            ? "border-b border-line bg-ink-900/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="shell flex h-16 items-center justify-between sm:h-[72px]">
          <a
            href="#accueil"
            className="text-sm font-semibold uppercase tracking-[0.18em] text-fog"
          >
            Coiffure
            <span className="text-mute"> Masculine</span>
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-mute transition-colors duration-300 hover:text-fog"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden h-10 min-h-0 px-5 py-2 text-sm md:inline-flex"
            >
              Prendre rendez-vous
            </a>
            <button
              type="button"
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-fog md:hidden"
            >
              <span className="relative flex h-3 w-4 flex-col justify-between">
                <span
                  className={`h-px w-full bg-current transition-transform duration-300 ${
                    open ? "translate-y-[5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-current transition-opacity duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-px w-full bg-current transition-transform duration-300 ${
                    open ? "-translate-y-[5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-16 z-40 bg-ink-900/95 backdrop-blur-xl md:hidden"
          >
            <ul className="shell flex flex-col gap-1 pt-8">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.5 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-5 text-2xl font-medium tracking-tight text-fog"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-8">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Prendre rendez-vous
                </a>
              </li>
              <li className="pt-6">
                <a href={business.phoneHref} className="text-mute">
                  {business.phone}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
