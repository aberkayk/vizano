import LandingPageCarousel from "@/components/landing-page-carousel";
import { MotionDivLeft, MotionDivRight } from "@/components/motion-div";
import Tribun7 from "../../../../public/images/tribun7.jpg";
import Turbine from "../../../../public/gifs/turbine.gif";
import Image from "next/image";
import LandingPageProductCards from "@/components/landing-page-product-cards";
import {
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";

interface Props {
  params: { locale: string };
}

export default async function Home({ params: { locale } }: Props) {
  const t = await getTranslations("HomePage");

  return (
    <div className="w-full bg-secondary flex flex-col min-h-screen">
      <div className="relative aspect-[3100/1500] w-full max-h-[500px]">
        <div className="h-full w-full absolute z-10 bg-black opacity-50" />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 text-[26px] md:text-3xl lg:text-4xl font-semibold text-center">
          UFUK ENERJİ ELEKTRİK ÜRETİM A.Ş.
        </p>
        <Image
          src={Tribun7}
          fill
          alt="About Us Image"
          className="object-cover object-center z-0"
        />
      </div>

      <div className="xl:container flex flex-col gap-y-20 items-center px-8 py-16 lg:py-20">
        <MotionDivRight className="w-full flex flex-col lg:flex-row gap-8 justify-center items-center">
          <div className="relative h-48 lg:h-64 w-full lg:w-1/3">
            <Image
              alt="Turbine"
              className="object-contain"
              fill
              src={Turbine}
            />
          </div>
          <p className="text-center text-lg text-black/80 max-w-lg">
            {t("first-paragraph")}
          </p>
        </MotionDivRight>

        <MotionDivLeft className="w-full flex justify-center">
          <LandingPageCarousel />
        </MotionDivLeft>

        {/* <MotionDivLeft className="w-full flex justify-center">
          <p className="text-4xl md:text-5xl px-6 text-center text-brand-green">
            Sürdürülebilir Enerji için Çalışıyoruz
          </p>
        </MotionDivLeft> */}

        <MotionDivRight className="w-full flex flex-col lg:flex-row gap-8 justify-center items-center">
          <p className="text-center text-lg text-black/80 max-w-lg">
            {t("second-paragraph")}
          </p>
          <div className="relative h-48 lg:h-64 w-full lg:w-1/3">
            <Image
              alt="Turbine"
              className="object-contain"
              fill
              src={Turbine}
            />
          </div>
        </MotionDivRight>

        <LandingPageProductCards />
      </div>
    </div>
  );
}
