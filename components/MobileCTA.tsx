import { business, whatsappLink } from "@/lib/content";

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line-strong bg-ink-900/90 backdrop-blur-xl md:hidden">
      <div
        className="flex gap-2 px-4 py-3"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.75rem)" }}
      >
        <a
          href={business.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-line-strong py-3.5 text-sm font-medium text-fog active:scale-[0.98]"
        >
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
          Appeler
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-[1.3] items-center justify-center gap-2 rounded-full bg-fog py-3.5 text-sm font-semibold text-ink-900 active:scale-[0.98]"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
            <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17 0-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2z" />
          </svg>
          Réserver
        </a>
      </div>
    </div>
  );
}
