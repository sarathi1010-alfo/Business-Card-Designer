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
            <div className="relative group cursor-pointer text-foreground/60 hover:text-foreground/80 transition-colors">
              <span>Related Tools ▾</span>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <a href="https://paletteflow.alfo.online" className="block px-4 py-2 text-sm hover:bg-muted">Palette Flow</a>
                <a href="https://fontfusion.alfo.online" className="block px-4 py-2 text-sm hover:bg-muted">Font Fusion</a>
                <a href="https://brandforge.alfo.online" className="block px-4 py-2 text-sm hover:bg-muted">Brand Forge</a>
                <a href="https://pdfutility.alfo.online" className="block px-4 py-2 text-sm hover:bg-muted">PDF Utility</a>
                <a href="https://qrgenerator.alfo.online" className="block px-4 py-2 text-sm hover:bg-muted">QR Generator</a>
              </div>
            </div>
            <Link href="/blog" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Blog
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
              About
            </Link>
            <Link href="/dashboard" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Dashboard
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden lg:inline-block text-xs text-muted-foreground mr-2 font-medium">
            Powered by <a href="https://alfo.online" className="hover:text-foreground transition-colors underline underline-offset-2">alfo.online</a>
          </span>
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
