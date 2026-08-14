import { notFound } from "next/navigation";
import { HeroSection } from "@/components/home/HeroSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { ShowcaseGallery } from "@/components/home/ShowcaseGallery";
import { RelatedTools } from "@/components/widgets/RelatedTools";

const VALID_USE_CASES = [
  "brand-card-for-developers",
  "digital-business-card",
  "portfolio-card",
  "personal-brand-card",
  "linkedin-brand-card",
  "resume-card",
  "startup-founder-profile",
  "trade-show-digital-card",
  "alumni-event-digital-card",
];

interface UseCasePageProps {
  params: Promise<{ "use-case": string }>;
}

export default async function UseCasePage({ params }: UseCasePageProps) {
  const resolvedParams = await params;
  const useCase = resolvedParams["use-case"];

  if (!VALID_USE_CASES.includes(useCase)) {
    notFound();
  }

  // Formatting title based on the slug
  const title = useCase
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <div className="bg-muted/20 py-12 text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-muted-foreground mt-4">Create your perfect {title.toLowerCase()} in seconds.</p>
      </div>
      <HeroSection />
      <BenefitsSection />
      <ShowcaseGallery />
      <RelatedTools />
    </div>
  );
}
