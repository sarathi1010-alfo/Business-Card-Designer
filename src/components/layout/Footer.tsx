import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 py-16">
      <div className="container px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <span className="font-bold text-xl tracking-tight">CardStudio</span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Design professional business cards in minutes. Built for speed, privacy, and modern aesthetics.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm">Tools Hub</h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="https://paletteflow.alfo.online" className="hover:text-foreground transition-colors">Palette Flow</a>
              <a href="https://fontfusion.alfo.online" className="hover:text-foreground transition-colors">Font Fusion</a>
              <a href="https://brandforge.alfo.online" className="hover:text-foreground transition-colors">Brand Forge</a>
              <a href="https://pdfutility.alfo.online" className="hover:text-foreground transition-colors">PDF Utility</a>
              <a href="https://qrgenerator.alfo.online" className="hover:text-foreground transition-colors">QR Generator</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm">Legal</h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">Contact Us</Link>
              <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm">Social</h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="https://twitter.com/alfo_online" className="hover:text-foreground transition-colors">Twitter</a>
              <a href="https://github.com/alfo-online" className="hover:text-foreground transition-colors">GitHub</a>
              <a href="https://linkedin.com/company/alfo-online" className="hover:text-foreground transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} <a href="https://alfo.online" className="hover:text-foreground transition-colors font-medium">alfo.online</a> — All rights reserved.</p>
          <p>Built with Next.js & Konva</p>
        </div>
      </div>
    </footer>
  );
}
