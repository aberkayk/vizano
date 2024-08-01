import LandingPageCarousel from "@/components/landing-page-carousel";
import MotionDiv, {
  MotionDivLeft,
  MotionDivRight,
} from "@/components/motion-div";
import RentImage from "../../public/images/rent.jpg";
import Image from "next/image";
import { ReactNode } from "react";
import LandingPageProductCards from "@/components/landing-page-product-cards";

export default function Home() {
  return (
    <div className="w-full bg-secondary flex flex-col min-h-screen">
      <div className="relative aspect-[3100/1500] w-full max-h-[500px]">
        <div className="h-full w-full absolute z-10 bg-black opacity-50" />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 text-4xl xl:text-5xl font-semibold text-center">
          TEKNOLOJİ İLE İŞİNİZİ KURUN, BÜYÜTÜN VE ÖLÇEKLENDİRİN
        </p>
        <Image
          src={RentImage}
          fill
          alt="About Us Image"
          className="object-cover object-center z-0"
        />
      </div>
      <div className="xl:container flex flex-col gap-y-20 items-center px-8 py-16 lg:py-20">
        <MotionDivLeft className="w-full flex justify-center">
          <p className="text-4xl md:text-5xl px-6 text-center text-brand-green">
            Neden RENTECH?
          </p>
        </MotionDivLeft>

        <MotionDivRight className="w-full flex justify-center">
          <p className="text-center text-lg text-black/80 max-w-lg">
            Rentech olarak, teknolojiye erişimi kolaylaştıran kiralama
            çözümlerimizle işinizin ihtiyaçlarına uygun hizmetler
            sunuyoruz. En yeni teknolojik ekipmanlara sahip olmanızı
            sağlayarak, maliyetlerinizi düşürürken verimliliğinizi
            artırıyoruz.
          </p>
        </MotionDivRight>

        <MotionDivLeft className="w-full flex justify-center">
          <LandingPageCarousel />
        </MotionDivLeft>

        <MotionDivLeft className="w-full flex justify-center">
          <p className="text-4xl md:text-5xl px-6 text-center text-brand-green">
            RENTECH ile bütün eksiklerine sahip ol!
          </p>
        </MotionDivLeft>

        <MotionDivRight>
          <p className="text-center text-lg text-black/80 max-w-lg">
            Rentech, teknolojik eşya kiralama alanında geniş bir ürün
            yelpazesi sunar. En kaliteli ve en yeni teknoloji ekipmanları
            uygun fiyatlarla kiralayarak hem bütçenizi koruyun hem de
            ihtiyaçlarınızı karşılayın.
          </p>
        </MotionDivRight>

        <LandingPageProductCards />
      </div>
    </div>
  );
}
