export function Footer() {
  return (
    <footer className="border-t bg-muted/40 py-12">
      <div className="container px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-xl tracking-tight">CardStudio</span>
          <p className="text-sm text-muted-foreground">
            Design professional business cards in minutes.
          </p>
        </div>
        <div className="flex gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}
