"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navbarItems } from "@/lib/constants";
import LocaleSwitcher from "./locale-switcher";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  console.log({ pathname });

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

  const t = useTranslations("Navbar");

  return (
    <div
      className={cn(
        "sticky top-0 z-50 hidden md:flex h-[70px] min-h-[70px] px-8 shadow-sm bg-background border-black/10",
        scrolling && "transition text-white bg-black/70"
      )}
    >
      <div className="h-full w-full gap-3 xl:container grid grid-cols-5 items-center">
        <Link href="/home">
          <div className="relative">
            <Image src={Logo} alt={"Logo"} />
          </div>
        </Link>
        <div className="flex gap-3 col-span-3 justify-center font-semibold">
          {navbarItems.map((item, index) => (
            <Link
              className={cn(
                "border-transparent px-3 py-[6px] text-base hover:text-brand-green hover:border-b hover:border-brand-green",
                pathname.includes(item.href) &&
                  "text-brand-green border-b border-spacing-4 border-brand-green"
              )}
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
