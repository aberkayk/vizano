"use client";

import { ReactNode, useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
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
  const [scrolling, setScrolling] = useState(false);

  function onValueChange(next: string) {
    document.cookie = `locale=${next};path=/;max-age=${365 * 24 * 60 * 60}`;
    startTransition(() => {
      router.refresh();
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
