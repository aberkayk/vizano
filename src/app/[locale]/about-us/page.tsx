import Image from "next/image";
import RentImage from "../../../../public/images/rent.jpg";
import { cn } from "@/lib/utils";
import { MotionDivLeft, MotionDivRight } from "@/components/motion-div";

const AboutUsPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="relative aspect-[3100/1500] w-full max-h-[500px]">
        <div className="h-full w-full absolute z-10 bg-black opacity-50" />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 text-4xl xl:text-5xl font-semibold text-center">
          RENTECH HAKKINDA
        </p>
        <Image
          src={RentImage}
          fill
          alt="About Us Image"
          className="object-cover object-center z-0"
        />
      </div>

      <div className="px-12 flex flex-col gap-16 py-24 max-w-5xl xl:container text-justify">
        <MotionDivLeft className="flex flex-col gap-8">
          <p className="text-lg font-light">
            Şirketimiz %100
            <span className="text-brand-green">Şekerbank</span> iştiraki
            olup, finansal markanın gücü, tecrübe ve bilgisi ile, teknoloji
            ve finans sektörlerini bir araya getirmiştir.
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
        </MotionDivLeft>

        <MotionDivRight className="flex flex-col gap-6">
          <InformationLine
            title="ÜNVAN"
            description="SEKAR OTO FİLO
              YÖNETİM HİZMETLERİ VE TİCARET A.Ş."
          />
          <InformationLine
            title="VERGİ DAİRESİ"
            description="ZİNCİRLİKUYU"
          />
          <InformationLine title="VERGİ NO" description="7590510323" />
        </MotionDivRight>

        <MotionDivLeft className="grid grid-cols-6 gap-6">
          <InformationCard
            title="Vizyonumuz"
            description=" İhtiyaca özel hazırlanan filo hizmet paketleri ile, Türkiye
              ’nin en tercih edilen ve beğenilen filo yönetim ve kiralama
              şirketi olmak."
          />
          <InformationCard
            title="Misyonumuz"
            description="Güçlü finansal yapısı ve kiralama süresi boyunca değişmeyen yüksek hizmet kalitesiyle, maksimum müşteri memnuniyeti önceliği ile hizmet sağlamak."
          />
          <InformationCard
            title="Stratejimiz"
            description="Konusunda uzman kadrosu ile verdiği danışmanlık hizmeti ve müşterilerine beklentilerin üzerinde sunduğu hizmet kalitesi ile filo kiralama sektöründe yenilikçi, öncü ve aranılır olmak."
          />
          <InformationCard
            className="lg:col-span-6"
            title="Değerlerimiz"
            description="Müşterimizin ihtiyaçlarını doğru şekilde belirler, müşteri sadakati önceliğimiz ile firmaya özel yenilikçi koşullar için hizmet ve ürünler geliştiririz. Tüm ilişkilerimizde güven, saygı ve şeffaflık esastır. Bilgi ve ürünlerimizin ulaşılabilir olmasına özen gösteririz. Yaşadığımız çevreye ve sosyal sorumluluk projelerine duyarlı ve yakınızdır."
          />
          <InformationCard
            className="lg:col-span-3"
            title="Kalite"
            description="Hizmetlerimizde yenilikçi ve çözüm odaklılık esası ile hedefimiz, her zaman yüksek kalite sunmaktır."
          />
          <InformationCard
            className="lg:col-span-3"
            title="Yenilikçilik"
            description="Müşterilerimize danışmanlık yaparak ihtiyaçları doğrultusunda, onlara kazanç ve değer katacak yenilikçi çözümler geliştiririz."
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
        "flex flex-col gap-3 py-6 px-5 border rounded-lg drop-shadow-sm col-span-6 md:col-span-3 lg:col-span-2",
        className
      )}
    >
      <p className="text-xl font-semibold">{title}</p>
      <p className="text-lg font-light">{description}</p>
    </div>
  );
};
