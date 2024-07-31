"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { navbarItems } from "@/lib/constants";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const params = useParams();

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
        "sticky top-0 z-50 hidden md:flex h-[70px] min-h-[70px] text-sm  text-primary px-8 shadow-sm bg-brand-green border-black/10",
        scrolling &&
          "transition duration-500 bg-black/30 border-b border-black/10"
      )}
    >
      <div className="h-full w-full flex gap-3 justify-between items-center xl:container">
        <Link href="/">
          <h1 className={cn("text-2xl font-semibold text-white")}>
            RENTECH
          </h1>
        </Link>
        <div className="flex gap-3 text-white">
          {navbarItems.map((item, index) => (
            <Link
              className="border-b-[1.5px] border-transparent hover:border-white border-spacing-5 px-2 text-base hover:scale-105 transition"
              href={item.href}
              key={index.toString()}
            >
              <p>{item.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
