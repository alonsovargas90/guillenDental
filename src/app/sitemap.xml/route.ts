import { NextResponse } from 'next/server';
import { MetadataRoute } from 'next';

import esMessages from "../../messages/en/servicePages.json";
const LOCALES = ['es', 'en'] as const;
const STATIC_FOLDERS = [
  '', // locale root → /es or /en
  'before-after',
  'contact',
  'main',
  'medical-tourism',
  'team',
] as const;

function getServiceKeys() {
  // Read keys from translation JSON
  return Object.keys(esMessages.ServicePages);
}
export async function GET() {
  const base = 'https://www.guillendentalcare.com';

  const staticRoutes = LOCALES.flatMap((locale) =>
    STATIC_FOLDERS.map((folder) => ({
      url: `${base}/${locale}${folder ? `/${folder}` : ''}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: folder === '' ? 1.0 : 0.8,
    }))
  );

  const serviceIds = getServiceKeys();
  const dynamicRoutes: MetadataRoute.Sitemap = serviceIds.flatMap((id) =>
    LOCALES.map((locale) => ({
      url: `${base}/${locale}/service/${id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }))
  );

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      (route) => `
    <url>
      <loc>${route.url}</loc>
      <lastmod>${route.lastModified}</lastmod>
      <changefreq>${route.changeFrequency}</changefreq>
      <priority>${route.priority}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
