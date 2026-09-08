import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { solutionPageContent } from "@/lib/site-config";

/**
 * Landing `/giai-phap` — mobile: banner navy (cùng `bg-logo-web` với
 * `/chinh-sach-bao-mat`, không breadcrumb). md+: ảnh full-width 1920×620.
 */
export function SolutionBannerSection() {
  const { id, heading, body, image } = solutionPageContent.banner;

  return (
    <section
      id={id}
      aria-labelledby="giai-phap-banner-heading"
      className="relative isolate overflow-hidden bg-logo-web md:bg-cta"
    >
      <div className="md:hidden">
        <div className="mx-auto max-w-site px-4 py-10 sm:px-6 sm:py-12">
          <Reveal amount={0.35}>
            <h1
              id="giai-phap-banner-heading"
              className="max-w-3xl text-2xl font-bold leading-[1.2] tracking-tight text-white sm:text-3xl"
            >
              {heading}
            </h1>
            <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-white/80 sm:mt-3.5 sm:text-base">
              {body}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="relative mx-auto hidden w-full aspect-[1920/620] max-h-[620px] md:block">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
