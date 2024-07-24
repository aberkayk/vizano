import LandingPageCarousel from "@/components/landing-page-carousel";
import MotionDiv from "@/components/motion-div";

export default function Home() {
  return (
    <div className="h-[calc(100vh-70px)] w-full bg-secondary flex justify-center px-8">
      <div className="xl:container flex flex-col gap-12 items-center pt-16 lg:pt-20">
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
            Teknoloji ile işinizi kurun, büyütün ve ölçeklendirin
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
