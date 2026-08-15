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

        <h2 className="text-2xl font-semibold mt-10 mb-4">The Tools</h2>
        <p className="mb-6">
          From designing business cards to compressing PDFs, every tool in our ecosystem is built with a focus on speed, privacy, and user experience. Check out our growing suite of utilities below.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Insights and Guides</h2>
        <p className="mb-6">
          To help you get the most out of your digital presence, we regularly publish guides and articles. Check out some of our recent posts:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><a href="/blog/what-is-a-digital-business-card" className="text-primary hover:underline">What is a Digital Business Card? (Complete Guide)</a></li>
          <li><a href="/blog/digital-vs-physical-business-cards" className="text-primary hover:underline">Digital vs Physical Business Cards: Which is Better?</a></li>
          <li><a href="/blog/how-to-design-digital-business-card" className="text-primary hover:underline">How to Design a Digital Business Card That Converts</a></li>
        </ul>
      </div>
    </div>
  );
}