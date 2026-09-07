import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { solutionPageContent } from "@/lib/site-config";

/**
 * Landing `/giai-phap` — banner full-width 1920×620, chữ cố định, CTA neo #dang-ky.
 */
export function SolutionBannerSection() {
  const { id, image } =
    solutionPageContent.banner;

  return (
    <section
      id={id}
      aria-labelledby="giai-phap-banner-heading"
      className="relative isolate overflow-hidden bg-cta"
    >
      <div className="relative mx-auto w-full min-h-[24rem] sm:min-h-[28rem] md:aspect-[1920/620] md:min-h-0 md:max-h-[620px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-[38%_center] sm:object-[42%_center] md:object-center"
        />
      </div>
    </section>
  );
}

