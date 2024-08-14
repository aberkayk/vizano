"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { cn, redirectedPathName } from "@/lib/utils";
import { Check } from "lucide-react";

const languageOptions: {
  name: "turkish" | "english" | "deutsch";
  code: "tr" | "en" | "de";
}[] = [
  { name: "turkish", code: "tr" },
  { name: "english", code: "en" },
  // { name: "deutsch", code: "de" },
];

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const [locale, setLocale] = useState(localActive);
  const t = useTranslations("Language");
  const pathname = usePathname();

  const onSelectChange = (locale: string) => {
    const path = redirectedPathName(locale, pathname);
    router.push(path, { scroll: false });
    // setLocale(locale);
    // startTransition(() => {
    //   router.replace(`/${locale}`);
    // });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline" className="bg-brand-green">
          <span className="uppercase text-xs">{locale}</span>
          <span className="sr-only">Change Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="space-y-1 py-2 px-2" align="end">
        {languageOptions.map((language) => (
          <DropdownMenuItem
            disabled={isPending}
            key={language.code}
            onClick={() => onSelectChange(language.code)}
            className={cn(
              "capitalize",
              pathname.split("/")[1] === language.code && "bg-secondary"
            )}
          >
            <p className="flex justify-between w-full items-center">
              {t(language.name)}
              {pathname.split("/")[1] === language.code && (
                <Check size={15} />
              )}
            </p>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
