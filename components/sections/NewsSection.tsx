"use client";

import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Carousel, CarouselSlide } from "@/components/ui/Carousel";
import { ZoomableImage } from "@/components/ui/ZoomableImage";
import { newsContent, type NewsItem } from "@/lib/site-config";

/**
 * Task 4 — Tin tức / Sự kiện mới nhất.
 * Heading giữa + grid 5 item/hàng + Embla carousel (prev/next, autoplay, swipe).
 */
export function NewsSection() {
  const { heading, tagline, items, itemsPerRow, autoplayMs } = newsContent;
  const pages = chunkItems(items, itemsPerRow);
  const pageCount = Math.max(1, pages.length);

  return (
    <section
      id="tin-tuc"
      aria-labelledby="news-heading"
      aria-roledescription="carousel"
      className="scroll-mt-24 bg-bg-secondary px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
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

      <Carousel
        className="mx-auto max-w-[min(100%,calc(var(--site-max)+5.5rem))]"
        options={{ loop: pageCount > 1, watchDrag: pageCount > 1 }}
        autoplayMs={pageCount > 1 ? autoplayMs : undefined}
        slideGap="4-5"
        sideControls={{
          prevLabel: "Tin trước",
          nextLabel: "Tin sau",
        }}
        dotsLabel="Trang tin tức"
      >
        {pages.map((page, index) => (
          <CarouselSlide key={`news-page-${index}`}>
            <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
              {page.map((item) => (
                <li key={item.id} className="min-h-0">
                  <NewsCard item={item} />
                </li>
              ))}
            </ul>
          </CarouselSlide>
        ))}
      </Carousel>
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
