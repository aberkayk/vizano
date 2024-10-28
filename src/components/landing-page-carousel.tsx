import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import FirstImage from "../../public/images/tribun1.jpg";
import SecondImage from "../../public/images/tribun2.jpg";
import ThirdImage from "../../public/images/tribun3.jpg";
import FourthImage from "../../public/images/tribun4.jpg";
import FifthImage from "../../public/images/tribun5.jpg";
import SixthImage from "../../public/images/tribun6.jpg";

const data = [
  {
    label: "FirstImage",
    img: FirstImage,
  },
  {
    label: "SecondImage",
    img: SecondImage,
  },
  {
    label: "ThirdImage",
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
];

const LandingPageCarousel = () => {
  return (
    <Carousel opts={{ loop: true }} className="w-full px-8">
      <CarouselContent className="flex h-full">
        {data.map((item, index) => (
          <CarouselItem
            className="h-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 ml-4 flex justify-center"
            key={index}
          >
            <div className="relative h-64 w-fit min-w-64  ">
              <Image
                priority
                className="object-center rounded-lg "
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
