"use client";

import React, { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navbarItems } from "@/lib/constants";
import { DialogClose } from "@radix-ui/react-dialog";
import { useParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MobileNavbar = () => {
  const params = useParams();
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

  return (
    <div
      className={cn(
        "sticky top-0 z-50 flex md:hidden h-[70px] min-h-[70px] text-sm bg-brand-green text-white px-8 border-black/10",
        scrolling &&
          "transition duration-500 bg-black/40 border-b border-black/10"
      )}
    >
      <div className="h-full w-full flex gap-3 justify-between items-center xl:container">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-2xl font-semibold">RENTECH</h1>
          <Sheet>
            <SheetTrigger asChild>
              <div className="border rounded-lg flex justify-center items-center p-[1.5px]">
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
                    className="w-full"
                    href={item.href}
                    key={index.toString()}
                  >
                    <DialogClose className="w-full h-full flex justify-center">
                      <p className="h-full w-56 hover:text-brand-green  border-transparent hover:text-black hover:bg-secondary hover:scale-105 transition px-3 py-2 text-xl rounded-lg">
                        {item.label}
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
                    RENTECH
                  </Link>
                </DialogClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
