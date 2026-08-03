import { AllWebsiteSamplesSection } from "@/components/sections/AllWebsiteSamplesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { PhoneContactSection } from "@/components/sections/PhoneContactSection";
import { ProcessImagesSection } from "@/components/sections/ProcessImagesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { WebsiteSamplesSection } from "@/components/sections/WebsiteSamplesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProcessSection />
      <WebsiteSamplesSection />
      <AllWebsiteSamplesSection />
      <WhyChooseSection />
      <FaqSection />
      <ProcessImagesSection />
      <TestimonialSection />
      <NewsSection />
      <PhoneContactSection />
    </>
  );
}
