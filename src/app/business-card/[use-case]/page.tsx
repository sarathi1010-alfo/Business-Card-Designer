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
  "networking-event-digital-card",
  "conference-digital-business-card",
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

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How can a ${title} help my business?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `A ${title} helps by providing a professional, interactive, and trackable way to share your contact information and capture leads during networking events.`
        }
      },
      {
        "@type": "Question",
        "name": `Is the ${title} easy to share?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, you can share your ${title} instantly via a dynamic QR code, link, or social media integration.`
        }
      }
    ]
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
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
