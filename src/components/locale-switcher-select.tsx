"use client";

import { useParams } from "next/navigation";
import { Locale } from "next-intl";
import { ReactNode, useEffect, useState, useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const [scrolling, setScrolling] = useState(false);

  function onValueChange(next: string) {
    const nextLocale = next as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  useEffect(() => {
    const listenScrollEvent = () => {
      if (window.scrollY > 70) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Check scroll position on initial load
    listenScrollEvent();

    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      disabled={isPending}
    >
      <SelectTrigger
        className={`w-[140px] ${
          scrolling ? "bg-black/10 text-white" : ""
        }`}
      >
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent className="flex items-center justify-center">
        {children}
      </SelectContent>
    </Select>
  );
}
