export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="mb-4 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Disclaimer</h2>
        <p>The materials on this website are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied.</p>
      </div>
    </div>
  );
}