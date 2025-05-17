import { getMessages } from 'next-intl/server'
import EmotionProviderLayout from './emotion'
import ClientLayout from '@/components/ClientLayout'
import '@/styles/global.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Head from 'next/head';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <EmotionProviderLayout>
          <ClientLayout locale={locale} messages={messages}>
            {children}
          </ClientLayout>
        </EmotionProviderLayout>
      </body>
    </html>
  )
}