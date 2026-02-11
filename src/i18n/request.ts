import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const locales = ["en", "tr", "ar", "ru", "fa"] as const;
const defaultLocale = "tr";

export type Locale = (typeof locales)[number];

export default getRequestConfig(async () => {
  const store = await cookies();
  const requested = store.get("locale")?.value;
  const locale = locales.includes(requested as Locale)
    ? (requested as string)
    : defaultLocale;

  return {
    locale,
    messages: (
      await (locale === "tr"
        ? import("../../messages/tr.json")
        : import(`../../messages/${locale}.json`))
    ).default,
  };
});
