"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navbarItems } from "@/lib/constants";
import LocaleSwitcher from "./locale-switcher";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const listenScrollEvent = (e: any) => {
      if (window.scrollY > 70) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  const t = useTranslations("Navbar");

  return (
    <div
      className={cn(
        "sticky top-0 z-50 hidden md:flex h-[70px] min-h-[70px] text-sm  text-primary px-8 shadow-sm bg-brand-green border-black/10",
        scrolling && "transition duration-500 bg-black/30"
      )}
    >
      <div className="h-full w-full gap-3 text-white xl:container grid grid-cols-5 items-center">
        <Link href="/">
          <h1 className={cn("text-2xl font-semibold text-white")}>
            UFUKENERJİ
          </h1>
        </Link>
        <div className="flex gap-3 text-white col-span-3 justify-center">
          {navbarItems.map((item, index) => (
            <Link
              className="border-transparent px-3 py-[6px] text-base rounded-lg hover:text-text hover:bg-secondary hover:scale-105 transition"
              href={item.href}
              key={index.toString()}
            >
              <p>{t(item.label)}</p>
            </Link>
          ))}
        </div>
        <div className="flex justify-end">
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
