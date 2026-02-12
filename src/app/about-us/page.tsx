import AboutUs from "@/components/about/about-us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda - Türkiye'de Oturum İzni ve Yatırım Danışmanlığı",
  description:
    "Visano, İran ve Orta Doğu'dan Türkiye'ye gelen göçmenlere oturum izni, çalışma vizesi ve yatırım danışmanlığı sunan İstanbul merkezli profesyonel danışmanlık firmasıdır.",
  openGraph: {
    title: "Hakkımızda | Visano - Türkiye Oturum İzni Danışmanlığı",
    description:
      "2022'den beri Türkiye'ye gelen yabancılara oturum izni, çalışma vizesi ve gayrimenkul yatırımı konularında güvenilir danışmanlık hizmeti sunuyoruz.",
    url: "https://visanoistanbul.com/about-us",
    type: "website",
  },
  alternates: {
    canonical: "https://visanoistanbul.com/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-background to-secondary/10">
      <AboutUs />
    </section>
  );
}
