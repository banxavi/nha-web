"use client";

import { useContactForm } from "@/components/contact/ContactFormProvider";
import { CTAButton } from "@/components/ui/CTAButton";
import { ZoomableImage } from "@/components/ui/ZoomableImage";
import { heroContent } from "@/lib/site-config";

/**
 * Section 1 — Hero dịch vụ.
 * Layout copy web4s.vn: text trái + bullet ✓, media phải (hình vuông).
 * Text section 1–3: viết hoa hết, in đậm.
 */
export function HeroSection() {
  const { headline, bullets, ctaLabel, image } = heroContent;
  const { openContactForm } = useContactForm();

  return (
    <section
      id="dich-vu"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-[#EEF4FB] via-bg-primary to-bg-secondary"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        <div className="flex flex-col">
          <h1
            id="hero-heading"
            className="text-2xl font-bold uppercase leading-tight tracking-wide text-foreground sm:text-3xl lg:text-[2rem] lg:leading-snug"
          >
            {headline}
          </h1>

          <ul className="mt-6 space-y-3" aria-label="Ưu điểm dịch vụ">
            {bullets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm font-bold uppercase tracking-wide text-foreground sm:text-base"
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

          <div className="mt-8">
            <CTAButton
              type="button"
              className="px-8 py-3.5 text-base font-bold uppercase"
              onClick={() => openContactForm({ variant: "register" })}
            >
              {ctaLabel}
            </CTAButton>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-[0_12px_40px_rgba(11,31,58,0.12)]">
            <ZoomableImage
              src={image.src}
              alt={image.alt}
              fill
              priority
              unoptimized={image.src.endsWith(".svg")}
              className="object-cover"
              frameClassName="aspect-square w-full bg-bg-secondary"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
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
