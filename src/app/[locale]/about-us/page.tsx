import { setRequestLocale } from "next-intl/server";
import AboutUs from "@/components/about/about-us";

interface Props {
  params: { locale: string };
}

const AboutUsPage = async ({ params: { locale } }: Props) => {
  setRequestLocale(locale);

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-background to-secondary/10">
      <AboutUs />
    </section>
  );
};

export default AboutUsPage;
