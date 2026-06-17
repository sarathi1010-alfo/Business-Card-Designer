import { HeroSection, ShowcaseGallery, BenefitsSection, FeaturesSection } from "@/components/home";
import { RelatedTools } from "@/components/widgets/RelatedTools";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <ShowcaseGallery />
      <RelatedTools />
    </div>
  );
}
