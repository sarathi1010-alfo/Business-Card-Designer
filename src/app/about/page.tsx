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
        <p className="mb-6">
          Our mission is to help professionals build a compelling digital presence, which is why professionals now use dynamic digital cards like BrandCard. For a complete walkthrough on building a high-converting card, read our <a href="/blog/digital-business-card-converts-guide" className="text-primary hover:underline font-medium">How to Create a Digital Business Card That Converts</a> guide.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">The Tools</h2>
        <p className="mb-6">
          From designing business cards to compressing PDFs, every tool in our ecosystem is built with a focus on speed, privacy, and user experience. Check out our growing suite of utilities below.
        </p>
        <p className="text-sm text-muted-foreground mt-8">Last modified: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
    </div>
  );
}