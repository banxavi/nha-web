import type { Metadata } from "next";
import {
  CustomWebsiteCostSection,
  CustomWebsiteDetailsSection,
  CustomWebsiteIntroSection,
} from "@/components/sections/CustomWebsiteArticleSections";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessImagesSection } from "@/components/sections/ProcessImagesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WebsiteSamplesSection } from "@/components/sections/WebsiteSamplesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { Reveal } from "@/components/ui/Reveal";
import {
  customWebsiteFaqContent,
  customWebsiteHeroContent,
  customWebsiteProcessContent,
  customWebsiteWhyChooseContent,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Thiết kế website theo yêu cầu | Nhà Web",
  description:
    "Thiết kế website theo yêu cầu, độc quyền giao diện — tùy chỉnh tính năng, tối ưu trải nghiệm, dễ mở rộng cùng Nhà Web.",
};

/**
 * Trang dịch vụ: Thiết kế website theo yêu cầu / trọn gói.
 * Bố cục ref web4s.vn/thiet-ke-website-theo-yeu-cau + pattern section trang chủ Nhà Web.
 */
export default function ThietKeWebsiteTheoYeuCauPage() {
  return (
    <>
      <HeroSection
        content={customWebsiteHeroContent}
        sectionId="thiet-ke-theo-yeu-cau"
      />
      <Reveal>
        <WebsiteSamplesSection />
      </Reveal>
      <Reveal>
        <CustomWebsiteIntroSection />
      </Reveal>
      <Reveal>
        <CustomWebsiteCostSection />
      </Reveal>
      <Reveal>
        <WhyChooseSection
          content={customWebsiteWhyChooseContent}
          sectionId="tai-sao-chon-theo-yeu-cau"
        />
      </Reveal>
      <Reveal>
        <CustomWebsiteDetailsSection />
      </Reveal>
      <Reveal>
        <ProcessSection
          content={customWebsiteProcessContent}
          sectionId="quy-trinh-theo-yeu-cau"
        />
      </Reveal>
      <Reveal>
        <ProcessImagesSection />
      </Reveal>
      <Reveal>
        <FaqSection
          content={customWebsiteFaqContent}
          sectionId="faq-theo-yeu-cau"
        />
      </Reveal>
    </>
  );
}
