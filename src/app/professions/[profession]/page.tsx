import { Metadata } from 'next';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ profession: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawProfession = resolvedParams.profession.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const profession = rawProfession.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${profession} Digital Business Card Template & Guide`,
    description: `Create a professional digital business card for your ${profession.toLowerCase()} career. Impress clients and capture leads instantly.`,
    alternates: {
      canonical: `/professions/${resolvedParams.profession}`,
    }
  };
}

export default async function ProfessionPage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawProfession = resolvedParams.profession.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const professionTitle = rawProfession.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Why does a ${professionTitle} need a digital business card?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `A ${professionTitle} needs a digital business card to instantly share their portfolio, contact information, and professional credentials with clients and peers without the limitations of traditional paper cards.`
        }
      },
      {
        "@type": "Question",
        "name": `What should a ${professionTitle} include on their digital business card?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Key elements include a professional headshot, clear contact details, direct links to recent work or projects, social profiles, and a lead capture form to follow up with potential clients.`
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-primary">
          Digital Business Card for {professionTitle}s
        </h1>
        <p className="text-xl text-muted-foreground">
          Stand out in your industry with a premium, interactive digital business card designed specifically for {professionTitle.toLowerCase()} professionals.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-3xl font-semibold mt-12 mb-6">Why upgrade your professional networking?</h2>
        <p>
          As a {professionTitle}, your network is your net worth. Whether you are meeting new clients, attending industry events, or pitching projects, a digital business card ensures you leave a memorable and professional first impression.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">Key Benefits for {professionTitle}s</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Instant Sharing:</strong> Share via QR code, text, or email in seconds.</li>
          <li><strong>Analytics & Tracking:</strong> See exactly when someone views your profile and what they click on.</li>
          <li><strong>Eco-friendly:</strong> Never print (or run out of) paper cards again.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6">Frequently Asked Questions</h2>

        <h3 className="text-2xl font-semibold mt-6 mb-2">Why does a {professionTitle} need a digital business card?</h3>
        <p>A {professionTitle} needs a digital business card to instantly share their portfolio, contact information, and professional credentials with clients and peers without the limitations of traditional paper cards.</p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">What should a {professionTitle} include on their digital business card?</h3>
        <p>Key elements include a professional headshot, clear contact details, direct links to recent work or projects, social profiles, and a lead capture form to follow up with potential clients.</p>

        <div className="mt-12 text-center p-8 bg-muted rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Ready to create your card?</h2>
          <p className="mb-6">Join thousands of {professionTitle.toLowerCase()}s using BrandCard.</p>
          <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 transition-colors">
            Get Started Free
          </Link>
        </div>
      </div>
    </div>
  );
}
