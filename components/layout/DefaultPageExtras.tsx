"use client";

import { usePathname } from "next/navigation";
import { PhoneContactSection } from "@/components/sections/PhoneContactSection";
import { PremiumServicesSection } from "@/components/sections/PremiumServicesSection";
import { Reveal } from "@/components/ui/Reveal";

const HIDE_EXTRAS = new Set(["/giai-phap"]);

/**
 * CTA dịch vụ + form đăng ký mặc định sau nội dung trang.
 * Landing quảng cáo `/giai-phap` đã có form riêng nên bỏ hai khối này.
 */
export function DefaultPageExtras() {
  const pathname = usePathname();
  if (HIDE_EXTRAS.has(pathname)) return null;

  return (
    <>
      <Reveal>
        <PremiumServicesSection />
      </Reveal>
      <Reveal>
        <PhoneContactSection />
      </Reveal>
    </>
  );
}
