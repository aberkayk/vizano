"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navbarItems } from "@/lib/constants";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Logo from "../../public/logo.png";
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
        "sticky max-w-screen top-0 z-50 hidden md:flex h-[70px] min-h-[70px] px-4 bg-white shadow-sm border-black/10 transition-all duration-300",
        scrolling && "bg-white/95 backdrop-blur-md shadow-md"
      )}
    >
      <div className="h-full w-full gap-3 xl:container grid grid-cols-5 items-center">
        <Link href="/home">
          <div className="relative">
            <Image
              src={Logo}
              alt={"Logo"}
              sizes="(max-width: 768px) 100vw, 33vw"
              width={150}
              height={50}
            />
          </div>
        </Link>
        <div className="flex gap-2 col-span-3 justify-center font-semibold">
          {navbarItems.map((item, index) => (
            <Link
              className={cn(
                "px-4 py-[6px] text-base rounded-md transition-colors duration-200 hover:text-brand-secondary",
                pathname.includes(item.href) &&
                  "bg-brand-secondary/10 text-brand-primary"
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
