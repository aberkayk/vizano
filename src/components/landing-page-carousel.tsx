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

const data = [
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
            className="h-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex justify-center"
            key={index}
          >
            <div className="relative h-96 w-[90%] max-w-64">
              <Image
                priority
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                src={item.img}
                alt={item.label}
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
