"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { Template } from "@/types/editor";
import { useEditorStore } from "@/store/editor-store";
import { EditorControls } from "@/components/editor/EditorControls";
import { EditorToolbar } from "@/components/editor/EditorToolbar";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dynamically import the canvas to avoid SSR issues with Konva
const CardCanvas = dynamic(
  () => import("@/components/canvas/CardCanvas").then((mod) => mod.CardCanvas),
  { ssr: false, loading: () => <div className="animate-pulse bg-muted w-full h-full rounded-sm flex items-center justify-center">Loading Canvas...</div> }
);

interface EditorClientProps {
  initialTemplate: Template;
}

export default function EditorClient({ initialTemplate }: EditorClientProps) {
  const loadTemplate = useEditorStore((state) => state.loadTemplate);
  const [isClient, setIsClient] = useState(false);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (!isLoaded.current) {
      loadTemplate(initialTemplate);
      isLoaded.current = true;
    }
  }, [initialTemplate, loadTemplate]);

  useEffect(() => {
    // Avoid synchronous setState in effect body by pushing to next tick
    const timer = setTimeout(() => setIsClient(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!isClient) {
    return null; // Or a loading spinner
  }

  const handleExport = () => {
    const stage = document.querySelector('canvas');
    if (stage) {
      const dataURL = stage.toDataURL();
      const link = document.createElement('a');
      link.download = `${initialTemplate.name.replace(/\s+/g, '-').toLowerCase()}-export.png`;
      link.href = dataURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex h-[calc(100vh-3.5rem)] overflow-hidden">
      {/* Sidebar Controls */}
      <div className="w-80 border-r bg-background p-4 flex flex-col gap-4 overflow-y-auto">
        <h2 className="font-semibold text-lg">Properties</h2>
        <EditorControls />
      </div>

      {/* Canvas Workspace */}
      <div className="flex-1 bg-muted/30 flex flex-col relative">
        <div className="h-14 border-b flex items-center px-4 justify-between bg-background">
          <div className="flex items-center">
            <EditorToolbar />
            <span className="text-sm font-medium ml-2">{initialTemplate.name}</span>
          </div>
          <div className="flex gap-2">
            <Button size="sm" onClick={handleExport} className="gap-2">
              <Download className="w-4 h-4" /> Export PNG
            </Button>
          </div>
        </div>
        <div className="flex-1 p-8 overflow-hidden relative flex items-center justify-center">
          <CardCanvas />
        </div>
      </div>
    </div>
  );
}