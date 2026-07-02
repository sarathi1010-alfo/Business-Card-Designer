import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <p className="text-muted-foreground text-center mb-8">
        Have a question or feedback? We&apos;d love to hear from you. For quick tips, check our <Link href="/blog/digital-business-card-guide" className="text-primary hover:underline">digital business card guide</Link>.
      </p>

      <form className="space-y-6" action="https://formspree.io/f/placeholder" method="POST">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="Your Name" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="your@email.com" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="How can we help?"
            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </div>
  );
}
