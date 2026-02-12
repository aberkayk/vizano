import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Home");

  return {
    title: t("hero.title"),
    description: t("hero.description"),
    openGraph: {
      title: t("hero.title"),
      description: t("hero.description"),
      url: "https://visanoistanbul.com/home",
      type: "website",
    },
    alternates: {
      canonical: "https://visanoistanbul.com/home",
    },
  };
}

export default async function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
    </main>
  );
}
