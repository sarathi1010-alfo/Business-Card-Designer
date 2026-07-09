import Link from 'next/link';

export default function AboutPage() {
  const lastModified = "2024-05-20"; // Updated to match Tier 1 publication

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">About alfo.online</h1>

      <div className="prose dark:prose-invert max-w-none text-lg">
        <p className="mb-6">
          Welcome to the <strong>alfo.online</strong> ecosystem. We build fast, free, and intuitive internet infrastructure to help you work better.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
        <p className="mb-6">
          We believe high-quality tools shouldn&apos;t be locked behind expensive subscriptions or bloated interfaces. That&apos;s why we&apos;re building a network of interconnected utilities designed to solve specific problems efficiently.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">The Tools</h2>
        <p className="mb-6">
          From designing business cards to compressing PDFs, every tool in our ecosystem is built with a focus on speed, privacy, and user experience. Check out our growing suite of utilities below.
        </p>

        <div className="mt-12 p-6 bg-primary/5 border rounded-lg">
          <h3 className="text-xl font-bold mb-3">Learn More</h3>
          <p className="text-base mb-4">
            Curious about how to make the most of your digital presence? Check out our latest guide on <Link href="/blog/digital-business-card-guide" className="text-primary hover:underline font-medium">how to create a digital business card that converts</Link>.
          </p>
          <p className="text-xs text-muted-foreground">Last Updated: {lastModified}</p>
        </div>
      </div>
    </div>
  );
}
