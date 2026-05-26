"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./ui/Reveal";
import { business, hours, whatsappLink } from "@/lib/content";

function InfoRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-line py-6">
      <span className="text-xs uppercase tracking-[0.18em] text-faint">
        {label}
      </span>
      <div className="mt-2 text-lg text-fog">{children}</div>
    </div>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [link, setLink] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = whatsappLink(form);
    setLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section
      id="contact"
      className="shell scroll-mt-24 py-20 sm:py-28"
    >
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-2">
        {/* Left — coordonnées */}
        <div className="bg-ink-800 p-8 sm:p-12">
          <span className="kicker">
            <span className="h-px w-8 bg-line-strong" />
            Contact
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tightest text-fog sm:text-4xl">
            Prendre rendez-vous.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mute">
            Une question ou une demande de rendez-vous ? Appelez le salon ou
            laissez-nous un message.
          </p>

          <div className="mt-10">
            <InfoRow label="Téléphone">
              <a
                href={business.phoneHref}
                className="transition-colors hover:text-mute"
              >
                {business.phone}
              </a>
            </InfoRow>
            <InfoRow label="Adresse">
              <a
                href={business.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed transition-colors hover:text-mute"
              >
                {business.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </a>
            </InfoRow>
            <InfoRow label="Horaires">
              <ul className="space-y-1.5 text-base">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-6">
                    <span className="text-mute">{h.day}</span>
                    <span className="text-fog">{h.time}</span>
                  </li>
                ))}
              </ul>
            </InfoRow>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-8">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17 0-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2z" />
                </svg>
                Réserver sur WhatsApp
              </a>
              <a href={business.phoneHref} className="btn-ghost">
                Appeler
              </a>
            </div>
          </div>
        </div>

        {/* Right — formulaire */}
        <div className="relative bg-ink-850 p-8 sm:p-12">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex h-full min-h-[420px] flex-col items-center justify-center text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line-strong text-fog">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    className="h-6 w-6"
                  >
                    <path
                      d="M4 12l5 5L20 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="mt-6 text-xl font-medium text-fog">
                  Direction WhatsApp…
                </p>
                <p className="mt-2 max-w-xs text-sm text-mute">
                  {form.name ? `Merci ${form.name}. ` : ""}Votre demande s&apos;ouvre
                  dans WhatsApp — il ne reste qu&apos;à envoyer le message pour
                  confirmer le rendez-vous.
                </p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost mt-7"
                >
                  Ouvrir WhatsApp
                </a>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-7"
              >
                <Field
                  label="Nom"
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Votre nom"
                  required
                />
                <Field
                  label="Téléphone"
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="06 00 00 00 00"
                  required
                />
                <div className="group">
                  <label className="text-xs uppercase tracking-[0.18em] text-faint">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={update("message")}
                    rows={4}
                    placeholder="Prestation souhaitée, créneau…"
                    className="mt-3 w-full resize-none border-b border-line bg-transparent pb-3 text-fog placeholder:text-faint outline-none transition-colors duration-300 focus:border-white/40"
                  />
                </div>
                <button type="submit" className="btn-primary mt-2 w-full sm:w-auto">
                  Prendre rendez-vous
                </button>
                <p className="text-xs text-faint">
                  Votre demande s&apos;ouvre dans WhatsApp pour confirmation.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.18em] text-faint">
        {label}
      </label>
      <input
        {...props}
        className="mt-3 w-full border-b border-line bg-transparent pb-3 text-fog placeholder:text-faint outline-none transition-colors duration-300 focus:border-white/40"
      />
    </div>
  );
}
