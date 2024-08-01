import React, { ReactNode } from "react";
import {
  BatteryCharging,
  Camera,
  Gamepad,
  Gamepad2,
  Headphones,
  Laptop,
  LucideIcon,
  Mic,
  Plane,
  Projector,
  Smartphone,
  Tablet,
  Watch,
} from "lucide-react";
import { MotionDivLeft, MotionDivRight } from "./motion-div";

const LandingPageProductCards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product, index) => {
        if (index % 2 === 1) {
          return (
            <MotionDivRight
              delay={(index + 1) * 0.02}
              className="col-span-2 sm:col-span-1 w-auto h-auto flex"
              key={index}
            >
              <ProductVariantCard
                title={product.title}
                icon={product.icon}
                description={product.description}
              />
            </MotionDivRight>
          );
        } else {
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
        }
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
    title: "Dizüstü Bilgisayar",
    icon: (
      <Laptop
        className="text-black/70 group-hover:text-white transition"
        size={50}
      />
    ),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad rerum natus aspernatur minima odit, reprehenderit quos quidem deleniti, ut itaque iusto voluptas laudantium et tempore. Ullam cum dicta quisquam eum.",
  },
  {
    title: "Akıllı Telefon",
    icon: (
      <Smartphone
        className="text-black/70 group-hover:text-white transition"
        size={50}
      />
    ),
    description:
      "En yeni akıllı telefonları kiralayarak teknolojiye ayak uydurun. Üstün kamera kalitesi ve yüksek performans ile işlerinizi kolayca halledin.",
  },
  {
    title: "Tablet",
    icon: (
      <Tablet
        className="text-black/70 group-hover:text-white transition"
        size={50}
      />
    ),
    description:
      "İşlerinizi taşınabilir ve güçlü bir cihazla yönetin. Geniş ekran ve uzun pil ömrü ile verimliliğinizi artırın.",
  },
  {
    title: "Fotoğraf Makinesi",
    icon: (
      <Camera
        className="text-black/70 group-hover:text-white transition"
        size={50}
      />
    ),
    description:
      "Profesyonel kalitede fotoğraflar çekmek için en iyi fotoğraf makinelerini kiralayın. Anılarınızı ölümsüzleştirin.",
  },
  {
    title: "Drone",
    icon: (
      <Plane
        className="text-black/70 group-hover:text-white transition"
        size={50}
      />
    ),
    description:
      "Havadan çekimler yaparak farklı bir perspektif kazanın. Yüksek çözünürlüklü kamera ve kolay kullanım özellikleriyle dronelar sizleri bekliyor.",
  },
  {
    title: "Akıllı Saat",
    icon: (
      <Watch
        className="text-black/70 group-hover:text-white transition"
        size={50}
      />
    ),
    description:
      "Sağlık ve fitness takibinizi akıllı saatlerle yapın. Gün boyu bağlantıda kalın ve aktif bir yaşam sürün.",
  },
  {
    title: "Kulaklık",
    icon: (
      <Headphones
        className="text-black/70 group-hover:text-white transition"
        size={50}
      />
    ),
    description:
      "Müziğin tadını çıkarın ve dış dünyadan izole olun. Üstün ses kalitesi ve konforlu kullanım ile kulaklıklar sizi bekliyor.",
  },
  {
    title: "Projektör",
    icon: (
      <Projector
        className="text-black/70 group-hover:text-white transition"
        size={50}
      />
    ),
    description:
      "Sunumlarınızı ve filmlerinizi büyük ekranda izleyin. Yüksek çözünürlüklü ve taşınabilir projektörler ile etkileyici görseller elde edin.",
  },
  {
    title: "Oyun Konsolu",
    icon: (
      <Gamepad
        className="text-black/70 group-hover:text-white transition"
        size={50}
      />
    ),
    description:
      "En yeni oyunları oynamak için oyun konsollarını kiralayın. Yüksek performans ve grafik kalitesiyle oyun deneyiminizi artırın.",
  },
  {
    title: "Sanal Gerçeklik Gözlüğü",
    icon: (
      <Gamepad2
        className="text-black/70 group-hover:text-white transition"
        size={50}
      />
    ),
    description:
      "Sanal dünyalarda kaybolun ve gerçekçi deneyimler yaşayın. VR gözlüklerle oyun oynayın, film izleyin ve daha fazlasını yapın.",
  },
  {
    title: "Aksiyon Kamerası",
    icon: (
      <Camera
        className="text-black/70 group-hover:text-white transition"
        size={50}
      />
    ),
    description:
      "Macera dolu anlarınızı aksiyon kameraları ile kaydedin. Dayanıklı ve yüksek çözünürlüklü kameralarla her anınızı yakalayın.",
  },
  {
    title: "Mikrofon",
    icon: (
      <Mic
        className="text-black/70 group-hover:text-white transition"
        size={50}
      />
    ),
    description:
      "Podcast, ses kayıtları veya canlı yayınlar için profesyonel mikrofonları kiralayın. Net ve yüksek kaliteli ses kaydı elde edin.",
  },
  {
    title: "Taşınabilir Şarj Cihazı",
    icon: (
      <BatteryCharging
        className="text-black/70 group-hover:text-white transition"
        size={50}
      />
    ),
    description:
      "Seyahatlerinizde ve dış mekan aktivitelerinizde cihazlarınızı şarjda tutun. Yüksek kapasiteli taşınabilir şarj cihazları ile her zaman enerjik kalın.",
  },
];
