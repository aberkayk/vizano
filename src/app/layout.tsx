import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import MobileNavbar from "@/components/mobile-navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "sonner";

const font = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Visano - Türkiye Oturum İzni, Gayrimenkul ve İthalat İhracat Danışmanlığı",
    template: "%s | Visano Danışmanlık",
  },
  description:
    "Türkiye'de oturum izni (çalışma izni, öğrenci oturma izni), gayrimenkul alımı, araç satın alma, ithalat-ihracat işlemleriniz için uzman danışmanlık. İstanbul merkezli güvenilir hizmet.",
  keywords: [
    "türkiye oturum izni",
    "çalışma izni türkiye",
    "öğrenci oturma izni",
    "türkiye gayrimenkul yatırımı",
    "türkiye araç satın alma",
    "türkiye ithalat ihracat",
    "residence permit turkey",
    "work permit turkey",
    "student residence permit",
    "turkey real estate investment",
    "turkey car purchase",
    "turkey import export",
    "istanbul danışmanlık",
    "turkey consulting services",
    "yabancı yatırımcı türkiye",
  ],
  authors: [{ name: "Visano Consulting" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://visanoistanbul.com",
    siteName: "Visano",
    title: "Visano - Türkiye Oturum İzni ve Yatırım Danışmanlığı",
    description:
      "Türkiye'de oturum izni, gayrimenkul yatırımı, araç alımı ve ithalat-ihracat işlemleriniz için profesyonel danışmanlık hizmetleri.",
    images: [
      {
        url: "https://visanoistanbul.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Visano - Türkiye Danışmanlık Hizmetleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visano - Türkiye Oturum İzni ve Yatırım Danışmanlığı",
    description:
      "Türkiye'de oturum izni, gayrimenkul yatırımı, araç alımı için profesyonel danışmanlık.",
    images: ["https://visanoistanbul.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    other: {
      "yandex-verification": "yandex-verification-code",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Visano Danışmanlık",
  alternateName: "Visano Consulting",
  url: "https://visanoistanbul.com",
  logo: "https://visanoistanbul.com/logo.png",
  image: "https://visanoistanbul.com/og-image.jpg",
  description:
    "Türkiye'de oturum izni, çalışma izni, öğrenci oturma izni, gayrimenkul yatırımı, araç satın alma ve ithalat-ihracat danışmanlık hizmetleri.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressCountry: "TR",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+90 506 669 57 96",
      email: "visanotr@gmail.com",
      contactType: "customer service",
      availableLanguage: [
        "Turkish",
        "English",
        "Persian",
        "Arabic",
        "Russian",
      ],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/visano",
    "https://www.instagram.com/visanoistanbul",
    "https://wa.me/+905066695796",
  ],
  serviceType: [
    "Oturum İzni Danışmanlığı",
    "Çalışma İzni",
    "Öğrenci Oturma İzni",
    "Gayrimenkul Danışmanlığı",
    "Araç Alım Danışmanlığı",
    "İthalat İhracat Danışmanlığı",
    "Residence Permit Consulting",
    "Work Permit Services",
    "Real Estate Investment",
    "Import Export Consulting",
  ],
  areaServed: {
    "@type": "Country",
    name: "Turkey",
  },
  founder: {
    "@type": "Person",
    name: "Visano Founders",
  },
  foundingDate: "2022",
  knowsAbout: [
    "Türkiye Oturum İzni",
    "Türkiye Çalışma İzni",
    "Türkiye Öğrenci Vizesi",
    "Türkiye Gayrimenkul Yatırımı",
    "Türkiye Araç Satın Alma",
    "Türkiye İthalat İhracat",
    "Turkey Residence Permit",
    "Turkey Work Permit",
    "Turkey Real Estate Investment",
    "Turkey Import Export",
  ],
  priceRange: "$$",
  paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const isRtl = locale === "ar" || locale === "fa";

  return (
    <html dir={isRtl ? "rtl" : "ltr"} lang={locale}>
      <head>
        <link
          rel="canonical"
          href="https://visanoistanbul.com"
        />

        {/* Geo meta tags for Turkish market */}
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="Istanbul" />
        <meta name="geo.position" content="41.0082;28.9784" />
        <meta name="ICBM" content="41.0082, 28.9784" />

        {/* Business schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${font.className} overflow-x-hidden`}>
        <NextIntlClientProvider>
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
