import { SeoOptions } from "@/types/types";
import { Metadata } from "next/types";

export const buildMetadata = ({
  title = 'MySite',
  description = 'Default description',
  url = 'https://example.com',
  image = 'https://example.com/og-default.jpg',
  locale = 'en_US',
  keywords = [],
  icons,
}: SeoOptions = {}): Metadata => ({
  title,
  description,
  keywords,
  metadataBase: new URL(url),
  alternates: { canonical: url },
  openGraph: {
    type: 'website',
    locale,
    url,
    title,
    description,
    images: image ? [{ url: image }] : [],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: image ? [image] : [],
  },
  icons,
});