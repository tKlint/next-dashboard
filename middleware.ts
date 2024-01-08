import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 
// import { i18n } from './app/dictionaries';


export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ['/((?!api|_next/static|_next/image|.png).*)'],
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js).*)']

};



// function getLocale(request: NextRequest): string | undefined {
//   // Negotiator expects plain object so we need to transform headers
//   const negotiatorHeaders: Record<string, string> = {}
//   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

//   // @ts-ignore locales are readonly
//   const locales: string[] = i18n.locales

//   // Use negotiator and intl-localematcher to get best locale
//   let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
//     locales
//   )

//   const locale = matchLocale(languages, locales, i18n.defaultLocale)

//   return locale
// }

// export function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname

//   //   retur
//   console.log('2222')
//   // Check if there is any supported locale in the pathname
//   const pathnameIsMissingLocale = i18n.locales.every(
//     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//   )

//     console.log('222', pathnameIsMissingLocale)

//   // Redirect if there is no locale
//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request)

//     // e.g. incoming request is /products
//     // The new URL is now /en-US/products
//     return NextResponse.redirect(
//       new URL(
//         `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
//         request.url
//       )
//     )
//   }
// }

 
// export function middleware(request: NextRequest) {
//   // Check if there is any supported locale in the pathname
//   const { pathname } = request.nextUrl
//   const pathnameHasLocale = i18n.locales.some(
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//   )
 
//   if (pathnameHasLocale) return
 
//   // Redirect if there is no locale
//   const locale = getLocale(request)
//   request.nextUrl.pathname = `/${locale}${pathname}`
//   // e.g. incoming request is /products
//   // The new URL is now /en-US/products
//   return Response.redirect(request.nextUrl)
// }



// console.log(NextAuth(authConfig).auth, 'aaa')

export default NextAuth(authConfig).auth;
