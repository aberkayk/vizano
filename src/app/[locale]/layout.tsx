import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import MobileNavbar from "@/components/mobile-navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Head from "next/head";
import { Toaster } from "sonner";

const font = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Visano",
  description: "Visano Oturum İzni ve Yatırım Danışmanlık Şirketi",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization", // Yerel bir iş yeri için "LocalBusiness" de seçebilirsiniz
  name: "Visano Consulting",
  url: "https://visanotr.com", // Sitenizin URL'si
  logo: "https://visano.com.tr/logo.png", // Public klasöründeki logonuzun URL'si
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90 506 669 57 96", // Şirket telefon numarası
    email: "visanotr@gmail.com", // Şirket e-posta adresi
  },
  description:
    "Profesyonel danışmanlık hizmetlerimizle hayallerinizi gerçeğe dönüştürüyor, Türkiye'deki yaşam ve yatırım süreçlerinizde güvenilir çözüm ortağınız oluyoruz.",
};

const locales = ["tr", "en", "ar", "fa", "ru"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  const isRtl = locale === "ar" || locale === "fa";

  return (
    <html dir={isRtl ? "rtl" : "ltr"} lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body className={`${font.className} overflow-x-hidden`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MobileNavbar />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
