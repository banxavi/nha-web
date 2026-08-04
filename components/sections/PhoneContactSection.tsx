"use client";

import Image from "next/image";
import { useContactForm } from "@/components/contact/ContactFormProvider";
import { CTAButton } from "@/components/ui/CTAButton";
import { contactFormContent } from "@/lib/site-config";

/**
 * Section 8 — CTA mở Form "Đăng ký ngay" (ContactFormModal variant=register).
 * Form đầy đủ 4 field nằm trong modal dùng chung với Form 7.
 */
export function PhoneContactSection() {
  const { openContactForm } = useContactForm();
  const { id, headline, subheadline, ctaLabel, bannerColor, illustration } =
    contactFormContent.section;

  return (
    <section
      id={id}
      aria-labelledby="phone-contact-heading"
      className="scroll-mt-24 bg-bg-secondary"
    >
      <div className="mx-auto max-w-site px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
          style={{ backgroundColor: bannerColor }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            aria-hidden
          >
            <svg
              className="absolute -left-8 top-0 h-full w-[55%]"
              viewBox="0 0 400 200"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 40C60 20 100 80 160 60C220 40 260 100 320 80C360 68 380 50 400 40"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1.5"
              />
              <path
                d="M0 90C70 70 110 130 180 110C250 90 290 150 360 130"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="1.25"
              />
              <path
                d="M0 150C80 130 120 180 200 160C280 140 320 190 400 170"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1.25"
              />
            </svg>
          </div>

          <div className="relative grid items-center gap-6 px-5 py-8 sm:px-8 sm:py-10  lg:gap-4 lg:px-12 lg:py-11">
            <div className="relative z-10 mx-auto w-full text-center lg:mx-0 lg:max-w-none lg:pr-4">
              <h2
                id="phone-contact-heading"
                className="text-base font-bold leading-snug text-white sm:text-lg lg:text-xl"
              >
                {headline}
              </h2>
              <p className="mt-1.5 text-sm font-bold text-white sm:text-base lg:text-lg">
                {subheadline}
              </p>

              <div className="mt-6 sm:mt-7">
                <CTAButton
                  type="button"
                  className="px-8 py-3.5 text-base font-bold"
                  onClick={() => openContactForm({ variant: "register" })}
                >
                  {ctaLabel}
                </CTAButton>
              </div>
            </div>

            {/* <div className="relative mx-auto hidden h-36 w-40 sm:h-40 sm:w-44 lg:mx-0 lg:block lg:h-44 lg:w-full">
              <Image
                src={illustration.src}
                alt={illustration.alt}
                fill
                className="object-contain object-bottom"
                sizes="180px"
                priority={false}
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
