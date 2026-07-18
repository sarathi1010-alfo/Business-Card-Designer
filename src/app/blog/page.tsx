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
                The Ultimate Guide to Digital Business Cards in 2026
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              Your complete hub for understanding, creating, and networking with digital business cards.
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
              <Link href="/blog/design-digital-business-card-converts" className="hover:underline text-primary">
                How to Design a Digital Business Card That Converts
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              Learn the core design principles to make your digital business card stand out and capture more leads.
            </p>
            <Link href="/blog/design-digital-business-card-converts" className="text-primary font-medium hover:underline">Read More →</Link>
          </div>
        </div>

        <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/blog/how-digital-business-cards-work" className="hover:underline text-primary">
                How Do Digital Business Cards Work?
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              Understand the underlying technology, QR codes, and NFC features of modern digital business cards.
            </p>
            <Link href="/blog/how-digital-business-cards-work" className="text-primary font-medium hover:underline">Read More →</Link>
          </div>
        </div>

        <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/blog/why-you-need-digital-business-card" className="hover:underline text-primary">
                Why Do I Need a Digital Business Card in 2026?
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              Discover the compelling reasons why every professional needs a digital business card today.
            </p>
            <Link href="/blog/why-you-need-digital-business-card" className="text-primary font-medium hover:underline">Read More →</Link>
          </div>
        </div>

        <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/blog/what-is-qr-code-business-card" className="hover:underline text-primary">
                What is a QR Code Business Card?
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              Everything you need to know about QR code business cards and how to use them effectively.
            </p>
            <Link href="/blog/what-is-qr-code-business-card" className="text-primary font-medium hover:underline">Read More →</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
