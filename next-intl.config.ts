import { getRequestConfig } from 'next-intl/server'

export const locales = ['en', 'es']
export const defaultLocale = 'en'

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locale ?? defaultLocale

  return {
    messages: (await import(`./src/messages/${safeLocale}.json`)).default,
    locale: safeLocale
  }
})