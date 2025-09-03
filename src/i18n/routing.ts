import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "tr", "ar", "ru", "fa"],
  defaultLocale: "tr",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
