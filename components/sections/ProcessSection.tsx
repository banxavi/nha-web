import Image from "next/image";
import { processStepsContent } from "@/lib/site-config";

/**
 * Section 2 — Quy trình 5 bước (ảnh infographic full).
 */
export function ProcessSection() {
  const { heading, image } = processStepsContent;

  return (
    <section
      id="quy-trinh"
      aria-labelledby="process-heading"
      className="scroll-mt-24 bg-[#FAFAFA]"
    >
      <div className="mx-auto max-w-site px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:pt-20 lg:pb-10">
        <h2
          id="process-heading"
          className="text-center text-2xl font-bold uppercase tracking-wide text-foreground sm:text-3xl"
        >
          {heading}
        </h2>

        <div className="relative mx-auto mt-10 w-full overflow-hidden sm:mt-12">
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
