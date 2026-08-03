"use client";

import Image from "next/image";
import { useState } from "react";
import { faqContent } from "@/lib/site-config";

/**
 * Section 5 — FAQ (layout ref web4s.vn).
 * Accordion trái + minh họa phải.
 * TODO: swap content/ảnh trong `faqContent` khi có bản final từ khách.
 */
export function FaqSection() {
  const { heading, items, image } = faqContent;
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 bg-bg-primary"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h2
          id="faq-heading"
          className="mx-auto max-w-4xl text-center text-xl font-bold leading-snug tracking-normal text-foreground sm:text-2xl lg:text-[1.75rem]"
        >
          {heading}
        </h2>

        <div className="mt-10 grid items-start gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12">
          {/* Left — accordion */}
          <ul className="space-y-3" role="list">
            {items.map((item) => {
              const isOpen = openId === item.id;
              const panelId = `faq-panel-${item.id}`;
              const buttonId = `faq-button-${item.id}`;

              return (
                <li key={item.id}>
                  <div
                    className={`rounded-md border transition-colors ${
                      isOpen
                        ? "border-[#B8D4F0] bg-white"
                        : "border-card-border bg-white hover:border-[#B8D4F0]"
                    }`}
                  >
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-start justify-between gap-4 px-4 py-3.5 text-left sm:px-5 sm:py-4"
                      onClick={() =>
                        setOpenId((current) =>
                          current === item.id ? null : item.id,
                        )
                      }
                    >
                      <span className="text-sm font-semibold text-foreground sm:text-base">
                        {item.question}
                      </span>
                      <span
                        className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center text-[#2B6CB0] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden
                      >
                        <ChevronIcon />
                      </span>
                    </button>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                      className={isOpen ? "block" : "hidden"}
                    >
                      <p className="border-t border-[#E8F1FB] px-4 pb-4 pt-3 text-sm leading-relaxed text-foreground/85 sm:px-5 sm:pb-5 sm:text-[0.9375rem]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Right — media (placeholder từ ảnh mẫu web4s) */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[482/328] w-full overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 560px"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
      <path
        d="M5 7.5 10 12.5 15 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
