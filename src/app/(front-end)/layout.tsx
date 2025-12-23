import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import StickyCTA from '@/components/ui/StickyCTA';
import DebugModal from "@/components/DebugModal";
import { getPayload } from 'payload';
import config from '../../payload.config';

// Load local Cormorant Garamond (static weights + italic) for headings
const headingFont = localFont({
  variable: "--font-heading",
  src: [
    { path: "../../../public/fonts/Cormorant_Garamond/static/CormorantGaramond-Light.ttf", weight: "300", style: "normal" },
    { path: "../../../public/fonts/Cormorant_Garamond/static/CormorantGaramond-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../../../public/fonts/Cormorant_Garamond/static/CormorantGaramond-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../../public/fonts/Cormorant_Garamond/static/CormorantGaramond-Italic.ttf", weight: "400", style: "italic" },
    { path: "../../../public/fonts/Cormorant_Garamond/static/CormorantGaramond-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../../public/fonts/Cormorant_Garamond/static/CormorantGaramond-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../../../public/fonts/Cormorant_Garamond/static/CormorantGaramond-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../../public/fonts/Cormorant_Garamond/static/CormorantGaramond-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "../../../public/fonts/Cormorant_Garamond/static/CormorantGaramond-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../../public/fonts/Cormorant_Garamond/static/CormorantGaramond-BoldItalic.ttf", weight: "700", style: "italic" }
  ],
  display: 'swap'
});

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.bogus-jewelry.com';
  let settings;

  try {
    const payload = await getPayload({ config });
    settings = await payload.findGlobal({
      slug: 'site-settings',
    });
  } catch (error) {
    // This allows the build to pass even if the database isn't reachable during the build
    console.warn("Failed to fetch site settings for metadata (using defaults):", error);
  }

  return {
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: '/',
    },
    title: settings?.seo?.title || "BOGUS Jewelry - Timeless Elegance, Unmatched Brilliance",
    description: settings?.seo?.description || "Discover exquisite jewelry crafted with passion and precision. Explore our collections of silver, gold, and unique designs.",
    openGraph: {
      images: settings?.seo?.ogImage && typeof settings.seo.ogImage === 'object' && settings.seo.ogImage.url
        ? [{ url: settings.seo.ogImage.url }]
        : [],
    }
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} antialiased`} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <StickyCTA />
        {/* <DebugModal /> */}
        <Footer />
      </body>
    </html>
  );
}
