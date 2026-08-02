import { siteContact } from "@/lib/site-config";

/**
 * Phone + Zalo — fixed góc dưới phải, luôn hiện (ref interdata.vn).
 */
export function FloatingContactIcons() {
  return (
    <div
      className="pointer-events-none fixed bottom-5 right-4 z-50 flex flex-col items-center gap-3 sm:bottom-6 sm:right-6"
      aria-label="Liên hệ nhanh"
    >
      <a
        href={`tel:${siteContact.phoneTel}`}
        className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-cta text-white shadow-lg shadow-cta/30 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2"
        aria-label={`Gọi ${siteContact.phoneDisplay}`}
      >
        <PhoneIcon />
      </a>

      <a
        href={siteContact.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0068FF] text-white shadow-lg shadow-[#0068FF]/30 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0068FF] focus-visible:ring-offset-2"
        aria-label="Chat Zalo"
      >
        <ZaloIcon />
      </a>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3.5A1 1 0 0 1 4 2.5h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}

/** Official-style Zalo glyph (simplified mark) */
function ZaloIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden className="h-6 w-6">
      <path d="M24.4 8C14.9 8 7.2 14.8 7.2 23.1c0 4.3 1.9 8.1 5 10.8l-1.2 5.7 6.1-1.9c2.2.7 4.6 1.1 7.1 1.1 9.5 0 17.2-6.8 17.2-15.1S33.9 8 24.4 8zm8.4 10.7-2.1 9.9c-.1.5-.5.7-.9.5l-2.7-2-1.9 1.8c-.2.2-.5.3-.8.2l.3-3.4 7.2-6.5c.3-.3 0-.7-.4-.5l-8.9 5.6-3.5-1.1c-.7-.2-.7-.7.1-1.1l14.1-5.4c.6-.3 1.1.2.9 1z" />
    </svg>
  );
}
