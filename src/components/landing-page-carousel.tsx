import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import FourthImage from "../../public/images/tribun4.jpg";
import FifthImage from "../../public/images/tribun5.jpg";
import SixthImage from "../../public/images/tribun6.jpg";
import SeventhImage from "../../public/images/tribun7.jpg";
import EighthImage from "../../public/images/tribun8.jpg";
import NinthImage from "../../public/images/tribun9.jpg";
import TenthImage from "../../public/images/tribun10.jpg";
import FirstImage from "../../public/images/tribun1.jpg";
import SecondImage from "../../public/images/tribun2.jpg";
import ThirdImage from "../../public/images/tribun3.jpg";

const data = [
  {
    label: "FourthImage",
    img: FirstImage,
  },
  {
    label: "FourthImage",
    img: SecondImage,
  },
  {
    label: "FourthImage",
    img: ThirdImage,
  },
  {
    label: "FourthImage",
    img: FourthImage,
  },
  {
    label: "FifthImage",
    img: FifthImage,
  },
  {
    label: "SixthImage",
    img: SixthImage,
  },
  {
    label: "SeventhImage",
    img: SeventhImage,
  },
  {
    label: "EighthImage",
    img: EighthImage,
  },
  {
    label: "NinthImage",
    img: NinthImage,
  },
  {
    label: "TenthImage",
    img: TenthImage,
  },
];

const LandingPageCarousel = () => {
  return (
    <Carousel opts={{ loop: true }} className="w-full px-8">
      <CarouselContent className="flex h-full">
        {data.map((item, index) => (
          <CarouselItem
            className="h-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex justify-center"
            key={index}
          >
            <div className="relative h-96 w-[90%] min-w-80">
              <Image
                priority
                className="rounded-lg "
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                src={item.img}
                alt={item.label}
                objectFit="center"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-2" />
      <CarouselNext className="-right-2" />
    </Carousel>
  );
};

export default LandingPageCarousel;
