import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["tr", "en"],

  // Used when no locale matches
  defaultLocale: "tr",
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(tr|en)/:path*",

    // Locale eklemek için eksik yönlendirmeleri etkinleştir
    // (ör. `/pathnames` -> `/en/pathnames`)
    "/((?!api|_next|_vercel|.\\..|favicon.ico).*)",
  ],
};
