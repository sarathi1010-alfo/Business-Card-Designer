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

        {/* Planned posts for Week 1 Authority Engine */}
        <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/blog/ultimate-guide-2026" className="hover:underline">
                The Ultimate Guide to Digital Business Cards in 2026
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              A deep dive into the evolution of professional networking, technical foundations of digital cards, and the top strategies for the upcoming year.
            </p>
            <Link href="/blog/ultimate-guide-2026" className="text-primary font-medium hover:underline">Read Pillar →</Link>
          </div>
        </div>

        <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/blog/digital-vs-physical-cards" className="hover:underline">
                Digital vs Physical Business Cards — Which is Better?
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              A comprehensive breakdown of the pros and cons of digital vs physical business cards for modern professionals and entrepreneurs.
            </p>
            <Link href="/blog/digital-vs-physical-cards" className="text-primary font-medium hover:underline">Read Comparison →</Link>
          </div>
        </div>

         <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/blog/networking-with-digital-cards" className="hover:underline">
                How to Network with Digital Business Cards
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              Master the art of digital networking, from sharing your card via QR codes to effective follow-up strategies that actually work.
            </p>
            <Link href="/blog/networking-with-digital-cards" className="text-primary font-medium hover:underline">Read Guide →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
