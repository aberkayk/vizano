import Tribun8 from "../../../../public/images/tribun8.jpg";
import Image from "next/image";
import React from "react";
import {
  getTranslations,
  setRequestLocale,
  unstable_setRequestLocale,
} from "next-intl/server";
import ContactForm from "@/components/contact-form";

interface Props {
  params: { locale: string };
}

const ContactPage = async ({ params: { locale } }: Props) => {
  setRequestLocale(locale);
  const t = await getTranslations("ContactForm");
  const y = await getTranslations("Footer");

  return (
    <div className="w-full min-h-screen flex flex-col items-center overflow-x-hidden">
      <div className="relative aspect-[3100/1500] w-full max-h-[500px]">
        <div className="h-full w-full absolute z-10 bg-black opacity-50" />
        <p className="absolute uppercase top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 text-[26px] md:text-3xl lg:text-4xl font-semibold text-center">
          {y("contact")}
        </p>
        <Image
          src={Tribun8}
          fill
          alt="About Us Image"
          className="object-cover object-center z-0"
        />
      </div>

      <ContactForm />
      <address className="flex flex-col items-center justify-center gap-4 text-center w-full py-24">
        {/* Address */}
        <div className="text-lg leading-8 text-muted-foreground">
          <p>
            Soğucak Mah. Soğucak Sokak NO:77 <br /> Mustafakemalpaşa/BURSA
          </p>
        </div>
        {/* Contact */}
        <div className="flex flex-col text-base text-muted-foreground">
          <p>T: +90 (266) 597 10 52</p>
          <p>F: +90 (266) 597 10 36</p>
          <p>ufukenerji@guclugrup.com</p>
        </div>
      </address>
    </div>
  );
};

export default ContactPage;
