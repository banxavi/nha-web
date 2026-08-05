import Image from "next/image";
import { processImagesContent } from "@/lib/site-config";

/**
 * Section 6 — chỉ hiển thị ảnh infographic quy trình full-width.
 */
export function ProcessImagesSection() {
  const { heading, image } = processImagesContent;

  return (
    <section
      id="quy-trinh-chi-tiet"
      aria-labelledby="process-images-heading"
      className="scroll-mt-24 bg-[#F8FAF9]"
    >
      <div className="mx-auto max-w-site px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h2
          id="process-images-heading"
          className="text-center text-2xl font-bold tracking-normal text-foreground sm:text-3xl"
        >
          {heading}
        </h2>

        <div className="relative mx-auto mt-10 w-full overflow-hidden sm:mt-12 lg:mt-14">
          <Image
            src={image.src}
            alt={image.alt}
            width={1920}
            height={902}
            className="h-auto w-full"
            sizes="(max-width: 1280px) 100vw, (max-width: 1535px) 1280px, 1536px"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
