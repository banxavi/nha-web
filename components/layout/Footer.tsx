import Image from "next/image";
import Link from "next/link";
import {
  footerContent,
  footerLogoPath,
  serviceNavLinks,
  siteContact,
  socialLinks,
  type SocialLink,
} from "@/lib/site-config";

/**
 * Footer #9–#14 — nền #1E293B (sáng hơn navy gốc để logo "Web" đọc được),
 * logo + MXH, 4 cột, copyright căn giữa.
 */
export function Footer() {
  return (
    <footer className="mt-auto bg-footer text-white">
      <div className="mx-auto grid max-w-site gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-16">
        {/* #9 Logo + social — logo trắng, ~2× size gốc (h-14/h-16, max-w 220) */}
        <div className="lg:col-span-3">
          <Link
            href="/"
            className="relative mb-5 block h-28 w-[min(100%,440px)] rounded-md sm:h-32"
          >
            <Image
              src={footerLogoPath}
              alt="Nhà Web"
              fill
              className="object-contain object-left"
              sizes="440px"
            />
          </Link>
          <ul className="flex items-center gap-3" aria-label="Mạng xã hội">
            {socialLinks.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-cta hover:text-white"
                  aria-label={social.label}
                >
                  <SocialIcon social={social} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* #10 Dịch vụ — tái dùng serviceNavLinks từ Header */}
        <FooterLinkColumn
          className="lg:col-span-2"
          title={footerContent.servicesTitle}
          links={serviceNavLinks}
        />

        {/* #11 Thông tin */}
        <FooterLinkColumn
          className="lg:col-span-2"
          title={footerContent.info.title}
          links={footerContent.info.links}
        />

        {/* #12 Trợ giúp */}
        <FooterLinkColumn
          className="lg:col-span-2"
          title={footerContent.help.title}
          links={footerContent.help.links}
        />

        {/* #13 Liên hệ */}
        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
            {footerContent.contactTitle}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              <a
                href={`tel:${siteContact.phoneTel}`}
                className="transition-colors hover:text-cta"
              >
                {siteContact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteContact.email}`}
                className="transition-colors hover:text-cta"
              >
                {siteContact.email}
              </a>
            </li>
            <li>
              <a
                href={siteContact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed transition-colors hover:text-cta"
              >
                {siteContact.address}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* #14 Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-site px-4 py-5 text-center text-xs text-white/50 sm:px-6 lg:px-8">
          <p>{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkColumn({
  title,
  links,
  className,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="text-sm font-semibold tracking-wide text-white uppercase">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-cta"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ social }: { social: SocialLink }) {
  const className = "h-5 w-5";
  switch (social.id) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
          <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.4V9.84c0-2.37 1.41-3.68 3.56-3.68 1.03 0 2.11.18 2.11.18v2.33h-1.19c-1.17 0-1.54.73-1.54 1.48v1.78h2.62l-.42 2.91h-2.2V22c4.78-.75 8.44-4.91 8.44-9.93Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.75 15.57V8.43L15.82 12l-6.07 3.57Z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .56.04.82.1v-3.5a6.37 6.37 0 0 0-.82-.05A6.34 6.34 0 0 0 3.15 15.3 6.34 6.34 0 0 0 9.5 21.64a6.34 6.34 0 0 0 6.34-6.34V8.77a8.2 8.2 0 0 0 4.79 1.53V6.85a4.85 4.85 0 0 1-1.04-.16Z" />
        </svg>
      );
  }
}
