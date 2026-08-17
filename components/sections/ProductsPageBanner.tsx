import Image from "next/image";
import Link from "next/link";
import { productsPageContent, templateDetailContent } from "@/lib/site-config";

/**
 * Banner đầu trang `/san-pham` (ref web4s.vn inner banner).
 * Ảnh full-width + overlay chữ trái; heading/tagline chuyển từ catalog lên đây.
 */
export function ProductsPageBanner() {
  const { heading, tagline, description, highlights, banner } =
    productsPageContent;
  const { breadcrumbHome, breadcrumbCatalog } = templateDetailContent;

  return (
    <section
      aria-labelledby="products-heading"
      className="relative isolate overflow-hidden bg-footer"
    >
      <Image
        src={banner.src}
        alt={banner.alt}
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-site flex-col justify-center px-4 py-7 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <nav aria-label="Breadcrumb" className="mb-2.5 text-sm text-white/75">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta"
              >
                {breadcrumbHome}
              </Link>
            </li>
            <li aria-hidden className="text-white/40">
              /
            </li>
            <li className="font-semibold text-white">{breadcrumbCatalog}</li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <h1
            id="products-heading"
            className="text-xl font-bold uppercase leading-tight tracking-wide text-white drop-shadow-sm sm:text-2xl md:text-3xl lg:leading-snug"
          >
            {heading}
          </h1>
          {tagline ? (
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/90 sm:text-sm">
              {tagline}
            </p>
          ) : null}
          {description ? (
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/80">
              {description}
            </p>
          ) : null}

          {highlights.length > 0 ? (
            <ul className="mt-3 flex flex-wrap gap-2 sm:mt-4">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/95 backdrop-blur-[2px] sm:px-3.5 sm:text-xs"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
