import type { Metadata } from "next";
import { Outfit, Poppins, Roboto } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import MobileNavbar from "@/components/mobile-navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Head from "next/head";

const font = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ufuk Enerji",
  description: "Ufuk Enerji Elektrik Üretim Anonim Şirketi",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization", // Yerel bir iş yeri için "LocalBusiness" de seçebilirsiniz
  name: "Vizano Consulting",
  url: "https://vizanotr.com", // Sitenizin URL'si
  logo: "https://ufukenerji.com.tr/square-logo.png", // Public klasöründeki logonuzun URL'si
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90 506 669 57 96", // Şirket telefon numarası
    email: "vizanotr@gmail.com", // Şirket e-posta adresi
  },
  description:
    "Ufuk Enerji, 2015 yılında Balıkesir'in Kepsut ve Susurluk ilçelerinde kurulan Poyrazgölü Rüzgar Enerji Santrali ile Türkiye'nin yenilenebilir enerji kaynaklarına katkı sağlayan bir şirkettir.",
};

const locales = ["en"];

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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
