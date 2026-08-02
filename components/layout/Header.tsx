"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { CTAButton } from "@/components/ui/CTAButton";
import { logoPath, navItems, siteContact, type NavItem } from "@/lib/site-config";

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

/**
 * Header — nền trắng, hover mở sub-menu (desktop), click trên mobile (ref luvini.vn).
 */
export function Header() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenKey(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function toggleMobileItem(item: NavItem) {
    if (!item.children?.length) return;
    setOpenKey((prev) => (prev === item.label ? null : item.label));
  }

  return (
    <header className="sticky top-0 z-40 border-b border-card-border bg-bg-primary">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <Link href="/" className="relative flex h-10 w-[140px] shrink-0 items-center sm:h-12 sm:w-[168px]">
          <Image
            src={logoPath}
            alt="Nhà Web"
            fill
            priority
            className="object-contain object-left"
            sizes="168px"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu chính">
          {navItems.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const isOpen = openKey === item.label;

            if (!hasChildren) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="inline-flex rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:text-cta"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenKey(item.label)}
                onMouseLeave={() => setOpenKey(null)}
                onFocusCapture={() => setOpenKey(item.label)}
                onBlurCapture={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                    setOpenKey(null);
                  }
                }}
              >
                <Link
                  href={item.href}
                  aria-expanded={isOpen}
                  aria-haspopup="menu"
                  aria-controls={`${menuId}-${item.label}`}
                  className={cx(
                    "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors",
                    "hover:text-cta",
                    isOpen && "text-cta",
                  )}
                >
                  {item.label}
                  <ChevronDown className={cx("transition-transform", isOpen && "rotate-180")} />
                </Link>

                <div
                  id={`${menuId}-${item.label}`}
                  role="menu"
                  className={cx(
                    "absolute left-0 top-full z-50 min-w-[220px] pt-2 transition-opacity duration-150",
                    isOpen
                      ? "pointer-events-auto opacity-100"
                      : "pointer-events-none opacity-0",
                  )}
                >
                  <div className="overflow-hidden rounded-xl border border-card-border bg-card py-2 shadow-lg">
                    {item.children!.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        role="menuitem"
                        onClick={() => setOpenKey(null)}
                        className="block px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-bg-secondary hover:text-cta"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <CTAButton
            href={`tel:${siteContact.phoneTel}`}
            className="hidden px-4 py-2.5 text-xs sm:inline-flex"
          >
            <PhoneIcon />
            {siteContact.phoneDisplay}
          </CTAButton>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-bg-secondary hover:text-cta lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={`${menuId}-mobile`}
            aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id={`${menuId}-mobile`}
          className="border-t border-card-border bg-bg-primary lg:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6" aria-label="Menu mobile">
            {navItems.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const isOpen = openKey === item.label;

              return (
                <div key={item.label} className="border-b border-card-border/70 last:border-b-0">
                  {hasChildren ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => toggleMobileItem(item)}
                        className={cx(
                          "flex w-full items-center justify-between py-3 text-left text-sm font-semibold uppercase tracking-wide text-foreground",
                          "hover:text-cta",
                          isOpen && "text-cta",
                        )}
                      >
                        {item.label}
                        <ChevronDown className={cx("transition-transform", isOpen && "rotate-180")} />
                      </button>
                      {isOpen ? (
                        <div className="mb-2 space-y-1 pb-2 pl-3">
                          {item.children!.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => {
                                setMobileOpen(false);
                                setOpenKey(null);
                              }}
                              className="block rounded-md px-2 py-2 text-sm text-muted transition-colors hover:bg-bg-secondary hover:text-cta"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:text-cta"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}

            <CTAButton
              href={`tel:${siteContact.phoneTel}`}
              className="mt-4 w-full"
              onClick={() => setMobileOpen(false)}
            >
              <PhoneIcon />
              {siteContact.phoneDisplay}
            </CTAButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
      className={cx("h-4 w-4", className)}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3.5A1 1 0 0 1 4 2.5h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden className="h-6 w-6">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden className="h-6 w-6">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}
