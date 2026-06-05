import Link from "next/link";
import { mockTemplates } from "@/lib/templates/mock-data";

export const metadata = {
  title: "Business Card Templates | CardStudio",
  description: "Browse professional business card templates.",
};

export default function TemplatesPage() {
  return (
    <div className="container py-12 px-4 sm:px-8 mx-auto">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Templates</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Choose a starting point for your next business card.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockTemplates.map((template) => (
            <Link key={template.id} href={`/editor/${template.id}`} className="group block">
              <div className="relative aspect-[1.75/1] rounded-lg border bg-muted overflow-hidden shadow-sm transition-all hover:shadow-md">
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ backgroundColor: template.backgroundColor }}
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 text-foreground px-4 py-2 rounded-md font-medium shadow-sm">
                    Customize Template
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {template.name}
                </h3>
                <p className="text-sm text-muted-foreground">{template.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
