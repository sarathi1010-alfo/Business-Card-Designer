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
        <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/blog/ultimate-guide-digital-business-cards-2026" className="hover:underline text-primary">
                The Ultimate 2026 Guide to Digital Business Cards
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              Learn everything about digital business cards for professional networking, their evolution, technical foundation, and future trends.
            </p>
            <Link href="/blog/ultimate-guide-digital-business-cards-2026" className="text-primary font-medium hover:underline">Read Guide →</Link>
          </div>
        </div>

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
              <Link href="/blog/what-is-digital-business-card" className="hover:underline">
                What is a Digital Business Card? — Complete Guide
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              A complete guide to understanding what a digital business card is, how it works, and real-world examples.
            </p>
            <Link href="/blog/what-is-digital-business-card" className="text-primary font-medium hover:underline">Read More →</Link>
          </div>
        </div>

        <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/blog/digital-vs-physical-business-cards" className="hover:underline">
                Digital vs Physical Business Cards — Which is Better?
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              Discover the pros and cons of digital vs physical business cards, and which one is right for your professional networking needs.
            </p>
            <Link href="/blog/digital-vs-physical-business-cards" className="text-primary font-medium hover:underline">Read More →</Link>
          </div>
        </div>

        <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/blog/how-does-digital-business-card-work" className="hover:underline">
                How Does a Digital Business Card Work?
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              A step-by-step breakdown of how digital business cards work, from creation to sharing and analytics tracking.
            </p>
            <Link href="/blog/how-does-digital-business-card-work" className="text-primary font-medium hover:underline">Read More →</Link>
          </div>
        </div>

        <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/blog/why-do-i-need-digital-business-card" className="hover:underline">
                Why Do I Need a Digital Business Card?
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              Explore the top reasons why a digital business card is essential for modern networking, lead generation, and personal branding.
            </p>
            <Link href="/blog/why-do-i-need-digital-business-card" className="text-primary font-medium hover:underline">Read More →</Link>
          </div>
        </div>

        <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/blog/what-is-qr-code-business-card" className="hover:underline">
                What is a QR Code Business Card?
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              Learn what a QR code business card is, how it facilitates instant information sharing, and how to create one.
            </p>
            <Link href="/blog/what-is-qr-code-business-card" className="text-primary font-medium hover:underline">Read More →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
