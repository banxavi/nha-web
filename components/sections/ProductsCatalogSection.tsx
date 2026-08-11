"use client";

import { useEffect, useMemo, useState } from "react";
import { useContactForm } from "@/components/contact/ContactFormProvider";
import { ZoomableImage } from "@/components/ui/ZoomableImage";
import {
  productsPageContent,
  type ProductSampleItem,
} from "@/lib/site-config";

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

/**
 * Trang sản phẩm — catalog toàn bộ mẫu giao diện theo ngành nghề.
 * Filter chip theo 10 nhóm; hash URL (`#groupId`) đồng bộ filter.
 * Click mẫu → Form "Đăng ký ngay".
 */
export function ProductsCatalogSection() {
  const {
    heading,
    tagline,
    allFilterLabel,
    emptyFilterMessage,
    registerHint,
    filters,
    items,
  } = productsPageContent;
  const { openContactForm } = useContactForm();
  const [activeGroupId, setActiveGroupId] = useState<string | null>(null);

  useEffect(() => {
    function syncFromHash() {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) {
        setActiveGroupId(null);
        return;
      }
      const matched = filters.some((filter) => filter.id === hash);
      setActiveGroupId(matched ? hash : null);
    }

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [filters]);

  const visibleItems = useMemo(() => {
    if (!activeGroupId) return items;
    return items.filter((item) => item.groupId === activeGroupId);
  }, [activeGroupId, items]);

  function selectFilter(groupId: string | null) {
    setActiveGroupId(groupId);
    if (groupId) {
      window.history.replaceState(null, "", `#${groupId}`);
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }

  return (
    <section
      id="san-pham"
      aria-labelledby="products-heading"
      className="scroll-mt-24 bg-bg-secondary px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-site">
        <header className="mb-10 text-center sm:mb-12">
          <h1
            id="products-heading"
            className="text-2xl font-bold uppercase text-foreground sm:text-3xl md:text-4xl"
          >
            {heading}
          </h1>
          {tagline ? (
            <p className="mt-4 text-sm font-semibold uppercase text-muted sm:text-base">
              {tagline}
            </p>
          ) : null}
          <p className="mt-3 text-sm text-muted">{registerHint}</p>
        </header>

        <div
          role="tablist"
          aria-label="Lọc theo nhóm ngành"
          className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10 sm:gap-2.5"
        >
          <FilterChip
            active={activeGroupId === null}
            onClick={() => selectFilter(null)}
            label={allFilterLabel}
          />
          {filters.map((filter) => (
            <FilterChip
              key={filter.id}
              active={activeGroupId === filter.id}
              onClick={() => selectFilter(filter.id)}
              label={filter.label}
              id={filter.id}
            />
          ))}
        </div>

        {visibleItems.length === 0 ? (
          <p className="py-16 text-center text-muted">{emptyFilterMessage}</p>
        ) : (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {visibleItems.map((item) => (
              <li key={item.id}>
                <ProductCard
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
        )}
      </div>
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  label,
  id,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  id?: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      id={id ? `filter-${id}` : "filter-all"}
      aria-selected={active}
      onClick={onClick}
      className={cx(
        "rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors sm:px-4 sm:text-sm",
        active
          ? "border-cta bg-cta text-white"
          : "border-card-border bg-bg-primary text-foreground hover:border-cta/40 hover:text-cta",
      )}
    >
      {label}
    </button>
  );
}

function ProductCard({
  item,
  onSelect,
}: {
  item: ProductSampleItem;
  onSelect: () => void;
}) {
  return (
    <article className="group relative min-h-[220px] overflow-hidden rounded-2xl border border-card-border bg-card sm:min-h-[240px]">
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
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          frameClassName="absolute inset-0 h-full w-full"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent p-3 pt-10 sm:p-4 sm:pt-12">
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-white/80 sm:text-xs">
            {item.groupLabel}
          </p>
          <span className="inline-block max-w-full rounded-lg bg-bg-primary px-3 py-2 text-xs font-bold leading-snug text-foreground shadow-sm transition-colors group-hover:text-cta sm:text-sm">
            {item.title}
          </span>
        </div>
      </button>
    </article>
  );
}
