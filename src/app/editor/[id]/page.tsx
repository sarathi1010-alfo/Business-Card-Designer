import { notFound } from "next/navigation";
import { mockTemplates } from "@/lib/templates/mock-data";
import EditorClient from "./editor-client";

interface EditorPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditorPage({ params }: EditorPageProps) {
  const resolvedParams = await params;
  const templateId = resolvedParams.id;
  const template = mockTemplates.find(t => t.id === templateId);

  if (!template) {
    notFound();
  }

  // We pass the template to a client component because the editor needs heavy client-side state
  return <EditorClient initialTemplate={template} />;
}
