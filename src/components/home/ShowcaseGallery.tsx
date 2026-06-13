"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { mockTemplates } from "@/lib/templates/mock-data";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

// Dynamically import the preview to avoid SSR canvas issues
const TemplatePreview = dynamic(
  () => import("@/components/canvas/TemplatePreview").then((mod) => mod.TemplatePreview),
  { ssr: false, loading: () => <div className="w-full h-full bg-muted/20 animate-pulse rounded-xl" /> }
);

const categories = ["Trending", "Startup Founder Picks", "Personal Branding", "Agency Style", "Minimal Luxury", "AI Creator Cards"];

export function ShowcaseGallery() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Duplicate templates to fill out the grid nicely for demo purposes
  const showcaseTemplates = [...mockTemplates, ...mockTemplates, ...mockTemplates.slice(0, 2)];

  return (
    <section className="py-24 px-4 bg-muted/30 border-t relative overflow-hidden" ref={ref}>
      {/* Decorative ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 font-heading">
              Professional identity, <span className="text-primary">elevated.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore how professionals across industries are using BrandCard to stand out and make lasting impressions.
            </p>
          </div>
          <Link href="/templates">
            <Button variant="outline" className="gap-2 rounded-full px-6">
              View All Examples <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-6 mb-8 scrollbar-hide">
          {categories.map((category, idx) => (
            <Button
              key={category}
              variant={idx === 0 ? "default" : "secondary"}
              className="rounded-full whitespace-nowrap shadow-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {showcaseTemplates.map((template, idx) => (
            <motion.div
              key={`${template.id}-${idx}`}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-3xl p-1 bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[1.75/1] rounded-2xl overflow-hidden bg-muted/50 mb-4 p-1">
                {inView && <TemplatePreview template={template} />}

                <div className="absolute inset-0 bg-background/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link href={`/editor/${template.id}`}>
                    <Button variant="default" className="shadow-xl rounded-full px-6 gap-2">
                      Use Template
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="px-4 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">{template.name}</h3>
                  <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {template.category}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-1.5">
                    <Download className="w-4 h-4" />
                    <span>{Math.floor(34)}.{Math.floor(5)}k exports</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    <span>YC Founders</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
