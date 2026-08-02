import Image from "next/image";
import Link from "next/link";
import {
  footerContent,
  logoPath,
  siteContact,
} from "@/lib/site-config";

/**
 * Footer — nền navy #0B1F3A.
 * Nội dung lấy từ `footerContent` (TODO: sheet "Trang chủ" #9–#14).
 */
export function Footer() {
  return (
    <footer className="mt-auto bg-footer text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-16">
        <div className="lg:col-span-4">
          <Link href="/" className="relative mb-4 block h-12 w-[168px]">
            <Image
              src={logoPath}
              alt="Nhà Web"
              fill
              className="object-contain object-left brightness-0 invert"
              sizes="168px"
            />
          </Link>
          <h2 className="text-lg font-semibold text-white">
            {footerContent.about.title}
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            {footerContent.about.description}
          </p>
          <a
            href={`tel:${siteContact.phoneTel}`}
            className="mt-5 inline-flex text-sm font-semibold text-cta transition-colors hover:text-white"
          >
            Hotline: {siteContact.phoneDisplay}
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
          {footerContent.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
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
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>{footerContent.copyright}</p>
          <p>{footerContent.bottomNote}</p>
        </div>
      </div>
    </footer>
  );
}
