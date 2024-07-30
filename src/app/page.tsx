import LandingPageCarousel from "@/components/landing-page-carousel";
import MotionDiv from "@/components/motion-div";
import RentImage from "../../public/images/rent.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-secondary flex flex-col min-h-screen">
      <div className="relative aspect-[3100/1500] w-full max-h-[600px]">
        <div className="h-full w-full absolute z-10 bg-black opacity-50" />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 text-3xl xl:text-4xl font-semibold text-center">
          TEKNOLOJİ İLE İŞİNİZİ KURUN, BÜYÜTÜN VE ÖLÇEKLENDİRİN
        </p>
        <Image
          src={RentImage}
          fill
          alt="About Us Image"
          className="object-fit z-0"
        />
      </div>
      <div className="xl:container flex flex-col gap-y-20 items-center px-8 py-16 lg:py-20">
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.05, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-full flex justify-center"
        >
          <p className="text-5xl md:text-7xl px-6 text-center text-brand-green">
            Neden RENTECH?
          </p>
        </MotionDiv>

        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-full flex justify-center"
        >
          <p className="text-center text-lg text-black/80 max-w-lg">
            Rentech olarak, teknolojiye erişimi kolaylaştıran kiralama
            çözümlerimizle işinizin ihtiyaçlarına uygun hizmetler
            sunuyoruz. En yeni teknolojik ekipmanlara sahip olmanızı
            sağlayarak, maliyetlerinizi düşürürken verimliliğinizi
            artırıyoruz.
          </p>
        </MotionDiv>

        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.05, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-full flex justify-center"
        >
          <LandingPageCarousel />
        </MotionDiv>
      </div>
    </div>
  );
}
