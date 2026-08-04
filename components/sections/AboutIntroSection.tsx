import Image from "next/image";
import {
  aboutIntroContent,
  type AboutIntroImagePosition,
} from "@/lib/site-config";

type AboutIntroSectionProps = {
  /** Override vị trí ảnh — mặc định lấy từ `aboutIntroContent` (right). */
  imagePosition?: AboutIntroImagePosition;
};

/**
 * Trang Giới thiệu — Section 1: Giới thiệu chung.
 * 2 cột: text + hình (ref interdata.vn/about-us).
 * Truyền `imagePosition="left"` để tái dùng cho Section 2.
 */
export function AboutIntroSection({
  imagePosition = aboutIntroContent.imagePosition,
}: AboutIntroSectionProps) {
  const { id, brandNha, brandWeb, tagline, body, image } = aboutIntroContent;
  const imageFirst = imagePosition === "left";

  return (
    <section
      id={id}
      aria-labelledby="about-intro-heading"
      className="relative scroll-mt-24 overflow-hidden bg-bg-primary"
    >
      {/* Soft atmosphere — nhẹ, không cạnh tranh nội dung (ref interdata circuit wash) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_45%,rgba(249,115,22,0.06),transparent_55%),radial-gradient(ellipse_at_15%_60%,rgba(11,31,58,0.04),transparent_50%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-site items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        {/* Text column */}
        <div
          className={`flex flex-col justify-center ${
            imageFirst ? "order-2 lg:order-2" : "order-1 lg:order-1"
          }`}
        >
          <h1
            id="about-intro-heading"
            className="text-2xl font-bold uppercase leading-tight tracking-wide text-foreground sm:text-3xl lg:text-[2rem] lg:leading-snug"
          >
            <span className="text-logo-nha">{brandNha}</span>{" "}
            <span className="text-logo-web">{brandWeb}</span>
            <span className="mt-2 block text-xl font-bold normal-case tracking-normal text-foreground sm:text-2xl lg:text-[1.65rem]">
              {tagline}
            </span>
          </h1>

          <div className="mt-6 max-w-xl space-y-4 text-sm leading-relaxed text-foreground/80 sm:mt-8 sm:text-base">
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Image column */}
        <div
          className={`relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none ${
            imageFirst ? "order-1 lg:order-1" : "order-2 lg:order-2"
          } ${imageFirst ? "lg:justify-self-start" : "lg:justify-self-end"}`}
        >
          <div className="relative mx-auto aspect-[395/600] w-full max-w-[395px] overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority
              className="h-full w-full object-contain object-center"
              sizes="(max-width: 1024px) 90vw, 395px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
