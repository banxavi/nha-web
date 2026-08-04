"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { Card } from "@/components/ui/Card";
import { ZoomableImage } from "@/components/ui/ZoomableImage";
import { newsContent, type NewsItem } from "@/lib/site-config";

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

const SWIPE_THRESHOLD_RATIO = 0.18;
const SWIPE_THRESHOLD_MIN_PX = 56;
const DRAG_INTENT_PX = 8;

/**
 * Task 4 — Tin tức / Sự kiện mới nhất.
 * Cùng cấu trúc slider mẫu website cũ:
 * heading giữa + grid 5 item/hàng + carousel `<` `>` / auto next / kéo-vuốt.
 */
export function NewsSection() {
  const { heading, tagline, items, itemsPerRow, autoplayMs } = newsContent;
  const pages = chunkItems(items, itemsPerRow);
  const pageCount = Math.max(1, pages.length);
  const [pageIndex, setPageIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({
    pointerId: -1,
    startX: 0,
    lastX: 0,
    moved: false,
  });
  const suppressClickRef = useRef(false);

  useEffect(() => {
    if (pageCount <= 1 || paused || isDragging) return;
    const timer = window.setInterval(() => {
      setPageIndex((current) => (current + 1) % pageCount);
    }, autoplayMs);
    return () => window.clearInterval(timer);
  }, [autoplayMs, pageCount, paused, isDragging]);

  function goTo(next: number) {
    setPageIndex(((next % pageCount) + pageCount) % pageCount);
  }

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (pageCount <= 1 || event.button !== 0) return;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      lastX: event.clientX,
      moved: false,
    };
    setIsDragging(true);
    setDragOffset(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!isDragging || dragRef.current.pointerId !== event.pointerId) return;
    const delta = event.clientX - dragRef.current.startX;
    if (Math.abs(delta) > DRAG_INTENT_PX) {
      dragRef.current.moved = true;
    }
    dragRef.current.lastX = event.clientX;
    setDragOffset(delta);
  }

  function finishDrag(event: ReactPointerEvent<HTMLDivElement>) {
    if (!isDragging || dragRef.current.pointerId !== event.pointerId) return;

    const width = trackRef.current?.offsetWidth ?? 1;
    const threshold = Math.max(
      SWIPE_THRESHOLD_MIN_PX,
      width * SWIPE_THRESHOLD_RATIO,
    );
    const delta = dragRef.current.lastX - dragRef.current.startX;

    if (dragRef.current.moved && Math.abs(delta) >= threshold) {
      goTo(pageIndex + (delta < 0 ? 1 : -1));
      suppressClickRef.current = true;
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 0);
    }

    dragRef.current.pointerId = -1;
    setIsDragging(false);
    setDragOffset(0);
  }

  function onClickCapture(event: ReactMouseEvent<HTMLDivElement>) {
    if (suppressClickRef.current || dragRef.current.moved) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  const trackStyle = {
    transform: `translateX(calc(-${pageIndex * 100}% + ${dragOffset}px))`,
    transition: isDragging ? "none" : "transform 420ms ease",
  };

  return (
    <section
      id="tin-tuc"
      aria-labelledby="news-heading"
      aria-roledescription="carousel"
      className="scroll-mt-24 bg-bg-secondary px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-site">
        <header className="mb-10 text-center sm:mb-14">
          <h2
            id="news-heading"
            className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl"
          >
            {heading}
          </h2>
          {tagline ? (
            <p className="mt-4 text-sm font-semibold tracking-wide text-muted sm:text-base">
              {tagline}
            </p>
          ) : null}
        </header>
      </div>

      <div className="relative mx-auto max-w-[min(100%,calc(var(--site-max)+5.5rem))]">
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          {pageCount > 1 ? (
            <CarouselButton
              direction="prev"
              label="Tin trước"
              onClick={() => goTo(pageIndex - 1)}
            />
          ) : (
            <span className="hidden w-10 shrink-0 lg:block" aria-hidden />
          )}

          <div
            ref={trackRef}
            className={cx(
              "min-w-0 flex-1 overflow-hidden touch-pan-y",
              isDragging ? "cursor-grabbing" : pageCount > 1 ? "cursor-grab" : "",
            )}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={finishDrag}
            onPointerCancel={finishDrag}
            onClickCapture={onClickCapture}
          >
            <div className="flex w-full" style={trackStyle}>
              {pages.map((page, index) => (
                <ul
                  key={`news-page-${index}`}
                  className="grid w-full shrink-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-5"
                  aria-hidden={index !== pageIndex}
                >
                  {page.map((item) => (
                    <li key={item.id} className="min-h-0">
                      <NewsCard item={item} />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {pageCount > 1 ? (
            <CarouselButton
              direction="next"
              label="Tin sau"
              onClick={() => goTo(pageIndex + 1)}
            />
          ) : (
            <span className="hidden w-10 shrink-0 lg:block" aria-hidden />
          )}
        </div>

        {pageCount > 1 ? (
          <div
            className="mt-8 flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Trang tin tức"
          >
            {pages.map((_, index) => (
              <button
                key={`news-dot-${index}`}
                type="button"
                role="tab"
                aria-selected={index === pageIndex}
                aria-label={`Trang ${index + 1}`}
                className={cx(
                  "h-2.5 rounded-full transition-all duration-200",
                  index === pageIndex
                    ? "w-7 bg-cta"
                    : "w-2.5 bg-card-border hover:bg-muted/50",
                )}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link href={item.href} className="group block h-full outline-none">
      <Card
        as="div"
        className="h-full transition-colors group-hover:border-cta/40"
        media={
          <ZoomableImage
            src={item.image.src}
            alt={item.image.alt}
            width={640}
            height={400}
            unoptimized={item.image.src.endsWith(".svg")}
            className="aspect-[4/3] w-full object-cover"
            frameClassName="aspect-[4/3] w-full"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          />
        }
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2 text-[0.6875rem] font-semibold uppercase tracking-wide text-muted">
            <span className="text-cta">{item.category}</span>
            <time dateTime={toIsoDate(item.date)}>{item.date}</time>
          </div>
          <h3 className="text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-cta sm:text-[0.9375rem]">
            {item.title}
          </h3>
          <p className="line-clamp-3 text-xs leading-relaxed text-muted sm:text-sm">
            {item.excerpt}
          </p>
        </div>
      </Card>
    </Link>
  );
}

function CarouselButton({
  direction,
  label,
  onClick,
}: {
  direction: "prev" | "next";
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cx(
        "hidden h-10 w-10 shrink-0 items-center justify-center rounded-full",
        "border border-card-border bg-bg-primary text-foreground shadow-sm",
        "transition-colors hover:border-cta hover:text-cta",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta",
        "sm:inline-flex",
      )}
    >
      <ChevronIcon direction={direction} />
    </button>
  );
}

function ChevronIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className="h-5 w-5"
    >
      <path
        d={
          direction === "prev"
            ? "M12.5 4.5 7 10l5.5 5.5"
            : "M7.5 4.5 13 10l-5.5 5.5"
        }
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function chunkItems<T>(items: T[], size: number): T[][] {
  if (size <= 0) return [items];
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages.length ? pages : [[]];
}

/** Parse dd/MM/yyyy → yyyy-MM-dd for <time dateTime> */
function toIsoDate(displayDate: string) {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(displayDate);
  if (!match) return undefined;
  const [, dd, mm, yyyy] = match;
  return `${yyyy}-${mm}-${dd}`;
}
