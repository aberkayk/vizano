import Image from "next/image";
import Tribun9 from "../../../../public/images/tribun9.jpg";
import { cn } from "@/lib/utils";
import { MotionDivLeft, MotionDivRight } from "@/components/motion-div";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

interface Props {
  params: { locale: string };
}

const AboutUsPage = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("HomePage");
  return (
    <div className="w-full min-h-screen flex flex-col items-center overflow-x-hidden">
      <div className="relative aspect-[3100/1500] w-full max-h-[500px]">
        <div className="h-full w-full absolute z-10 bg-black opacity-50" />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 text-4xl xl:text-5xl font-semibold text-center">
          HAKKIMIZDA
        </p>
        <Image
          src={Tribun9}
          fill
          alt="About Us Image"
          className="object-cover object-center z-0"
        />
      </div>

      <div className="px-12 flex flex-col gap-16 py-24 max-w-5xl xl:container text-justify">
        <MotionDivRight className="flex flex-col gap-8">
          <p className="text-lg font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aspernatur voluptatem tempore molestias, fuga voluptas nobis
            vero natus laborum magni quibusdam?
          </p>
          <p className="text-lg font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Nesciunt reprehenderit sed perferendis quis exercitationem
            fugit provident odit, suscipit similique fuga? Nisi id odit
            ullam facilis corporis dolores veniam error modi.
          </p>
          <p className="text-lg font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            delectus aperiam pariatur asperiores facilis doloribus ex
            nostrum, rerum provident alias blanditiis expedita dolore
            veritatis inventore consectetur repudiandae veniam molestias
            doloremque. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Cum esse ad fugit debitis ex laboriosam error molestiae
            nemo cupiditate aspernatur ut, necessitatibus voluptatem eius
            atque sed iure sit quo possimus.
          </p>
        </MotionDivRight>

        <MotionDivLeft className="grid grid-cols-6 gap-6">
          <InformationCard
            title="Vizyonumuz"
            description="Yenilenebilir enerji kaynakları alanında öncü bir güç olarak, sürdürülebilir ve çevre dostu enerji çözümleri sunarak Türkiye'nin en güvenilir enerji üretim şirketi olmak."
          />
          <InformationCard
            title="Misyonumuz"
            description="Topluma ve doğaya saygılı, yenilikçi teknolojilerle donatılmış temiz enerji üretim süreçleriyle, yüksek müşteri memnuniyeti ve enerji güvenliğine katkı sağlamak."
          />
          <InformationCard
            title="Stratejimiz"
            description="Uzman kadromuz ve ileri teknolojilerimizle, rüzgar enerjisi gibi yenilenebilir kaynaklardan maksimum verimlilikle enerji üreterek sektörde yenilikçi ve sürdürülebilir çözümler sunmak."
          />
          <InformationCard
            className="lg:col-span-6"
            title="Değerlerimiz"
            description="Müşterilerimizin enerji ihtiyaçlarını doğru analiz eder, çevreye duyarlı çözümler sunarız. Güven, şeffaflık ve sorumluluk ilkeleriyle ilişkilerimizi inşa ederiz. Enerjiye erişimi sağlarken sosyal sorumluluk projelerine katkıda bulunur ve sürdürülebilirliği ön planda tutarız."
          />
          <InformationCard
            className="lg:col-span-3"
            title="Kalite"
            description="Yenilenebilir enerji üretiminde sürekli gelişim ve yeniliklerle, topluma en yüksek kalite ve verimlilikte enerji sunmayı hedefleriz."
          />
          <InformationCard
            className="lg:col-span-3"
            title="Yenilikçilik"
            description="Müşterilerimizin enerji ihtiyaçlarına uygun, sürdürülebilir ve çevre dostu yenilikçi çözümler geliştirerek enerji sektöründe fark yaratırız."
          />
        </MotionDivLeft>
      </div>
    </div>
  );
};

export default AboutUsPage;

const InformationLine = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <p>
      <span className="font-bold w-36 inline-block">{title}</span>
      <span className="inline-block w-4">:</span>
      {description}
    </p>
  );
};

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
    <div
      className={cn(
        "flex flex-col gap-3 py-6 px-5 border border-brand-green rounded-lg drop-shadow-sm col-span-6 md:col-span-3 lg:col-span-2",
        className
      )}
    >
      <p className="text-xl font-semibold text-brand-green">{title}</p>
      <p className="text-lg font-light">{description}</p>
    </div>
  );
};
