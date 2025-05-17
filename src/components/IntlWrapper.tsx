'use client'

import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'

interface IntlWrapperProps {
  children: ReactNode
  locale: string
  messages: Record<string, any>
}

export default function IntlWrapper({ children, locale, messages }: IntlWrapperProps) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone="America/Costa_Rica"
    >
      {children}
    </NextIntlClientProvider>
  )
}