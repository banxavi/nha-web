"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  testimonialsContent,
  type TestimonialItem,
} from "@/lib/site-config";

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

/**
 * Mục 5 — Nhận xét khách hàng.
 * Card layout ref web4s.vn (ảnh trái + tên/role/quote phải); carousel để mở rộng khi có nhiều review.
 */
export function TestimonialSection() {
  const { eyebrow, heading, items } = testimonialsContent;
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setPerView(3);
      else if (w >= 640) setPerView(2);
      else setPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, items.length - perView);
  const canPrev = index > 0;
  const canNext = index < maxIndex;
  const showControls = items.length > perView;

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    if (!first) return;
    const gap = parseFloat(getComputedStyle(el).columnGap || "0") || 20;
    const offset = index * (first.offsetWidth + gap);
    el.style.transform = `translateX(-${offset}px)`;
  }, [index, perView, items.length]);

  if (items.length === 0) return null;

  const single = items.length === 1;

  return (
    <section
      id="nhan-xet"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-24 bg-gradient-to-b from-bg-secondary via-[#F3F6FA] to-bg-primary"
    >
      <div className="mx-auto max-w-site px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <header className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-[0.12em] text-muted sm:text-sm">
            {eyebrow}
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 text-xl font-bold leading-snug tracking-wide text-foreground sm:text-2xl lg:text-[1.75rem]"
          >
            {heading}
          </h2>
        </header>

        <div className="relative mt-10 sm:mt-12">
          <div
            className={cx("overflow-hidden", single && "flex justify-center")}
          >
            <ul
              ref={trackRef}
              className={cx(
                "flex gap-4 transition-transform duration-500 ease-out sm:gap-5",
                single ? "w-auto" : "w-full",
              )}
            >
              {items.map((item) => (
                <li
                  key={item.id}
                  className={cx(
                    "shrink-0",
                    single
                      ? "w-[min(100%,36rem)]"
                      : "w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]",
                  )}
                >
                  <TestimonialCard item={item} />
                </li>
              ))}
            </ul>
          </div>

          {showControls ? (
            <div className="mt-8 flex items-center justify-center gap-4">
              <CarouselButton
                direction="prev"
                disabled={!canPrev}
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
              />
              <div
                className="flex items-center gap-2"
                role="tablist"
                aria-label="Trang nhận xét"
              >
                {Array.from({ length: maxIndex + 1 }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Trang ${i + 1}`}
                    className={cx(
                      "h-2.5 rounded-full transition-all duration-200",
                      i === index
                        ? "w-6 bg-cta"
                        : "w-2.5 bg-card-border hover:bg-muted/40",
                    )}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
              <CarouselButton
                direction="next"
                disabled={!canNext}
                onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <article className="flex h-full gap-3 rounded-2xl border border-card-border bg-card p-4 shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-footer/20 hover:shadow-md sm:gap-4 sm:p-5">
      <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-xl bg-bg-secondary sm:h-20 sm:w-20">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          unoptimized={item.image.src.endsWith(".svg")}
          className="object-cover"
          sizes="80px"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-bold text-foreground sm:text-base">
          {item.name}
        </h3>
        <p className="mt-0.5 text-xs text-muted sm:text-sm">{item.role}</p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/90 sm:text-[0.9375rem]">
          {item.quote}
        </p>
      </div>
    </article>
  );
}

function CarouselButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      aria-label={direction === "prev" ? "Nhận xét trước" : "Nhận xét sau"}
      onClick={onClick}
      className={cx(
        "flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-card text-foreground shadow-sm transition-colors",
        "hover:border-cta/40 hover:text-cta",
        "disabled:pointer-events-none disabled:opacity-35",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta/40",
      )}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className={direction === "prev" ? "rotate-180" : undefined}
      >
        <path
          d="M9 5l7 7-7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
