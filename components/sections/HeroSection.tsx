"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useContactForm } from "@/components/contact/ContactFormProvider";
import { CTAButton } from "@/components/ui/CTAButton";
import { heroContent } from "@/lib/site-config";

/**
 * Section 1 — Hero dịch vụ.
 * Layout: text trái + bullet ✓, media phải (banner auto slide phải → trái).
 */
export function HeroSection() {
  const { headline, bullets, ctaLabel, banners, autoplayMs } = heroContent;
  const { openContactForm } = useContactForm();
  const count = banners.length;

  // Clone slide đầu ở cuối để loop vô hạn luôn trượt phải → trái.
  const slides = count > 1 ? [...banners, banners[0]] : banners;

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (count <= 1 || paused) return;
    const timer = window.setInterval(() => {
      setAnimate(true);
      setIndex((current) => current + 1);
    }, autoplayMs);
    return () => window.clearInterval(timer);
  }, [autoplayMs, count, paused]);

  function onTransitionEnd() {
    if (count <= 1 || index !== count) return;
    // Đã tới clone — nhảy về slide đầu thật, không animate.
    setAnimate(false);
    setIndex(0);
  }

  return (
    <section
      id="dich-vu"
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

        <div
          className="relative w-full lg:h-full"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Mobile 3:2; desktop kéo full height cột text (object-top giữ phần trên) */}
          <div
            className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border-2 border-white shadow-[0_12px_40px_rgba(11,31,58,0.12)] lg:aspect-auto lg:h-full"
            role="region"
            aria-roledescription="carousel"
            aria-label="Banner dịch vụ Nhà Web"
          >
            <div className="absolute inset-0 overflow-hidden bg-bg-secondary">
              <div
                className="flex h-full w-full"
                style={{
                  transform: `translateX(${-index * 100}%)`,
                  transition: animate
                    ? "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)"
                    : "none",
                }}
                onTransitionEnd={onTransitionEnd}
              >
                {slides.map((banner, i) => (
                  <div
                    key={`${banner.src}-${i}`}
                    className="relative h-full w-full shrink-0"
                    aria-hidden={i !== index}
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
                  </div>
                ))}
              </div>
            </div>
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
