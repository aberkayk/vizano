"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navbarItems } from "@/lib/constants";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Logo from "../../public/logo.png";
import LogoWhite from "../../public/logo-white.png";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "./locale-switcher";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

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
        "sticky max-w-screen bg-white top-0 z-50 hidden md:flex h-[70px] min-h-[70px] px-4 shadow-sm bg-background border-black/10",
        scrolling && "transition text-white bg-black/70"
      )}
    >
      <div className="h-full w-full gap-3 xl:container grid grid-cols-5 items-center">
        <Link href="/home">
          <div className="relative">
            {scrolling ? (
              <Image
                src={LogoWhite}
                alt={"Logo"}
                sizes="(max-width: 768px) 100vw, 33vw"
                width={150}
                height={50}
              />
            ) : (
              <Image
                src={Logo}
                alt={"Logo"}
                sizes="(max-width: 768px) 100vw, 33vw"
                width={150}
                height={50}
                className={cn(scrolling && "hidden")}
              />
            )}
          </div>
        </Link>
        <div className="flex gap-3 col-span-3 justify-center font-semibold">
          {navbarItems.map((item, index) => (
            <Link
              className={cn(
                "border-transparent px-3 py-[6px] text-base hover:text-brand-green hover:border-b-2 hover:border-brand-green",
                pathname.includes(item.href) &&
                  "text-brand-green border-b-2 border-spacing-4 border-brand-green",
                scrolling &&
                  "text-white border-white hover:border-white hover:text-white"
              )}
              href={item.href}
              key={index.toString()}
            >
              <p>{t(item.label)}</p>
            </Link>
          ))}
        </div>
        <div className="flex justify-end text-black">
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
