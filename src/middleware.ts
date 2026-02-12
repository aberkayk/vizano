import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

const locales = ["tr", "en", "ar", "ru", "fa"];
const defaultLocale = "tr";
const COOKIE_NAME = "NEXT_LOCALE";

/**
 * Accept-Language header'ından tarayıcının tercih ettiği dili belirler.
 * @formatjs/intl-localematcher ile desteklenen locale'lerle eşleştirir.
 */
function getPreferredLocale(request: NextRequest): string {
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });

  const negotiator = new Negotiator({ headers });
  const languages = negotiator.languages();

  try {
    return match(languages, locales, defaultLocale);
  } catch {
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Statik dosyalar ve API route'ları için middleware'i atla
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.includes(".") // favicon.ico, og-image.png vb.
  ) {
    return NextResponse.next();
  }

  // Kullanıcının zaten bir NEXT_LOCALE cookie'si var mı?
  const existingLocale = request.cookies.get(COOKIE_NAME)?.value;

  if (existingLocale && locales.includes(existingLocale)) {
    // Cookie zaten var ve geçerli, devam et
    return NextResponse.next();
  }

  // Cookie yok → Accept-Language header'ından dil algıla
  const detectedLocale = getPreferredLocale(request);

  // Cookie'yi set et ve isteği devam ettir
  const response = NextResponse.next();
  response.cookies.set(COOKIE_NAME, detectedLocale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 yıl
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: [
    /*
     * Şu yollar HARİÇ tüm request'leri eşle:
     * - _next/static (statik dosyalar)
     * - _next/image (image optimization)
     * - favicon.ico, icon.png, apple-icon.png
     * - public klasörü (images, og-image vb.)
     * - api route'ları
     * - robots.txt, sitemap.xml
     */
    "/((?!_next/static|_next/image|favicon\\.ico|icon\\.png|apple-icon\\.png|og-image|images|api|robots\\.txt|sitemap\\.xml).*)",
  ],
};
