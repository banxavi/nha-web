"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  type TransitionEvent as ReactTransitionEvent,
} from "react";
import { ZoomableImage } from "@/components/ui/ZoomableImage";
import {
  websiteSamplesContent,
  type SampleItem,
} from "@/lib/site-config";

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

const SWIPE_THRESHOLD_RATIO = 0.18;
const SWIPE_THRESHOLD_MIN_PX = 56;
const DRAG_INTENT_PX = 8;

/**
 * Section 3+4 gộp:
 * - Heading giữa (ref 99designs)
 * - Grid flexible MSN: 5 cột desktop, mỗi hàng 4 item = 1 wide + 3 small
 * - Carousel `<` `>` + auto next 4s + kéo/vuốt (loop theo đúng hướng vuốt, không giật ngược)
 */
export function WebsiteSamplesSection() {
  const { heading, tagline, pages, autoplayMs } = websiteSamplesContent;
  const pageCount = pages.length;

  /**
   * Infinite track: [cloneLast, ...pages, cloneFirst]
   * trackIndex bắt đầu = 1 (page thật đầu tiên).
   * Loop tới clone → animate đúng hướng → jump silent về page thật.
   */
  const [trackIndex, setTrackIndex] = useState(pageCount > 1 ? 1 : 0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const [dragOffsetPx, setDragOffsetPx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({
    active: false,
    startX: 0,
    deltaX: 0,
    width: 0,
    moved: false,
  });
  const suppressClickRef = useRef(false);

  const loopSlides = useMemo(() => {
    if (pageCount <= 1) {
      return pages.map((page, index) => ({
        key: `page-${index}`,
        page,
        realIndex: index,
      }));
    }
    return [
      {
        key: "clone-last",
        page: pages[pageCount - 1]!,
        realIndex: pageCount - 1,
      },
      ...pages.map((page, index) => ({
        key: `page-${index}`,
        page,
        realIndex: index,
      })),
      {
        key: "clone-first",
        page: pages[0]!,
        realIndex: 0,
      },
    ];
  }, [pages, pageCount]);

  const activeDot =
    pageCount <= 1
      ? 0
      : trackIndex === 0
        ? pageCount - 1
        : trackIndex === pageCount + 1
          ? 0
          : trackIndex - 1;

  useEffect(() => {
    if (paused || isDragging || pageCount <= 1) return;
    const id = window.setInterval(() => {
      setAnimate(true);
      setTrackIndex((i) => i + 1);
    }, autoplayMs);
    return () => window.clearInterval(id);
  }, [paused, isDragging, pageCount, autoplayMs]);

  function go(delta: number) {
    if (pageCount <= 1) return;
    setAnimate(true);
    setTrackIndex((i) => i + delta);
  }

  function goToPage(realIndex: number) {
    if (pageCount <= 1) return;
    setAnimate(true);
    setTrackIndex(realIndex + 1);
  }

  function onTrackTransitionEnd(event: ReactTransitionEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    if (event.propertyName !== "transform") return;
    if (pageCount <= 1) return;

    if (trackIndex === 0) {
      // Vuốt phải từ page đầu → clone last → nhảy silent về last thật
      setAnimate(false);
      setTrackIndex(pageCount);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true));
      });
      return;
    }

    if (trackIndex === pageCount + 1) {
      // Vuốt trái từ page cuối → clone first → nhảy silent về first thật
      setAnimate(false);
      setTrackIndex(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true));
      });
    }
  }

  function endDrag() {
    if (!dragRef.current.active) return;

    const { deltaX, width, moved } = dragRef.current;
    dragRef.current.active = false;
    setIsDragging(false);
    setDragOffsetPx(0);

    if (!moved) return;

    suppressClickRef.current = true;
    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 0);

    const threshold = Math.max(
      SWIPE_THRESHOLD_MIN_PX,
      width * SWIPE_THRESHOLD_RATIO,
    );
    // Vuốt trái (delta âm) → next; vuốt phải (delta dương) → prev — cùng hướng với track
    if (deltaX <= -threshold) go(1);
    else if (deltaX >= threshold) go(-1);
  }

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (pageCount <= 1 || event.button !== 0) return;

    const width = viewportRef.current?.clientWidth ?? 0;
    dragRef.current = {
      active: true,
      startX: event.clientX,
      deltaX: 0,
      width,
      moved: false,
    };
    setPaused(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!dragRef.current.active) return;

    const deltaX = event.clientX - dragRef.current.startX;
    dragRef.current.deltaX = deltaX;

    if (!dragRef.current.moved && Math.abs(deltaX) < DRAG_INTENT_PX) return;

    if (!dragRef.current.moved) {
      dragRef.current.moved = true;
      setIsDragging(true);
    }
    setDragOffsetPx(deltaX);
  }

  function onPointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    if (!dragRef.current.active) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    endDrag();
  }

  function onClickCapture(event: ReactMouseEvent<HTMLDivElement>) {
    if (suppressClickRef.current || dragRef.current.moved) {
      event.preventDefault();
      event.stopPropagation();
      dragRef.current.moved = false;
    }
  }

  // % translate dựa trên width track (= viewport nhờ w-full), không phải tổng các slide
  const trackTransform = `translateX(calc(${-trackIndex * 100}% + ${dragOffsetPx}px))`;

  return (
    <section
      id="mau-website"
      aria-labelledby="samples-heading"
      className="bg-bg-primary px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center sm:mb-14">
          <h2
            id="samples-heading"
            className="text-2xl font-bold uppercase tracking-[0.08em] text-foreground sm:text-3xl md:text-4xl"
          >
            {heading}
          </h2>
          {tagline ? (
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted sm:text-base">
              {tagline}
            </p>
          ) : null}
        </header>
      </div>

      <div className="relative mx-auto max-w-[min(100%,calc(80rem+5.5rem))]">
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          {pageCount > 1 ? (
            <CarouselButton
              direction="prev"
              onClick={() => go(-1)}
              className="shrink-0"
            />
          ) : null}

          <div
            ref={viewportRef}
            className={cx(
              "min-w-0 flex-1 overflow-hidden touch-pan-y",
              pageCount > 1 && (isDragging ? "cursor-grabbing" : "cursor-grab"),
            )}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onClickCapture={onClickCapture}
          >
            <div
              className={cx(
                "flex w-full ease-out",
                !isDragging && animate
                  ? "transition-transform duration-500"
                  : "transition-none",
              )}
              style={{ transform: trackTransform }}
              onTransitionEnd={onTrackTransitionEnd}
            >
              {loopSlides.map((slide) => (
                <div
                  key={slide.key}
                  className="w-full shrink-0 px-0.5 select-none"
                  aria-hidden={slide.realIndex !== activeDot}
                  draggable={false}
                >
                  <SamplesGrid items={slide.page} />
                </div>
              ))}
            </div>
          </div>

          {pageCount > 1 ? (
            <CarouselButton
              direction="next"
              onClick={() => go(1)}
              className="shrink-0"
            />
          ) : null}
        </div>

        {pageCount > 1 ? (
          <div
            className="mt-8 flex justify-center gap-2"
            role="tablist"
            aria-label="Trang mẫu website"
          >
            {pages.map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                role="tab"
                aria-selected={index === activeDot}
                aria-label={`Trang ${index + 1}`}
                onClick={() => goToPage(index)}
                className={cx(
                  "h-2.5 w-2.5 rounded-full transition-colors",
                  index === activeDot
                    ? "bg-cta"
                    : "bg-card-border hover:bg-muted",
                )}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

/** Lưới 5 cột (lg): wide span 2 + 3×small span 1 = 4 item / hàng */
function SamplesGrid({ items }: { items: SampleItem[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5">
      {items.map((item) => (
        <li
          key={item.id}
          className={cx(
            item.size === "wide" && "sm:col-span-2 lg:col-span-2",
            item.size === "small" && "lg:col-span-1",
          )}
        >
          {item.size === "wide" ? (
            <WideSampleCard item={item} />
          ) : (
            <SmallSampleCard item={item} />
          )}
        </li>
      ))}
    </ul>
  );
}

/** Item nhỏ — ảnh trên, text dưới (MSN standard card) */
function SmallSampleCard({ item }: { item: SampleItem }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-card-border bg-card transition-[border-color,box-shadow] duration-200 hover:border-footer/20 hover:shadow-sm">
      <Link href={item.href} className="flex h-full flex-col outline-none">
        <ZoomableImage
          src={item.image.src}
          alt={item.image.alt}
          fill
          unoptimized={item.image.src.endsWith(".svg")}
          className="object-cover"
          frameClassName="aspect-[16/10] w-full bg-bg-secondary"
          sizes="(max-width: 1024px) 50vw, 20vw"
        />
        <div className="flex flex-1 flex-col gap-2 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            {item.category}
          </p>
          <h3 className="text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-cta sm:text-[0.95rem]">
            {item.title}
          </h3>
        </div>
      </Link>
    </article>
  );
}

/** Item to — ảnh full nền + text overlay dưới (MSN featured card) */
function WideSampleCard({ item }: { item: SampleItem }) {
  return (
    <article className="group relative h-full min-h-[240px] overflow-hidden rounded-2xl border border-card-border shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-footer/20 hover:shadow-md sm:min-h-[280px] lg:min-h-full">
      <Link href={item.href} className="absolute inset-0 block outline-none">
        <ZoomableImage
          src={item.image.src}
          alt={item.image.alt}
          fill
          unoptimized={item.image.src.endsWith(".svg")}
          className="object-cover"
          frameClassName="absolute inset-0 h-full w-full"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-footer/90 via-footer/35 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
            {item.category}
          </p>
          <h3 className="text-base font-bold leading-snug text-white transition-colors group-hover:text-cta sm:text-lg">
            {item.title}
          </h3>
        </div>
      </Link>
    </article>
  );
}

function CarouselButton({
  direction,
  onClick,
  className,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  className?: string;
}) {
  const label = direction === "prev" ? "Mẫu trước" : "Mẫu tiếp";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cx(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-bg-primary text-foreground shadow-md",
        "transition-colors hover:border-cta hover:text-cta",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2",
        className,
      )}
    >
      {direction === "prev" ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path
        fillRule="evenodd"
        d="M12.79 5.23a.75.75 0 0 1-.02 1.06L8.832 10l3.938 3.71a.75.75 0 1 1-1.04 1.08l-4.5-4.25a.75.75 0 0 1 0-1.08l4.5-4.25a.75.75 0 0 1 1.06.02Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path
        fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
