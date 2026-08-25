import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { productsPageContent, templateDetailContent } from "@/lib/site-config";

/**
 * Banner đầu trang `/san-pham`.
 * Ảnh 1920×500 (cam brand + laptop phải) — text trái trên vùng trống;
 * overlay navy nhẹ bên trái để giữ tương phản, không che hết nền cam.
 */
export function ProductsPageBanner() {
  const { heading, description, banner } = productsPageContent;
  const { breadcrumbHome, breadcrumbCatalog } = templateDetailContent;

  return (
    <section
      aria-labelledby="products-heading"
      className="relative isolate overflow-hidden bg-cta"
    >
      <div className="relative mx-auto w-full min-h-[11.5rem] sm:min-h-[13rem] md:aspect-[1920/500] md:min-h-0 md:max-h-[500px]">
        <Image
          src={banner.src}
          alt={banner.alt}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[72%_center] sm:object-center"
        />
        {/* Scrim trái: navy brand, phải trong suốt để giữ cam + laptop */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-logo-web/55 via-logo-web/20 to-transparent sm:from-logo-web/45 sm:via-logo-web/12"
          aria-hidden
        />

        <div className="relative mx-auto flex h-full max-w-site flex-col justify-center px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
          <Reveal amount={0.35}>
            <nav aria-label="Breadcrumb" className="mb-2 text-sm text-white/80">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  >
                    {breadcrumbHome}
                  </Link>
                </li>
                <li aria-hidden className="text-white/45">
                  /
                </li>
                <li className="font-semibold text-white">{breadcrumbCatalog}</li>
              </ol>
            </nav>

            <div className="max-w-xl lg:max-w-2xl">
              <h1
                id="products-heading"
                className="text-2xl font-bold leading-[1.15] tracking-tight text-white drop-shadow-sm sm:text-3xl md:text-4xl"
              >
                {heading}
              </h1>
              {description ? (
                <p className="mt-2 max-w-[36ch] text-sm leading-relaxed text-white/90 sm:mt-2.5 sm:max-w-[42ch] sm:text-base">
                  {description}
                </p>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
