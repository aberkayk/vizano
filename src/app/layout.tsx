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
      "Visano - Türkiye'de Oturum İzni ve Yatırım Danışmanlığı | İstanbul",
    template: "%s | Visano - Türkiye Oturum İzni Danışmanlığı",
  },
  description:
    "Türkiye'de oturum izni almak mı istiyorsunuz? Öğrenci oturum izni, çalışma vizesi, gayrimenkul yatırımı ve araç alımı süreçlerinde profesyonel danışmanlık. İran, Irak ve Orta Doğu'dan gelen göçmenlere İstanbul merkezli güvenilir hizmet.",
  keywords: [
    // Türkçe - Oturum İzni (Birincil)
    "türkiye oturum izni",
    "türkiye'de oturum izni nasıl alınır",
    "oturum izni danışmanlık",
    "öğrenci oturum izni türkiye",
    "çalışma vizesi türkiye",
    "çalışma izni başvurusu",
    "turistik oturum izni",
    "aile oturum izni türkiye",
    "oturum izni red sonrası ne yapılır",
    "oturum izni başvuru süreci",
    // Türkçe - Yatırım Danışmanlık (İkincil)
    "türkiye yatırım danışmanlığı",
    "türkiye gayrimenkul yatırımı",
    "istanbul'da ev almak",
    "yabancılara gayrimenkul satışı",
    "türkiye araç satın alma danışmanlık",
    "yabancı yatırımcı danışmanlık",
    "ticari danışmanlık istanbul",
    "şirket kurma danışmanlık türkiye",
    // English
    "turkey residence permit",
    "residence permit in turkey",
    "how to get residence permit turkey",
    "student residence permit turkey",
    "work visa turkey",
    "turkey investment consulting",
    "real estate investment turkey",
    "immigration consultant istanbul",
    // Farsça (فارسی) - İran'dan arayan hedef kitle
    "اقامت ترکیه",
    "اقامت دانشجویی ترکیه",
    "ویزای کار ترکیه",
    "خرید ملک در ترکیه",
    "مشاوره مهاجرت ترکیه",
    "اقامت توریستی ترکیه",
    // Arapça (العربية)
    "تصريح إقامة تركيا",
    "إقامة طالب تركيا",
    "تأشيرة عمل تركيا",
    "استثمار عقاري تركيا",
    // Rusça (Русский)
    "вид на жительство в турции",
    "рабочая виза турция",
    "инвестиции в недвижимость турция",
  ],
  authors: [{ name: "Visano Consulting" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US", "fa_IR", "ar_SA", "ru_RU"],
    url: "https://visanoistanbul.com",
    siteName: "Visano",
    title: "Visano - Türkiye'de Oturum İzni ve Yatırım Danışmanlığı",
    description:
      "Türkiye'de öğrenci oturum izni, çalışma vizesi, gayrimenkul yatırımı ve göçmen danışmanlığı. İran ve Orta Doğu'dan gelen müşterilere profesyonel destek.",
    images: [
      {
        url: "https://visanoistanbul.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Visano - Türkiye'de Oturum İzni ve Yatırım Danışmanlığı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visano - Türkiye'de Oturum İzni ve Yatırım Danışmanlığı",
    description:
      "Öğrenci oturum izni, çalışma vizesi, gayrimenkul yatırımı. İstanbul merkezli profesyonel danışmanlık.",
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
  alternates: {
    canonical: "https://visanoistanbul.com",
    languages: {
      "tr": "https://visanoistanbul.com",
      "en": "https://visanoistanbul.com/en",
      "fa": "https://visanoistanbul.com/fa",
      "ar": "https://visanoistanbul.com/ar",
      "ru": "https://visanoistanbul.com/ru",
    },
  },
  verification: {
    google: "google-site-verification-code",
    other: {
      "yandex-verification": "yandex-verification-code",
    },
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://visanoistanbul.com/#organization",
  name: "Visano Danışmanlık",
  alternateName: ["Visano Consulting", "ویزانو", "فيزانو"],
  url: "https://visanoistanbul.com",
  logo: "https://visanoistanbul.com/logo.png",
  image: "https://visanoistanbul.com/og-image.jpg",
  description:
    "Türkiye'de oturum izni (öğrenci oturum izni, çalışma vizesi), gayrimenkul yatırımı, araç satın alma ve göçmen danışmanlık hizmetleri. İran ve Orta Doğu'dan gelen müşterilere İstanbul merkezli profesyonel destek.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+90-506-669-57-96",
      email: "visanotr@gmail.com",
      contactType: "customer service",
      areaServed: ["TR", "IR", "IQ", "SA", "AE", "RU"],
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
    "https://www.instagram.com/visanoistanbul",
    "https://wa.me/905066695796",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Danışmanlık Hizmetleri",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Oturum İzni Danışmanlığı",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Öğrenci Oturum İzni",
              description: "Türkiye'de öğrenci oturum izni başvuru ve takip hizmeti",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Çalışma Vizesi",
              description: "Türkiye'de çalışma vizesi ve çalışma izni başvuru hizmeti",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Aile Oturum İzni",
              description: "Türkiye'de aile birleşimi ve aile oturum izni danışmanlığı",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Yatırım Danışmanlığı",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Gayrimenkul Yatırım Danışmanlığı",
              description: "Türkiye'de yabancılara gayrimenkul alım ve yatırım danışmanlığı",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Araç Alım Danışmanlığı",
              description: "Türkiye'de yabancılar için araç satın alma danışmanlığı",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Şirket Kurma Danışmanlığı",
              description: "Türkiye'de yabancı yatırımcılar için şirket kurulumu ve ticari danışmanlık",
            },
          },
        ],
      },
    ],
  },
  areaServed: [
    { "@type": "Country", name: "Turkey" },
    { "@type": "Country", name: "Iran" },
    { "@type": "Country", name: "Iraq" },
  ],
  foundingDate: "2022",
  knowsAbout: [
    "Türkiye Oturum İzni",
    "Öğrenci Oturum İzni",
    "Çalışma Vizesi Türkiye",
    "Türkiye Gayrimenkul Yatırımı",
    "Yabancılara Türkiye'de Ev Satışı",
    "Göçmen Danışmanlığı",
    "Turkey Residence Permit",
    "Student Residence Permit Turkey",
    "Work Visa Turkey",
    "Turkey Real Estate Investment",
    "Immigration Consulting Turkey",
    "اقامت ترکیه",
    "ویزای کار ترکیه",
    "خرید ملک در ترکیه",
  ],
  priceRange: "$$",
  paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Türkiye'de oturum izni nasıl alınır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Türkiye'de oturum izni almak için turistik, öğrenci veya çalışma vizesi başvurusu yapabilirsiniz. Visano olarak öğrenci oturum izni ve çalışma vizesi başvurularınızı profesyonel olarak yönetiyoruz. Başvuru ret alan müşterilerimize alternatif çözümler sunuyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Turistik oturum izni reddedilirse ne yapabilirim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Turistik oturum izni reddedildiyse öğrenci oturum izni veya çalışma vizesi gibi alternatif yollarla Türkiye'de yasal olarak kalabilirsiniz. Visano olarak ret sonrası süreçlerde müşterilerimize profesyonel danışmanlık sağlıyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Türkiye'de yabancı olarak gayrimenkul alabilir miyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, birçok ülke vatandaşı Türkiye'de gayrimenkul satın alabilir. Visano olarak emlak araştırmasından tapu işlemlerine kadar tüm süreçleri yönetiyoruz ve yatırımınızın güvenliğini sağlıyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Çalışma vizesi başvurusu ne kadar sürer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Çalışma vizesi başvuru süreci genellikle 1-3 ay arasında değişmektedir. Visano olarak evrak hazırlığından başvuru takibine kadar tüm süreci sizin adınıza yürütüyoruz.",
      },
    },
  ],
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        {/* FAQ schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
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
