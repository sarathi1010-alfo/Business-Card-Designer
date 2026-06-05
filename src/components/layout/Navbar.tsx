import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tight">CardStudio</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/templates" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Templates
            </Link>
            <Link href="/templates?category=minimal" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Categories
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/templates">
            <Button variant="ghost" size="sm">Log in</Button>
          </Link>
          <Link href="/templates">
            <Button size="sm">Start Designing</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
