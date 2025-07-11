import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'es',
  localePrefix: 'always',
})

export const config = {
  matcher: ['/((?!api|_next|favicon.ico|images|fonts|static|.*\\..*).*)'],
}