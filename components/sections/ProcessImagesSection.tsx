import Image from "next/image";
import { section6Content } from "@/lib/site-config";

/**
 * Section 6 — tiêu đề giữa + text trái / hình phải.
 * TODO: swap copy + `image.src` trong `section6Content` khi có bản final.
 */
export function ProcessImagesSection() {
  const { heading, bodyTitle, bodyText, image } = section6Content;
  const hasImage = Boolean(image?.src);

  return (
    <section
      id="quy-trinh-chi-tiet"
      aria-labelledby="section6-heading"
      className="scroll-mt-24 bg-bg-secondary"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h2
          id="section6-heading"
          className="text-center text-2xl font-bold tracking-normal text-foreground sm:text-3xl"
        >
          {heading}
        </h2>

        <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12">
          {/* Left — copy */}
          <div>
            {bodyTitle ? (
              <h3 className="text-lg font-bold text-foreground sm:text-xl">
                {bodyTitle}
              </h3>
            ) : null}
            <div
              className={`space-y-4 text-sm leading-relaxed text-foreground/85 sm:text-base ${
                bodyTitle ? "mt-4" : ""
              }`}
            >
              {bodyText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right — media placeholder */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-bg-primary ring-1 ring-card-border">
              {hasImage ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain object-center transition-transform duration-300 ease-out hover:scale-105 active:scale-110"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              ) : (
                <div
                  className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center text-muted"
                  aria-hidden
                >
                  <span className="text-sm font-semibold uppercase tracking-wide text-foreground/30">
                    Hình ảnh
                  </span>
                  <span className="max-w-[14rem] text-xs leading-relaxed">
                    Placeholder — sẽ cập nhật ảnh sau
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
