import type { Metadata } from "next";
import { Outfit, Roboto } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import MobileNavbar from "@/components/mobile-navbar";
import Footer from "@/components/footer";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Ufuk Enerji",
  description: "Ufuk Enerji Elektrik Üretim Anonim Şirketi",
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
