"use client";

import { useContactForm } from "@/components/contact/ContactFormProvider";
import { ZoomableImage } from "@/components/ui/ZoomableImage";
import {
  websiteSamplesContent,
  type SampleItem,
} from "@/lib/site-config";

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

/**
 * Section 3 — 5 mẫu website nổi bật.
 * Bento: 1 card cao trái + lưới 2×2 bên phải (ref layout services).
 * Click mẫu → mở Form "Đăng ký ngay" với title = tên mẫu.
 */
export function WebsiteSamplesSection() {
  const { heading, tagline, items } = websiteSamplesContent;
  const { openContactForm } = useContactForm();

  return (
    <section
      id="mau-website"
      aria-labelledby="samples-heading"
      className="bg-bg-primary px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
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

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:grid-rows-2 lg:min-h-[560px]">
          {items.map((item) => (
            <li
              key={item.id}
              className={cx(
                item.featured && "sm:col-span-2 lg:col-span-1 lg:row-span-2",
                !item.featured && "min-h-[220px] sm:min-h-[240px]",
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
      </div>
    </section>
  );
}

function SampleCard({
  item,
  onSelect,
}: {
  item: SampleItem;
  onSelect: () => void;
}) {
  return (
    <article
      className={cx(
        "group relative h-full overflow-hidden rounded-2xl",
        item.featured ? "min-h-[320px] sm:min-h-[360px] lg:min-h-full" : "",
      )}
    >
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
            item.featured
              ? "(max-width: 1024px) 100vw, 33vw"
              : "(max-width: 1024px) 50vw, 33vw"
          }
        />

        <div className="absolute inset-x-0 bottom-0 flex justify-center p-4 sm:p-5">
          <span className="rounded-lg bg-bg-primary px-5 py-2.5 text-center text-sm font-bold tracking-wide text-foreground shadow-sm transition-colors group-hover:text-cta sm:px-6 sm:text-base">
            {item.title}
          </span>
        </div>
      </button>
    </article>
  );
}
