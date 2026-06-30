import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { seoConfig } from "@/config/seo.config";
import { constructMetadata } from "@/lib/seo/metadata";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

// Use the new centralized constructor, but customize it for root layout defaults
const baseMetadata = constructMetadata({
  path: "/",
});

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.global.url),
  title: {
    default: seoConfig.global.defaultTitle,
    template: seoConfig.global.titleTemplate,
  },
  description: seoConfig.global.defaultDescription,
  openGraph: baseMetadata.openGraph,
  twitter: baseMetadata.twitter,
  alternates: baseMetadata.alternates,
  robots: seoConfig.robots,
  other: {
    "google-adsense-account": "ca-pub-6393936268623951",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics - Phase 1/5 Requirement */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HZQ3QT11QC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HZQ3QT11QC');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans min-h-screen flex flex-col`}>
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
