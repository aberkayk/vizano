import { navbarItems } from "@/lib/constants";
import Logo from "../../public/logo.png";
import { Mail, MapPin, Phone, Printer } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Navbar");
  const y = useTranslations("Footer");

  return (
    <div className="w-full ">
      <div className="w-full xl:container flex gap-8 flex-col py-12 px-4">
        <Separator className="w-full" />
        <div className="flex justify-between w-full gap-2 lg:gap-8">
          {/* Hızlı Linkler */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">{y("quickLinks")}</h3>
            <div className="flex flex-col gap-2">
              {navbarItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-text-secondary hover:font-bold transition-colors"
                >
                  {t(item.label)}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
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
          </div>

          {/* İletişim Bilgileri */}
          <div className="flex lg:justify-end">
            <div className="flex flex-col gap-4 ">
              <h3 className="font-semibold text-lg">{y("contact")}</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-text-secondary">
                  <MapPin size={18} />
                  <span>{y("address")}</span>
                </div>

                <div className="flex items-center gap-2 text-text-secondary">
                  <Mail size={18} />
                  <span>{y("email")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="w-full flex flex-col xl:flex-row gap-2 xl:gap-10 justify-between text-sm  lg:text-base">
          <p className="text-text-secondary">{y("rights")}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
