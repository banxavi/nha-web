import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { solutionPageContent } from "@/lib/site-config";

/**
 * Landing `/giai-phap` — banner full-width 1920×620, chữ cố định, CTA neo #dang-ky.
 */
export function SolutionBannerSection() {
  const { id, headline, bullets, description, ctaLabel, ctaHref, image } =
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

        <div className="relative mx-auto flex h-full max-w-site items-center px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <div className="ml-0 max-w-[38rem] sm:ml-[4%] md:ml-[8%] lg:ml-[10%]">
            <h1
              id="giai-phap-banner-heading"
              className="text-2xl font-bold leading-[1.15] tracking-tight text-white drop-shadow-sm sm:text-3xl md:text-4xl lg:text-[2.5rem]"
            >
              {headline}
            </h1>

            <ul className="mt-4 space-y-2 sm:mt-5" aria-label="Điểm nổi bật">
              {bullets.map((item) => (
                <li key={item}>
                  <span className="flex items-start gap-2.5 text-sm font-medium tracking-wide text-white sm:text-base">
                    <span
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-cta shadow-[0_4px_10px_rgba(11,31,58,0.18)]"
                      aria-hidden
                    >
                      <CheckIcon />
                    </span>
                    <span>{item}</span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-white/95 sm:mt-5 sm:text-base">
              {description}
            </p>

            <div className="mt-6 sm:mt-7">
              <CTAButton
                href={ctaHref}
                className="whitespace-nowrap px-8 py-3.5 text-base font-bold uppercase tracking-wide"
              >
                {ctaLabel}
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden>
      <path
        d="M3.5 8.5 6.5 11.5 12.5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
