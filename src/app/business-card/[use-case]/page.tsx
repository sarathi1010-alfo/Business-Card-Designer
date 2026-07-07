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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How to use a digital business card for a ${title}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `For a ${title}, prepare your digital business card ahead of time by adding relevant links and easily share it by having your unique QR code open on your phone screen.`
        }
      },
      {
        "@type": "Question",
        "name": `Is a digital business card better than a physical one for a ${title}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. During a busy ${title}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.`
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
      <div className="container mx-auto px-4 py-8 max-w-4xl">
         <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-semibold mt-12 mb-6">Frequently Asked Questions</h2>
            <h3 className="text-2xl font-semibold mt-6 mb-2">How to use a digital business card for a {title}?</h3>
            <p>For a {title}, prepare your digital business card ahead of time by adding relevant links and easily share it by having your unique QR code open on your phone screen.</p>
            <h3 className="text-2xl font-semibold mt-6 mb-2">Is a digital business card better than a physical one for a {title}?</h3>
            <p>Yes. During a busy {title}, physical cards often get lost. A digital card ensures your contact info goes straight into their phone and lets you track who actually viewed your profile.</p>
         </div>
      </div>
      <BenefitsSection />
      <ShowcaseGallery />
      <RelatedTools />
    </div>
  );
}
