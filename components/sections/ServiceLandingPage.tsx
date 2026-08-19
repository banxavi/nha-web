import {
  CustomWebsiteCostSection,
  CustomWebsiteDetailsSection,
  CustomWebsiteIntroSection,
  type ServiceCostContent,
  type ServiceDetailsContent,
  type ServiceIntroContent,
} from "@/components/sections/CustomWebsiteArticleSections";
import { FaqSection, type FaqSectionContent } from "@/components/sections/FaqSection";
import { HeroSection, type HeroContent } from "@/components/sections/HeroSection";
import { ProcessImagesSection } from "@/components/sections/ProcessImagesSection";
import {
  ProcessSection,
  type ProcessSectionContent,
} from "@/components/sections/ProcessSection";
import { WebsiteSamplesSection } from "@/components/sections/WebsiteSamplesSection";
import {
  WhyChooseSection,
  type WhyChooseSectionContent,
} from "@/components/sections/WhyChooseSection";
import { Reveal } from "@/components/ui/Reveal";

export type ServiceLandingContent = {
  hero: HeroContent;
  heroSectionId: string;
  showSamples?: boolean;
  intro: ServiceIntroContent;
  cost: ServiceCostContent;
  why: WhyChooseSectionContent;
  whySectionId: string;
  details: ServiceDetailsContent;
  process: ProcessSectionContent;
  processSectionId: string;
  showProcessImages?: boolean;
  faq: FaqSectionContent;
  faqSectionId: string;
};

export function ServiceLandingPage({ content }: { content: ServiceLandingContent }) {
  return (
    <>
      <HeroSection content={content.hero} sectionId={content.heroSectionId} />
      {content.showSamples ? (
        <Reveal>
          <WebsiteSamplesSection />
        </Reveal>
      ) : null}
      <Reveal>
        <CustomWebsiteIntroSection content={content.intro} />
      </Reveal>
      <Reveal>
        <CustomWebsiteCostSection content={content.cost} />
      </Reveal>
      <Reveal>
        <WhyChooseSection content={content.why} sectionId={content.whySectionId} />
      </Reveal>
      <Reveal>
        <CustomWebsiteDetailsSection content={content.details} />
      </Reveal>
      <Reveal>
        <ProcessSection
          content={content.process}
          sectionId={content.processSectionId}
        />
      </Reveal>
      {content.showProcessImages !== false ? (
        <Reveal>
          <ProcessImagesSection />
        </Reveal>
      ) : null}
      <Reveal>
        <FaqSection content={content.faq} sectionId={content.faqSectionId} />
      </Reveal>
    </>
  );
}
