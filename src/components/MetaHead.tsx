import { MetaHeadProps } from "@/types/types";
import Head from "next/head";

export default function MetaHead({
  title = 'MySite',
  description = 'Default description',
  url = 'https://example.com',
  image = 'https://example.com/og-default.jpg',
  locale = 'en_US',
}: MetaHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}