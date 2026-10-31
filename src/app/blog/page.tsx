import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Guides",
  description: "Learn how to build, share, and optimize your digital business card for professional networking and lead generation.",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-primary">
          Digital Business Card Insights & Guides
        </h1>
        <p className="text-xl text-muted-foreground">
          Discover everything you need to know about professional networking, brand identity, and how to get the most out of your digital business cards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Added actual first pillar post */}
        <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/blog/digital-business-card-guide" className="hover:underline text-primary">
                How to Create a Digital Business Card That Converts
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              The ultimate guide to transforming your professional networking with a high-converting digital presence. Learn about design, templates, QR codes, and analytics.
            </p>
            <Link href="/blog/digital-business-card-guide" className="text-primary font-medium hover:underline">Read Guide →</Link>
          </div>
        </div>

        <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/blog/what-is-a-digital-business-card" className="hover:underline text-primary">
                What is a Digital Business Card? — Complete Guide
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              Learn the fundamentals of digital business cards, how they compare to physical cards, and why you need one in 2026.
            </p>
            <Link href="/blog/what-is-a-digital-business-card" className="text-primary font-medium hover:underline">Read More →</Link>
          </div>
        </div>

        <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/blog/digital-vs-physical-business-cards" className="hover:underline text-primary">
                Digital vs Physical Business Cards — Which is Better?
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              A comprehensive breakdown of the pros and cons of digital vs physical business cards for modern professionals.
            </p>
            <Link href="/blog/digital-vs-physical-business-cards" className="text-primary font-medium hover:underline">Read More →</Link>
          </div>
        </div>

         <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/blog/how-to-design-a-digital-business-card-that-converts" className="hover:underline text-primary">
                How to Design a Digital Business Card That Converts
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              Learn the core design principles to make your digital business card stand out and capture more leads.
            </p>
            <Link href="/blog/how-to-design-a-digital-business-card-that-converts" className="text-primary font-medium hover:underline">Read More →</Link>
          </div>
        </div>

        {/* Monday Week 1 Queue */}
        <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/blog/ultimate-guide-digital-business-cards-2026" className="hover:underline text-primary">
                The Ultimate Guide to Digital Business Cards in 2026
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              Everything you need to know about digital business cards in 2026. Learn how they work, top networking strategies, creation steps, and future trends.
            </p>
            <Link href="/blog/ultimate-guide-digital-business-cards-2026" className="text-primary font-medium hover:underline">Read Guide →</Link>
          </div>
        </div>

        <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/blog/how-do-digital-business-cards-work" className="hover:underline text-primary">
                How Do Digital Business Cards Work?
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              Understand the simple technology behind digital business cards. Learn how they use dynamic QR codes, NFC, and cloud hosting to transform networking.
            </p>
            <Link href="/blog/how-do-digital-business-cards-work" className="text-primary font-medium hover:underline">Read More →</Link>
          </div>
        </div>

        <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/blog/why-do-i-need-a-digital-business-card" className="hover:underline text-primary">
                Why Do I Need a Digital Business Card in 2026?
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              Discover the top reasons why professionals are switching to digital business cards, from better lead generation to instant contact saving and cost efficiency.
            </p>
            <Link href="/blog/why-do-i-need-a-digital-business-card" className="text-primary font-medium hover:underline">Read More →</Link>
          </div>
        </div>

        <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/blog/what-is-a-qr-code-business-card" className="hover:underline text-primary">
                What is a QR Code Business Card?
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              Learn what a QR code business card is, how dynamic QR technology works, and why it is replacing traditional paper cards in 2026.
            </p>
            <Link href="/blog/what-is-a-qr-code-business-card" className="text-primary font-medium hover:underline">Read More →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
