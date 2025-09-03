import { getTranslations, setRequestLocale } from "next-intl/server";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";

interface Props {
  params: { locale: string };
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
