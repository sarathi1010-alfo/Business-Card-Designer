import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center space-y-6 min-h-[60vh]">
      <h1 className="text-6xl font-bold tracking-tight">404</h1>
      <h2 className="text-2xl font-semibold">Card Design Not Found</h2>
      <p className="text-muted-foreground max-w-md">
        The business card template or profession profile you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <Button size="lg" className="rounded-full">
          Return to Card Studio
        </Button>
      </Link>
    </div>
  );
}
