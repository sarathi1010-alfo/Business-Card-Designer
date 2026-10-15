import { notFound } from "next/navigation";
import { Metadata } from "next";
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
];

interface UseCasePageProps {
  params: Promise<{ "use-case": string }>;
}

export async function generateMetadata({ params }: UseCasePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const useCase = resolvedParams['use-case'].replace(/-/g, ' ');
  const titleCase = useCase.replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `Digital Business Card for ${titleCase} | BrandCard`,
    description: `Create a professional digital business card for ${titleCase}. Free, fast, and high-converting templates for modern networking.`,
    alternates: {
      canonical: `/business-card/${resolvedParams['use-case']}`,
    }
  };
}

export default async function UseCasePage({ params }: UseCasePageProps) {
  const resolvedParams = await params;
  const useCaseSlug = resolvedParams["use-case"];

  if (!VALID_USE_CASES.includes(useCaseSlug)) {
    notFound();
  }

  // Formatting title based on the slug
  const title = useCaseSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `The Complete 2026 Guide to Digital Business Cards for ${title}`,
    "description": `Learn why ${title} professionals are switching to digital business cards and how to design the perfect card.`,
    "author": { "@type": "Organization", "name": "BrandCard" }
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-muted/20 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="text-xl text-muted-foreground mt-4">Create your perfect digital presence in seconds.</p>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* AI Overview Answer Block */}
        <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-12">
          <p className="font-medium text-lg m-0">
            <strong>Quick Answer:</strong> For {title} professionals, a digital business card is the most efficient way to share contact details, showcase portfolios, and capture leads instantly via QR codes. It ensures your professional identity is always up-to-date and easily accessible.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
          <h2 className="text-3xl font-bold">Why {title} Professionals Need Digital Cards</h2>
          <p>
            In the fast-paced world of {title.toLowerCase()}, first impressions are everything. Static paper cards are easily lost or outdated. A digital business card from BrandCard allows you to update your information in real-time, integrate scan analytics, and provide a frictionless way for clients and partners to save your details.
          </p>

          <h2 className="text-3xl font-bold">Key Features to Prioritize</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Dynamic QR Code:</strong> Always points to your latest information.</li>
            <li><strong>Lead Capture Form:</strong> Collect details from your new connections immediately.</li>
            <li><strong>One-Click Save:</strong> Let others save your contact directly to their phone.</li>
            <li><strong>Analytics:</strong> See who is scanning your card and where.</li>
          </ul>

          <h2 className="text-3xl font-bold">Design Tips for {title}</h2>
          <p>
            When designing your card as a {title.toLowerCase()} professional, focus on clarity and branding. Use high-resolution logos, professional headshots, and color palettes that align with your industry standards. Ensure your primary Call to Action (CTA) is prominent and easy to find.
          </p>
        </div>

        <div className="bg-muted p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Quick Reference Guide</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Category</th>
                  <th className="py-2">Recommendation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-medium">Key Feature</td>
                  <td className="py-2">Lead Capture & QR Analytics</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Design Tip</td>
                  <td className="py-2">Minimalist with High-Contrast CTAs</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Networking Strategy</td>
                  <td className="py-2">Share via QR code at the start of meetings</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <HeroSection />
      <BenefitsSection />
      <ShowcaseGallery />
      <RelatedTools />
    </div>
  );
}
