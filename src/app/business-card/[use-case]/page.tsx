import { notFound } from "next/navigation";
import { HeroSection } from "@/components/home/HeroSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { ShowcaseGallery } from "@/components/home/ShowcaseGallery";
import { RelatedTools } from "@/components/widgets/RelatedTools";
import { Metadata } from 'next';

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

export async function generateMetadata({ params }: UseCasePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const useCase = resolvedParams["use-case"];

  const title = useCase
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} - Digital Business Card`,
    description: `Create your perfect ${title.toLowerCase()} in seconds. Optimize your networking and capture leads.`,
  };
}

export default async function UseCasePage({ params }: UseCasePageProps) {
  const resolvedParams = await params;
  const useCase = resolvedParams["use-case"];

  if (!VALID_USE_CASES.includes(useCase)) {
    notFound();
  }

  const title = useCase
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How to use a digital business card for a ${title}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Simply choose a template, add your details, and show your QR code during the ${title.toLowerCase()}. It's the fastest way to exchange contact info.`
        }
      },
      {
        "@type": "Question",
        "name": `Why is BrandCard best for a ${title}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `BrandCard offers premium designs and real-time analytics, ensuring you stand out and can track every interaction at your ${title.toLowerCase()}.`
        }
      }
    ]
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
