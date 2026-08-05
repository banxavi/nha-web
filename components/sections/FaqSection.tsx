"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { faqContent } from "@/lib/site-config";

const FAQ_ANIM_MS = 700;

/**
 * Section 5 — FAQ (layout ref web4s.vn).
 * Accordion trái + minh họa phải.
 * TODO: swap content/ảnh trong `faqContent` khi có bản final từ khách.
 */
export function FaqSection() {
  const { heading, items, image } = faqContent;
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hoverLocked, setHoverLocked] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const hoverLockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mediaOffset, setMediaOffset] = useState(0);

  useEffect(() => {
    return () => {
      if (hoverLockTimerRef.current) clearTimeout(hoverLockTimerRef.current);
    };
  }, []);

  useLayoutEffect(() => {
    const list = listRef.current;
    const media = mediaRef.current;
    if (!list || !media) return;

    const syncOffset = () => {
      const next = Math.max(0, (list.offsetHeight - media.offsetHeight) / 2);
      setMediaOffset(next);
    };

    syncOffset();

    const observer = new ResizeObserver(syncOffset);
    observer.observe(list);
    observer.observe(media);
    return () => observer.disconnect();
  }, [openId]);

  const lockHoverToItem = (id: string) => {
    // Keep wipe on the clicked item; block other items from stealing hover
    // while accordion height is shifting under the cursor.
    setHoveredId(id);
    setHoverLocked(true);
    if (hoverLockTimerRef.current) clearTimeout(hoverLockTimerRef.current);
    hoverLockTimerRef.current = setTimeout(() => {
      setHoverLocked(false);
      hoverLockTimerRef.current = null;
    }, FAQ_ANIM_MS);
  };

  const handleToggle = (id: string) => {
    lockHoverToItem(id);
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 bg-bg-primary"
    >
      <div className="mx-auto max-w-site px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h2
          id="faq-heading"
          className="mx-auto max-w-4xl text-center text-xl font-bold leading-snug tracking-normal text-foreground sm:text-2xl lg:text-[1.75rem]"
        >
          {heading}
        </h2>

        <div className="mt-10 grid items-start gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12">
          {/* Left — accordion */}
          <ul ref={listRef} className="space-y-3" role="list">
            {items.map((item) => {
              const isOpen = openId === item.id;
              const isHovered = hoveredId === item.id;
              const panelId = `faq-panel-${item.id}`;
              const buttonId = `faq-button-${item.id}`;
              const idleBg = isOpen ? "#EEF8FF" : "#ffffff";

              return (
                <li key={item.id}>
                  <div
                    className={`overflow-hidden rounded-md border transition-[border-color] duration-700 ${
                      isHovered
                        ? "border-cta"
                        : isOpen
                          ? "border-[#B8D4F0]"
                          : "border-card-border"
                    }`}
                    style={{ backgroundColor: isHovered ? undefined : idleBg }}
                  >
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className={`flex w-full cursor-pointer items-start justify-between gap-4 bg-[length:200%_100%] px-4 py-3.5 text-left transition-[background-position,color] duration-700 ease-out sm:px-5 sm:py-4 ${
                        isHovered
                          ? "bg-left text-white"
                          : "bg-right text-foreground"
                      }`}
                      style={{
                        backgroundImage: `linear-gradient(to right, #F97316 50%, ${idleBg} 50%)`,
                      }}
                      onPointerEnter={() => {
                        // While layout is animating, only keep the locked item —
                        // do not let the cursor "land" on a neighbor.
                        if (hoverLocked && hoveredId !== item.id) return;
                        setHoveredId(item.id);
                      }}
                      onPointerLeave={() => {
                        if (hoverLocked) return;
                        setHoveredId((current) =>
                          current === item.id ? null : current,
                        );
                      }}
                      onClick={() => handleToggle(item.id)}
                    >
                      <span className="text-sm font-semibold transition-colors duration-700 sm:text-base">
                        {item.question}
                      </span>
                      <span
                        className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center transition-[transform,color] duration-700 ${
                          isOpen ? "rotate-180" : ""
                        } ${isHovered ? "text-white" : "text-[#2B6CB0]"}`}
                        aria-hidden
                      >
                        <ChevronIcon />
                      </span>
                    </button>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`grid transition-[grid-template-rows] duration-700 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p
                          className="border-t border-[#D6EAF8] px-4 pb-4 pt-3 text-sm leading-relaxed text-foreground/85 sm:px-5 sm:pb-5 sm:text-[0.9375rem]"
                          style={{ backgroundColor: idleBg }}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Right — media; smoothly recenters as accordion height changes */}
          <div
            ref={mediaRef}
            className="relative mx-auto w-full max-w-lg will-change-transform lg:max-w-none"
            style={{
              transform: `translateY(${mediaOffset}px)`,
              transition: `transform ${FAQ_ANIM_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
            }}
          >
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
