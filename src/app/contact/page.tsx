import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact BrandCard - Get in Touch',
  description: 'Have questions about BrandCard? Contact our support team for help with your digital business card, templates, or analytics.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="bg-muted/30 p-8 rounded-2xl border mb-12">
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input id="email" type="email" placeholder="Your email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea
              id="message"
              placeholder="How can we help you?"
              className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
          </div>
          <Button className="w-full">Send Message</Button>
        </form>
      </div>

      <div className="text-center prose dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-4">
          Need help setting up your card? Check out our <Link href="/blog/digital-business-card-guide" className="text-primary hover:underline font-medium">comprehensive conversion guide</Link>.
        </p>
        <p className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}