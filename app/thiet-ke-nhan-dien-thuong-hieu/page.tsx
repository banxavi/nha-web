import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/sections/ServiceLandingPage";
import { brandingServiceContent } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Thiết kế nhận diện thương hiệu | Nhà Web",
  description:
    "Thiết kế logo và nhận diện thương hiệu đồng bộ với website — màu sắc, typography, ứng dụng thực tế tại Nhà Web.",
};

export default function ThietKeNhanDienThuongHieuPage() {
  return (
    <ServiceLandingPage
      content={{
        hero: brandingServiceContent.hero,
        heroSectionId: "thiet-ke-nhan-dien",
        intro: brandingServiceContent.intro,
        cost: brandingServiceContent.cost,
        why: brandingServiceContent.why,
        whySectionId: "tai-sao-chon-nhan-dien",
        details: brandingServiceContent.details,
        process: brandingServiceContent.process,
        processSectionId: "quy-trinh-nhan-dien",
        showProcessImages: false,
        faq: brandingServiceContent.faq,
        faqSectionId: "faq-nhan-dien",
      }}
    />
  );
}
