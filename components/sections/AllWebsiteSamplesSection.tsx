"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { useContactForm } from "@/components/contact/ContactFormProvider";
import { ZoomableImage } from "@/components/ui/ZoomableImage";
import {
  allWebsiteSamplesContent,
  type AllSampleItem,
  type AllSampleRow,
} from "@/lib/site-config";

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

const SWIPE_THRESHOLD_RATIO = 0.18;
const SWIPE_THRESHOLD_MIN_PX = 56;
const DRAG_INTENT_PX = 8;

/**
 * Section 4 — Tất cả mẫu websites.
 * Heading giữa + grid flexible MSN (5 cột: mỗi hàng 4 item = 1 wide + 3 small)
 * + carousel `<` `>` / auto next 4s / kéo-vuốt (cùng pattern slider mẫu website cũ).
 * Vị trí item wide mỗi hàng random (index 0–3) sau khi mount.
 * Click mẫu → Form "Đăng ký ngay".
 */
export function AllWebsiteSamplesSection() {
  const { heading, tagline, pages, autoplayMs } = allWebsiteSamplesContent;
  const pageCount = Math.max(1, pages.length);
  const [pageIndex, setPageIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  /** Pages sau khi random vị trí wide — tránh lệch SSR/CSR */
  const [mosaicPages, setMosaicPages] = useState<AllSampleRow[][]>(pages);
  const { openContactForm } = useContactForm();

  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({
    pointerId: -1,
    startX: 0,
    lastX: 0,
    moved: false,
  });
  const suppressClickRef = useRef(false);

  useEffect(() => {
    setMosaicPages(pages.map((page) => page.map(randomizeRowWide)));
  }, [pages]);

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
      id="mau-carousel"
      aria-labelledby="all-samples-heading"
      aria-roledescription="carousel"
      className="scroll-mt-24 bg-bg-secondary px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center sm:mb-14">
          <h2
            id="all-samples-heading"
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
              label="Trang mẫu trước"
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
              {mosaicPages.map((page, index) => (
                <div
                  key={`all-samples-page-${index}`}
                  className="w-full shrink-0 space-y-4 sm:space-y-5"
                  aria-hidden={index !== pageIndex}
                >
                  {page.map((row, rowIndex) => (
                    <ul
                      key={`all-samples-row-${index}-${rowIndex}`}
                      className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5"
                    >
                      {row.map((item) => (
                        <li
                          key={item.id}
                          className={cx(
                            item.size === "wide" && "sm:col-span-2 lg:col-span-2",
                            item.size === "small" && "lg:col-span-1",
                          )}
                        >
                          <SampleCard
                            item={item}
                            onSelect={() =>
                              openContactForm({
                                variant: "register",
                                selectedSample: item.title,
                              })
                            }
                          />
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {pageCount > 1 ? (
            <CarouselButton
              direction="next"
              label="Trang mẫu sau"
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
            aria-label="Trang mẫu website"
          >
            {mosaicPages.map((_, index) => (
              <button
                key={`all-samples-dot-${index}`}
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

function SampleCard({
  item,
  onSelect,
}: {
  item: AllSampleItem;
  onSelect: () => void;
}) {
  return (
    <article className="group relative min-h-[200px] overflow-hidden rounded-2xl sm:min-h-[220px] lg:min-h-[240px]">
      <button
        type="button"
        onClick={onSelect}
        className="absolute inset-0 block w-full cursor-pointer text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cta"
        aria-label={`Đăng ký mẫu ${item.title}`}
      >
        <ZoomableImage
          src={item.image.src}
          alt={item.image.alt}
          fill
          unoptimized={item.image.src.endsWith(".svg")}
          className="object-cover"
          frameClassName="absolute inset-0 h-full w-full"
          sizes={
            item.size === "wide"
              ? "(max-width: 1024px) 100vw, 40vw"
              : "(max-width: 1024px) 50vw, 20vw"
          }
        />

        <div className="absolute inset-x-0 bottom-0 flex justify-center p-3 sm:p-4">
          <span className="rounded-lg bg-bg-primary px-4 py-2 text-center text-sm font-bold tracking-wide text-foreground shadow-sm transition-colors group-hover:text-cta sm:px-5 sm:text-base">
            {item.title}
          </span>
        </div>
      </button>
    </article>
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
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="h-5 w-5">
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

/** Mỗi hàng đúng 1 item wide — chọn ngẫu nhiên slot 0–3 */
function randomizeRowWide(row: AllSampleRow): AllSampleRow {
  const wideIndex = Math.floor(Math.random() * row.length);
  return row.map((item, index) => ({
    ...item,
    size: index === wideIndex ? "wide" : "small",
  })) as AllSampleRow;
}
