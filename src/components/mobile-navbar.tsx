"use client";

import React, { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navbarItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "./locale-switcher";

const MobileNavbar = () => {
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
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "sticky bg-white top-0 z-50 flex md:hidden h-[70px] min-h-[70px] text-sm px-4 border-black/10",
        scrolling && "transition bg-black/70 text-white"
      )}
    >
      <div className="h-full w-full flex gap-3 justify-between items-center xl:container">
        <div className="flex items-center justify-between w-full">
          <Link href="/home">
            <div className="relative">
              <Image
                src={Logo}
                alt={"Logo"}
                sizes="(max-width: 768px) 100vw, 33vw"
                width={120}
                height={40}
              />
            </div>
          </Link>
          <div className="flex gap-2">
            <div className="text-black">
              <LocaleSwitcher />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <div className="border rounded-md flex justify-center items-center py-[1.5px] px-1">
                  <MenuIcon
                    size={30}
                    className="cursor-pointer hover:rotate-180 transition duration-100"
                  />
                </div>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="flex flex-col justify-between items-center p-0 border-none w-full md:hidden"
              >
                <div className="flex flex-col items-center gap-4 w-full py-20 px-8 font-semibold">
                  {navbarItems.map((item, index) => (
                    <Link
                      className="w-fit flex justify-center"
                      href={item.href}
                      key={index.toString()}
                    >
                      <SheetClose className="w-fit h-full flex justify-center">
                        <p
                          className={cn(
                            "h-full w-64 transition px-3 py-2 text-xl border-b-2 border-transparent hover:border-brand-green hover:border-b-2 border-spacing-4 hover:text-brand-green",
                            pathname.includes(item.href) &&
                              "text-brand-green border-b-2 border-spacing-4 border-brand-green"
                          )}
                        >
                          {t(item.label)}
                        </p>
                      </SheetClose>
                    </Link>
                  ))}
                </div>
                <div className="w-full bg-brand-green h-20 flex justify-center items-center">
                  <SheetClose
                    asChild
                    className="w-full flex justify-center"
                  >
                    <Link href="/home">
                      <div className="relative w-48">
                        <Image src={Logo} alt={"Logo"} />
                      </div>
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
