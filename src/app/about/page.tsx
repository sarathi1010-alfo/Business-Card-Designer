import Link from "next/link";

export default function AboutPage() {
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

        <h2 className="text-2xl font-semibold mt-10 mb-4">The Tools & Insights</h2>
        <p className="mb-6">
          From designing business cards to compressing PDFs, every tool in our ecosystem is built with a focus on speed, privacy, and user experience. Check out our growing suite of utilities below, and be sure to read our insights on <Link href="/blog/what-is-a-digital-business-card" className="text-primary hover:underline">What is a Digital Business Card?</Link>, discover the differences in <Link href="/blog/digital-vs-physical-business-cards" className="text-primary hover:underline">Digital vs Physical Business Cards</Link>, and learn <Link href="/blog/how-to-design-digital-business-card" className="text-primary hover:underline">How to Design a Digital Business Card That Converts</Link>.
        </p>
      </div>
    </div>
  );
}