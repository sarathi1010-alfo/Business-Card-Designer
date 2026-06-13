"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { decompressTemplateFromUrl } from "@/lib/share";
import { Template } from "@/types/editor";
import { useEditorStore } from "@/store/editor-store";
import EditorClient from "@/app/editor/[id]/editor-client";

function ShareContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [template, setTemplate] = useState<Template | null>(null);
  const [error, setError] = useState(false);
  const loadTemplate = useEditorStore((state) => state.loadTemplate);

  useEffect(() => {
    // Timeout to avoid synchronous setState warning
    const t = setTimeout(() => {
      const data = searchParams.get("data");
      if (data) {
        const decodedTemplate = decompressTemplateFromUrl(data);
        if (decodedTemplate) {
          setTemplate(decodedTemplate);
          loadTemplate(decodedTemplate);
        } else {
          setError(true);
        }
      } else {
        setError(true);
      }
    }, 0);
    return () => clearTimeout(t);
  }, [searchParams, loadTemplate]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
        <h1 className="text-2xl font-bold mb-4">Invalid Share Link</h1>
        <p className="text-muted-foreground mb-8">This shared design link is invalid or corrupted.</p>
        <button
          onClick={() => router.push("/templates")}
          className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90"
        >
          Browse Templates
        </button>
      </div>
    );
  }

  if (!template) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-muted-foreground">Loading shared design...</p>
        </div>
      </div>
    );
  }

  return <EditorClient initialTemplate={template} />;
}

export default function SharePage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-muted-foreground">Initializing...</p>
        </div>
      </div>
    }>
      <ShareContent />
    </Suspense>
  );
}
