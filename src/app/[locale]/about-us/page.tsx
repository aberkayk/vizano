import Image from "next/image";
import Santral from "../../../../public/images/santral.jpg";
import { cn } from "@/lib/utils";
import { MotionDivLeft, MotionDivRight } from "@/components/motion-div";
import { getTranslations, setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: string };
}

const AboutUsPage = async ({ params: { locale } }: Props) => {
  setRequestLocale(locale);
  const t = await getTranslations("AboutUsPage");
  return (
    <div className="w-full min-h-screen flex flex-col items-center overflow-x-hidden">
      <div className="relative aspect-[3100/1500] w-full max-h-[500px]">
        <div className="h-full w-full absolute z-10 bg-black opacity-50" />
        <p className="absolute uppercase top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 text-[26px] md:text-3xl lg:text-4xl font-semibold text-center">
          {t("about")}
        </p>
        <Image
          src={Santral}
          fill
          alt="About Us Image"
          className="object-cover z-0"
        />
      </div>

      <div className="px-12 flex flex-col gap-16 py-24 max-w-5xl xl:container ">
        <MotionDivRight className="flex flex-col gap-8">
          <p className=" lg:text-lg font-light">{t("first")}</p>
          <p className=" lg:text-lg font-light">{t("second")}</p>
        </MotionDivRight>

        <div className="grid lg:grid-cols-6 gap-6">
          <InformationCard
            title={t("card1-title")}
            description={t("card1-description")}
          />
          <InformationCard
            title={t("card2-title")}
            description={t("card2-description")}
          />
          <InformationCard
            title={t("card3-title")}
            description={t("card3-description")}
          />
          <InformationCard
            className="lg:col-span-6"
            title={t("card4-title")}
            description={t("card4-description")}
          />
          <InformationCard
            className="lg:col-span-3"
            title={t("card5-title")}
            description={t("card5-description")}
          />
          <InformationCard
            className="lg:col-span-3"
            title={t("card6-title")}
            description={t("card6-description")}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

const InformationCard = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <MotionDivLeft
      className={cn(
        "flex flex-col gap-3 py-6 px-5 border border-brand-green rounded-lg drop-shadow-sm col-span-6 md:col-span-3 lg:col-span-2",
        className
      )}
    >
      <p className="md:text-lg lg:text-xl font-semibold text-brand-green">
        {title}
      </p>
      <p className="text-sm md:text-base lg:text-lg font-light">
        {description}
      </p>
    </MotionDivLeft>
  );
};
