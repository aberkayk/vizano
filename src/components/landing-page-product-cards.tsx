import React, { ReactNode } from "react";
import {
  DollarSign,
  LampDesk,
  Laptop,
  UtilityPole,
  Wind,
} from "lucide-react";
import { MotionDivLeft, MotionDivRight } from "./motion-div";

const LandingPageProductCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
      <p className="text-justify px-2">{description}</p>
    </div>
  );
};

const products = [
  {
    title: "Çevre Dostu Enerji Üretimi",
    icon: (
      <Wind
        className="text-black/70 group-hover:text-white transition"
        size={50}
      />
    ),
    description:
      "Rüzgar enerjisi, sıfır emisyonlu bir enerji kaynağıdır. Karbon salınımını azaltarak çevre dostu bir enerji üretimi sağlar ve sürdürülebilir bir gelecek için katkıda bulunur.",
  },
  {
    title: "Ekonomik Avantajlar",
    icon: (
      <DollarSign
        className="text-black/70 group-hover:text-white transition"
        size={50}
      />
    ),
    description:
      "Yenilenebilir rüzgar enerjisi, uzun vadede maliyetleri düşürür ve enerji ithalatına olan bağımlılığı azaltır. Ülkeler için ekonomik bir enerji çözümü sunar.",
  },
  {
    title: "Yüksek Verimlilik",
    icon: (
      <LampDesk
        className="text-black/70 group-hover:text-white transition"
        size={50}
      />
    ),
    description:
      "Modern rüzgar türbinleri, yüksek verimlilikle çalışarak düşük rüzgar hızlarında bile enerji üretebilir. Böylece enerji üretim potansiyelini maksimize eder.",
  },
  {
    title: "Yenilenebilir Kaynak Kullanımı",
    icon: (
      <UtilityPole
        className="text-black/70 group-hover:text-white transition"
        size={50}
      />
    ),
    description:
      "Rüzgar, sınırsız ve yenilenebilir bir enerji kaynağıdır. Doğal kaynakları koruyarak sürdürülebilir enerji üretimine katkıda bulunur.",
  },
];
