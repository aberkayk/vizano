import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Tribun8 from "../../../../public/images/tribun8.jpg";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MotionDivLeft, MotionDivRight } from "@/components/motion-div";
import {
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";

interface Props {
  params: { locale: string };
}

const ContactPage = async ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("ContactForm");

  return (
    <div className="w-full min-h-screen flex flex-col items-center overflow-x-hidden">
      <div className="relative aspect-[3100/1500] w-full max-h-[500px]">
        <div className="h-full w-full absolute z-10 bg-black opacity-50" />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 text-[26px] md:text-3xl lg:text-4xl font-semibold text-center">
          İLETİŞİM
        </p>
        <Image
          src={Tribun8}
          fill
          alt="About Us Image"
          className="object-cover object-center z-0"
        />
      </div>

      {/* Contact Form */}

      {/* <h1 className="text-4xl font-bold text-center my-24">Bize Ulaşın</h1> */}
      <div className="flex flex-col gap-4 md:grid rounded-lg max-w-3xl w-full mx-auto px-12 my-12">
        <MotionDivLeft className="flex flex-col gap-y-1 col-span-1">
          <Label className="font-semibold text-base">{t("name")}</Label>
          <Input className="placeholder:text-gray-400" />
        </MotionDivLeft>
        <MotionDivLeft className="flex flex-col gap-y-1 col-span-1">
          <Label className="font-semibold text-base">{t("surname")}</Label>
          <Input className="placeholder:text-gray-400" />
        </MotionDivLeft>
        <MotionDivLeft className="flex flex-col gap-y-1 col-span-1">
          <Label className="font-semibold text-base">{t("email")}</Label>
          <Input type="email" className="placeholder:text-gray-400" />
        </MotionDivLeft>
        <MotionDivLeft className="flex flex-col gap-y-1 col-span-1">
          <Label className="font-semibold text-base">{t("number")}</Label>
          <Input className="placeholder:text-gray-400" type="number" />
        </MotionDivLeft>
        <MotionDivLeft className="flex flex-col gap-y-1 col-span-2">
          <Label className="font-semibold text-base">{t("message")}</Label>
          <Textarea className="sm:col-span-2 overflow-y-auto max-h-48 min-h-32 placeholder:text-gray-40" />
        </MotionDivLeft>

        <MotionDivLeft className="col-span-2 flex justify-center ">
          <Button variant="green" className="w-full min-w-32 max-w-64">
            {t("send")}
          </Button>
        </MotionDivLeft>
      </div>
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
