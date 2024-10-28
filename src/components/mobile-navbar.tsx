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
import { DialogClose } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import LocaleSwitcher from "./locale-switcher";
import { useTranslations } from "next-intl";

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

  return (
    <div
      className={cn(
        "sticky top-0 z-50 flex md:hidden h-[70px] min-h-[70px] text-sm bg-brand-green text-white px-8 border-black/10",
        scrolling && "transition duration-500 bg-black/40"
      )}
    >
      <div className="h-full w-full flex gap-3 justify-between items-center xl:container">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <h1 className={cn("text-2xl font-semibold text-white")}>
              UFUKENERJİ
            </h1>
          </Link>
          <div className="flex gap-2">
            <LocaleSwitcher />
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
                <div className="flex flex-col items-center gap-4 w-full py-20 px-8">
                  {navbarItems.map((item, index) => (
                    <Link
                      className="w-fit flex justify-center"
                      href={item.href}
                      key={index.toString()}
                    >
                      <DialogClose className="w-fit h-full flex justify-center">
                        <p className="h-full w-64 hover:text-white  border-transparent bg-secondary hover:bg-brand-green hover:scale-105 transition px-3 py-2 text-xl rounded-lg">
                          <p>{t(item.label)}</p>
                        </p>
                      </DialogClose>
                    </Link>
                  ))}
                </div>
                <div className="w-full bg-brand-green h-20 flex justify-center items-center">
                  <DialogClose
                    asChild
                    className="w-full flex justify-center"
                  >
                    <Link
                      href="/"
                      className="text-2xl font-semibold hover:scale-105 w-full transition text-white"
                    >
                      UFUKENERJİ
                    </Link>
                  </DialogClose>
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
