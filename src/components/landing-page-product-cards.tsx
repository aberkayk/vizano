import React, { ReactNode } from "react";
import {
  DollarSign,
  LampDesk,
  Laptop,
  UtilityPole,
  Wind,
} from "lucide-react";
import { MotionDivLeft, MotionDivRight } from "./motion-div";
import { useTranslations } from "next-intl";

const LandingPageProductCards = () => {
  const t = useTranslations("HomePage");
  const products = [
    {
      title: t("card1-title"),
      icon: (
        <Wind
          className="text-black/70 group-hover:text-white transition"
          size={50}
        />
      ),
      description: t("card1-description"),
    },
    {
      title: t("card2-title"),
      icon: (
        <DollarSign
          className="text-black/70 group-hover:text-white transition"
          size={50}
        />
      ),
      description: t("card2-description"),
    },
    {
      title: t("card3-title"),
      icon: (
        <LampDesk
          className="text-black/70 group-hover:text-white transition"
          size={50}
        />
      ),
      description: t("card3-description"),
    },
    {
      title: t("card4-title"),
      icon: (
        <UtilityPole
          className="text-black/70 group-hover:text-white transition"
          size={50}
        />
      ),
      description: t("card4-description"),
    },
  ];

  return (
    <div className="grid md:grid-cols-2  gap-8">
      {products.map((product, index) => {
        return (
          <MotionDivLeft
            delay={(index + 1) * 0.02}
            className="col-span-2 sm:col-span-1 w-auto h-auto flex"
            key={index}
          >
            <ProductVariantCard
              title={product.title}
              icon={product.icon}
              description={product.description}
            />
          </MotionDivLeft>
        );
      })}
    </div>
  );
};

export default LandingPageProductCards;

interface ProductVariantCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ProductVariantCard = ({
  title,
  description,
  icon,
}: ProductVariantCardProps) => {
  return (
    <div className="flex flex-col gap-4 items-center border rounded-xl p-4 shadow max-w-[400px]">
      {/* Icon */}
      <div className="rounded-full border-4 border-brand-green p-4 hover:bg-brand-green group transition w-fit">
        {icon}
      </div>
      {/* Title */}
      <h4 className="text-brand-green font-bold text-2xl text-center">
        {title}
      </h4>
      <p className=" px-2">{description}</p>
    </div>
  );
};
