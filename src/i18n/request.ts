import { getRequestConfig } from 'next-intl/server'
import { locales, defaultLocale } from '@/i18n/i18n' // si lo tienes definido ahí

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locale && locales.includes(locale) ? locale : defaultLocale;
 const files = [
    'hero',
    'footer',
    'nav',
    'ourTeam',
    'ourServices',
    'reviews',
    'servicePages',
    'aboutPage',
    'heroContact',
    'invisalignBanner',
    'topPriority',
    'userCase'
  ];

  const messages = Object.assign(
    {},
    ...(await Promise.all(
      files.map(async (file) =>
        (await import(`../messages/${locale}/${file}.json`)).default
      )
    ))
  );

  return {
    messages,
    locale: safeLocale
  }
})