import Image from "next/image";
import React from "react";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import ContactImage from "../../../public/images/contact.png";
import WhatsAppButton from "@/components/whatsapp-button";
import { MapPin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "İletişim - Oturum İzni ve Yatırım Danışmanlığı için Bize Ulaşın",
  description:
    "Türkiye'de oturum izni, çalışma vizesi, gayrimenkul yatırımı veya araç alımı konusunda danışmanlık almak için bizimle iletişime geçin. WhatsApp, e-posta veya form ile 7/24 ulaşabilirsiniz.",
  openGraph: {
    title: "İletişim | Visano - Türkiye Oturum İzni Danışmanlığı",
    description:
      "Oturum izni başvurunuz veya yatırım danışmanlığı için bizimle iletişime geçin. İstanbul merkezli profesyonel destek.",
    url: "https://visanoistanbul.com/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://visanoistanbul.com/contact",
  },
};

export default async function ContactPage() {
  const t = await getTranslations("ContactForm");

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6 text-center">
              <h1 className="text-4xl font-bold text-gray-900 text-center">
                {t("contact-us")}
              </h1>
              <div className="w-20 h-1 bg-brand-secondary mx-auto" />
              <p className="text-lg text-gray-600 text-center">
                {t("contact-description")}
              </p>
              <div className="space-y-4 flex flex-col items-center justify-center">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <span className="text-gray-600">{t("address")}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <a href="mailto:visanotr@gmail.com" className="text-gray-600 hover:text-brand-secondary transition-colors">visanotr@gmail.com</a>
                </div>
              </div>
              <WhatsAppButton isFloating={false} />
            </div>
          </div>
          <div className="relative flex items-center mx-auto justify-center w-full aspect-square max-w-lg rounded-sm">
            <Image
              src={ContactImage}
              alt="Hero"
              fill
              className="object-contain rounded-sm"
            />
          </div>
        </div>
        {/* Right side - Contact Form */}
        <div className="flex justify-center items-center rounded-2xl shadow-xl p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
