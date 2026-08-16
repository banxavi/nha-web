"use client";

import { useEffect, useMemo, useState } from "react";
import { ProductSampleCard } from "@/components/products/ProductSampleCard";
import { productsPageContent } from "@/lib/site-config";

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

/**
 * Trang sản phẩm — catalog toàn bộ mẫu giao diện theo ngành nghề.
 * Filter chip theo 10 nhóm; hash URL (`#groupId`) đồng bộ filter.
 * Click mẫu → trang chi tiết `/san-pham/[slug]`.
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
                <ProductSampleCard item={item} />
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
