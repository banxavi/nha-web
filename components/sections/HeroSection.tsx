"use client";

import Image from "next/image";
import { useContactForm } from "@/components/contact/ContactFormProvider";
import { Carousel, CarouselSlide } from "@/components/ui/Carousel";
import { CTAButton } from "@/components/ui/CTAButton";
import { heroContent } from "@/lib/site-config";

export type HeroContent = {
  headline: string;
  bullets: string[];
  ctaLabel: string;
  autoplayMs: number;
  banners: Array<{ src: string; alt: string }>;
};

type HeroSectionProps = {
  /** Override content — mặc định `heroContent` trang chủ. */
  content?: HeroContent;
  /** Section id — trang dịch vụ có thể đổi để tránh trùng `#dich-vu`. */
  sectionId?: string;
};

/**
 * Section 1 — Hero dịch vụ.
 * Layout: text trái + bullet ✓, media phải (Embla autoplay loop).
 */
export function HeroSection({
  content = heroContent,
  sectionId = "dich-vu",
}: HeroSectionProps) {
  const { headline, bullets, ctaLabel, banners, autoplayMs } = content;
  const { openContactForm } = useContactForm();
  const count = banners.length;

  return (
    <section
      id={sectionId}
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-[#EEF4FB] via-bg-primary to-bg-secondary"
    >
      <div className="mx-auto grid max-w-site items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-stretch lg:gap-12 lg:px-8 lg:py-20">
        <div className="flex flex-col justify-center">
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
                className="flex items-start gap-3 text-sm tracking-wide text-foreground sm:text-base"
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

        <div className="relative w-full lg:h-full">
          {/* Mobile 3:2; desktop kéo full height cột text (object-top giữ phần trên) */}
          <div
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border-2 border-white shadow-[0_12px_40px_rgba(11,31,58,0.12)] lg:aspect-auto lg:h-full"
            role="region"
            aria-roledescription="carousel"
            aria-label="Banner dịch vụ Nhà Web"
          >
            <Carousel
              className="absolute inset-0 h-full bg-bg-secondary"
              viewportClassName="h-full"
              containerClassName="h-full"
              options={{
                loop: count > 1,
                watchDrag: count > 1,
                duration: 25,
              }}
              autoplayMs={count > 1 ? autoplayMs : undefined}
              showDots={false}
            >
              {banners.map((banner, i) => (
                <CarouselSlide
                  key={`${banner.src}-${i}`}
                  className="relative h-full"
                >
                  <Image
                    src={banner.src}
                    alt={banner.alt}
                    fill
                    priority={i === 0}
                    draggable={false}
                    quality={100}
                    className="object-cover object-top select-none"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </CarouselSlide>
              ))}
            </Carousel>
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
