import { HeroSection } from "@/components/sections/HeroSection";
import { WebsiteSamplesSection } from "@/components/sections/WebsiteSamplesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* Anchor tạm cho nút scroll hero — Section 2 sẽ thay khối này */}
      <div id="quy-trinh" className="h-0 scroll-mt-24" aria-hidden />
      <WebsiteSamplesSection />
    </>
  );
}
