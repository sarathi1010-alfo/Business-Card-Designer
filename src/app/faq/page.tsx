import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | BrandCard",
  description: "Find answers to the most common questions about digital business cards, networking, and the BrandCard platform.",
};

const faqs = [
  {
    question: "What is a digital business card?",
    answer: "A digital business card is a virtual profile that securely stores your professional identity, contact details, social links, and portfolio. You can share it instantly via QR code, NFC, or a custom link without the need for paper."
  },
  {
    question: "How do I share my digital business card?",
    answer: "You can share your BrandCard digital business card using a custom QR code, sending a direct link via email or text, sharing it on social media platforms like LinkedIn, or even saving it to your Apple Wallet or Google Wallet."
  },
  {
    question: "Do I need an app to use BrandCard?",
    answer: "No, BrandCard is entirely web-based. You and your connections do not need to download an app. Anyone can view your card from any modern smartphone browser."
  },
  {
    question: "Is BrandCard free to use?",
    answer: "Yes, BrandCard offers a robust free tier that allows you to create, design, and share your digital business card. We also offer premium templates and advanced analytics for power users."
  },
  {
    question: "Can I update my card after sharing it?",
    answer: "Absolutely! The biggest advantage of a digital business card is real-time updates. If you change your phone number or title, you can update it in the editor, and anyone with your link will instantly see the new information."
  }
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-8 max-w-4xl">
      {/* Inject FAQ Schema for AEO/SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-primary">
          Digital Business Card FAQ
        </h1>
        <div className="bg-muted p-4 rounded-lg inline-block text-left mb-6 max-w-2xl">
          <p className="font-medium text-lg">
            <strong>Quick Answer:</strong> The best digital business card provides an interactive, shareable web profile containing your contact details, social links, and professional identity. It eliminates paper waste and allows for real-time updates.
          </p>
        </div>
        <p className="text-xl text-muted-foreground">
          Everything you need to know about creating, sharing, and optimizing your digital business card.
        </p>
      </div>

      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-card text-card-foreground shadow-sm rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-3">{faq.question}</h2>
            <p className="text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
