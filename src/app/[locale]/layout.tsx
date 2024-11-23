import type { Metadata } from "next";
import { Outfit, Roboto } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import MobileNavbar from "@/components/mobile-navbar";
import Footer from "@/components/footer";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Head from "next/head";

const font = Roboto({
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
  name: "Ufuk Enerji Elektrik Üretim A.Ş.",
  url: "https://ufukenerji.com.tr", // Sitenizin URL'si
  logo: "https://ufukenerji.com.tr/square-logo.png", // Public klasöründeki logonuzun URL'si
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90 266 597 10 52", // Şirket telefon numarası
    email: "ufukenerji@guclugrup.com", // Şirket e-posta adresi
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

  return (
    <html lang="en">
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
          <main className="bg-secondary">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
