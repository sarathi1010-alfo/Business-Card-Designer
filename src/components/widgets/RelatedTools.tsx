import { ExternalLink } from "lucide-react";

const RELATED_TOOLS = [
  {
    name: "Palette Flow",
    description: "Generate beautiful color palettes for your brand.",
    url: "https://paletteflow.alfo.online",
    category: "Design",
  },
  {
    name: "Font Fusion",
    description: "Discover perfect font pairings for your projects.",
    url: "https://fontfusion.alfo.online",
    category: "Design",
  },
  {
    name: "Brand Forge",
    description: "Create and export comprehensive brand guidelines.",
    url: "https://brandforge.alfo.online",
    category: "Design",
  },
  {
    name: "QR Generator",
    description: "Create custom QR codes for your business cards instantly.",
    url: "https://qrgenerator.alfo.online",
    category: "Utility",
  }
];

export function RelatedTools() {
  return (
    <div className="w-full py-16 bg-muted/20 border-t">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            Related Tools
          </h2>
          <p className="text-muted-foreground mt-2">
            Explore other free tools in the alfo.online ecosystem to level up your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RELATED_TOOLS.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              className="group flex flex-col justify-between p-5 rounded-lg border bg-background hover:shadow-md transition-all hover:border-primary/50"
            >
              <div>
                <div className="text-xs font-semibold text-primary/80 mb-2 tracking-wider uppercase">
                  {tool.category}
                </div>
                <h3 className="font-semibold text-lg flex items-center justify-between mb-2">
                  {tool.name}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {tool.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}