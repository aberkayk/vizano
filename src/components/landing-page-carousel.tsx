import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import FirstImage from "../../public/images/1.jpg";
import SecondImage from "../../public/images/2.jpg";
import ThirdImage from "../../public/images/3.jpg";
import FourthImage from "../../public/images/4.jpg";
import FifthImage from "../../public/images/5.jpg";
import SixthImage from "../../public/images/6.jpg";

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
            className="h-full sm:basis-1/2 lg:basis-1/3 ml-4"
            key={index}
          >
            <div className="relative h-64 w-full  ">
              <Image
                priority
                className="object-fill rounded-lg "
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
