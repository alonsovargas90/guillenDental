import { getRequestConfig } from 'next-intl/server'
import { locales, defaultLocale } from '@/i18n/i18n' // si lo tienes definido ahí

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locale && locales.includes(locale) ? locale : defaultLocale;

  return {
    messages: (await import(`../messages/${safeLocale}.json`)).default,
    locale: safeLocale
  }
})