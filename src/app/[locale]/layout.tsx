import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import MobileNavbar from "@/components/mobile-navbar";
import Footer from "@/components/footer";
import { unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rentech",
  description: "Professional equipment rental company",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();
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
