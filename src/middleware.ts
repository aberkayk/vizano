import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // Supported locales
  locales: ["tr", "en", "ar", "fa", "ru"],

  // Default locale
  defaultLocale: "tr",
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for all requests that have a locale prefix
    "/(tr|en)/:path*",

    // Exclude static files and assets from locale handling
    "/((?!api|_next|_vercel|.\\..|favicon.ico|videos/).*)",
  ],
};
