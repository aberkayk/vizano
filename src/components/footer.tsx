import { navbarItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Locate, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className="w-full bg-brand-green">
      <div className="w-full xl:container flex gap-8 flex-col py-12 px-16">
        {/* Top Info */}
        <div className="w-full flex gap-10 flex-col justify-center items-center text-center lg:hidden">
          <Link href="/">
            <h1 className={cn("text-5xl font-semibold text-white")}>
              RENTECH
            </h1>
          </Link>
          <p className="text-white max-w-[500px]">
            Rentech, %100 Şekerbank iştiraki olup, finansal markanın gücü,
            tecrübe ve bilgisi ile, otomotiv ve finans sektörlerini bir
            araya getirmiştir.
          </p>
        </div>
        {/* Bottom Contact and Links */}
        <div className="w-full flex justify-between text-white">
          {/* Contact */}
          <div className="flex flex-col gap-4 w-1/2 lg:w-1/3 lg:max-w-56">
            <h5 className="text-2xl">İletişim</h5>
            <p className="flex gap-4 font-light">
              <Mail />
              info@rentech.com.tr
            </p>
            <p className="flex gap-4 font-light">
              <Phone />0 (212) 222 22 22
            </p>
            <p className="flex gap-4 font-light">
              <MapPin />
              Metrocity İş Merkezi A Blok Kat:12 Şişli / İSTANBUL
            </p>
          </div>
          {/* Logo and Info after lg */}
          <div className="hidden lg:flex gap-6 flex-col justify-center items-center text-center w-1/3 max-w-56">
            <Link href="/">
              <h1 className={cn("text-5xl font-semibold text-white")}>
                RENTECH
              </h1>
            </Link>
            <p className="text-white">
              Rentech, %100 Şekerbank iştiraki olup, finansal markanın
              gücü, tecrübe ve bilgisi ile, otomotiv ve finans sektörlerini
              bir araya getirmiştir.
            </p>
          </div>
          {/* Links */}
          <div className="flex flex-col items-end gap-4 w-1/2 lg:w-1/3 lg:max-w-56">
            <h5 className="text-2xl">Rentech</h5>
            {navbarItems.map((item, index) => (
              <Link
                className="hover:scale-105 transition"
                href={item.href}
                key={index.toString()}
              >
                <p>{item.label}</p>
              </Link>
            ))}
          </div>
        </div>

        <Separator className="w-full bg-text-secondary" />

        <div className="w-full flex flex-col xl:flex-row gap-2 xl:gap-10 justify-between">
          <p className="text-text-secondary">
            © 2023 Sekar Oto Filo Yönetim Hizmetleri ve Ticaret A.Ş. | Her
            Hakkı Saklıdır.
          </p>
          <p className="text-text-secondary">
            Bu websitesi TINTECH tarafından hazırlanmıştır.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
