import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";

interface Props {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Home" });

  const titles = {
    tr: "Türkiye Oturum İzni, Gayrimenkul ve İthalat İhracat Danışmanlığı | Visano",
    en: "Turkey Residence Permit, Real Estate & Import Export Consulting | Visano",
    ar: "تصريح الإقامة في تركيا، العقارات والاستشارات التجارية | فيزانو",
    fa: "اجازه اقامت ترکیه، مشاوره املاک و واردات صادرات | ویزانو",
    ru: "Вид на жительство в Турции, недвижимость и консалтинг | Визано",
  };

  const descriptions = {
    tr: "Türkiye'de çalışma izni, öğrenci oturma izni, gayrimenkul yatırımı, araç satın alma ve ithalat-ihracat işlemleri için uzman danışmanlık. İstanbul merkezli güvenilir hizmet.",
    en: "Expert consulting for work permits, student residence permits, real estate investment, car purchasing and import-export operations in Turkey. Reliable Istanbul-based services.",
    ar: "استشارات متخصصة لتصاريح العمل، تصاريح الإقامة للطلاب، الاستثمار العقاري، شراء السيارات وعمليات الاستيراد والتصدير في تركيا.",
    fa: "مشاوره تخصصی برای مجوز کار، اجازه اقامت دانشجویی، سرمایه‌گذاری املاک، خرید خودرو و عملیات واردات-صادرات در ترکیه.",
    ru: "Экспертные консультации по разрешениям на работу, студенческим видам на жительство, инвестициям в недвижимость, покупке автомобилей и импортно-экспортным операциям в Турции.",
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.tr,
    description:
      descriptions[locale as keyof typeof descriptions] || descriptions.tr,
    alternates: {
      canonical: `https://visanoistanbul.com/${locale}/home`,
      languages: {
        tr: "https://visanoistanbul.com/tr/home",
        en: "https://visanoistanbul.com/en/home",
        ar: "https://visanoistanbul.com/ar/home",
        fa: "https://visanoistanbul.com/fa/home",
        ru: "https://visanoistanbul.com/ru/home",
      },
    },
  };
}

export default async function Home({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <main className="w-full">
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
    </main>
  );
}
