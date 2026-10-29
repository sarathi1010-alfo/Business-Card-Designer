import type { Metadata } from "next";
import { HeroSection, ShowcaseGallery, BenefitsSection, FeaturesSection } from "@/components/home";
import { RelatedTools } from "@/components/widgets/RelatedTools";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata({
  path: "/",
});

const faqs = [
  {
    question: "What is CardStudio Business Card Designer?",
    answer: "CardStudio is a free online business card designer that allows individuals and businesses to design, customize, and export professional digital and printable business cards without design experience."
  },
  {
    question: "Can I download print-ready vector PDF files?",
    answer: "Yes. CardStudio provides high-resolution 300 DPI vector PDF exports with standard print bleed dimensions suitable for commercial printing services."
  },
  {
    question: "Do I need to create an account to design a business card?",
    answer: "No registration is required. You can choose a template, customize text and graphics, and export your business card directly from your browser."
  },
  {
    question: "Can I add interactive QR codes to my card?",
    answer: "Yes. Our built-in dynamic QR code generator lets you embed links to your website, LinkedIn profile, vCard, portfolio, or contact details."
  },
  {
    question: "Is CardStudio free to use?",
    answer: "Yes, CardStudio is completely free for creating, downloading, and sharing digital and printable business cards."
  }
];

const steps = [
  {
    number: "1",
    title: "Choose a Template",
    description: "Select from dozens of minimalist, corporate, modern, or creative business card layouts tailored for your industry."
  },
  {
    number: "2",
    title: "Customize Details",
    description: "Add your contact info, job title, company logo, color palette, custom fonts, and scan-ready QR code."
  },
  {
    number: "3",
    title: "Preview in Real-Time",
    description: "Inspect interactive 3D mockups of front and back designs to ensure exact dimensions and typographic balance."
  },
  {
    number: "4",
    title: "Export & Share",
    description: "Download print-ready vector PDF files with bleed marks or share your instant responsive digital brand card link."
  }
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": "https://brandcard.alfo.online/#webapp",
    "name": "CardStudio Business Card Designer",
    "url": "https://brandcard.alfo.online/",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free business card designer to create custom printable and digital business cards in minutes. Choose professional templates and export print-ready PDF files."
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://brandcard.alfo.online/#howto",
    "name": "How to Design a Professional Business Card Online",
    "description": "Step-by-step guide to creating print-ready and digital business cards using CardStudio.",
    "step": steps.map((s, idx) => ({
      "@type": "HowToStep",
      "name": s.title,
      "text": s.description,
      "position": idx + 1
    }))
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://brandcard.alfo.online/#faq",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://brandcard.alfo.online/#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://brandcard.alfo.online/"
      }
    ]
  }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />

      {/* Value Proposition */}
      <section className="py-12 bg-muted/30 border-y">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4 text-foreground">
            The Modern Online Business Card Designer
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            CardStudio is a free, modern business card designer that allows entrepreneurs, freelancers, and professionals to create stunning digital and print-ready business cards in minutes. Choose from designer-crafted templates, customize fonts and QR codes, and export high-resolution PDFs without registration.
          </p>
        </div>
      </section>

      <FeaturesSection />

      {/* How It Works (4 Steps) */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How It Works: Create Your Card in 4 Steps
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Design and distribute your personalized business cards effortlessly with our intuitive workflow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative p-6 rounded-2xl border bg-card text-card-foreground shadow-sm flex flex-col items-start">
                <span className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center mb-4 text-lg">
                  {step.number}
                </span>
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection />
      <ShowcaseGallery />

      {/* FAQ Section */}
      <section className="py-20 bg-muted/20 border-t">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about CardStudio business card maker, print exports, and digital features.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedTools />
    </div>
  );
}
