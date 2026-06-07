export default function ToolPage({ params }: { params: { cluster: string, tool_slug: string } }) {
  // Placeholder implementation
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Tool: {params.tool_slug}</h1>
      <p>Cluster: {params.cluster}</p>
    </div>
  );
}
