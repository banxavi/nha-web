"use client";

import Image from "next/image";
import { useContactForm } from "@/components/contact/ContactFormProvider";
import { CTAButton } from "@/components/ui/CTAButton";
import {
  whyChooseContent,
  type WhyChooseItem,
} from "@/lib/site-config";

export type WhyChooseSectionContent = {
  heading: string;
  subheading: string;
  ctaLabel: string;
  backgroundImage: { src: string; alt: string };
  items: WhyChooseItem[];
};

type WhyChooseSectionProps = {
  /** Override content — mặc định `whyChooseContent` trang chủ. */
  content?: WhyChooseSectionContent;
  sectionId?: string;
};

/**
 * Section 7 — Why choose Nhà Web.
 * Format tạm: dark overlay + glass cards 2×4 (ref ảnh mẫu).
 * TODO: swap ảnh nền collage khi khách cung cấp bản final.
 */
export function WhyChooseSection({
  content = whyChooseContent,
  sectionId = "tai-sao-chon",
}: WhyChooseSectionProps) {
  const { heading, subheading, ctaLabel, backgroundImage, items } = content;
  const { openContactForm } = useContactForm();

  return (
    <section
      id={sectionId}
      aria-labelledby="why-choose-heading"
      className="relative scroll-mt-24 overflow-hidden"
    >
      {/* Background collage placeholder */}
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 grid grid-cols-3 gap-3 scale-110 opacity-40 sm:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <div
              key={n}
              className="relative min-h-[9rem] overflow-hidden sm:min-h-[12rem]"
              style={{
                transform: `rotate(${n % 2 === 0 ? -6 : 5}deg)`,
              }}
            >
              <Image
                src={`/samples/sample-${n}.svg`}
                alt=""
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-[#0B1F3A]/88" />
        {backgroundImage.src ? (
          <span className="sr-only">{backgroundImage.alt}</span>
        ) : null}
      </div>

      <div className="relative z-10 mx-auto max-w-site px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="why-choose-heading"
            className="text-xl font-bold leading-snug tracking-normal text-white sm:text-2xl lg:text-[1.75rem]"
          >
            {heading}
          </h2>
          <p className="mt-3 text-base font-semibold leading-snug tracking-normal text-white/95 sm:text-lg lg:text-xl">
            {subheading}
          </p>
        </div>

        <ul
          className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5"
          role="list"
        >
          {items.map((item) => (
            <li key={item.id}>
              <ReasonCard item={item} />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center sm:mt-12">
          <CTAButton
            type="button"
            className="px-8 py-3.5 text-base"
            onClick={() => openContactForm({ variant: "consult" })}
          >
            {ctaLabel}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ item }: { item: WhyChooseItem }) {
  return (
    <article className="flex h-full min-h-[9.5rem] flex-col justify-between rounded-xl border border-white/15 bg-white/10 px-5 py-5 backdrop-blur-md transition-colors hover:bg-white/15 sm:min-h-[10.5rem] sm:px-6 sm:py-6">
      <div className="text-cta">
        {item.highlight ? (
          <p className="text-4xl font-bold leading-none tracking-tight sm:text-5xl">
            {item.highlight}
          </p>
        ) : item.icon ? (
          <ReasonIcon name={item.icon} />
        ) : null}
      </div>
      <p className="mt-4 text-sm font-semibold leading-snug text-white sm:text-base">
        {item.label}
      </p>
    </article>
  );
}

function ReasonIcon({ name }: { name: NonNullable<WhyChooseItem["icon"]> }) {
  const common = {
    viewBox: "0 0 48 48",
    fill: "none",
    className: "h-10 w-10 sm:h-11 sm:w-11",
    "aria-hidden": true as const,
  };

  switch (name) {
    case "code":
      return (
        <svg {...common}>
          <path
            d="M18 14 8 24l10 10M30 14l10 10-10 10M26 12 22 36"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "templates":
      return (
        <svg {...common}>
          <rect
            x="8"
            y="10"
            width="32"
            height="28"
            rx="3"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <path
            d="M8 18h32M20 18v20"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "tech":
      return (
        <svg {...common}>
          <rect
            x="14"
            y="14"
            width="20"
            height="20"
            rx="3"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <path
            d="M24 8v6M24 34v6M8 24h6M34 24h6M12 12l4 4M32 32l4 4M36 12l-4 4M16 32l-4 4"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "admin":
      return (
        <svg {...common}>
          <rect
            x="8"
            y="10"
            width="32"
            height="28"
            rx="3"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <path
            d="M14 20h8M14 26h12M14 32h6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="32" cy="28" r="5" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      );
    case "scale":
      return (
        <svg {...common}>
          <path
            d="M12 36V20l8-8h16v24H12Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M20 36V24h12"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M28 10v6M34 14l-6 4M34 14l-4-4"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "support":
      return (
        <svg {...common}>
          <path
            d="M14 22a10 10 0 0 1 20 0v6a4 4 0 0 1-4 4h-2"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M14 22v5a3 3 0 0 0 3 3h1M34 22v5a3 3 0 0 1-3 3h-1"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M20 38h8"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
