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

        {/* Placeholder for future blog posts */}
        <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="/blog/industry-specific-networking-guide" className="hover:underline text-primary">
                Industry-Specific Networking Guide 2026
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              Learn how to tailor your digital business card for real estate, design, tech, and other industries to maximize your networking success.
            </p>
            <Link href="/blog/industry-specific-networking-guide" className="text-primary font-medium hover:underline">Read Guide →</Link>
          </div>
        </div>

        <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="#" className="hover:underline">
                Digital vs Physical Business Cards — Which is Better?
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              A comprehensive breakdown of the pros and cons of digital vs physical business cards for modern professionals.
            </p>
            <Link href="#" className="text-primary font-medium hover:underline">Read More →</Link>
          </div>
        </div>

         <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href="#" className="hover:underline">
                How to Design a Digital Business Card That Converts
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              Learn the core design principles to make your digital business card stand out and capture more leads.
            </p>
            <Link href="#" className="text-primary font-medium hover:underline">Read More →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
