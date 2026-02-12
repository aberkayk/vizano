import { navbarItems } from "@/lib/constants";
import Logo from "../../public/logo-white.png";
import { Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Navbar");
  const y = useTranslations("Footer");

  return (
    <div className="w-full bg-gray-900 text-white">
      <div className="w-full xl:container flex gap-8 flex-col py-12 px-4">
        <div className="flex justify-between w-full gap-8 flex-col lg:flex-row">
          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">{y("quickLinks")}</h3>
            <div className="flex flex-col gap-2">
              {navbarItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-400 hover:text-brand-secondary transition-colors"
                >
                  {t(item.label)}
                </Link>
              ))}
            </div>
          </div>

          {/* Logo & Description */}
          <div className="flex flex-col items-center justify-center gap-4">
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
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.instagram.com/visanoistanbul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-secondary transition-colors"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://wa.me/905066695796"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-secondary transition-colors"
              >
                <MessageCircle size={22} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex lg:justify-end">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg">{y("contact")}</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin size={18} />
                  <span>{y("address")}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail size={18} />
                  <span>{y("email")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="w-full bg-gray-950">
        <div className="xl:container px-4 py-4 flex flex-col xl:flex-row gap-2 xl:gap-10 justify-between text-sm lg:text-base">
          <p className="text-gray-400">{y("rights")}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
