// app/layout.tsx
import { WHATSUP_NUMBER } from '@/constants/constants';
import { buildMetadata } from '@/lib/seo';
import { ReactNode } from 'react'

export const metadata = buildMetadata({
  title: 'Guillen Dental Care – Clínica Dental en San José, Costa Rica',
  description: 'Ofrecemos servicios odontológicos de alta calidad en San José. Contáctanos para una sonrisa saludable.',
  url: 'https://www.guillendentalcare.com',
  image: 'https://www.guillendentalcare.com/hero.png',
  locale: 'es_CR',
  keywords: ['odontología', 'implantes dentales', 'Guillen Dental Care', 'Costa Rica'],
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: '48x48' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
});

export default function RootLayout({ children }: { children: ReactNode }) {
  
  return (
    <html lang="en">
            <head>
        {/* Favicon & PWA */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        {/* JSON-LD Schema for business info */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Dentist',
              name: 'Guillen Dental Care',
              url: 'https://www.guillendentalcare.com',
              image: 'https://www.guillendentalcare.com/hero.png',
              description: 'Clínica dental de alta calidad en San José, Costa Rica.',
              telephone: WHATSUP_NUMBER,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'San José',
                addressCountry: 'CR',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
