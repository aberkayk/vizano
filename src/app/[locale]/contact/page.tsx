import Image from "next/image";
import React from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ContactForm from "@/components/contact-form";
import ContactImage from "../../../../public/images/contact.png";

interface Props {
  params: { locale: string };
}

const ContactPage = async ({ params: { locale } }: Props) => {
  setRequestLocale(locale);
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
              <p className="text-lg text-gray-600 text-center">
                {t("contact-description")}
              </p>
              <div className="space-y-4 flex flex-col items-center justify-center">
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-600">Istanbul, Turkey</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-600">vizanotr@gmail.com</span>
                </div>
              </div>
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
};

export default ContactPage;
