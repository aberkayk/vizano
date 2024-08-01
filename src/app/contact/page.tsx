import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import RentImage from "../../../public/images/rent.jpg";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MotionDivLeft, MotionDivRight } from "@/components/motion-div";

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center overflow-x-hidden">
      <div className="relative aspect-[3100/1500] w-full max-h-[500px]">
        <div className="h-full w-full absolute z-10 bg-black opacity-50" />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 text-4xl xl:text-5xl font-semibold text-center">
          İLETİŞİM
        </p>
        <Image
          src={RentImage}
          fill
          alt="About Us Image"
          className="object-cover object-center z-0"
        />
      </div>

      {/* Contact Form */}

      <h1 className="text-4xl font-bold text-center my-24">Bize Ulaşın</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-lg max-w-3xl w-full mx-auto px-12">
        <MotionDivLeft className="flex flex-col gap-y-1">
          <Label className="font-semibold text-base">İsim</Label>
          <Input
            placeholder="Ahmet"
            className="placeholder:text-gray-400"
          />
        </MotionDivLeft>
        <MotionDivRight className="flex flex-col gap-y-1">
          <Label className="font-semibold text-base">Soyisim</Label>
          <Input
            className="placeholder:text-gray-400"
            placeholder="Türkmen"
          />
        </MotionDivRight>
        <MotionDivLeft className="flex flex-col gap-y-1">
          <Label className="font-semibold text-base">Email</Label>
          <Input
            className="placeholder:text-gray-400"
            placeholder="ahmetturkmen@mail.com"
          />
        </MotionDivLeft>
        <MotionDivRight className="flex flex-col gap-y-1">
          <Label className="font-semibold text-base">Numara</Label>
          <Input
            className="placeholder:text-gray-400"
            type="number"
            placeholder="+90 555 55 55"
          />
        </MotionDivRight>
        <MotionDivLeft className="flex flex-col gap-y-1 col-span-2">
          <Label className="font-semibold text-base">Mesaj</Label>
          <Textarea
            placeholder="Ürünler hakkında almak istiyorum"
            className="sm:col-span-2 overflow-y-auto max-h-48 min-h-32 placeholder:text-gray-40"
          />
        </MotionDivLeft>

        <div className="sm:col-span-2 flex justify-center ">
          <Button variant="green" className="w-full min-w-32 max-w-64">
            Gönder
          </Button>
        </div>
      </div>
      <address className="flex flex-col items-center justify-center text-center gap-6 w-full py-24">
        {/* Address */}
        <div className="text-lg leading-8 text-muted-foreground">
          <p className="text-xl">
            RENTECH TEKNOLOJİK EKİPMAN KİRALAMA A.Ş.
          </p>
          <p>
            Metrocity İş Merkezi <br /> A Blok Kat:12 Şişli / İSTANBUL
          </p>
        </div>
        {/* Contact */}
        <div className="flex flex-col text-base text-muted-foreground">
          <p>T: +90 212 222 22 22</p>
          <p>F: +90 212 222 22 22</p>
          <p>info@rentech.com</p>
        </div>
      </address>
    </div>
  );
};

export default ContactPage;
