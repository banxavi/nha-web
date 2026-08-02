import { CTAButton } from "@/components/ui/CTAButton";
import { ZoomableImage } from "@/components/ui/ZoomableImage";
import { heroContent } from "@/lib/site-config";

/**
 * Section 1 — Hero dịch vụ.
 * Layout copy web4s.vn: text trái + bullet ✓, media phải + scroll mouse.
 * Màu theo design tokens Nhà Web (navy / cam).
 */
export function HeroSection() {
  const {
    headline,
    promo,
    promoHighlight,
    bullets,
    priceLabel,
    priceValue,
    priceUnit,
    ctaLabel,
    ctaHref,
    guarantee,
    image,
  } = heroContent;

  return (
    <section
      id="dich-vu"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-[#EEF4FB] via-bg-primary to-bg-secondary"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        {/* Left — copy cố định */}
        <div className="flex flex-col">
          <h1
            id="hero-heading"
            className="text-2xl font-bold uppercase leading-tight tracking-wide text-foreground sm:text-3xl lg:text-[2rem] lg:leading-snug"
          >
            {headline}
          </h1>

          <p className="mt-4 text-base font-medium text-foreground sm:text-lg">
            {promo.split(promoHighlight).map((part, index, parts) => (
              <span key={`${part}-${index}`}>
                {part}
                {index < parts.length - 1 ? (
                  <span className="mx-1 inline-block -skew-x-6 bg-cta px-2 py-0.5 text-white">
                    <span className="inline-block skew-x-6 font-bold">
                      {promoHighlight}
                    </span>
                  </span>
                ) : null}
              </span>
            ))}
          </p>

          <ul className="mt-6 space-y-3" aria-label="Ưu điểm dịch vụ">
            {bullets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-foreground sm:text-base"
              >
                <span
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cta text-white"
                  aria-hidden
                >
                  <CheckIcon />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base text-foreground sm:text-lg">
            {priceLabel}{" "}
            <span className="text-3xl font-bold text-cta sm:text-4xl">
              {priceValue}
            </span>{" "}
            <span className="font-medium">{priceUnit}</span>
          </p>

          <div className="mt-5">
            <CTAButton href={ctaHref} className="px-8 py-3.5 text-base">
              {ctaLabel}
            </CTAButton>
          </div>

          <p className="mt-3 text-sm italic text-cta underline underline-offset-2">
            {guarantee}
          </p>
        </div>

        {/* Right — media frame (ref web4s) */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-[0_12px_40px_rgba(11,31,58,0.12)]">
            <ZoomableImage
              src={image.src}
              alt={image.alt}
              fill
              priority
              unoptimized={image.src.endsWith(".svg")}
              className="object-cover"
              frameClassName="aspect-[4/3] w-full bg-bg-secondary"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
            {/* Diagonal navy overlay — cùng bố cục web4s */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-[38%] bg-footer"
              style={{
                clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-8 pt-2">
        <a
          href="#quy-trinh"
          className="text-[#7EB6E8] transition-opacity hover:opacity-70"
          aria-label="Cuộn xuống nội dung tiếp theo"
        >
          <ScrollMouseIcon />
        </a>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden>
      <path
        d="M3.5 8.5 6.5 11.5 12.5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ScrollMouseIcon() {
  return (
    <svg viewBox="0 0 24 36" fill="none" className="h-9 w-6" aria-hidden>
      <rect
        x="1.5"
        y="1.5"
        width="21"
        height="33"
        rx="10.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect x="10.5" y="7" width="3" height="7" rx="1.5" fill="currentColor">
        <animate attributeName="y" values="7;12;7" dur="1.4s" repeatCount="indefinite" />
        <animate
          attributeName="opacity"
          values="1;0.35;1"
          dur="1.4s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
}
