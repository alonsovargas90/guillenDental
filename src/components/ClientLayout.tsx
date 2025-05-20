'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import WhatsappButton from '@/components/whatsappButton'
import IntlWrapper from '@/components/IntlWrapper'
import { theme } from '@/theme/theme'

interface Props {
  children: ReactNode
  locale: string
  messages: Record<string, any>
}

export default function ClientLayout({ children, locale, messages }: Props) {
  return (
    <IntlWrapper locale={locale} messages={messages}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Navbar locale={locale} /> */}
        {children}
        {/* <Footer /> */}
      </ThemeProvider>
      <WhatsappButton />
    </IntlWrapper>
  )
}