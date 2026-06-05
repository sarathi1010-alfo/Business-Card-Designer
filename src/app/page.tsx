import Link from "next/link";
import { Button } from "@/components/ui/button";
import { mockTemplates } from "@/lib/templates/mock-data";

export default function Home() {
  const featuredTemplates = mockTemplates.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background to-muted/50 text-center px-4">
        <div className="container mx-auto max-w-4xl flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Design professional business cards in minutes
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Create stunning, printable, modern business cards instantly with live editing, smart templates, and export-ready layouts — directly in your browser.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Link href="/templates">
              <Button size="lg" className="h-12 px-8 text-base font-semibold">
                Start Designing Free &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="w-full py-20 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Templates</h2>
              <p className="text-muted-foreground mt-2">Start with a professional layout and customize it to your brand.</p>
            </div>
            <Link href="/templates">
              <Button variant="outline">View All Templates</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTemplates.map((template) => (
              <Link key={template.id} href={`/editor/${template.id}`} className="group block">
                <div className="relative aspect-[1.75/1] rounded-lg border bg-muted overflow-hidden shadow-sm transition-all hover:shadow-md">
                  {/* Placeholder for template image preview */}
                  <div
                    className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 text-sm font-medium"
                    style={{ backgroundColor: template.backgroundColor }}
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 text-foreground px-4 py-2 rounded-md font-medium shadow-sm">
                      Customize Template
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {template.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{template.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
