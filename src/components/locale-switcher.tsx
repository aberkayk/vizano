"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const locales = [
  { code: "tr", label: "turkish" },
  { code: "en", label: "english" },
  { code: "ar", label: "arabic" },
  { code: "ru", label: "russian" },
  { code: "fa", label: "persian" },
] as const;

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("LocaleSwitcher");

  const onSelectChange = (newLocale: string) => {
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
      router.refresh();
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline">
          <span className="uppercase text-xs">{locale}</span>
          <span className="sr-only">{t("label")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="space-y-1 py-2 px-2" align="end">
        {locales.map((lang) => (
          <DropdownMenuItem
            disabled={isPending}
            key={lang.code}
            onClick={() => onSelectChange(lang.code)}
            className={cn(
              "capitalize",
              locale === lang.code && "bg-secondary"
            )}
          >
            <p className="flex justify-between w-full items-center">
              {t("locale", { locale: lang.code })}
              {locale === lang.code && <Check size={15} />}
            </p>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
