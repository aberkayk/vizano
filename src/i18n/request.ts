import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { hasLocale } from "next-intl";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (
      await (locale === "tr"
        ? // When using Turbopack, this will enable HMR for `en`
          import("../../messages/tr.json")
        : import(`../../messages/${locale}.json`))
    ).default,
  };
});
